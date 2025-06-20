# Juice Shop Web UI Automation with Playwright

This project demonstrates automated end-to-end testing of the [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/) web application using Playwright and the Page Object Model (POM) pattern.

## 📋 Assignment Objectives

Automate the following scenarios for the Juice Shop application:
1. **User Registration:** Automate user registration with dynamic data.
2. **Sign In:** Automate sign-in using registered user credentials.
3. **Add to Cart:** Automate adding items to the cart with dynamic products.

## 🚀 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── playwright.yml         # GitHub Actions workflow for CI
├── pages/ 
    └── CartPage.js
    └── LoginPage.js
    └── RegisterPage.js            # Page Objects for application pages
├── tests/
    └── utils   
        └── dataGenerator.js       # fixture file
    └── auth.spec.js
    └── cart.spec.js               #Test specifications for scenarios
├── playwright.config.js           # Playwright configuration
├── package.json                   # Project dependencies and scripts
└── README.md                      # Project documentation
```

## 🛠️ Technologies & Patterns

- **Playwright**: Fast and reliable end-to-end testing framework.
- **Page Object Model (POM)**: Encapsulates page interactions for maintainability (`pages/`).
- **JavaScript/Node.js**: Project language and runtime.
- **GitHub Actions**: CI/CD for automated test execution.

## 🧪 Implemented Test Cases

- **User Registration:** Automated registration with unique user data.
- **Sign In:** Automated login using registered credentials.
- **Add to Cart:** Automated adding of dynamic products to the cart.

## 🚦 Getting Started

### Prerequisites
- Node.js (LTS version recommended)
- npm

### Installation
```bash
git clone https://github.com/Asmar2000/SmartCube.git
cd SmartCube
npm install
npx playwright install
```

### Running Tests
```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/<test-file>.js

# Run tests in headed mode
npx playwright test --headed

# Run tests in a specific browser
npx playwright test --project=chromium
```

## 📊 Test Reports

- HTML reports are generated after each test run.
- Reports are uploaded as artifacts in GitHub Actions and available for 30 days.

## 🔄 Continuous Integration

- Automated test execution on push/PR via GitHub Actions.
- Node.js setup, dependency and browser installation, test execution, and report upload.

## 🧰 Configuration

- `playwright.config.js` includes parallel execution, retries, browser configs, trace capture, and HTML reporting.

## 📝 Best Practices

- Page Object Model for maintainable code.
- Dynamic test data for user and product scenarios.
- Modular and clean test structure.
- CI/CD integration for reliability.
