/*
*Feature: Login no Central de Interpretes
*Como usuario eu gostaria de acessar o Central de Interpretes
*Para que eu possa requisitar um Interpretes

*Scenario: Pagina de login do Central de Interpretes
 *Given usuario navega na pagina de login do central de interpretes
  *When Usuario assiste ao video sinalizando o preenchimento do email
  *And preenche o campo com o email
  *And assiste ao video sinalizando o preenchimento da senha
  *And preenche o campo com senha
  *And clica no botao Entrar
  *Then sistema alerta um erro de login

*/

describe("Login no Central de intérpretes", function(){
    context('Given', function(){
        it('Usuário navega na pagina de login do CI', function(){
            cy.visit('http://200.137.197.197/index.php/Login');
            cy.wait(1000);
        })
    })

    context('When', function(){
        it('Usuario assiste ao vídeo sinalizando o preenchimento do email', function(){
            cy.get('#username-video')
            .should('have.prop', 'paused', true)
            .and('have.prop', 'ended', false)
            .then(($video) => {$video[0].play()});

            cy.wait(4000);
        })
    })

    context('And', function(){
        it('Preenche o cmapo com o email', function(){
            cy.get(':nth-child(6) > .input-field > label').type("coordenador@gmail.com");
            cy.wait(500);
        })
    })

    context('And', function(){
        it('Assiste ao vídeo sinalizando o preenchimento da senha', function(){
            cy.get("#password-video")
            .should('have.prop', 'paused', true)
            .and('have.prop', 'ended', false)
            .then(($video) => {$video[0].play()});

            cy.wait(4000);
        })
    })

    context('And', function(){
        it('Preenche o campo com a senha', function(){
            cy.get(':nth-child(9) > .input-field > label').type("123");
            
        })
    })

    context('And', function(){
        it('Clica no botão Entrar', function(){
            
            cy.get('#submitLogin').click()
            
            cy.wait(2000)
        })
    })


    context('Then', function(){
        it('Entra na tela principal', function(){
            cy.url().should('eq', 'http://200.137.197.197/index.php/Main/boasVindas?lang=pt');
        })
    })
})
