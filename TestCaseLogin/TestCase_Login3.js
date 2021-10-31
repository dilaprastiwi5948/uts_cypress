describe('Test Case Login',() => {
    it('testcastlogin3', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type(' ')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.title().should('include', 'Swag Labs')
    })
})