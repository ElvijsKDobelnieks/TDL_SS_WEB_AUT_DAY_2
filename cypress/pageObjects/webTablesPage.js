import BasePage from "./basePage";

class webTablesPage extends BasePage {
    static get url() {
        return "/webtables";
    }

    static get addButton() {
        return cy.get("#addNewRecordButton");
    }
    static get firstName() {
        return cy.get("#firstName");
    }
    static get lastName() {
        return cy.get("#lastName");
    }
    static get email() {
        return cy.get("#userEmail");
    }
    static get age() {
        return cy.get("#age");
    }
    static get salary() {
        return cy.get("#salary");
    }
    static get department() {
        return cy.get("#department");
    }
    static get submitButton() {
        return cy.get("#submit");
    }
    static get table() {
        return cy.get(".rt-table");
    }
    static get deleteRecord1() {
        return cy.get("#delete-record-1");
    }
    static get deleteRecord2() {
        return cy.get("#delete-record-2");
    }
    static get deleteRecord3() {
        return cy.get("#delete-record-3");
    }
    static get deleteRecord4() {
        return cy.get("#delete-record-4");
    }
    static get searchField() {
        return cy.get("#searchBox");
    }
    static get emptyTable() {
        return cy.get(".rt-noData");
    }
}
export default webTablesPage;