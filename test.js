import { countChildrens, filterData } from "./app.js";
import { data } from "./data.js";

/***
 * Tests for app.js functionalities
 * In a real scenario, these tests would be in a file named app.spec.js or app.test.js
 */

describe("Test app.js file and functionalities", () => {
  describe("Tests filterData function", () => {
    test('Should filter data when the pattern is equal to "ry"', () => {
      const result = filterData(data, "ry");

      expect(result.length).toBeGreaterThan(0);

      result.forEach((country) => {
        country.people.forEach((person) => {
          person.animals.forEach((animal) => {
            expect(animal.name).toContain("ry");
          });
        });
      });
    });

    test("Should return empty array when the pattern doesn't match any animals", () => {
      const result = filterData(data, "dinosaur");
      expect(result).toEqual([]);
    });

    test("Should remove people without animals", () => {
      const result = filterData(data, "ry");

      result.forEach((country) => {
        expect(country.people.length).toBeGreaterThan(0);
        country.people.forEach((person) => {
          expect(person.animals.length).toBeGreaterThan(0);
        });
      });
    });

    test("Should exclude countries without people", () => {
      const result = filterData(data, "ry");

      result.forEach((country) => {
        expect(country.people.length).toBeGreaterThan(0);
      });
    });

    test("Should keep original order", () => {
      const result = filterData(data, ""); // No filter, should return all data

      let previousCountryIndex = -1;
      result.forEach((country) => {
        const originalIndex = data.findIndex((c) => c.name === country.name);
        expect(originalIndex).toBeGreaterThan(previousCountryIndex);
        previousCountryIndex = originalIndex;
      });
    });
  });
  describe("Tests countChildrens function", () => {
    test("Should count people into country name", () => {
      const result = countChildrens(data);

      // Use index to verify the name format with original data
      result.forEach((country, index) => {
        expect(country.name).toEqual(
          `${data[index].name} [${country.people.length}]`
        );
      });
    });
    test("Should count animals into people array", () => {
      const result = countChildrens(data);

      // Use index to verify the name format with original data twice
      result.forEach((country, countryIndex) => {
        country.people.forEach((person, personIndex) => {
          expect(person.name).toEqual(
            `${data[countryIndex].people[personIndex].name} [${person.animals.length}]`
          );
        });
      });
    });
    test("Should handle empty array", () => {
      const result = countChildrens([]);
      expect(result).toEqual([]);
    });
  });
});
