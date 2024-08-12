/// <reference types="cypress" />

export default {

    clickCadastrar() {
        cy.get('#btnRegister')
        .should('be.visible')
        .click()
    },

    preencheNome(nome) {
        cy.get('#user')
            .should('be.visible')
            .type(nome)
    },

    preencheEmail(email) {
        cy.get('#email')
            .type(email)
    },

    preencheSenha(senha) {
        cy.get('#password')
            .type(senha)
    },

    validarMenssagemErro(message) {
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', message)
    },

    validarMenssagemCadastroSucesso(name) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro Realizado!')

            cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', 'Bem-vindo ' + name)
    }
}