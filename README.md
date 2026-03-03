# Playwright E2E Tests

End-to-end (E2E) tests for a web application using **Playwright**.  
Tests are structured with the **Page Object Model** and include both **happy path and negative scenarios**.

## Installation
```bash
git clone https://github.com/BiljanaSi/test-playwright.git
cd test-playwright
npm install
npx playwright install

## Structure
 
/tests # E2E test files
/pages # Page Object models
/test-data # Test data
/reports # HTML reports
/playwright.config.js

Running Tests

All tests: npx playwright test

Chromium with debug: npx playwright test --project=chromium --debug

Open HTML report: npx playwright show-report reports/html

Reporting

Terminal (list)

HTML report (reports/html)

Projects / Browsers

chromium, firefox, webkit