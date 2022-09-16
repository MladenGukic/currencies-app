export class Currency {
    id: string;
    currencyCode: string;
    currencySymbol: string;
  
    constructor(currencyCode: string, currencySymbol: string) {
        this.id = Math.random().toString();
      this.currencyCode = currencyCode;
      this.currencySymbol = currencySymbol;
    }
  }
  

  