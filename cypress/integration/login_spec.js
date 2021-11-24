 //<reference types="cypress"/>

it.only('login test', function() {
    cy.visit('http://siakad.polinema.ac.id/')
    cy.get('#username').type('1941720240')
    cy.get('#password').type('addina98')
    cy.get('.form-actions > .btn').click()
    cy.title().should('include', 'SIAKAD 3 | Sistem Informasi Akademik | Login')
    
})

