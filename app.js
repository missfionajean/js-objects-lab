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

// console.log(game)


/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

// adds bulbasaur (from data.js) to party array in game object
game.party.push(pokemon[0])

// console.log(game.party)


/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

// adds three pokemon from data.js to party array
game.party.push(pokemon[14],pokemon[47],pokemon[78])

// console.log(game.party)


/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

for (let gym of game.gyms) {
    if (gym.difficulty <= 3) {
        gym.completed = true
    }
}

// console.log(game.gyms)


/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

// to practice splice() as recommended
// syntax splice(index,deleteCount,newValue)
game.party.splice(0,1,pokemon[1])

// alternate way to solve: game.party[0] = pokemon[1]

// console.log(game.party)


/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

console.log("Current Party:")
for (let poke of game.party) {
    console.log(poke.name)
}


