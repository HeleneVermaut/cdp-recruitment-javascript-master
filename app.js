const { data } = require("./data");

const filterData = (data, pattern) => {
  // Return new array of countries with filtered people and animals
  return data
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

const countChildrens = (data) => {
  // Return new array of countries with people and animals counts
  return data.map((country) => ({
    // Add counts to country name
    name: `${country.name} [${country.people.length}]`,
    // Return new array of people with animal counts
    people: country.people.map((person) => ({
      name: `${person.name} [${person.animals.length}]`,
      animals: person.animals,
    })),
  }));
};

const main = () => {
  console.log("*** 🦕 Running 🦕 ***");

  // Get arguments from the command line
  const args = process.argv.slice(2);
  // Get --filter or --count command
  const command = args[0];

  // Check if the command is --filter or --count
  if (command?.startsWith("--filter")) {
    const searchByPattern = command.split("=")[1];
    const filteredData = filterData(data, searchByPattern);
    console.log(JSON.stringify(filteredData, null, 2));
  } else if (command === "--count") {
    const countedData = countChildrens(data);
    console.log(JSON.stringify(countedData, null, 2));
  } else {
    // Display usage instructions
    console.log("Usage: node app.js --filter=<pattern> || node app.js --count");
  }
  console.log("*** 💥 End Running 💥 ***");
};

// Only run main when the script is executed directly (not when imported) => for testing purposes
if (require.main === module) {
  main();
}

// Export functions for testing
module.exports = {
  filterData,
  countChildrens,
  main,
};
