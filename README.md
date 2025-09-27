# cdl-qa-engineer-assessment

Job Application Assessment Activity

Playwright Test Suite

This repository contains automated end-to-end tests built with Playwright.
It is designed so that even someone new to Playwright can easily set up and run the tests.

📦 Prerequisites

Make sure you have these installed on your machine:

- Node.js
  (v16 or higher recommended)
- npm(comes with Node.js) or yarn
- Visual Studio Code
  (recommended code editor)

👉 "VS Code" is strongly recommended because it has great extensions for Playwright, TypeScript/JavaScript, debugging, and integrated terminal support.

⚙️ Installation

Clone the repository:

- git clone https://github.com/DanielVasev/cdl-qa-engineer-assessment.git
  ``cd your-repo

- Install dependencies:
  ``npm install

This will install Playwright and other required packages.

🎭 Set Up Playwright Browsers

Playwright needs browser binaries (Chromium, Firefox, WebKit). Install them with:

- npx playwright install

`🧪 Test Structure`

This project includes two different examples of writing Playwright tests:

1. e2eBasicAproach.spec.ts

A basic single test showing step-by-step execution.
All locators and actions are kept in one file.
No Page Object Model (POM) is used here.
Best for beginners to understand how Playwright works at a simple level.

2. pageObjectE2E.spec.ts

Uses the Page Object Model (POM) design pattern.
Tests, locators, and actions are separated into different modules.
Easier to maintain and scale as the test suite grows.
Recommended for real-world projects where reusability and readability matter.

👉 Start with the basic test first to understand the fundamentals, then explore the page-object version to see how professional Playwright test suites are structured.

▶️ Running Tests

- Run all tests: npx playwright test

- Run tests in headed mode (see the browser window): npx playwright test --headed

- Run a specific test file:

npx playwright test tests/e2eBasicAproach.spec.ts
npx playwright test tests/pageObjectE2E.spec.ts

- Run in a specific browser:

npx playwright test --browser=chromium
npx playwright test --browser=firefox
npx playwright test --browser=webkit

📊 View Test Report

After running tests, generate and open an HTML report:

npx playwright show-report

This will open a detailed report in your browser.
