# DevelopsToday Playwright Test Suite

This project contains an automated testing suite using Playwright for the DevelopsToday application. The suite is designed to test specific functionality of the platform and includes the configuration necessary to set up and run these tests locally or through GitHub Actions.

## Prerequisites

- **Node.js**: Ensure that Node.js is installed. You can download it from [https://nodejs.org/](https://nodejs.org/).
- **NPM**: Node Package Manager, which comes with Node.js.
- **Playwright**: The Playwright testing library is used for executing the automated tests.

## Setup

To set up this project locally, follow the steps below:

1. **Clone the Repository**:

   ```sh
   git clone -b master https://github.com/AProskurko/DevelopsTodayTestTask.git
   cd develops-today
   ```

2. **Install Dependencies**:
   After cloning the repository, run the following command to install all necessary dependencies:

   ```sh
   npm install
   ```

## Configuration

The test suite is configured through the `playwright.config.ts` file in the project root. Any additional configuration such as timeouts, browser selection, and retries can be adjusted within this file.

## Running the Tests

To execute the test cases, use the following commands:

- **Run All Tests**:

  ```sh
  npx playwright test
  ```

- **Run Tests in Headed Mode** (to see browser actions):

  ```sh
  npx playwright test --headed
  ```

- **Generate an HTML Report**:
  Once the tests are completed, an HTML report can be generated using Playwright's built-in functionality:

  ```sh
  npx playwright show-report
  ```

  The report will be opened in your default browser.

## Folder Structure

- `.github` - Contains GitHub-specific configuration files.
- `node_modules` - Auto-generated folder containing installed dependencies.
- `playwright-report` - Stores generated reports from the test execution.
- `test-results` - Contains results and artifacts after test execution.
- `tests/playlist.spec.ts` - Playwright test specifications.
- `.env` - File for environment variables.
- `playwright.config.ts` - Configuration for Playwright test runner.

## Running Tests via GitHub Actions

This repository is set up for CI/CD integration using GitHub Actions.

1. Ensure the `.github` directory contains a valid GitHub Actions workflow configuration file.
2. After pushing changes to the repository, the workflow will automatically trigger and run the tests based on the configuration provided.

## Troubleshooting

- If Playwright doesn't seem to be installed correctly, make sure Node.js and npm versions are up to date.
- Ensure the `.env` file has the correct values for all environment variables.
- Make sure to have a stable internet connection for downloading browser dependencies.

## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)

Feel free to reach out or create an issue if you face any problems while setting up or running the tests.
