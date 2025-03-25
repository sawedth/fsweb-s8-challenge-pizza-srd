

describe('example to-do app', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://localhost:4173/')
      })
    it('form', () => {
        cy.contains("ACIKTIM").click();
        cy.get('#orderText').type("selam");
        cy.get('#name').type("selam");
        cy.get('input[name="soğan"]').click();
        cy.get('input[name="biber"]').click();
        cy.get('input[name="ananas"]').click();
        cy.get('input[name="kabak"]').click();
        cy.get('input[name="sarımsak"]').click();
        cy.contains("+").click();
        cy.contains("+").click();
        cy.get('button[name="s"]').click();
        cy.contains("Sipariş Ver").click();
    })
})