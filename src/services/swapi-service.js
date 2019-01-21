class SwapiService {
  _api = 'https://swapi.co/api';

  _extractId = (item) => {
    const regexp = /\/([0-9]*)\/$/;
    return item.url.match(regexp)[1];
  };

  _transformPlanet = planet => ({
    id: this._extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
  });

  _transformStarShip = starship => ({
    id: this._extractId(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.cost_in_credits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargo_capacity,
  });

  _transformPerson = person => ({
    id: this._extractId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
    eyeColor: person.eye_color,
  });

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
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResource('/planets/');
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  async getAllStarShips() {
    const res = await this.getResource('/starships/');
    return res.results.map(this._transformStarShip);
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarShip(starship);
  }
}

export default SwapiService;
