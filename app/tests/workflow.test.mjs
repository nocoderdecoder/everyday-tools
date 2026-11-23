import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const appDir = dirname(dirname(fileURLToPath(import.meta.url)));
const files = new Map([
  ["/", ["index.html", "text/html; charset=utf-8"]],
  ["/script.js", ["script.js", "text/javascript; charset=utf-8"]],
  ["/styles.css", ["styles.css", "text/css; charset=utf-8"]],
]);

function dateOffset(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

async function openWorkspace(t) {
  const server = createServer(async (request, response) => {
    const asset = files.get(new URL(request.url, "http://localhost").pathname);
    if (!asset) {
      response.writeHead(404).end();
      return;
    }
    try {
      response.writeHead(200, { "Content-Type": asset[1], "Cache-Control": "no-store" });
      response.end(await readFile(join(appDir, asset[0])));
    } catch {
      response.writeHead(500).end();
    }
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  t.after(() => new Promise((resolve) => server.close(resolve)));

  const browser = await chromium.launch({ headless: true });
  t.after(() => browser.close());
  const context = await browser.newContext({ viewport: { width: 375, height: 812 }, acceptDownloads: true });
  const page = await context.newPage();
  const url = `http://127.0.0.1:${server.address().port}/`;
  await page.goto(url);
  return page;
}

test("sample inquiry reaches a saved repeat follow-up", async (t) => {
  const page = await openWorkspace(t);
  await page.evaluate(() => localStorage.setItem("serviceBusinessOS.leads.v1", JSON.stringify({ schema: 1, leads: [] })));
  await page.reload();
  assert.equal(await page.getByRole("heading", { name: "No requests yet." }).isVisible(), true);
  assert.equal(await page.locator("#emptyAddLink").isVisible(), true);
  assert.equal(await page.locator("#emptyResetButton").isHidden(), true);

  const customer = "Taylor Regression";
  await page.locator("#customerName").fill(customer);
  await page.locator("#customerEmail").fill("taylor@example.com");
  await page.locator("#serviceType").selectOption("Deep clean");
  await page.getByRole("button", { name: "Save inquiry" }).click();
  assert.equal(await page.locator(".lead-card").count(), 1);
  const newCard = page.getByRole("article", { name: `${customer}, Deep clean, New inquiry` });
  assert.equal(await newCard.count(), 1);
  assert.equal(await newCard.evaluate((card) => document.activeElement === card), true);

  await page.locator("#leadSearch").fill("no matching customer");
  assert.equal(await page.getByRole("heading", { name: "No matching requests." }).isVisible(), true);
  await page.getByRole("button", { name: "Show all requests" }).click();
  assert.equal(await page.locator(".lead-card").count(), 1);
  assert.equal(await page.locator("#leadSearch").inputValue(), "");
  await page.getByRole("button", { name: "Due", exact: true }).click();
  assert.equal(await page.getByRole("heading", { name: "No follow-ups due." }).isVisible(), true);
  await page.getByRole("button", { name: "Show all requests" }).click();
  assert.equal(await page.locator(".lead-card").count(), 1);
  await page.getByRole("button", { name: "Booked", exact: true }).click();
  assert.equal(await page.getByRole("heading", { name: "No booked jobs." }).isVisible(), true);
  await page.getByRole("button", { name: "Show all requests" }).click();
  assert.equal(await page.locator(".lead-card").count(), 1);

  await page.getByRole("button", { name: `Prepare quote for ${customer}` }).click();
  await page.locator("#quoteAmount").fill("185.50");
  await page.locator("#quoteStatus").selectOption("sent");
  await page.locator("#quoteScope").fill("First deep clean of kitchen and two bathrooms.");
  await page.getByRole("button", { name: "Save quote" }).click();
  await page.getByRole("button", { name: `Mark quote accepted for ${customer}` }).click();
  const quotedCard = page.getByRole("article", { name: `${customer}, Deep clean, Quote sent` });
  assert.equal(await quotedCard.count(), 1);
  assert.equal(await quotedCard.evaluate((card) => document.activeElement === card), true);

  await page.getByRole("button", { name: `Schedule job for ${customer}` }).click();
  await page.locator("#jobDate").fill(dateOffset(7));
  await page.getByRole("button", { name: "Save job" }).click();
  await page.getByRole("button", { name: `Mark job completed for ${customer}` }).click();

  await page.getByRole("button", { name: `Plan repeat follow-up for ${customer}` }).click();
  const repeatDate = dateOffset(0);
  await page.locator("#repeatDate").fill(repeatDate);
  await page.getByRole("button", { name: "Save reminder" }).click();
  await page.reload();

  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("serviceBusinessOS.leads.v1")));
  assert.equal(saved.leads.length, 1);
  assert.equal(saved.leads[0].status, "closed");
  assert.deepEqual(saved.leads[0].quote, {
    amountCents: 18550,
    scope: "First deep clean of kitchen and two bathrooms.",
    status: "accepted",
  });
  assert.equal(saved.leads[0].job.status, "completed");
  assert.equal(saved.leads[0].job.repeatDate, repeatDate);
  await page.getByRole("button", { name: "Due", exact: true }).click();
  assert.equal(await page.locator(".lead-card").count(), 1);
  assert.match(await page.locator(".lead-card").textContent(), /Repeat follow-up due/);
});

test("backup preview rejects invalid files and cancellation keeps current requests", async (t) => {
  const page = await openWorkspace(t);
  assert.equal(await page.locator(".lead-card").count(), 3);

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button", { name: "Export backup" }).click(),
  ]);
  const backup = await readFile(await download.path());
  const exported = JSON.parse(backup.toString());
  assert.equal(exported.leads.length, 3);

  await page.locator("#customerName").fill("Jordan Test");
  await page.locator("#customerPhone").fill("(555) 010-0144");
  await page.locator("#serviceType").selectOption("Standard clean");
  await page.getByRole("button", { name: "Save inquiry" }).click();
  assert.equal(await page.locator(".lead-card").count(), 4);

  const validFile = { name: "sample-backup.json", mimeType: "application/json", buffer: backup };
  await page.locator("#importFile").setInputFiles(validFile);
  await page.waitForFunction(() => !document.querySelector("#importButton").disabled);
  assert.equal(await page.getByRole("button", { name: "Import backup" }).isEnabled(), true);
  assert.match(await page.locator("#dataStatus").textContent(), /replace 4 current requests/);

  await page.locator("#importFile").setInputFiles({
    name: "broken-backup.json", mimeType: "application/json", buffer: Buffer.from('{"schema":1,"leads":[{}]}'),
  });
  await page.waitForFunction(() => document.querySelector("#dataStatus").textContent.includes("does not match"));
  assert.equal(await page.getByRole("button", { name: "Import backup" }).isDisabled(), true);
  assert.match(await page.locator("#dataStatus").textContent(), /does not match/);
  assert.equal(await page.locator(".lead-card").count(), 4);

  await page.locator("#importFile").setInputFiles(validFile);
  await page.waitForFunction(() => !document.querySelector("#importButton").disabled);
  assert.equal(await page.getByRole("button", { name: "Import backup" }).isEnabled(), true);
  page.once("dialog", (dialog) => dialog.dismiss());
  await page.getByRole("button", { name: "Import backup" }).click();
  assert.match(await page.locator("#dataStatus").textContent(), /Import canceled/);
  assert.equal(await page.locator(".lead-card").count(), 4);

  page.once("dialog", (dialog) => dialog.accept());
  await page.getByRole("button", { name: "Import backup" }).click();
  assert.equal(await page.locator(".lead-card").count(), 3);
  await page.reload();
  assert.equal(await page.locator(".lead-card").count(), 3);
  assert.equal(await page.getByRole("heading", { name: "Jordan Test" }).count(), 0);
});
