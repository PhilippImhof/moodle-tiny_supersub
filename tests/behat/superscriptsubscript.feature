@javascript @editor @editor_tiny @tiny @tiny_supersub
Feature: TinyMCE editor superscript and subscript buttons

  Background:
    Given I log in as "admin"
    And I open my profile in edit mode
    And I wait until the page is ready
    And I expand all toolbars for the "Description" TinyMCE editor

  Scenario: The buttons are on the toolbar and have proper aria labels
    Then "//button[@aria-label='Superscript']" "xpath_element" should exist
    And "//button[@aria-label='Subscript']" "xpath_element" should exist

  Scenario: Set a text as superscript via the toolbar button
    When I set the field "Description" to "<p>Pre</p><p>Superscript</p><p>Post</p>"
    And I select the "p" element in position "1" of the "Description" TinyMCE editor
    And I click on the "Superscript" button for the "Description" TinyMCE editor
    And I press "Update profile"
    Then I should see "Pre"
    And I should see "Superscript"
    And I should see "Post"
    And "//sup[text()='Superscript']" "xpath_element" should exist

  Scenario: Set a text as subscript via the toolbar button
    When I set the field "Description" to "<p>Pre</p><p>Subscript</p><p>Post</p>"
    And I select the "p" element in position "1" of the "Description" TinyMCE editor
    And I click on the "Subscript" button for the "Description" TinyMCE editor
    And I press "Update profile"
    Then I should see "Pre"
    And I should see "Subscript"
    And I should see "Post"
    And "//sub[text()='Subscript']" "xpath_element" should exist
