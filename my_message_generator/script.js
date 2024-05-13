// Define arrays containing different pieces of data
const subjects = [
    "The universe",
    "The human brain",
    "Ants",
    "The internet",
    "Mount Everest",
    "Elephants",
    "The Great Wall of China"
  ];
  
  const themes = [
    "is bigger than we think.",
    "has incredible processing power.",
    "can lift objects many times their weight.",
    "is vast and interconnected.",
    "is the tallest mountain on Earth.",
    "have remarkable memory abilities.",
    "is visible from space."
  ];
  
  const facts = [
    "It takes about 225 million years for our solar system to travel around the Milky Way galaxy once.",
    "A single human brain generates more electrical impulses in a day than all the telephones of the world combined.",
    "Some species of ants can carry up to 50 times their own body weight.",
    "The internet weighs about the same as a strawberry.",
    "Mount Everest is still growing about 4mm per year due to tectonic activity.",
    "Elephants can recognize themselves in a mirror.",
    "The Great Wall of China is not a single, continuous wall, but a series of walls and fortifications."
  ];
  
  // Function to generate a random index from an array
  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
  
  // Function to generate a random fact message
  function generateRandomFact() {
    const subjectIndex = getRandomIndex(subjects);
    const themeIndex = getRandomIndex(themes);
    const factIndex = getRandomIndex(facts);
  
    const randomFact = `${subjects[subjectIndex]} ${themes[themeIndex]} ${facts[factIndex]}`;
  
    return randomFact;
  }
  
  // Generate and log a random fact message
  console.log(generateRandomFact());
