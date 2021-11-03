/*
* Feature: Testar pesquisa em ambiente nao acessivel para surdo
* Como usuario eu gostaria de fazer uma pesquisa no Google
* Para que eu possa encontrar um resultado desejado
* Scenario: pagina de pesquisa do Google
* Given abrir o navegador na pagina do Google
*  When digito o texto "teste de aceitação" para busca
*  And pressiono a tecla enter
*  Then acesso a pagina de resultados
*/

describe('Pesquisa simples Google', function(){
  context('Given', function(){
    it('Abro o navegador na pagina do Google search', function(){
            cy.visit("https://www.google.com");
            cy.wait(1000)
        })
  })
   
  context('When', function(){
    it('Digito o texto Teste de Aceitação para busca', function(){
          cy.get('input[name="q"]').type("Teste de Aceitação")
          cy.wait(1000)
      })
  })
  

  context('And', function(){
      it('Pressiono a tecla Enter', function(){
        cy.get('input[name="q"]').type("{enter}")
        //cy.get('.FPdoLc > center > .gNO89b').click();
        cy.wait(1000);
      })
  })
  
  context('Then', function(){
      it('Tenho acesso a pagina de resultados', function(){
        cy.get('body').contains("Conceito: Teste de Aceitação - CIn UFPE")
        cy.screenshot();
      })
  })
  
  
})