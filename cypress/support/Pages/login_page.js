/// <reference types="cypress" />

export default {

    preencheEmail(email) {
        cy.get('#user')
            .type(email)
    },

    preencheSenha(senha) {
        cy.get('#password')
            .type(senha)
    },

    clicarlogin() {
        cy.get('#btnLogin')
            .click()
    },

    //mensagens
    validarMenssagemErro(message) {
        cy.get('.invalid_input')
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).eq(message)
            })
    },

    validarMenssagemLoginSucesso(email) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')

            cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá, ` + email)
    }
}