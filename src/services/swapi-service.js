class SwapiService {
  _api = 'https://swapi.co/api';

  async getResource(url) {
    const res = await fetch(`${this._api}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${`${this._api}${url}`}, received ${res.status}`);
    }
    const body = await res.json();
    return body;
  }

  async getAllPeople() {
    const res = await this.getResource('/people/');
    return res.results;
  }

  async getPerson(id) {
    const res = await this.getResource(`/people/${id}`);
    return res.results;
  }

  async getAllPlanets() {
    const res = await this.getResource('/planets/');
    return res.results;
  }

  async getPlanet(id) {
    const res = await this.getResource(`/planets/${id}`);
    return res.results;
  }

  async getAllStarShips() {
    const res = await this.getResource('/starships/');
    return res.results;
  }

  async getStarship(id) {
    const res = await this.getResource(`/starships/${id}`);
    return res.results;
  }
}

export default SwapiService;

// const swapi = new SwapiService();
// swapi
//   .getAllPlanets()
//   .then((people) => {
//     people.forEach((p) => {
//       console.log(p.name);
//     });
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
