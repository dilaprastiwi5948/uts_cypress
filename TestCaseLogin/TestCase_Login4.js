describe('Test Case Login',() => {
    it('testcastlogin4', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('Addina')
        cy.get('#password').type('Password')
        cy.get('#login-button').click()
        cy.title().should('include', 'Swag Labs')
    })
})