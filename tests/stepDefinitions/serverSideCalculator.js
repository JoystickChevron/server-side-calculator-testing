const { Given, When, Then } = require("@cucumber/cucumber");
const pageConfig = require("../../src/pages/pages.config");

Given("I am on the Server Side Calculator page", async function () {
  await this.pages.ServerSideCalculatorPageObjects.navigateToServerSideCalculatorPage();
});

When(
  "I perform the calculation {string} {word} {string}",
  async function (firstNumber, operator, secondNumber) {
    await this.pages.ServerSideCalculatorPageObjects.calculate(
      firstNumber,
      operator,
      secondNumber,
    );
  },
);

Then(
  "the {word} field should be enabled and accept a value {string}",
  async function (field, value) {
    await this.pages.ServerSideCalculatorPageObjects.validateFieldAndInputValue(
      field,
      value,
    );
  },
);

Then("the answer field should be visible", async function () {
  await this.pages.ServerSideCalculatorPageObjects.validateAnswerField();
});

Then("the answer should be equal to {word}", async function (expectedAnswer) {
  await this.pages.ServerSideCalculatorPageObjects.validateAnswerField();
  await this.pages.ServerSideCalculatorPageObjects.validateAnswer(
    expectedAnswer,
  );
});
