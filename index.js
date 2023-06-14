import express from "express";
import { getRandomNumber } from "./get-random-number.js";

const MAX_POKEMON_RANGE = 1000;

const app = express();
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("server started");
});

app.get("/pokemon/example", async (request, response) => {
  const pokemon1 = {
    name: "bulbasaur",
    id: "1",
    spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`,
  };

  const pokemon2 = {
    name: "ivysaur",
    id: "2",
    spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
  };

  response.render("index", {
    pokemons: [pokemon1, pokemon2],
  });
});
