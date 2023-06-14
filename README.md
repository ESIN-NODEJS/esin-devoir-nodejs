### Avant de commencer

Penser à bien installer les dépendances `npm` comme nous l'avons vu plusieurs fois en cours avec la commande `npm install` ou `npm i`.

Afin d'être sûr que tout est bien installé, vous devriez voir le dossier `node_modules` apparaitre.

Une commande de dev est disponible avec nodemon pour vous faire economiser du temps.

Le fichier `index.ejs` dans le dossier `views/` ne doit pas être touché, il est déjà configuré pour le projet.

Pour importer des fonctions et les packages npm, nous utiliserons les modules, ce type d'import a déjà été configuré dans le `package.json`

### Objectif

Le but de l'exercice est de créer une mini-API qui permet de générer un pokedex (afficher des pokemons sur une page HTML).

Vous n'aurez pas à faire de HTML, la page est déjà prête.

Cette API nous exposera 3 ENDPOINTS (toutes ces routes seront des `GET`):

- `pokemon/random`: Renvoie une page HTML qui affiche un pokemon aléatoire (nom, id et sprite).

- `pokemon/random/:count`: Renvoie une page HTML qui affiche un nombre de pokémon aléatoire (nom, id et sprite) en fonction de la valeur `:count`.

Ex: `pokemon/random/10`: Affiche 10 pokémons de manière aléatoire.

- `pokemon/:pokemon_id`: Renvoie une page HTML qui affiche le pokemon (nom, id et sprite) donné en `:id` .

Ex: `pokemon/25`: Affiche le pokemon numéro 25.

Quand on parle d'id de pokemon, on fait réference a son numéro dans le pokédex.

### API Pokemon

Afin de récuperer les informations necessaires pour l'API, vous allez avoir besoin de deux routes:

- URL du sprite du pokemon avec son id/numero : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id/numero}.png`

Ainsi vous avez accèss a l'url du sprite pokémon.

- Information sur le pokemon avec son id/numero : `https://pokeapi.co/api/v2/pokemon/{id/numero}`;

Attention l'objet retourné est un gros fichier JSON. Je vous conseille d'utiliser le plugin que je vous ai donné en cours ou bien d'utiliser un JSON viewer sur internet.

Le but est de recuperer le nom du pokémon avec cette route depuis son id.

### Conseils

- Le serveur express est déjà configuré.

- J'ai mis a disposition une route qui fait office d'exemple.

Afin de la tester vous pouvez essayer l'url suivante:

`http://localhost:3000/pokemon/example`

Vous pouvez la supprimer par la suite.

Le format attendus par la page HTML est un objet contenant la propriété `pokemons`.

Cette propriété est un tableau d'objet sous la forme

```
{
    name: "ivysaur",
    id: "2",
    spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
}
```

- L'Id d'un pokemon est son numéro dans le pokedex.

- Pour la route `/random/:count`, je vous conseille de stocker tout les appels asynchrone dans un tableau et d'utiliser Promise.all afin de les consumer, comme vu en cours.

- N'oubliez pas de mettre la fonction `async` si vous utiliser le mot clé `await` dans cette dernière.

- La fonciton `getRandomNumber` est mise a disposition afin de génerer un nombre aléatoire entre 1 et 1000 (nombre maximum de pokémon). Cette fonction est déjà importé dans le script.

- Utiliser axios _(module déjà installé)_ afin de faire un appel asynchrone a l'API pokemon. N'oubliez pas que pour récuperer le résultat il faut récuperer la valeur dans le `.data`, un exemple vous est fournis ci-dessous:

```
const result = await axios('<url>')
const data = result.data
```

### Bonus

Je donnerais des points bonus aux personnes ayant terminé les taches bonus suivantes:

- Regrouper les routes sur un Router.

- Sur la route `pokemon/:pokemon_id`, si je rentre un id supérieur à 1000, vous devez utiliser une redirection vers `pokemon/25`.

- Ajouter un query parameters sur toutes les routes afin d'afficher non plus le sprite de base du pokemon, mais le sprite de dos du pokémon.

Vous pouvez retrouver l'URL de ce sprite a l'URL suivante:

`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/{pokemonId}.png`

Le query parameter est `back`. Tant que cette valeur est passé dans l'url, il faut utiliser le sprite de dos.

Ex: `pokemon/random?back=true`, `pokemon/random/5?back=true`.
