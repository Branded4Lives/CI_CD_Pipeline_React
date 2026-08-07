# Short Video Presentation Script

Target length: 3 to 4 minutes. Hard cap: under 5 minutes. Spoken narration is about 2 minutes; the rest is screen movement and command output. Keep your face visible on camera while sharing your screen.

Main rule: do not read long explanations. Show the evidence on screen, say the short line, then move on.

## Before Recording

Be in this project folder before you start:

```text
C:\Users\bmcga\OneDrive\Desktop\CI_CD_Pipeline_React
```

Have these ready in separate tabs:

- VS Code opened at the `CI_CD_Pipeline_React` project root.
- A terminal opened in the same project root.
- The local app running from `npm run dev`, usually at `http://localhost:5173/`.
- GitHub open to `https://github.com/Branded4Lives/CI_CD_Pipeline_React`.
- GitHub Actions open to the latest successful `React CI/CD Pipeline` run.
- Vercel open to the live app at `https://ci-cd-pipeline-react.vercel.app`.

Optional time saver: run `npm test` and `npm run build` once before recording, then clear the terminal and run them again during the video. While commands run, stay quiet instead of filling the wait with extra explanation.

## 1. Introduction And Project Overview

Time target: 20 seconds.

Where to be on screen: Show VS Code with the project root visible, then briefly open `README.md`.

Say:

Hi, my name is Brandon, and this is my CI/CD Pipeline React E-Commerce App.

This is a React and Vite storefront called Trail Supply Co. It demonstrates a product catalog, cart updates, local testing, production builds, and automated deployment with GitHub Actions and Vercel.

The main tools are React, Vite, Jest, React Testing Library, GitHub Actions, npm, and Vercel.

## 2. App Demonstration

Time target: 25 seconds.

Where to be on screen: Switch to the local app at `http://localhost:5173/`.

Say:

Here is the app running locally. It shows the product catalog and shopping cart.

Action: Click `Add to Cart` on one product.

Say:

The cart updates immediately with the item, quantity, count, and total.

Action: Click the same product again.

Say:

Clicking the same product increases the quantity instead of adding a duplicate row.

## 3. Tests

Time target: 30 seconds.

Where to be on screen: Open `package.json`, then quickly show `ProductCard.test.jsx`, `Cart.test.jsx`, and `App.test.jsx`.

Say:

In `package.json`, the test script is `jest --watchAll=false`, so CI runs the tests once and exits.

The tests cover product card rendering and click behavior, cart totals and clearing, and the full app flow where adding a product updates the cart.

Because the product data is local, the tests do not depend on a live API.

## 4. Local Test And Build

Time target: 45 to 60 seconds.

Where to be on screen: Use the terminal at the project root.

Say:

Now I will run the test suite.

Action: Run:

```text
npm test
```

Say after it passes:

All tests pass locally.

Action: Run:

```text
npm run build
```

Say after it passes:

The production build also passes and creates the optimized `dist` output.

## 5. GitHub Actions Pipeline

Time target: 35 seconds.

Where to be on screen: Open `.github/workflows/main.yml`.

Say:

This workflow is named React CI/CD Pipeline and runs on pushes to `main`.

It has three separate jobs: build, test, and deploy.

The build job installs dependencies and runs `npm run build`.

The test job uses `needs: build`, so tests only run after the build succeeds.

The deploy job uses `needs: test`, so Vercel deployment only runs after both build and test pass.

Where to be on screen: Switch to the latest successful GitHub Actions run.

Say:

Here is the successful workflow run showing the pipeline completed in order.

## 6. Secrets And Live Deployment

Time target: 25 seconds.

Where to be on screen: In `README.md`, show the required secrets section. Do not reveal secret values.

Say:

Deployment uses GitHub repository secrets named `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`. The secret values are not committed to the source code.

Where to be on screen: Switch to `https://ci-cd-pipeline-react.vercel.app`.

Say:

This is the live Vercel deployment of the app.

## 7. Closing

Time target: 10 seconds.

Where to be on screen: Return to the local app or README.

Say:

This project meets the requirements by preserving the React app, adding meaningful tests, confirming the build, documenting the setup, and deploying through a GitHub Actions CI/CD pipeline.

Thank you for watching.

## If You Are Running Long

Skip these details first:

- Do not describe each test file separately. Say the single combined test sentence from section 3.
- Do not read the README text. Just show it.
- Do not explain every Vercel command. Just say deployment happens after build and test pass.
- Do not click through GitHub settings unless needed. Show the secret names in the README instead.

## Quick Recording Checklist

- Show VS Code opened at the project root.
- Show the local app in the browser.
- Demonstrate `Add to Cart` twice.
- Show `package.json` test script.
- Show the three test files quickly.
- Run `npm test`.
- Run `npm run build`.
- Show `.github/workflows/main.yml`.
- Point out `needs: build` and `needs: test`.
- Show the successful GitHub Actions run.
- Show required Vercel secret names without showing real values.
- Show the live Vercel URL: `https://ci-cd-pipeline-react.vercel.app`.
