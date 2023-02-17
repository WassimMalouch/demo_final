Feature: product verification
    Feature Description: To run demo tests with playwright library
    
    @tag1
    Scenario: Verify product home page
        Given I am on 'PRODUCT STORE' page
        When I click categories link
        Then I see 'Phones' , 'Laptops' and 'Monitors' under categories