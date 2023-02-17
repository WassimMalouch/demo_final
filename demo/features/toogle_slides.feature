Feature: toogle slides

    Feature Description
    Scenario: toggle the slides
    Given I am on 'PRODUCT STORE' page
    When I click on 'toogle' button     
    Then I see another image
    When I click again on the other 'toogle' button
    Then I see the initial image