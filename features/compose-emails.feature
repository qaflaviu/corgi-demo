Feature: Compose Emails Tests

    Feature Description : Dummy e-mail interface compose email tests

    Background: User navigates to compose email and fills data
    Given I am on the 'Mail' page
    When I click categories link
    Then I see the 'New message' modal
    When I fill the email data
    
    @demo
    Scenario: Verify email is being sent
    And I press the send button
    Then I see that the email was sent

    @demo
    Scenario: Verify email is being saved as draft
    And I press the close button
    Then I see that the email was saved in the draft folder
