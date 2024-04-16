describe('Teste de Login', () => {
   
   context('Validação de login com sucesso', ()=>{
    it('Deve fazer login como administrador', () => {
        cy.fazerLoginADM();
    });
  
    it('Deve fazer login como não administrador', () => {
        cy.fazerLoginNaoADM();
    });

   })
   
   context('Validar cenários de campos obrigatórios e erros', ()=>{
        
    it('Campo email e nome obirgatórios', () => {
        cy.acessar_site();
        cy.get('button[type="submit"]').click();
        cy.get(':nth-child(3) > :nth-child(2)').should('be.visible').should('contain.text', 'Email é obrigatório');
        cy.get(':nth-child(3) > :nth-child(2)').should('be.visible').should('contain.text', 'Password é obrigatório');
        });
    
   })

   it('Campo nome obrigatórios', () => {
    cy.acessar_site();
    
    cy.get('#password').type('teste');
    cy.get('button[type="submit"]').click();
    cy.get(':nth-child(3) > :nth-child(2)').should('be.visible').should('contain.text', 'Email é obrigatório');
    });



it('Campo senha obrigatórios', () => {
    cy.acessar_site();
    cy.get('#email').type('usarioadm@outlook.com');
    cy.get('button[type="submit"]').click();
    cy.get(':nth-child(3) > :nth-child(2)').should('be.visible').should('contain.text', 'Password é obrigatório');
   
    });


   
  });