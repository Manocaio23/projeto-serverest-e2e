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
        
    it('', () => {
        cy.acessar_site();
        });
    
   })
   
  });