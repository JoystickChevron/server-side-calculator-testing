---

# Server Side Calculator Testing

## Setup

After cloning the repository, run:

```bash
npm install
```

## Running Tests

### Run the full suite

```bash
npm run test
```

### Run a specific part of the suite

```bash
npm run test -- --tags "@functional"
```

## Tools and Libraries

I added lots of code quality extensions and dependencies like ESLint (and ESLint plugins), prettier, husky, and lint-staged to ensure that my files are all formatted just how I want it. I recommend, dear reader, to use VSCode so you can install these extensions and try it out yourself. Husky is something I particularly like since it can catch most dumb errors before committing anything.

Of course, Cucumber for BDD and Playwright as my automation tool. As for why I used Javascript, it is the language I've had the most practice with. The auto generated cucumber report can be found in src/reporters/cucumber-report.html

dotenv was also used to loads environment variables from env files.

## Report

The auto-generated Cucumber HTML report can be found at:

```
src/reporters/cucumber-report.html
```

## Notes

This was made with the page object model for reusability in mind. I could have also implemented sturdier tests -> Allure reports + screenshot on each step, API testing, using a CustomWorld implementation to maximize scalability, reusability, and maintanability, but realistically it's too much for a test suite that only has around 5 scenarios. Something that could also have been implemented: using randomly generated numbers as operands instead of fixed numbers. I tried my best to follow all the best practices when setting up a framework like this. An example is you can technically use a .env file to set a BASE_URL (there is already a .env.example file for you to use), but to make things even more smoother for you, I passed the actual site URL in one of the step definitions so you don't need to set anything up. Convenient! However, if you do want to try setting it up yourself, just remove the .example from the .env.example filename, then run the test as normal. One part that I could not understand (and ended up taking a whole night to debug) was that the **Before** and **After** hooks in _cucumber.conf.js_ were both getting counted as steps. I have never seen Cucumber js count hooks as a step before - but maybe it's just because I'm using semi-old versions at work.

## Known Issues

There are 2 intentional failures in the test suite. these are bugs. Refer to the `bug_suite` document for details.
