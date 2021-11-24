//Nama          : Bima Gilang Lesmana
//NIM/N0        : 1941720153 (06)
//Kelas         : TI-3B
//Test Case     : Mencoba fitur Reset App State di akun "standart_user"

describe('Mencoba fitur Reset App State di akun standart_user', () => {
    it('Sidebar4', () => {
        //masuk ke web saucedemo
        cy.visit('https://www.saucedemo.com/')
        //akses username
        cy.get('#user-name').type('standard_user')
        //akses password
        cy.get('#password').type('secret_sauce')
        //klik tombol login
        cy.contains('Login').click()
        //klik tombol sidebar
        cy.get('#react-burger-menu-btn').click()
        //klik Sidebar Reset App State
        cy.get('#reset_sidebar_link').click()
    })
}) 