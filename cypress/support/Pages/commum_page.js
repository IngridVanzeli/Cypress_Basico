/// <reference types="cypress" />

const login = '.fa.fa-user'
const cadastroUsuario = '.fa.fa-lock'

export default {
    acesseCadastroUsuario(){
        cy.visit('/')
            .get('#top_header')

        cy.get(cadastroUsuario)
            .click()
    },
    acesseLogin(){
        cy.visit('/')
            .get('#top_header')
        
        cy.get(login)
            .click()
       
    }
}