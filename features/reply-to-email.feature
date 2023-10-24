Feature: Email Inbox Tests

    Feature Description : Dummy e-mail interface email inbox tests

    Background: User replies to an existing email
    Given I am on the 'Mail' page
    And I am on the 'inbox' section
    When I open an email from 'Kostya Danovsky'
    And I click 'Reply'
    Then I see the 'New message' modal
    
    @demo
    @only
    Scenario: Verify email is being prefilled
    And data is prefilled

    @demo
    Scenario: Verify email is being prefilled
    When I fill the email body
    And I press the send button
    Then I see that the email was sent
