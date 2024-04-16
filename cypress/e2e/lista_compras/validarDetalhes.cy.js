
describe('Teste de Login', () => {

  context('Validação de login com sucesso', ()=>{
    it('Deve fazer login como administrador', () => {
      cy.fazerLoginNaoADM()
      cy.get('[data-testid="pesquisar"]').type('Samsung 60 polegadas');
      cy.get('[data-testid="botaoPesquisar"]').click();
      cy.wait(2000)
      cy.get('.card-link').should('be.visible').should('contain.text', 'Detalhes').click();
      cy.get('h1').should('be.visible').should('contain.text', 'Detalhes do produto')
      

    });
    
  });  
  
  
   
  });