# Javascript developer test

## Filter

Your job is to write a command-line interface in Node.js.
This program has to filter a list of elements containing a pattern.

Details:

- In the following file `data.js`, there are `Countries` containing `Peoples` containing `Animals`.
- Only animals containing `ry` are displayed. The order should be kept intact.
- Empty array after filtering are NOT returned.

Sample of running the command, and its output:

```shell script
$ node app.js --filter=ry
[
  {
    name: 'Uzuzozne',
    people: [
      {
        name: 'Lillie Abbott',
        animals: [
          {
            name: 'John Dory'
          }
        ]
      }
    ]
  },
  {
    name: 'Satanwi',
    people: [
      {
        name: 'Anthony Bruno',
        animals: [
          {
            name: 'Oryx'
          }
        ]
      }
    ]
  }
]
```

## Count

The next goal is to print the counts of People and Animals by counting the number of children and appending it in the name, eg. `Satanwi [2]`.

Sample of running the command, and its output:

```shell script
node app.js --count
[ { name: 'Dillauti [5]',
    people:
     [ { name: 'Winifred Graham [6]',
         animals:
          [ { name: 'Anoa' },
            { name: 'Duck' },
            { name: 'Narwhal' },
            { name: 'Badger' },
            { name: 'Cobra' },
            { name: 'Crow' } ] },
       { name: 'Blanche Viciani [8]',
         animals:
          [ { name: 'Barbet' },
            { name: 'Rhea' },
            { name: 'Snakes' },
            { name: 'Antelope' },
            { name: 'Echidna' },
            { name: 'Crow' },
            { name: 'Guinea Fowl' },
            { name: 'Deer Mouse' } ] },
      ...
...
]
```

## Requirements

- The code must be available in a GIT repository
- No library/modules should be used, except for the testing library

## Appreciation

We will be really attentive to:

- Code readability, structure and consistency
- Tests, and how they are written

# CDP Recruitment JavaScript Test Master

## 🚀 Interface utilisateur Svelte ajoutée !

Ce projet dispose maintenant d'un **front-end moderne en Svelte** en plus de l'interface en ligne de commande.

### 🌐 Lancer l'interface web

```bash
npm run dev
# ou
npm run frontend
```

L'application sera accessible sur [http://localhost:5173](http://localhost:5173)

### ✨ Fonctionnalités de l'interface web

- **🔍 Filtrage en temps réel** : Recherchez les animaux par nom
- **📊 Comptage dynamique** : Affichez/masquez les statistiques
- **📱 Interface responsive** : Optimisée pour mobile et desktop
- **🎨 Design moderne** : Interface utilisateur attrayante avec animations
- **⚡ Performance** : Réactivité instantanée avec Svelte

### 📂 Structure ajoutée

```
src/                    # Dossier du front-end Svelte
├── main.js            # Point d'entrée
├── App.svelte         # Composant principal
├── utils.js           # Fonctions utilitaires réutilisées
└── lib/
    ├── CountryCard.svelte   # Composant pays
    ├── PersonCard.svelte    # Composant personne
    └── FilterInput.svelte   # Composant de recherche

index.html             # Page HTML principale
vite.config.js         # Configuration Vite
svelte.config.js       # Configuration Svelte
FRONTEND.md           # Documentation détaillée du front-end
```

### 🛠️ Scripts disponibles

- `npm run dev` : Serveur de développement front-end
- `npm run build` : Build de production
- `npm run preview` : Prévisualisation de la build
- `npm run frontend` : Alias pour `npm run dev`

---

## 📋 Interface ligne de commande (originale)

## Filter

Your job is to write a command-line interface in Node.js.
This program has to filter a list of elements containing a pattern.

Details:

- In the following file `data.js`, there are `Countries` containing `Peoples` containing `Animals`.
- Only animals containing `ry` are displayed. The order should be kept intact.
- Empty array after filtering are NOT returned.

Sample of running the command, and its output:

```shell script
$ node app.js --filter=ry
[
  {
    name: 'Uzuzozne',
    people: [
      {
        name: 'Lillie Abbott',
        animals: [
          {
            name: 'John Dory'
          }
        ]
      }
    ]
  },
  {
    name: 'Satanwi',
    people: [
      {
        name: 'Anthony Bruno',
        animals: [
          {
            name: 'Oryx'
          }
        ]
      }
    ]
  }
]
```

## Count

The next goal is to print the counts of People and Animals by counting the number of children and appending it in the name, eg. `Satanwi [2]`.

Sample of running the command, and its output:

```shell script
node app.js --count
[ { name: 'Dillauti [5]',
    people:
     [ { name: 'Winifred Graham [6]',
         animals:
          [ { name: 'Anoa' },
            { name: 'Duck' },
            { name: 'Narwhal' },
            { name: 'Badger' },
            { name: 'Cobra' },
            { name: 'Crow' } ] },
       { name: 'Blanche Viciani [8]',
         animals:
          [ { name: 'Barbet' },
            { name: 'Rhea' },
            { name: 'Snakes' },
            { name: 'Antelope' },
            { name: 'Echidna' },
            { name: 'Crow' },
            { name: 'Guinea Fowl' },
            { name: 'Deer Mouse' } ] },
      ...
...
]
```

## Requirements

- The code must be available in a GIT repository
- No library/modules should be used, except for the testing library

## Appreciation

We will be really attentive to:

- Code readability, structure and consistency
- Tests, and how they are written
