Feature: Server Side Calculator

  @smoke @rendering
  Scenario Outline: Validate input fields and operator dropdown are enabled
    Given I am on the Server Side Calculator page
    Then the firstNumberInput field should be enabled and accept a value "10"
    And the operatorDropdown field should be enabled and accept a value "plus"
    And the secondNumberInput field should be enabled and accept a value "ten"

  @smoke @rendering
  Scenario: The answer field is visible after clicking the calculate button
    Given I am on the Server Side Calculator page
    When I perform the calculation "10" plus "ten ten"
    Then the answer field should be visible

  @smoke @functional
  Scenario Outline: Perform all available operations
    Given I am on the Server Side Calculator page
    When I perform the calculation "<firstNumber>" <operator> "<secondNumber>"
    Then the answer should be equal to <expectedAnswer>

    Examples:
      | operator | firstNumber | secondNumber | expectedAnswer |
      | plus     |          10 |          -10 |              0 |
      | times    |        10.5 | ten          |            105 |
      | minus    | ten         |           10 |              0 |
      | divide   | ten         | ten          |              1 |

  @smoke @functional @bug-01
  Scenario: Dividing a number by zero should return an error
    Given I am on the Server Side Calculator page
    When I perform the calculation "10" divide "0"
    Then the answer should be equal to NaN

  @smoke @functional @bug-02
  Scenario: Inputting number as text should return consistent values
    Given I am on the Server Side Calculator page
    When I perform the calculation "<firstNumber>" <operator> "<secondNumber>"
    Then the answer should be equal to <expectedAnswer>

    Examples:
      | operator | firstNumber            | secondNumber | expectedAnswer |
      | plus     | one two three          |            0 |            123 |
      | plus     | one two three thousand |            0 |         123000 |
