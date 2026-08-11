# Everyday Tools

Everyday Tools is a small website that collects simple, practical tools for daily life.

The goal is not to build one huge product all at once. The goal is to improve the project a little every day, with visible GitHub progress through small commits.

## First version

The starter version includes:

- Tip Splitter: split a bill and tip between people.
- Text Cleaner: tidy messy copied text.
- Daily Focus: save three priorities in the browser, then copy or download them.
- Next Step: get a simple suggestion for what to do right now.
- Reading Time: estimate how long text takes to read.
- Sleep Planner: choose a wake-up time and get bedtime options.
- Date Span: count total days and weekdays between two dates.
- Event Countdown: save an important date and see how long remains.
- Unit Converter: convert common measurements quickly.
- Percentage Helper: work out a tip, tax, discount, or markup quickly.
- Price After Discount: see a final sale price after discount and tax.
- Return Deadline: see the last day to return or exchange a purchase.
- Warranty Reminder: see when a product warranty ends and when to check repair options.
- Subscription Cost: compare monthly and yearly cost, renewal timing, and a cancel-by date.
- Budget Splitter: turn one total budget into simple daily and weekly spending targets.
- Paycheck Planner: split take-home pay into bills, savings, and daily spending money.
- Bill Reminder: see when a bill is due and how much to set aside each week.
- Savings Goal: see how much to save each week or month for a target.
- Unit Price Compare: compare two package prices and sizes to find the better deal.
- Fee Calculator: estimate what you keep after seller/platform fees and shipping or materials.
- Borrowing Cost: estimate simple interest and payback total before borrowing.
- Fuel Cost: estimate gas money and gallons needed for a drive.
- Recipe Scaler: scale an ingredient amount for a different number of servings.
- Coffee Ratio: estimate coffee grounds from water amount and brew strength.
- Caffeine Cutoff: choose a latest coffee or tea time before bed.
- Leftover Planner: turn extra portions into simple meals and a use-by plan.
- Water Planner: estimate a simple daily water target in ounces, cups, and bottles.
- Medication Refill: estimate when a supply will run out and when to request a refill.
- Time Zone Buddy: compare a meeting time with another city.
- Leave Time: work backward from an arrival time to know when to leave and when to start getting ready.
- Countdown Timer: set minutes and stay on track.
- Laundry Planner: estimate when a few washer and dryer loads will be done.
- Trash Day Planner: see the next pickup day and when to set bins out.
- Pet Food Planner: estimate when pet food will run out and when to buy more.
- Plant Watering Planner: see the next watering day and reminder day for a plant.
- Packing Checklist: keep a simple list for trips, then copy or download it.
- Grocery List: keep a simple shopping list, then copy or download it (saved in your browser).
- Random Picker: pick one option from a list, with an example and clearer empty actions.
- Quick Notes: save a scratchpad, copy it, and download it as a text file.
- Password Ideas: generate a memorable passphrase, copy it, and clear it.
- Habit Tracker: check off a habit for the current week (saved in your browser).
- Meeting Notes Cleaner: clean up notes copied from calls.
- Backup & Restore: download your saved tools as a file and restore them later.

Polish features:

- Theme toggle (System / Dark / Light, saved in your browser).
- Tool search (find tools by name or related words, with a visible match count, quick search chips including Loans, Subscriptions, Shopping, Kitchen, Car, Medication, Home, Pets, and Plants, “/” or Ctrl/⌘ K to jump to search, and a Clear button).
- Tool jump menu so you can hop to any tool without scrolling the whole page, with the list staying in sync with your current search.
- Related-word search now covers the older saved-list and utility tools too, such as groceries, packing, passwords, and backups.
- A visible tool-count summary plus a friendly empty state when a search filters everything out.
- Back to Top button on long pages, especially helpful on phones.
- Result rows, buttons, and long checklist items wrap more cleanly on smaller phones so totals are easier to scan.
- Stacked mobile result rows now keep labels and values closer together.
- Countdown Timer now shows the clock time a timer should end.
- Packing and grocery lists now show friendly empty states and disable actions that do not apply yet.
- Tip Splitter and Reading Time now have copy buttons for quick sharing.
- Daily Focus now has copy and `.txt` download actions for sharing the day’s top priorities.
- Reading Time now has example and Clear buttons so it is easier to demo and reset.
- Next Step now has an example button, Clear action, and disabled copy/clear states until a suggestion exists.
- Password Ideas now has a Clear button and disabled copy/clear states until a passphrase exists.
- Text Cleaner now has a Clear action plus disabled copy/clear states when the text box is empty.
- Habit Tracker now has a copy action and clearer disabled states when the week is empty.
- Example buttons in the text-based cleaners so people can try them without hunting for sample content.

## How to open it

Open `index.html` in a browser. No technical setup is required.

Notes:

