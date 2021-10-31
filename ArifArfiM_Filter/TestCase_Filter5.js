describe('Mencoba fitur Filter di akun performance_glitch_user', () => {
    it('Filter5', () => {
        //masuk ke web saucedemo
        cy.visit('https://www.saucedemo.com/')
        //akses username
        cy.get('#user-name').type('performance_glitch_user')
        //akses password
        cy.get('#password').type('secret_sauce')
        //klik tombol login
        cy.contains('Login').click()
        //klik tombol Filter
        cy.get('[data-test=product_sort_container]').select('za')

    })
})