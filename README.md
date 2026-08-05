# CI/CD Pipeline React E-Commerce App

## Project Overview

Trail Supply Co. is a compact React e-commerce storefront built with Vite. It displays a small product catalog and lets shoppers add products to a local cart while showing the cart count and total price.

The project is configured for automated unit tests, an integration test, a production build, and a GitHub Actions pipeline that deploys to Vercel only after the build and tests pass.

## Main Features

- Product catalog with sample outdoor products
- Product cards with images, category labels, descriptions, and prices
- Add-to-cart interaction
- Cart item count
- Cart item list with quantities
- Cart total calculation
- Clear cart button
- Automated tests for component rendering and user interactions
- CI/CD workflow for build, test, and Vercel deployment

## Technologies Used

- React
- Vite
- Jest
- React Testing Library
- Testing Library user-event
- GitHub Actions
- Vercel CLI
- npm

## Installation Instructions

Use the package manager already configured by the project lockfile:

```bash
npm install
```

For CI or a clean install from the lockfile, use:

```bash
npm ci
```

## How To Run The Application

Start the local Vite development server:

```bash
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173/`.

## How To Run Tests

Run all tests once and exit:

```bash
npm test
```

The `test` script uses Jest with `--watchAll=false`, so it is suitable for CI and returns a failing exit code when any test fails.

For local watch mode, run:

```bash
npm run test:watch
```

## How To Create A Production Build

Create the optimized production build:

```bash
npm run build
```

The build output is generated in `dist/`.

## CI/CD Pipeline Explanation

The GitHub Actions workflow is defined in `.github/workflows/main.yml` and runs on pushes to the `main` branch.

The workflow has three separate jobs:

- `build`: checks out the repository, sets up Node.js 24, installs dependencies with `npm ci`, and runs `npm run build`.
- `test`: depends on `build` with `needs: build`, checks out the repository, installs dependencies, and runs `npm test`.
- `deploy`: depends on `test` with `needs: test`, installs the Vercel CLI, pulls Vercel production configuration, builds the Vercel production artifact, and deploys the prebuilt output.

Because `test` depends on `build` and `deploy` depends on `test`, deployment is prevented when the production build or tests fail.

## Required GitHub/Vercel Secrets

Add these GitHub Actions repository secrets before expecting the deploy job to work:

```text
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

Do not commit real secret values to source code or workflow files.

## Live Vercel URL

Deployment URL placeholder:

```text
https://ci-cd-pipeline-react.vercel.app
```

This URL was added after the Vercel deployment completed successfully.

## Unit And Integration Tests

Unit tests:

- `src/components/ProductCard.test.jsx` verifies product details render correctly and clicking `Add to Cart` calls the provided handler with the selected product.
- `src/components/Cart.test.jsx` verifies the empty cart state, item count, calculated total, and clear-cart interaction.

Integration test:

- `src/App.test.jsx` renders the storefront and cart together, simulates clicking an `Add to Cart` button, and verifies the cart updates with the selected product, count, and total.

The app currently manages cart state locally in React, so Redux, React Query, Firebase, and router providers are not required for the existing tests.
