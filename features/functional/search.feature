@functional
Feature: Search functionality

  Scenario: User searches for a book
    Given the user is on the books page
    When the user searches for "Git Pocket Guide"
    Then the book should be visible in the results