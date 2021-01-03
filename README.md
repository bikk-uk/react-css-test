# react-css-test

Integration tests for **`@react-css`** packages

[![react-css-test](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/hksco8&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/hksco8/runs)

### `app/`

Contains a small React application that utilises all features of both the `@react-css/flex` and `@react-css/grid` packages.

### `test/`

Contains Cypress tests to ensure both the `@react-css/flex` and `@react-css/grid` packages apply the expected styles within the running application.

### Scripts

`yarn run:local` build and run the test suite

`yarn app:serve` to build and host the application

`yarn test:open` to run the Cypress tests against the running application
