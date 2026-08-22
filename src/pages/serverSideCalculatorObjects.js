const { expect } = require("@playwright/test");
const { fail } = require("assert");
const DEFAULT_TIMEOUT = 2000;
class ServerSideCalculatorPageObjects {
  constructor(page) {
    this.page = page;
    this.header = page.getByRole("heading", { name: "Server Side Calculator" });
    this.firstNumberInput = page.locator("#number1");
    this.secondNumberInput = page.locator("#number2");
    this.operatorDropdown = page.locator("#function");
    this.calculateButton = page.getByRole("button", { name: "Calculate" });
    this.answerField = page.locator("#answer");
  }

  async navigateToServerSideCalculatorPage() {
    await this.page.goto(
      "https://testpages.eviltester.com/apps/server-side-calculator/",
    );
    await expect(this.header).toBeVisible({
      timeout: DEFAULT_TIMEOUT,
    });
  }

  async validateFieldAndInputValue(field, value) {
    await expect(this[field]).toBeEnabled({ timeout: DEFAULT_TIMEOUT });
    if (field === "operatorDropdown") {
      await this[field].selectOption(value);
    } else {
      await this[field].fill(value);
    }
  }

  async calculate(firstNumber, operator, secondNumber) {
    await this.firstNumberInput.fill(firstNumber);
    await this.operatorDropdown.selectOption(operator);
    await this.secondNumberInput.fill(secondNumber);
    await this.calculateButton.click();
  }

  async validateAnswerField() {
    await expect(this.answerField).toBeVisible({
      timeout: DEFAULT_TIMEOUT,
    });
  }

  async validateAnswer(expectedAnswer) {
    try {
      await expect(this.answerField).toContainText(expectedAnswer, {
        timeout: DEFAULT_TIMEOUT,
      });
    } catch (error) {
      if (expectedAnswer === "NaN") {
        fail("The answer is NaN, which indicates a division by zero error.");
      }
      throw error;
    }
  }
}

module.exports = ServerSideCalculatorPageObjects;
