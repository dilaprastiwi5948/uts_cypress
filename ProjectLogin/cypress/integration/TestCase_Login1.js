describe('Test Case Login',() => {
    it('testcastlogin1', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type(' ')
        cy.get('#password').type(' ')
        cy.get('#login-button').click()
        cy.title().should('include', 'Swag Labs')
    })
})