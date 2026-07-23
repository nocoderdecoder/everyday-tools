# Everyday Tools

Everyday Tools is a small website that collects simple, practical tools for daily life.

The goal is not to build one huge product all at once. The goal is to improve the project a little every day, with visible GitHub progress through small commits.

## First version

The starter version includes:

- Tip Splitter: split a bill and tip between people.
- Text Cleaner: tidy messy copied text.
- Daily Focus: save three priorities in the browser.
- Next Step: get a simple suggestion for what to do right now.
- Reading Time: estimate how long text takes to read.
- Sleep Planner: choose a wake-up time and get bedtime options.
- Date Span: count total days and weekdays between two dates.
- Event Countdown: save an important date and see how long remains.
- Unit Converter: convert common measurements quickly.
- Percentage Helper: work out a tip, tax, discount, or markup quickly.
- Budget Splitter: turn one total budget into simple daily and weekly spending targets.
- Paycheck Planner: split take-home pay into bills, savings, and daily spending money.
- Bill Reminder: see when a bill is due and how much to set aside each week.
- Savings Goal: see how much to save each week or month for a target.
- Unit Price Compare: compare two package prices and sizes to find the better deal.
- Fuel Cost: estimate gas money and gallons needed for a drive.
- Recipe Scaler: scale an ingredient amount for a different number of servings.
- Water Planner: estimate a simple daily water target in ounces, cups, and bottles.
- Time Zone Buddy: compare a meeting time with another city.
- Leave Time: work backward from an arrival time to know when to leave and when to start getting ready.
- Countdown Timer: set minutes and stay on track.
- Packing Checklist: keep a simple list for trips, then copy or download it.
- Grocery List: keep a simple shopping list, then copy or download it (saved in your browser).
- Random Picker: pick one option from a list, with an example and clearer empty actions.
- Quick Notes: save a scratchpad, copy it, and download it as a text file.
- Password Ideas: generate a memorable passphrase and copy it.
- Habit Tracker: check off a habit for the current week (saved in your browser).
- Meeting Notes Cleaner: clean up notes copied from calls.
- Backup & Restore: download your saved tools as a file and restore them later.

Polish features:

- Theme toggle (System / Dark / Light, saved in your browser).
- Tool search (find tools by name or related words, with a visible match count, quick search chips, “/” or Ctrl/⌘ K to jump to search, and a Clear button).
- Tool jump menu so you can hop to any tool without scrolling the whole page, with the list staying in sync with your current search.
- Related-word search now covers the older saved-list and utility tools too, such as groceries, packing, passwords, and backups.
- A visible tool-count summary plus a friendly empty state when a search filters everything out.
- Back to Top button on long pages, especially helpful on phones.
- Result rows, buttons, and long checklist items wrap more cleanly on smaller phones so totals are easier to scan.
- Packing and grocery lists now show friendly empty states and disable actions that do not apply yet.
- Tip Splitter and Reading Time now have copy buttons for quick sharing.
- Reading Time now has example and Clear buttons so it is easier to demo and reset.
- Example buttons in the text-based cleaners so people can try them without hunting for sample content.

## How to open it

Open `index.html` in a browser. No technical setup is required.

Notes:

- Daily Focus saves to your browser only (localStorage).
- Sleep Planner saves your last wake-up time and fall-asleep setting in your browser only (localStorage).
- Date Span does not save anything. It only calculates from the dates on screen.
- Event Countdown saves one event name and date in your browser only (localStorage).
- Budget Splitter does not save anything. It only calculates from the numbers on screen.
- Paycheck Planner does not save anything. It only calculates from the numbers on screen.
- Bill Reminder does not save anything. It only calculates from the bill amount and due date on screen.
- Savings Goal does not save anything. It only calculates from the target, saved amount, and target date on screen.
- Unit Price Compare does not save anything. It only compares the package prices and sizes on screen.
- Time Zone Buddy does not save anything. It uses your browser's time zone rules for the selected date and city.
- Leave Time does not save anything. It only calculates from the arrival time and minutes on screen.
- Recipe Scaler does not save anything. It only calculates from the numbers on screen.
- Water Planner does not save anything. It only estimates from the numbers on screen and is not medical advice.
- Packing Checklist saves to your browser only (localStorage), with copy and `.txt` download actions.
- Grocery List saves to your browser only (localStorage).
- Quick Notes saves to your browser only (localStorage), with copy and `.txt` download actions.
- Habit Tracker saves to your browser only (localStorage).
- Backup & Restore saves nothing new — it just downloads/restores the same localStorage data, including Sleep Planner and Event Countdown settings.
- Theme preference saves to your browser only (localStorage).
- Copy may be blocked in some browsers unless you open the page from a local server.

## Daily improvement ideas

- Add a new mini-tool.
- Improve one existing tool.
- Make the design cleaner on phones.
- Add accessibility improvements.
- Improve this README with screenshots and clearer examples.
- Add simple sample/demo buttons where a tool is easier to understand by seeing it.

## Recent highlights

- Sleep Planner now suggests a few bedtime options from one wake-up time.
- Date Span makes trip, deadline, and planning math quick without opening a calendar app.
- A new jump menu makes the growing tool list easier to browse on phones and laptops.
- Text Cleaner and Meeting Notes Cleaner now include built-in example content for faster demos.
- Backup & Restore continues to carry the saved browser-based tools together.
- Percentage Helper makes quick tax, tip, markup, and discount math easier without reaching for a calculator app.
- Budget Splitter makes trip, event, and pay-period planning easier from one number.
- Paycheck Planner makes payday easier by splitting take-home pay into set-aside money and daily spending.
- Bill Reminder makes upcoming payments easier to plan by showing days until due and a weekly set-aside amount.
- Savings Goal turns a target amount and date into weekly and monthly saving targets.
- Unit Price Compare makes grocery, bulk, and sale-shelf math easier to compare.
- Fuel Cost helps estimate gas money for commutes, errands, and road trips.
- Recipe Scaler helps adjust cooking and baking amounts when serving counts change.
- Water Planner turns a simple hydration estimate into ounces, cups, and bottle counts.
- Time Zone Buddy helps compare meeting times across common cities without opening a calendar.
- Leave Time helps avoid last-minute rushing by working backward from appointments, errands, and commute plans.
- Event Countdown keeps one important deadline, birthday, trip, or launch date easy to check and share.
- Packing Checklist can now copy or download the current list for easier trip prep and sharing.
- Grocery List can now copy or download the current list for easier shopping and sharing.
- Quick Notes can now copy or download the current scratchpad text for easier reuse.
- Tip Splitter and Reading Time can now copy their results for messages, notes, and quick updates.
- Reading Time is easier to try with a built-in example and a Clear action.
- Random Picker is easier to demo and reset with a built-in example, clearer disabled buttons, and a Clear action.
- Packing and grocery list actions are clearer when there is nothing to copy, download, or clear.
- Search and long-page navigation are smoother on mobile thanks to a filtered jump menu, a visible tool count, a no-results state, and a Back to Top button.
- Quick search chips make common groups like money, travel, lists, text, and time easier to browse.
- The Health quick search now surfaces wellness-related helpers like Water Planner.
- Search now understands related words such as “restaurant,” “pomodoro,” “tax,” “groceries,” and “backup,” and Ctrl/⌘ K opens it from anywhere.

## Project direction

This should become a friendly public collection of tiny tools that are useful, calm, and easy to understand.
