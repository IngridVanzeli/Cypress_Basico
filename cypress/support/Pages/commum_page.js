/// <reference types="cypress" />

export default {
    acesseCadastroUsuario() {
        cy.visit('/')
            .get('#top_header')

        cy.get('.fa-lock')
            .click()
    },

    acesseLogin() {
        cy.visit('/')
            .get('#top_header')

        cy.get('.fa-user')
            .click()
    }
}