describe('manejo de alerts', function(){
    beforeEach(function(){
        cy.visit('http://codenboxautomationlab.com/practice/')
    })
    it('Escolher o alert', function(){
        cy.get('#alertbtn').click();
    })
})