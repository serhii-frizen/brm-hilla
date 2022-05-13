import { makeAutoObservable } from 'mobx';

class DataStore {
  quote: string = `Anything that can be derived from the application state,
    should be. Automatically. - MobX documentation`;

  constructor() {
    makeAutoObservable(this);
  }

  setQuote(quote: string) {
    this.quote = quote;
  }
}

export const data = new DataStore();
