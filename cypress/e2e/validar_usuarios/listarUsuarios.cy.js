import { faker } from '@faker-js/faker';
describe('Validar que usuário está listado', () => {
    
  it('Deve validar usuário criado', () => {
      const randomName = faker.person.fullName(); 
      const randomEmail = faker.internet.email();
      
      cy.log(randomName); // mostra usuário
      cy.Criar_usuario(randomName,randomEmail);
      cy.fazerLoginADM();
      cy.get('[data-testid="listarUsuarios"]').click()
      cy.wait(2000)
      cy.get('td').should('be.visible').should('contain.text', randomName);


    });
  
   
  });