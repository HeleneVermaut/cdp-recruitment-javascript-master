const { countChildren, filterData, main, OPTIONS } = require("./app");
const { data } = require("./data");

/***
 * Tests for app.js functionalities
 * In a real scenario, these tests would be in a file named app.spec.js or app.test.js
 */

describe("Test app.js file and functionalities", () => {
  beforeEach(() => {
    exitSpy = jest.spyOn(process, "exit").mockImplementation((code) => {
      throw new Error(`process.exit: ${code}`);
    });
    errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    exitSpy.mockRestore();
    errorSpy.mockRestore();
  });

  describe("Tests filterData function", () => {
    test('Should filter data when the pattern is equal to "ry"', () => {
      const result = filterData("--filter=ry", data);

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
      const result = filterData("--filter=dinosaur", data);
      expect(result).toEqual([]);
    });

    test("Should remove people without animals", () => {
      const result = filterData("--filter=ry", data);

      result.forEach((country) => {
        expect(country.people.length).toBeGreaterThan(0);
        country.people.forEach((person) => {
          expect(person.animals.length).toBeGreaterThan(0);
        });
      });
    });

    test("Should exclude countries without people", () => {
      const result = filterData("--filter=ry", data);

      result.forEach((country) => {
        expect(country.people.length).toBeGreaterThan(0);
      });
    });

    test("Should keep original order", () => {
      const result = filterData("--filter=ry", data); // No filter, should return all data

      let previousCountryIndex = -1;
      result.forEach((country) => {
        const originalIndex = data.findIndex((c) => c.name === country.name);
        expect(originalIndex).toBeGreaterThan(previousCountryIndex);
        previousCountryIndex = originalIndex;
      });
    });
    test("Should fail when = is missing", () => {
      expect(() => {
        filterData("--filter 3", data);
      }).toThrow("process.exit: 1");
      expect(errorSpy).toHaveBeenCalledWith(
        "No pattern provided for filtering."
      );
    });
  });
  describe("Tests countChildren function", () => {
    test("Should count people into country name", () => {
      const result = countChildren("--count", data);

      // Use index to verify the name format with original data
      result.forEach((country, index) => {
        expect(country.name).toEqual(
          `${data[index].name} [${country.people.length}]`
        );
      });
    });
    test("Should count animals into people array", () => {
      const result = countChildren("--count", data);

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
      const result = countChildren("--count", []);
      expect(result).toEqual([]);
    });
    test("Should return an error when arg is pass", () => {
      expect(() => {
        countChildren("--count=3", data);
      }).toThrow("process.exit: 1");
      expect(errorSpy).toHaveBeenCalledWith(
        "Expected no arg for count command but got one."
      );
    });
  });
  describe("Tests main function", () => {
    const originalArgv = process.argv;

    afterEach(() => {
      process.argv = originalArgv;
    });

    test("Should display help function when --help is passed", () => {
      const consoleSpy = jest
        .spyOn(console, "log")
        .mockImplementation(() => {});

      const args = ["--help"];
      const originalArgv = process.argv;
      process.argv = ["node", "app.js", ...args];

      main();

      expect(consoleSpy).toHaveBeenCalledWith("Available commands:");

      process.argv = originalArgv;
      consoleSpy.mockRestore();
    });

    test("Should display help function and throw when unrecognized arg is passed", () => {
      const consoleSpy = jest
        .spyOn(console, "log")
        .mockImplementation(() => {});

      const args = ["--dinosaur"];
      const originalArgv = process.argv;
      process.argv = ["node", "app.js", ...args];

      expect(() => {
        main();
      }).toThrow("process.exit: 1");

      expect(consoleSpy).toHaveBeenCalledWith("Available commands:");

      process.argv = originalArgv;
      consoleSpy.mockRestore();
    });
    test("Should be able to use the two command", () => {
      let filteredResult = filterData("--filter=ry", data);
      let result = countChildren("--count", filteredResult);

      expect(result.length).toBeGreaterThan(0);
      result.forEach((country, index) => {
        expect(country.name).toEqual(
          `${filteredResult[index].name} [${country.people.length}]`
        );
        country.people.forEach((person) => {
          expect(person.name).toContain(`[${person.animals.length}]`);
          person.animals.forEach((animal) => {
            expect(animal.name).toContain("ry");
          });
        });
      });
    });
  });
});
