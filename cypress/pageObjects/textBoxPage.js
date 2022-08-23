import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get xxx() {
    return cy.get("xxx");
  }
  static get fullName() {
    return cy.get("#userName");
  }
  static get email() {
    return cy.get("#userEmail")
  }
  static get currentAddress() {
    return cy.get("#currentAddress");
  }
  static get permanentAddress() {
    return cy.get("#permanentAddress");
  }
  static get submitButton() {
    return cy.get("#submit");
  }
  // static get paragraph() {
  //   return cy.get(".border > p")
  // }
  static get fullNameFilled() {
    return cy.get("p[id='name']");
  }
  static get emailFilled() {
    return cy.get("p[id='email']");
  }
  static get currentAddressFilled() {
    return cy.get("p[id='currentAddress']");
  }
  static get permanentAddressFilled() {
    return cy.get("p[id='permanentAddress']");
  }
}

export default TextBoxPage;
