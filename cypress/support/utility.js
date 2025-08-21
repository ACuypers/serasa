export class Utility {
 getBaseUrl() {
    let envi = Cypress.env('ENV')
    if (envi == 'sandbox') { 
      return "";
    } else if (envi == 'beta') {
      return "";
    } else if (envi == 'alfa') {
      return "";
    }
  }

  getApiUrl() {
    let envi = Cypress.env('ENV')
    if (envi == 'prod') { 
      return "https://api.trello.com/1";
    } else if (envi == 'beta') {
      return "";
    } else if (envi == 'alfa') {
      return "";
    }
  }
}
