class SwapiService {
  _api = 'https://swapi.co/api';

  _image = 'https://starwars-visualguide.com/assets/img';

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

  _transformStarship = starship => ({
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

  getResource = async (url) => {
    const res = await fetch(`${this._api}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${`${this._api}${url}`}, received ${res.status}`);
    }
    const body = await res.json();
    return body;
  };

  getAllPeople = async () => {
    const res = await this.getResource('/people/');
    return res.results.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getPersonImage = ({ id }) => `${this._image}/characters/${id}.jpg`;

  getAllPlanets = async () => {
    const res = await this.getResource('/planets/');
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getPlanetImage = ({ id }) => `${this._image}/planets/${id}.jpg`;

  getAllStarships = async () => {
    const res = await this.getResource('/starships/');
    return res.results.map(this._transformStarship);
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };

  getStarshipImage = ({ id }) => `${this._image}/starships/${id}.jpg`;
}

export default SwapiService;
