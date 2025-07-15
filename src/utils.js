// Import des données et fonctions du fichier app.js existant
import { data } from "../data.js";

export const filterData = (data, pattern) => {
  return data
    .map((country) => {
      const filteredPeople = country.people
        .map((people) => {
          const filteredAnimals = people.animals.filter((animal) =>
            animal.name.includes(pattern)
          );
          if (filteredAnimals.length === 0) {
            return null;
          }

          return {
            ...people,
            animals: filteredAnimals,
          };
        })
        .filter((person) => person !== null);

      return {
        ...country,
        people: filteredPeople,
      };
    })
    .filter((country) => country.people.length > 0);
};

export const countChildrens = (data) => {
  return data.map((country) => ({
    name: `${country.name} [${country.people.length}]`,
    people: country.people.map((person) => ({
      name: `${person.name} [${person.animals.length}]`,
      animals: person.animals,
    })),
  }));
};

export { data };
