# Video Presentation Script

Target length: 3 to 4 minutes. The assignment requires the video to be under 5 minutes and uploaded directly to Disco. Keep your face visible on camera while sharing your screen.

## Before Recording

Be in this project folder before you start:

```text
C:\Users\bmcga\OneDrive\Desktop\CI_CD_Pipeline_React
```

Have these ready:

- VS Code opened at the `CI_CD_Pipeline_React` project root.
- A terminal opened in the same project root.
- The app running in the browser from `npm run dev`, usually at `http://localhost:5173/`.
- GitHub open to `https://github.com/Branded4Lives/CI_CD_Pipeline_React`.
- GitHub Actions open to the latest successful `React CI/CD Pipeline` run.
- Vercel open to the live app at `https://ci-cd-pipeline-react.vercel.app`.

## 1. Introduction

Where to be on screen: Show VS Code with the project root folder `CI_CD_Pipeline_React` visible in the Explorer.

Say:

Hi, my name is [Your Name], and this is my CI/CD Pipeline React E-Commerce App.

This project is a small React storefront built to demonstrate testing, production builds, and automated deployment through GitHub Actions and Vercel.

## 2. Project Overview

Where to be on screen: Open `README.md` and show the Project Overview, Main Features, and Technologies Used sections.

Say:

The app is called Trail Supply Co. It displays a product catalog with sample outdoor products. Users can add products to the cart, see the cart item count update, view item quantities, see the total price, and clear the cart.

The project uses React, Vite, Jest, React Testing Library, GitHub Actions, npm, and the Vercel CLI.

The existing app structure is preserved. The cart is managed with local React state, and the product data is stored locally, so there are no live API calls or external services required for the tests.

## 3. App Demonstration

Where to be on screen: Switch to the browser running the local app at `http://localhost:5173/`.

Say:

Here is the app running locally. The product catalog is on the page, and the shopping cart is shown beside it.

Now I will click an `Add to Cart` button.

Action: Click `Add to Cart` on the first product.

Say:

After clicking, the cart updates immediately. The selected product appears in the cart, the item count increases, and the total price updates.

Action: Click `Add to Cart` on the same product again if you want to show the quantity increasing.

Say:

Clicking the same product again increases the quantity instead of creating a duplicate cart row.

## 4. Test Setup

Where to be on screen: Switch back to VS Code and open `package.json`.

Say:

The project uses the existing npm setup. In `package.json`, the test command is `jest --watchAll=false`, which means tests run once and exit. That is important for CI because the workflow cannot get stuck in watch mode, and the command will fail properly if a test fails.

Where to be on screen: Open `src/components/ProductCard.test.jsx`.

Say:

This unit test checks that the product card renders real product details and verifies user behavior by clicking the `Add to Cart` button and confirming the handler receives the selected product.

Where to be on screen: Open `src/components/Cart.test.jsx`.

Say:

This second unit test covers the cart component. It checks the empty cart state, item count, calculated total, and the clear cart button interaction.

Where to be on screen: Open `src/App.test.jsx`.

Say:

This is the integration test. It renders the product list and cart together through the main App component, clicks an `Add to Cart` button, and verifies that the cart updates with the product name, cart count, and total.

Because the product data is local, this integration test does not depend on a live network request.

## 5. Running Tests And Build

Where to be on screen: Use the terminal at the project root:

```text
C:\Users\bmcga\OneDrive\Desktop\CI_CD_Pipeline_React
```

Say:

Now I will run the full test suite.

Action: Run:

```text
npm test
```

Say after it passes:

All test suites pass locally.

Action: Run:

```text
npm run build
```

Say after it passes:

The production build also succeeds, and Vite creates the optimized output in the `dist` folder.

## 6. GitHub Actions Workflow

Where to be on screen: Open `.github/workflows/main.yml`.

Say:

The GitHub Actions workflow is named React CI/CD Pipeline. It runs on pushes to the `main` branch and uses an Ubuntu runner.

Point to the `build` job.

Say:

The build job checks out the repository, sets up Node.js 24, installs dependencies with `npm ci`, and runs `npm run build`.

Point to the `test` job and the `needs: build` line.

Say:

The test job is separate from the build job and depends on it with `needs: build`. It installs dependencies and runs all Jest tests with `npm test`.

Point to the `deploy` job and the `needs: test` line.

Say:

The deploy job depends on the test job with `needs: test`, so deployment is blocked unless both the build and test jobs succeed.

Point to the Vercel commands.

Say:

The deploy job installs the Vercel CLI, pulls the production Vercel configuration, builds the Vercel production artifact, and deploys the prebuilt output.

Where to be on screen: Switch to the GitHub Actions page for the latest workflow run.

Say:

Here is the latest GitHub Actions run. The build job passed first, the test job passed second, and the deploy job passed after both of them. This confirms that the app was only deployed after a successful build and test run.

## 7. Secrets And Deployment

Where to be on screen: In `README.md`, show the Required GitHub/Vercel Secrets section. You can also show GitHub repository Settings, then Secrets and variables, then Actions, but do not reveal secret values.

Say:

The deploy job uses GitHub repository secrets for Vercel. The required secret names are `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`. No actual secret values are placed in the source code or workflow file.

Where to be on screen: Show the Live Vercel URL section in `README.md`.

Say:

The README includes the live Vercel URL because deployment has completed successfully.

Where to be on screen: Switch to `https://ci-cd-pipeline-react.vercel.app`.

Say:

This is the deployed Vercel version of the application at `https://ci-cd-pipeline-react.vercel.app`.

## 8. Closing

Where to be on screen: Return to the running local app or the README.

Say:

This project meets the assignment requirements by preserving the existing React app, confirming the local tests and production build, adding meaningful unit and integration test coverage, documenting the project, and creating a GitHub Actions pipeline with separate build, test, and deploy jobs for Vercel.

Thank you for watching my project presentation.

## Quick Recording Checklist

- Start in `C:\Users\bmcga\OneDrive\Desktop\CI_CD_Pipeline_React`.
- Show VS Code opened at the project root.
- Show `README.md`.
- Show the local app in the browser.
- Demonstrate clicking `Add to Cart`.
- Show `package.json` test and build scripts.
- Show `ProductCard.test.jsx`.
- Show `Cart.test.jsx`.
- Show `App.test.jsx`.
- Run `npm test` from the project root.
- Run `npm run build` from the project root.
- Show `.github/workflows/main.yml`.
- Point out `needs: build` in the test job.
- Point out `needs: test` in the deploy job.
- Show the required secret names without showing real secret values.
- Show the latest successful GitHub Actions run.
- Show the deployed Vercel URL: `https://ci-cd-pipeline-react.vercel.app`.
