
# API Automation with Playwright

## 📖 Introduction

This repository provides an automated API testing framework using [Playwright](https://playwright.dev/), TypeScript, and GitHub Actions. It supports REST API testing, reporting, and dashboard publishing via GitHub Pages.

---

## 📁 Repository Structure

```plaintext
PlaywrightAPI/
├── apihelpers/             # Helper modules for API endpoints and payloads
│   ├── apis.ts
│   └── apihelper.ts
├── data/                   # Test data in JSON format
│   └── addNewPet.json
├── dashboard/              # Custom dashboard HTML and assets
│   └── index.html
├── playwright-report/      # Playwright's HTML report output (generated)
│   └── index.html
├── tests/                  # API test specs
│   ├── user-creation-updation.spec.ts
│   ├── find-resources.spec.ts
│   └── delete-resource.spec.ts
├── .github/
│   └── workflows/
│       ├── run-playwright-test.yml
│       └── deploy-report-to-page.yml
├── playwright.config.ts    # Playwright configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.x recommended)
- npm

### Installation

```bash
npm install
npx playwright install
```

### Running Tests

```bash
npx playwright test
```

### Viewing Reports

- **Local HTML Report:**  
  After running tests, open `playwright-report/index.html` in your browser.
- **GitHub Pages Dashboard:**  
  Visit [your GitHub Pages site](https://<your-username>.github.io/API_AutomationPlaywright/) for the latest dashboard and reports.
<img width="966" height="901" alt="image" src="https://github.com/user-attachments/assets/6f442fe5-8911-44d9-a431-a4aa70534781" />

---

## 🛠️ CI/CD

- Automated via GitHub Actions:
  - Runs tests on every push to `main`
  - Publishes dashboard and reports to GitHub Pages

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📚 References

- [Playwright Docs](https://playwright.dev/docs/api-testing)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

---

*Feel free to improve this README and the project!*

