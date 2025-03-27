

describe('form', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://localhost:4173/');
        cy.contains("ACIKTIM").click();
        cy.get('#orderText').type("selam");
        cy.get('span[name="ananas"]').click();
        cy.get('span[name="kabak"]').click();
        cy.get('span[name="sarımsak"]').click();

      })
    it('Is correct form could be submitted', () => {
        cy.get('#name').type("selam");
        cy.get('span[name="soğan"]').click();
        cy.get('span[name="biber"]').click();
        cy.contains("+").click();
        cy.contains("+").click();
        cy.get('button[name="s"]').click();
        cy.contains("Sipariş Ver").click();
        cy.wait(1000);
        cy.contains("Position").should('exist')
    })
    it('Correct form money check', () => {
        cy.get('#name').type("selam");
        cy.get('span[name="soğan"]').click();
        cy.get('span[name="biber"]').click();
        cy.contains("+").click();
        cy.contains("+").click();
        cy.get('button[name="s"]').click();
        cy.contains("Sipariş Ver").click();
        cy.wait(1000);
        cy.contains("331.50").should('exist')
    })

    it('Wrong form with less toppings', () => {
        cy.get('#name').type("selam");
        cy.contains("+").click();
        cy.contains("+").click();
        cy.get('button[name="s"]').click();
        cy.contains("Sipariş Ver").should('have.class', 'disabled');
    })

    it('Wrong form with more toppings', () => {
        cy.get('span[name="soğan"]').click();
        cy.get('span[name="biber"]').click();
        cy.get('span[name="peperoni"]').click();
        cy.get('span[name="sosis"]').click();
        cy.get('span[name="kanada jambonu"]').click();
        cy.get('span[name="tavuk ızgara"]').click();
        cy.get('span[name="domates"]').click();
        cy.get('span[name="mısır"]').click();
        cy.get('span[name="sucuk"]').click();
        cy.get('#name').type("selam");
        cy.contains("+").click();
        cy.contains("+").click();
        cy.get('button[name="s"]').click();
        cy.contains("Sipariş Ver").should('have.class', 'disabled');
    })

    it('Wrong form without size', () => {
        cy.get('#name').type("selam");
        cy.get('span[name="soğan"]').click();
        cy.get('span[name="biber"]').click();
        cy.contains("+").click();
        cy.contains("+").click();
        cy.contains("Sipariş Ver").should('have.class', 'disabled');
    })

    it('Wrong form without name', () => {
        cy.get('button[name="s"]').click();
        cy.get('span[name="soğan"]').click();
        cy.get('span[name="biber"]').click();
        cy.contains("+").click();
        cy.contains("+").click();
        cy.contains("Sipariş Ver").should('have.class', 'disabled');
    })

    
})

describe('footer check', () => {
    
    it('Is footer loaded', () => {
        cy.visit('http://localhost:4173/');
        cy.contains("Testler Geçti Mutlu Burger").should('exist');
        cy.contains("ACIKTIM").click(); 
        cy.wait(1000);
        cy.contains("Testler Geçti Mutlu Burger").should('exist');
    })
})