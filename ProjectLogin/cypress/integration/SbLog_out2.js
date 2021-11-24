//Nama          : Bima Gilang Lesmana
//NIM/N0        : 1941720153 (06)
//Kelas         : TI-3B
//Test Case     : Mencoba fitur Log Out di akun "Problem_user"

describe('Mencoba fitur Log Out di akun problem_user', () => {
    it('Sidebar5', () => {
        //masuk ke web saucedemo
        cy.visit('https://www.saucedemo.com/')
        //akses username
        cy.get('#user-name').type('problem_user')
        //akses password
        cy.get('#password').type('secret_sauce')
        //klik tombol login
        cy.contains('Login').click()
        //klik tombol sidebar
        cy.get('#react-burger-menu-btn').click()
        //klik Sidebar Log Out
        cy.get('#logout_sidebar_link').click()
    })
}) 