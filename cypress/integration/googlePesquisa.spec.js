/*
Feature: Testar pesquisa em ambiente nao acessivel para surdo
**Como usuario eu gostaria de fazer uma pesquisa no Google
**Para que eu possa encontrar um resultado desejado
*/

describe('Pesquisa simples Google', function(){
    it('Abro o navegador na pagina do Google search', function(){
        cy.visit("https://www.google.com");
        cy.wait(1000)
    })
    it('Digito o texto Teste de Aceitação para busca', function(){
        cy.get('input[name="q"]').as("campoBusca")

        cy.get("@campoBusca").type("Teste de Aceitação")
    })
    it('Pressiono a tecla Enter', function(){
        cy.get('.FPdoLc > center > .gNO89b').click();
        cy.wait(1000);
    })
    it('Tenho acesso a pagina de resultados', function(){
        cy.get('body').contains("Conceito: Teste de Aceitação - CIn UFPE")
    })
    
})