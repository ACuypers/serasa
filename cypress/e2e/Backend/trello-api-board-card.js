/// <reference types="cypress" />
import { Utility } from "../../support/utility"

describe('API do Trello - Testes de Board e Card', () => {
  let boardId;
  let cardId;
  const apiKey = Cypress.env('trelloApiKey');
  const apiToken = Cypress.env('trelloApiToken');
  const urlRequest = new Utility().getApiUrl();

  it('Deve criar um board', () => {
    cy.api({
      method: 'POST',
      url: urlRequest + '/boards/',
      qs: {
        name: 'Board de Teste Cypress',
        key: apiKey,
        token: apiToken
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Board de Teste Cypress');
      boardId = response.body.id;
    });
  });

  it('Deve criar um card no board', () => {
    cy.api({
      method: 'POST',
      url: urlRequest + '/cards/',
      qs: {
        name: 'Card de Teste',
        idList: 'ID_DA_LISTA', 
        key: apiKey,
        token: apiToken
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Card de Teste');
      cardId = response.body.id;
    });
  });

  it('Deve excluir o card', () => {
    cy.request({
      method: 'DELETE',
      url: urlRequest + `/cards/${cardId}`,
      qs: {
        key: apiKey,
        token: apiToken
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Deve excluir o board', () => {
    cy.request({
      method: 'DELETE',
      url: urlRequest + `/boards/${boardId}`,
      qs: {
        key: apiKey,
        token: apiToken
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
