// connects app.js to data.js
const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
}


/*
Exercise 1
// displays all objects in pokemon array, null length lets it go over 100
console.dir(pokemon, { maxArrayLength: null })

// logs a single pokemon, in this case #59 (remember that it's base 0)
console.log(pokemon[58])
*/


/*
Exercise 2
// logs contents of game object
console.log(game)

// logs various individual properties in game object
console.log(game.party)
console.log(game.gyms)
console.log(game.items)
*/


/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

// adds a new property to game object, since property doesn't already exist
game.difficulty = "Med"


/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

// adds bulbasaur (from data.js) to party array in game object
game.party.push(pokemon[0])


