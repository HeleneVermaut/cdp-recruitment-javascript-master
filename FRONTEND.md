# 🌐 Front-end Svelte

Interface utilisateur moderne pour explorer les données des pays, personnes et animaux.

## 🚀 Fonctionnalités

- **🔍 Filtrage interactif** : Recherchez les animaux par nom
- **📊 Comptage dynamique** : Affichez les comptes de personnes et d'animaux
- **📱 Interface responsive** : Optimisée pour mobile et desktop
- **⚡ Performance** : Interface rapide et fluide avec Svelte
- **🎨 Design moderne** : Interface utilisateur attrayante avec animations

## 🛠️ Utilisation

### Démarrer le serveur de développement

```bash
npm run dev
# ou
npm run frontend
```

### Construire pour la production

```bash
npm run build
```

### Prévisualiser la build de production

```bash
npm run preview
```

## 📁 Structure du front-end

```
src/
├── main.js              # Point d'entrée de l'application
├── App.svelte           # Composant principal
├── utils.js             # Fonctions utilitaires (réutilise la logique d'app.js)
└── lib/
    ├── CountryCard.svelte   # Carte pour afficher un pays
    ├── PersonCard.svelte    # Carte pour afficher une personne
    └── FilterInput.svelte   # Composant de saisie pour le filtrage
```

## 🎮 Fonctionnalités disponibles

1. **Filtrage** : Tapez dans le champ de recherche pour filtrer les animaux
2. **Comptes** : Cliquez sur "Afficher les comptes" pour voir les statistiques
3. **Exploration** : Cliquez sur les pays pour voir les personnes et leurs animaux
4. **Réinitialisation** : Utilisez le bouton "Réinitialiser" pour revenir aux données complètes

## 🔧 Technologies utilisées

- **Svelte** : Framework réactif moderne
- **Vite** : Bundler rapide et moderne
- **CSS** : Styles personnalisés avec animations et responsive design
