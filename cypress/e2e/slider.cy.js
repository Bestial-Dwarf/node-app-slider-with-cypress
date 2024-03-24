describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

//Zweryfikuj, czy opis każdego slajdu jest wyświetlany poprawnie.
    //Krok 1: Otwórz stronę z galerią.
        //Krok 2: Dla każdego slajdu, sprawdź, czy tytuł i opis są wyświetlane.
        //Krok 3: Upewnij się, że tytuł i opis odpowiadają oczekiwanym treściom.

        describe('Swiper Gallery Test', function () {
          it('Checks if second slide contains "Description"', function () {
              cy.visit('http://localhost:3000');
              cy.get('.swiper-slide-active').should('contain', 'Italy');
              cy.get('.swiper-button-next').click({ force: true });
              cy.wait(2000);
              cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
              cy.get('.swiper-button-next').click({ force: true });
              cy.wait(2000);
              cy.get('.swiper-slide-active').should('contain', 'France');
          });
      });
      