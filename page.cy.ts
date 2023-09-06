import { String } from 'typescript-string-operations';


export class Page {
    iD = "#square-{0}"

    visit(url: string) {

        cy.visit(url)
    }

    getId(iD: string): Cypress.Chainable<any> {

        return cy.get(String.format(this.iD, iD))

    }



}