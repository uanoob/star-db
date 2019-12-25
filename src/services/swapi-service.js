const _api = 'https://swapi.co/api';

const _image = 'https://starwars-visualguide.com/assets/img';

const _extractId = item => {
  const regexp = /\/([0-9]*)\/$/;
  return item.url.match(regexp)[1];
};

const _transformPlanet = planet => ({
  id: _extractId(planet),
  name: planet.name,
  population: planet.population,
  rotationPeriod: planet.rotation_period,
  diameter: planet.diameter,
});

const _transformStarship = starship => ({
  id: _extractId(starship),
  name: starship.name,
  model: starship.model,
  manufacturer: starship.manufacturer,
  costInCredits: starship.cost_in_credits,
  length: starship.length,
  crew: starship.crew,
  passengers: starship.passengers,
  cargoCapacity: starship.cargo_capacity,
});

const _transformPerson = person => ({
  id: _extractId(person),
  name: person.name,
  gender: person.gender,
  birthYear: person.birth_year,
  eyeColor: person.eye_color,
});

const getResource = async url => {
  const res = await fetch(`${_api}${url}`);
  if (!res.ok) {
    throw new Error(
      `Could not fetch ${`${_api}${url}`}, received ${res.status}`,
    );
  }
  const body = await res.json();
  return body;
};

export const getAllPeople = async () => {
  const res = await getResource('/people/');
  return res.results.map(_transformPerson);
};

export const getPerson = async id => {
  const person = await getResource(`/people/${id}/`);
  return _transformPerson(person);
};

export const getPersonImage = ({ id }) => `${_image}/characters/${id}.jpg`;

export const getAllPlanets = async () => {
  const res = await getResource('/planets/');
  return res.results.map(_transformPlanet);
};

export const getPlanet = async id => {
  const planet = await getResource(`/planets/${id}/`);
  return _transformPlanet(planet);
};

export const getPlanetImage = ({ id }) => `${_image}/planets/${id}.jpg`;

export const getAllStarships = async () => {
  const res = await getResource('/starships/');
  return res.results.map(_transformStarship);
};

export const getStarship = async id => {
  const starship = await getResource(`/starships/${id}/`);
  return _transformStarship(starship);
};

export const getStarshipImage = ({ id }) => `${_image}/starships/${id}.jpg`;
