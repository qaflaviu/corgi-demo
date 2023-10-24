Feature: Playwright demo tests

    Feature Description : to run demo tests
    
    @demo
    Scenario: Verify product home page
    Given I am on 'PRODUCT STORE' page
    When I click categories link
    Then I see 'Phones', 'Laptops' and 'Monitors' under categories
