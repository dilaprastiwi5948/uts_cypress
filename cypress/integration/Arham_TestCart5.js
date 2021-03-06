//Nama          : Arham Izza Syany
//NIM/N0        : 1941720127 (03)
//Kelas         : TI-3B
//Test Case     : Checkout Tanpa menambah belanjaan 

describe('Checkout Tanpa menambah belanjaan ', () => {
    it('TestCase5', () => {
    //masuk ke web saucedemo
    cy.visit('https://www.saucedemo.com/')
      //akses ke username
      cy.get('#user-name')
      //menulis username
      .type('standard_user')
       //akses ke password
      cy.get('#password')
      //menuliskan password
      .type('secret_sauce')
      //klik tombol login
      cy.contains('Login').click()
      //klik tombol cart
      cy.get('.shopping_cart_link').click()
      //klik Checkout
      cy.get('#checkout').click()
      cy.contains('Checkout: Your Information').should('be.visible') 
    })
  })