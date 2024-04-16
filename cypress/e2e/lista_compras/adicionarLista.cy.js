
describe('Teste de Login', () => {
  
  context('Validação de listas de produtos', ()=>{
    it('Pesquisar produto a adicionar na lista', () => {
      cy.fazerLoginNaoADM()
      cy.get('[data-testid="pesquisar"]').type('Samsung 60 polegadas');
      cy.get('[data-testid="botaoPesquisar"]').click();
      cy.wait(2000)
      cy.get('[data-testid="adicionarNaLista"]').click();
      

    });
  
    it('Pesquisar produto e remover da lista', () => {
      cy.fazerLoginNaoADM()
      cy.get('[data-testid="pesquisar"]').type('Samsung 60 polegadas');
      cy.get('[data-testid="botaoPesquisar"]').click();
      cy.wait(2000)
      cy.get('[data-testid="adicionarNaLista"]').click();
      cy.wait(2000)
      cy.get('[data-testid="limparLista"]').click();
      cy.get('[data-testid="shopping-cart-empty-message"]').should('be.visible').should('contain.text', 'Seu carrinho está vazio')
      

    });
    
  });
    
   
  });