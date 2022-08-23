import BasePage from "./basePage";

class radioButtonPage extends BasePage {
    static get url() {
        return "/radio-button";
    }

    static get yesButton() {
        return cy.get("#yesRadio");
    }
    static get yesClicked() {
        return cy.get(".mt-3");
    }
    static get impressiveButton() {
        return cy.get("#impressiveRadio")
    }
    static get impressiveClicked() {
        return cy.get(".mt-3");
    }
    static get noButton() {
        return cy.get("#noRadio");
    }
}
export default radioButtonPage;