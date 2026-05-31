# Safora QA Automation Assignment

## Overview

This project automates the Contact Us form of the Safora website using Playwright.

Target Website:
https://safora.se/en/

## Test Cases Covered

### Positive Test

* Submit Contact Form Successfully

### Negative Tests

* Verify Required Field Validation
* Verify Invalid Email Validation

## Technology Stack

* Playwright
* JavaScript
* Node.js

## Installation

Clone the repository:

git clone <repository-url>

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

## Run Tests

Execute all tests:

npm test

Run tests in headed mode:

npm run headed

## View Report

npx playwright show-report

## Project Structure

pages/

* ContactPage.js

tests/

* contactForm.spec.js
* contactFormValidation.spec.js

playwright.config.js
package.json

## Author

Tharushi Noragalla
University of Jaffna
Computer Science Undergraduate
