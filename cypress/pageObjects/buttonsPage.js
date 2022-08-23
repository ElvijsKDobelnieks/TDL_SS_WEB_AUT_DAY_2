import BasePage from "./basePage";

class buttonsPage extends BasePage {
    static get url() {
        return "/buttons";
    }

    static get doubleClickButton() {
        return cy.get("#doubleClickBtn");
    }
    static get doubleClickMessage() {
        return cy.get("#doubleClickMessage")
    }
    static get rightClickButton() {
        return cy.get("#rightClickBtn");
    }
    static get rightClickMessage() {
        return cy.get("#rightClickMessage")
    }
    static get clickMeButton() {
        return cy.get("#mEzIr");
    }
    static get clickMeButtonMessage() {
        return cy.get("#dynamicClickMessage");
    }
}
export default buttonsPage;