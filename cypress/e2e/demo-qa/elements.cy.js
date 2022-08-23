import TextBoxPage from "../../pageObjects/textBoxPage";
import checkBoxPage from "../../pageObjects/checkBoxPage";
import radioButtonPage from "../../pageObjects/radioButtonPage";
import webTablesPage from "../../pageObjects/webTablesPage";
import buttonsPage from "../../pageObjects/buttonsPage";

describe("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    })
    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs

    it("Filling in Text Boxes", () => {
      // add the necessary steps
      TextBoxPage.fullName.type('Elvijs Kaspars Dobelnieks');
      TextBoxPage.email.type('test@test.lv');
      TextBoxPage.currentAddress.type('Address');
      TextBoxPage.permanentAddress.type('New Address');
      TextBoxPage.submitButton.click();
      TextBoxPage.fullNameFilled.should('contain', 'Elvijs Kaspars Dobelnieks');
      TextBoxPage.emailFilled.should('contain', 'test@test.lv');
      TextBoxPage.currentAddressFilled.should('contain', 'Address');
      TextBoxPage.permanentAddressFilled.should('contain', 'New Address');
      // TextBoxPage.paragraph.should('have.length', 4);
    })
  });

  context("Check box scenarios", () => {
    beforeEach(() => {
      checkBoxPage.visit();
    })
     it("Check box scenario 1", () => {
      checkBoxPage.expandButton.click();
      checkBoxPage.react.click({force: true});
      checkBoxPage.angular.click({force: true});
      checkBoxPage.general.click({force: true});
      checkBoxPage.excel.click({force: true});
      checkBoxPage.clicked.should('contain.text', 'react');
      checkBoxPage.clicked.should('contain.text', 'angular');
      checkBoxPage.clicked.should('contain.text', 'general');
      checkBoxPage.clicked.should('contain.text', 'excelFile');
     })
     it("Check box scenario 2", () => {
      checkBoxPage.expandButton.click();
      checkBoxPage.office.click({force: true});
      checkBoxPage.officeCliked.should('contain.text', 'office');
      checkBoxPage.officeCliked.should('contain.text', 'public');
      checkBoxPage.officeCliked.should('contain.text', 'private');
      checkBoxPage.officeCliked.should('contain.text', 'classified');
      checkBoxPage.officeCliked.should('contain.text', 'general');
     })
  });
    // Create CheckBoxPage page object
    // Create checkbox scenario 1:
    // Click the "+"/expand button
    // Click Notes, React, Angular, General, Excel File.doc
    // Validate the clicked checkboxes

    // Create checkbox scenario 2:
    // Click expand button
    // Click Office
    // Validate the checked checkboxes
  // });

  context("Radio button scenarios", () => {
    beforeEach(() => {
      radioButtonPage.visit();
    })
    it("Scenario 1", () => {
      radioButtonPage.yesButton.click({force: true});
      radioButtonPage.yesClicked.should('contain.text', 'Yes');
      radioButtonPage.impressiveButton.click({force: true});
      radioButtonPage.impressiveClicked.should('contain.text', 'Impressive');
      radioButtonPage.noButton.should('be.disabled');
    })
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled
  });

  context("Web tables scenarios", () => {
    beforeEach(() => {
      webTablesPage.visit();
    })
    it("Scenario 1", () => {
      webTablesPage.addButton.click();
      webTablesPage.firstName.type('Elvijs Kaspars');
      webTablesPage.lastName.type('Dobelnieks');
      webTablesPage.email.type('test@test.lv');
      webTablesPage.age.type('27');
      webTablesPage.salary.type('100000');
      webTablesPage.department.type('crypto');
      webTablesPage.submitButton.click();
      webTablesPage.searchField.type('Elvijs');
      webTablesPage.table.should('contain', 
      'Elvijs Kaspars', 
      'Dobelnieks',
      'test@test.lv',
      '27',
      '100000',
      'crypto');
    })
    it("Scenario 2", () => {
      // webTablesPage.searchField.clear()
      ['Cierra', 'Alden', 'Kierra', 'Elvijs Kaspars'].forEach((name) => {
        webTablesPage.deleteUser(name);
      });
      // webTablesPage.deleteRecord1.click();
      // webTablesPage.deleteRecord2.click();
      // webTablesPage.deleteRecord3.click();
      // webTablesPage.deleteRecord4.click();
      webTablesPage.emptyTable.should('contain.text', 'No rows found');
    })
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible
  
    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
  });

  context("Buttons scenarios", () => {
    beforeEach(() => {
      buttonsPage.visit();
    })
    it("Buttons clicking scenario", () => {
      buttonsPage.doubleClickButton.dblclick();
      buttonsPage.doubleClickMessage.should('contain', 'You have done a double click');
      buttonsPage.rightClickButton.rightclick();
      buttonsPage.rightClickMessage.should('contain', 'You have done a right click');
      buttonsPage.clickMeButton.click();
      buttonsPage.clickMeButtonMessage.should('contain', 'You have done a dynamic click');
    })
    
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });

});