- Daily Focus saves to your browser only (localStorage), with copy and `.txt` download actions.
- Sleep Planner saves your last wake-up time and fall-asleep setting in your browser only (localStorage).
- Date Span does not save anything. It only calculates from the dates on screen.
- Event Countdown saves one event name and date in your browser only (localStorage).
- Budget Splitter does not save anything. It only calculates from the numbers on screen.
- Paycheck Planner does not save anything. It only calculates from the numbers on screen.
- Bill Reminder does not save anything. It only calculates from the bill amount and due date on screen.
- Savings Goal does not save anything. It only calculates from the target, saved amount, and target date on screen.
- Unit Price Compare does not save anything. It only compares the package prices and sizes on screen.
- Price After Discount does not save anything. It only calculates from the original price, sale percent, and tax rate on screen.
- Return Deadline does not save anything. It only calculates from the purchase date and return window on screen.
- Warranty Reminder does not save anything. It only calculates from the purchase date, warranty length, and reminder buffer on screen.
- Subscription Cost does not save anything. It only calculates from the price, billing cycle, renewal date, and cancel buffer on screen.
- Fee Calculator does not save anything. It only estimates from the sale price, fee, and costs on screen.
- Borrowing Cost does not save anything. It only estimates simple interest from amount, APR, and days borrowed, and is not financial advice.
- Time Zone Buddy does not save anything. It uses your browser's time zone rules for the selected date and city.
- Leave Time does not save anything. It only calculates from the arrival time and minutes on screen.
- Trash Day Planner does not save anything. It only calculates from the pickup day and set-out time on screen.
- Pet Food Planner does not save anything. It only estimates from pets, cups per day, food on hand, and a reminder buffer.
- Plant Watering Planner does not save anything. It only calculates from the last watered date and watering interval on screen.
- Recipe Scaler does not save anything. It only calculates from the numbers on screen.
- Coffee Ratio does not save anything. It only estimates from the water amount and brew strength on screen.
- Caffeine Cutoff does not save anything. It only estimates from bedtime, last caffeine time, and a simple buffer, and is not medical advice.
- Leftover Planner does not save anything. It only calculates from the portions and use-by days on screen.
- Water Planner does not save anything. It only estimates from the numbers on screen and is not medical advice.
- Medication Refill does not save anything. It only estimates from the supply and dose numbers on screen and is not medical advice.
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
- Price After Discount makes sale, coupon, and checkout math easier to understand before paying.
- Return Deadline makes receipts, refunds, and exchanges easier to track before the window closes.
- Warranty Reminder makes electronics, appliances, and repair windows easier to check before coverage ends.
- Subscription Cost makes recurring plans easier to compare before a trial, app, or membership renews.
- Fee Calculator helps sellers, freelancers, and side projects estimate take-home money after fees and costs.
- Borrowing Cost helps estimate simple interest before taking on a short-term loan or balance.
- Fuel Cost helps estimate gas money for commutes, errands, and road trips.
- Recipe Scaler helps adjust cooking and baking amounts when serving counts change.
- Coffee Ratio makes drip, pour-over, and French press measurements easier to copy.
- Caffeine Cutoff makes late-day coffee and tea timing easier to plan around bedtime.
- Leftover Planner makes cooked food, takeout, and meal prep easier to turn into a simple use-by plan.
- Water Planner turns a simple hydration estimate into ounces, cups, and bottle counts.
- Medication Refill makes refill timing easier to estimate before a supply gets low.
- Time Zone Buddy helps compare meeting times across common cities without opening a calendar.
- Leave Time helps avoid last-minute rushing by working backward from appointments, errands, and commute plans.
- Laundry Planner makes it easier to time washer and dryer loads without doing schedule math.
- Trash Day Planner makes weekly pickup reminders easier to check and share.
- Pet Food Planner makes it easier to know when to buy more food for a dog, cat, or other pet.
- Plant Watering Planner makes houseplant reminders easier to check and share.
- Countdown Timer now shows an estimated ending clock time as the timer changes.
- Event Countdown keeps one important deadline, birthday, trip, or launch date easy to check and share.
- Packing Checklist can now copy or download the current list for easier trip prep and sharing.
- Grocery List can now copy or download the current list for easier shopping and sharing.
- Quick Notes can now copy or download the current scratchpad text for easier reuse.
- Daily Focus can now copy or download the current priority list for easier reuse.
- Tip Splitter and Reading Time can now copy their results for messages, notes, and quick updates.
- Reading Time is easier to try with a built-in example and a Clear action.
- Next Step is easier to demo and reset with an example, Clear action, and clearer disabled copy/clear buttons.
- Random Picker is easier to demo and reset with a built-in example, clearer disabled buttons, and a Clear action.
- Password Ideas is easier to reset with a Clear action and disabled empty-state buttons.
- Text Cleaner is easier to reset with a Clear action and quieter empty-state buttons.
- Packing and grocery list actions are clearer when there is nothing to copy, download, or clear.
- Search and long-page navigation are smoother on mobile thanks to a filtered jump menu, a visible tool count, a no-results state, and a Back to Top button.
- Quick search chips make common groups like money, travel, lists, text, time, health, home, and pets easier to browse.
- The Loans quick search now surfaces borrowing and debt-cost helpers quickly.
- The Subscriptions quick search now surfaces renewal and recurring-cost helpers quickly.
- The Shopping quick search now surfaces return, sale-price, and unit-price helpers quickly.
- The Car quick search now surfaces fuel, commute, warranty, and return-deadline helpers quickly.
- The Kitchen quick search now surfaces recipe, coffee, and leftover helpers quickly.
- The Health quick search now surfaces wellness-related helpers like Water Planner.
- The Medication quick search now surfaces refill planning quickly.
- The Pets quick search now surfaces Pet Food Planner quickly.
- The Plants quick search now surfaces Plant Watering Planner quickly.
- Search now understands related words such as “restaurant,” “pomodoro,” “tax,” “groceries,” and “backup,” and Ctrl/⌘ K opens it from anywhere.

## Project direction

This should become a friendly public collection of tiny tools that are useful, calm, and easy to understand.
