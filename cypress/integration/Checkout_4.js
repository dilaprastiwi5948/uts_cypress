//Nama          : Dila Prastiwi
//NIM/N0        : 194172176 (10)
//Kelas         : TI-3B
//Test Case     : Mengisi nama depan dan belakang dengan kombinasi huruf dan angka
/// <reference types="cypress"/>

describe('Insert Name with combination of words and numbers', () => {
    it('Visits saucedemo', () => {
      //masuk ke alamat web sauce demo
      cy.visit('https://www.saucedemo.com/')
        //akses ke username
      cy.get('#user-name.input_error.form_input')
      //menulis username
      .type('standard_user')
       //akses ke password
      cy.get('#password.input_error.form_input')
      //menuliskan password
      .type('secret_sauce')
      //klik tombol login
      cy.contains('Login').click()
      //klik tombol cart
      cy.get('.shopping_cart_link').click()
      //klik tombol checkout
      cy.contains('Checkout').click()
      //akses ke first name
      cy.get('#first-name.input_error.form_input')
      //menulis first name
      .type('dila837634')
      //akses ke last name
      cy.get('#last-name.input_error.form_input')
      //menulis pada last name
      .type('prastiwi7253')
      //akses ke zip code
      cy.get('#postal-code.input_error.form_input')
      //menulis pada zip code
      .type('465456')
      //klik tombol continue
      cy.contains('Continue').click()
    })
  })
