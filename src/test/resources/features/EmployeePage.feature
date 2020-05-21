Feature: User should see employee page

  Scenario: User wants to see all employees

    And the menus are visible
    When the user clicks on the "Employee" Dropdown
    Then the user sees "View All" option and click it
    Then the user expects to see "all_employees" table

