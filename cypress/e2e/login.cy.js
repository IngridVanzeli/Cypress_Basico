/// <reference types="cypress" />

import commum_page from "../support/Pages/commum_page"
import login_page from "../support/Pages/login_page"
import { faker } from '@faker-js/faker'

describe("Login", () => {

    beforeEach('Acessar Login', () => {
        commum_page.acesseLogin()
    })

    it('Login com sucesso', async() => {

        const email = await faker.internet.email()

        login_page.preencheEmail(email)
        login_page.preencheSenha(faker.internet.password())
        login_page.clicarlogin()
        login_page.validarMenssagemLoginSucesso(email)
    })

    it('Email vazio', () => {
        login_page.clicarlogin()
        login_page.validarMenssagemErro('E-mail inválido.')
    })

    it('Email invalido', () => {
        login_page.preencheEmail('email')
        login_page.clicarlogin()
        login_page.validarMenssagemErro('E-mail inválido.')
    })

    it('Senha vazia', () => {
        login_page.preencheEmail(faker.internet.email())
        login_page.clicarlogin()
        login_page.validarMenssagemErro('Senha inválida.')
    })

    it('Senha invalida', () => {
        login_page.preencheEmail(faker.internet.email())
        login_page.preencheSenha('1234')
        login_page.clicarlogin()
        login_page.validarMenssagemErro('Senha inválida.')
    })
})