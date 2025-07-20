@regression
Feature: Checkout functionality

  Scenario: User completes checkout process
    Given the user is logged in
    When the user verifies all books from the database are visible on the books page
    Then the user can logout after verifying all books
