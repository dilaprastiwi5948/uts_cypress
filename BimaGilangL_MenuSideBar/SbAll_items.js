//Nama          : Bima Gilang Lesmana
//NIM/N0        : 1941720153 (06)
//Kelas         : TI-3B
//Test Case     : Mencoba fitur ALL ITEMS di akun "standart_user"

describe('Mencoba fitur ALL ITEMS di akun standart_user', () => {
    it('Sidebar1', () => {
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
        //klik Sidebar ALL ITEMS
        cy.get('#inventory_sidebar_link').click()
    })
}) 