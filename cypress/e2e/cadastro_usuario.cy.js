/// <reference types="cypress" />

import commum_page from "../support/Pages/commum_page"
import cadastro_page from "../support/Pages/cadastro_usuario_page"
import { faker } from '@faker-js/faker'

describe("Cadastro de Usuario", () => {

    beforeEach('Acessar Cadastro de usuario', () => {
        commum_page.acesseCadastroUsuario()
    })

    //campo nome vazio
    it('Valida campo nome vazio', () => {
       cadastro_page.clickCadastrar()
       cadastro_page.validarMenssagemErro('O campo nome deve ser prenchido')
    })
    
    //campo email vazio
    it('Valida campo email vazio', () => {
        cadastro_page.preencheNome(faker.name.fullName())
        cadastro_page.clickCadastrar()
        cadastro_page.validarMenssagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    //campo email invalido
    it('Valida campo email invalido', () => {
        cadastro_page.preencheNome(faker.name.fullName())
        cadastro_page.preencheEmail(123)
        cadastro_page.clickCadastrar()
        cadastro_page.validarMenssagemErro('O campo e-mail deve ser prenchido corretamente')
        
    })

    //campo senha vazio
    it('Valida campo senha vazio', () => {
        cadastro_page.preencheNome(faker.name.fullName())
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.clickCadastrar()
        cadastro_page.validarMenssagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    //campo senha invalida
    it('Valiza campo senha invalida', () => {
        cadastro_page.preencheNome(faker.name.fullName())
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.preencheSenha(12345)
        cadastro_page.clickCadastrar()
        cadastro_page.validarMenssagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

     //Cadastro realizdo com sucesso
     it('Cadastro usuario com sucesso', async() => {

        const namefaker = await faker.name.fullName()

        cadastro_page.preencheNome(namefaker)
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.preencheSenha(faker.internet.password())
        cadastro_page.clickCadastrar()
        cadastro_page.validarMenssagemCadastroSucesso(namefaker)
    })
})