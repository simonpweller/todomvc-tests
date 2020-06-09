This repository contains a test suite to validate a TodoMVC implementation.

You can learn more about TodoMVC and check out reference implementations at [http://todomvc.com/](http://todomvc.com/)

This test suite is based on the [app spec](https://github.com/tastejs/todomvc/blob/master/app-spec.md)

## Installing dependencies

In the project directory, run:

`npm install`

Installing Cypress will take a little while. That's normal. 

## Running the tests

In the project directory, you can run:

`npm test`

Make sure your app is running on [http://localhost:3000](http://localhost:3000) before starting the tests. If your app is running on a different port or domain, configure the baseUrl in [cypress.json](./cypress.json)

## Running the tests continuously 

`npm run test-dev`

This will keep the tests running, so you can continuously re-test your app as you make changes.