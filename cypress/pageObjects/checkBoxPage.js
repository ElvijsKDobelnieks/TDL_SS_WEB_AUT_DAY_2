import BasePage from "./basePage";

class checkBoxPage extends BasePage {
    static get url() {
        return "/checkbox";
    }

    static get expandButton() {
        return cy.get("[title='Expand all']");
    };
    static get react() {
        return cy.get("[id='tree-node-react']");
    };
    static get angular() {
        return cy.get("[id='tree-node-angular']");
    }
    static get general() {
        return cy.get("[id='tree-node-general']");
    }
    static get excel() {
        return cy.get("[id='tree-node-excelFile']");
    }
    static get clicked() {
        return cy.get("#result")
    }
    static get office() {
        return cy.get("[id='tree-node-office']");
    }
    static get officeCliked() {
        return cy.get("#result");
    }
}
export default checkBoxPage;