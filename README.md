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
- Fuel Cost: estimate gas money and gallons needed for a drive.
- Time Zone Buddy: compare a meeting time with another city.
- Countdown Timer: set minutes and stay on track.
- Packing Checklist: keep a simple list for trips.
- Grocery List: keep a simple shopping list, then copy or download it (saved in your browser).
- Random Picker: pick one option from a list.
- Quick Notes: save a scratchpad and download it as a text file.
- Password Ideas: generate a memorable passphrase and copy it.
- Habit Tracker: check off a habit for the current week (saved in your browser).
- Meeting Notes Cleaner: clean up notes copied from calls.
- Backup & Restore: download your saved tools as a file and restore them later.

Polish features:

- Theme toggle (System / Dark / Light, saved in your browser).
- Tool search (find tools by name or related words, with a visible match count, “/” or Ctrl/⌘ K to jump to search, and a Clear button).
- Tool jump menu so you can hop to any tool without scrolling the whole page, with the list staying in sync with your current search.
- Related-word search now covers the older saved-list and utility tools too, such as groceries, packing, passwords, and backups.
- A visible tool-count summary plus a friendly empty state when a search filters everything out.
- Back to Top button on long pages, especially helpful on phones.
- Result rows, buttons, and long checklist items wrap more cleanly on smaller phones so totals are easier to scan.
- Example buttons in the text-based cleaners so people can try them without hunting for sample content.

## How to open it

Open `index.html` in a browser. No technical setup is required.

Notes:

- Daily Focus saves to your browser only (localStorage).
- Sleep Planner saves your last wake-up time and fall-asleep setting in your browser only (localStorage).
- Date Span does not save anything. It only calculates from the dates on screen.
- Event Countdown saves one event name and date in your browser only (localStorage).
- Budget Splitter does not save anything. It only calculates from the numbers on screen.
- Time Zone Buddy does not save anything. It uses your browser's time zone rules for the selected date and city.
- Packing Checklist saves to your browser only (localStorage).
- Grocery List saves to your browser only (localStorage).
- Quick Notes saves to your browser only (localStorage).
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
- Fuel Cost helps estimate gas money for commutes, errands, and road trips.
- Time Zone Buddy helps compare meeting times across common cities without opening a calendar.
- Event Countdown keeps one important deadline, birthday, trip, or launch date easy to check and share.
- Grocery List can now copy or download the current list for easier shopping and sharing.
- Search and long-page navigation are smoother on mobile thanks to a filtered jump menu, a visible tool count, a no-results state, and a Back to Top button.
- Search now understands related words such as “restaurant,” “pomodoro,” “tax,” “groceries,” and “backup,” and Ctrl/⌘ K opens it from anywhere.

## Project direction

This should become a friendly public collection of tiny tools that are useful, calm, and easy to understand.
