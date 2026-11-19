// PROVIDED: use this collection to generate the entries.
const $creatures = [
  {
    "name": "Moss Dragon",
    "description": "A gentle gardener who grows tiny forests wherever it naps.",
    "image": "assets/moss-dragon.svg",
    "alt": "A green dragon with leafy horns and small wings."
  },
  {
    "name": "Cloud Fox",
    "description": "A sky wanderer collecting soft clouds and lost daydreams.",
    "image": "assets/cloud-fox.svg",
    "alt": "A pale blue fox with pointed ears and a fluffy tail."
  },
  {
    "name": "Ember Salamander",
    "description": "A warm little companion that keeps campfires glowing.",
    "image": "assets/ember-salamander.svg",
    "alt": "An orange salamander with a flame at the end of its tail."
  },
  {
    "name": "Moon Owl",
    "description": "A quiet navigator who reads the stories written in stars.",
    "image": "assets/moon-owl.svg",
    "alt": "A purple owl with a crescent moon on its forehead."
  },
  {
    "name": "Crystal Turtle",
    "description": "A patient explorer carrying a sparkling crystal garden.",
    "image": "assets/crystal-turtle.svg",
    "alt": "A mint green turtle with purple crystals on its shell."
  },
  {
    "name": "Mushroom Sprite",
    "description": "A woodland storyteller with a spotted cap and muddy boots.",
    "image": "assets/mushroom-sprite.svg",
    "alt": "A small cream sprite wearing a red spotted mushroom cap."
  }
]

// YOUR WORK: build these features using the supplied HTML, CSS, and data.
// 1. Select the collection and preference controls.
// 2. Use a loop to generate the creature entries. See START-HERE.md for markup.
// 3. Listen for changes to each preference control and update the appearance.
// 4. Save both selected preferences to Local Storage.
// 5. Check for saved data on load and restore the controls and appearance.
// Add short pseudocode comments before writing each feature.

// grab the elements from the page
const collection = document.querySelector("#collection");
const theme = document.querySelector("#theme");
const layout = document.querySelector("#layout");
const status = document.querySelector("#status");

const storageKey = "mtm6302-a4-creature-collection-preferences";


// add all the creatures to the page
function displayCreatures() {
  for (let creature of $creatures) {
    const item = document.createElement("li");
    item.classList.add("creature");

    const image = document.createElement("img");
    image.src = creature.image;
    image.alt = creature.alt;

    const info = document.createElement("div");
    info.classList.add("creature-info");

    const name = document.createElement("h3");
    name.textContent = creature.name;

    const description = document.createElement("p");
    description.classList.add("creature-description");
    description.textContent = creature.description;

    info.appendChild(name);
    info.appendChild(description);

    item.appendChild(image);
    item.appendChild(info);

    collection.appendChild(item);
  }
}


// update the theme and layout
function updateAppearance() {
  document.body.dataset.theme = theme.value;
  collection.dataset.layout = layout.value;
}


// save the choices
function savePreferences() {
  const preferences = {
    theme: theme.value,
    layout: layout.value
  };

  localStorage.setItem(storageKey, JSON.stringify(preferences));

  status.textContent = "Your preferences have been saved!";
}


// check if there are saved choices
function loadPreferences() {
  const savedPreferences = localStorage.getItem(storageKey);

  if (savedPreferences) {
    const preferences = JSON.parse(savedPreferences);

    theme.value = preferences.theme;
    layout.value = preferences.layout;

    updateAppearance();

    status.textContent = "Your saved preferences are back!";
  } else {
    theme.value = "forest";
    layout.value = "cards";

    updateAppearance();

    status.textContent = "Pick a habitat and layout for your collection!";
  }
}


// listen for changes
theme.addEventListener("change", function() {
  updateAppearance();
  savePreferences();
});

layout.addEventListener("change", function() {
  updateAppearance();
  savePreferences();
});


// show the creatures and load the saved choices
displayCreatures();
loadPreferences();