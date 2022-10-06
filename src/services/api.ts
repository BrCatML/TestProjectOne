interface FactResponse {
    fact: string;
    length: number;
  }
  
  export const getRandomFact = (): PromiseLike<FactResponse> =>
    fetch("https://catfact.ninja/fact").then((response) => {
      return response.json();
    });
  