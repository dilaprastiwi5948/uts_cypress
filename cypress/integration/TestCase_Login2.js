describe('Test Case Login',() => {
    it('testcastlogin2', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type(' ')
        cy.get('#login-button').click()
        cy.title().should('include', 'Swag Labs')
    })
})