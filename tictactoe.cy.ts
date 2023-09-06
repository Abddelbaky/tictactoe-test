import { Page } from "./page.cy";

let page = new Page();

describe('tic tac toe spec', () => {
  it('user wins when a row is complete', () => {
    page.visit('http://localhost:3000');
    page.getId('0').click();
    page.getId('3').click();
    page.getId('1').click();
    page.getId('4').click();
    page.getId('2').click();
    cy.get('#winner').should('have.text', 'Winner: X')
  });

  it('a cell selected by a player cannot be selected by the other player', () => {

    cy.visit('http://localhost:3000');

    page.getId('0').click();
    page.getId('0').click();
    page.getId('0').invoke('text').then(text => {
      expect(text).equal('X')
    })
  })

  it('go back to certain move', () => {


    cy.visit('http://localhost:3000');
    page.getId('0').click();
    page.getId('1').click();
    page.getId('2').click();
    page.getId('3').click();
    cy.contains('Go to move #1').click();
    page.getId('0').invoke('text').then(text => {

      expect(text).eq("X")
    })
    for (let i = 1; i <= 8; i++) {
      cy.get(`#square-${i}`).should('be.empty')
    }

    cy.get('#next-player').should('have.text', "Next Player: O")

  });
})
