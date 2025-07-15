# Processus de développement du use case

## 📋 Phase de préparation

1. **Lecture des consignes**
2. **Création des fichiers nécessaires :**
   - `app.js`
   - `test.js`
   - `package.json`
3. **Installation de Jest pour les tests**

## 🚀 Phase de développement initial

4. **Créer la fonction `main`** et tester avec un `console.log()` que la commande `npm run start` affiche le `console.log()` dans la console
5. **Récupération des arguments** passés lors de la commande de script
6. **Retourner les data** si aucun argument n'est passé

## 🔍 Phase de développement des fonctionnalités

7. **Vérification des options** si `--filter` ou `--count` est utilisé et/ou passe dans la bonne condition
8. **Récupération du paramètre** du filtre 'ry'

### Développement de la fonction `filterData`

9. **Création de la fonction `filterData`**
10. **Fonction découpée par step**
11. **Optimisation de la fonction**

### Développement de la fonction `countChildren`

12. **Création de la fonction `countChildren`**
13. **Fonction découpée par steps**
14. **Optimisation de la fonction**

## ✅ Phase de tests et finalisation

15. **Ajout des tests de fonction**
16. **Vérification des scripts et des tests**
17. **Annotations/divers**

## 📤 Phase de déploiement

18. **Push sur GitHub**

## 🏢 Lors d'un vrai use case

19. **Attente du passage de la CI/CD**

- Passage du build
- Passage des tests
- Coverage de Sonar

20. **Demande de relecture de la PR via un pair**
21. **Application des recommandations | commentaires | discussion**
22. **Merge de la PR**
23. **Déploiement sur Turbine**
