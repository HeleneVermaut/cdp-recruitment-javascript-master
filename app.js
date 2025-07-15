const { data } = require("./data");

const getValue = (arg) => {
  const match = arg.match(/=(.+)/);
  return match ? match[1] : null;
};

const filterData = (arg, countriesData) => {
  const pattern = getValue(arg);

  if (!pattern) {
    console.error("No pattern provided for filtering.");
    process.exit(1);
  }

  // Return new array of countries with filtered people and animals
  return countriesData
    .map((country) => {
      // Return new array of people with filtered animals
      const filteredPeople = country.people
        .map((people) => {
          const filteredAnimals = people.animals.filter((animal) =>
            animal.name.includes(pattern)
          );
          // Exclude people when there are no animals matching the pattern
          if (filteredAnimals.length === 0) {
            return null;
          }

          return {
            ...people,
            animals: filteredAnimals,
          };
        })
        .filter((person) => person !== null); // Exclude people with no animals

      return {
        ...country,
        people: filteredPeople, // Keep only people with matching animals
      };
    })
    .filter((country) => country.people.length > 0); // Exclude countries with no people
};

const countChildren = (arg, countriesData) => {
  if (getValue(arg)) {
    console.error("Expected no arg for count command but got one.");
    process.exit(1);
  }
  // Return new array of countries with people and animals counts
  return countriesData.map((country) => ({
    // Add counts to country name
    name: `${country.name} [${country.people.length}]`,
    // Return new array of people with animal counts
    people: country.people.map((person) => ({
      name: `${person.name} [${person.animals.length}]`,
      animals: person.animals,
    })),
  }));
};

const displayHelp = () => {
  console.log("Available commands:");
  OPTIONS.forEach((option) => {
    console.log(`  ${option.shortName}, ${option.name}: ${option.description}`);
  });
};

// Could add more options like --silent
const OPTIONS = [
  {
    name: "--filter",
    shortName: "-f",
    description:
      "Filter the data by a specific pattern. Usage: --filter=<pattern>",
    function: filterData,
  },
  {
    name: "--count",
    shortName: "-c",
    description: "Count the data",
    function: countChildren,
  },
  {
    name: "--help",
    shortName: "-h",
    description: "Display help information",
    function: displayHelp,
  },
];

const main = () => {
  console.log("*** 🦕 Running 🦕 ***");

  const args = process.argv.slice(2);

  if (args.length === 0) {
    displayHelp();
  }

  let result = [...data];

  // Loop on options in order to guarantee execution order
  let commandExecuted = false;
  for (const option of OPTIONS) {
    const foundArg = args.find((arg) => {
      const sanitazedArg = arg.replace(/['"]/g, "").replace(/=.*$/, "");
      return option.name === sanitazedArg || option.shortName === sanitazedArg;
    });

    if (foundArg) {
      commandExecuted = true;
      result = option.function(foundArg, result);
    }
  }

  if (result) console.log(JSON.stringify(result, null, 2));

  if (!commandExecuted) {
    console.error("No command executed. Use --help for available commands.");
    displayHelp();
    process.exit(1);
  }
};

// Only run main when the script is executed directly (not when imported) => for testing purposes
if (require.main === module) {
  main();
}

// Export functions for testing
module.exports = {
  filterData,
  countChildren,
  main,
  OPTIONS,
};
