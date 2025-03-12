export default CharactersModel;# Guide GitHub

### Introduction

Ce document définit les règles et bonnes pratiques pour l'utilisation de GitHub dans le cadre du projet. Il inclut des consignes sur la gestion des branches, les conventions de commits, l'utilisation des pull requests. L'objectif est d'assurer une collaboration efficace et un code de qualité.

---

### Table des Matières

- **[Installation/Lancement](#installationlancement)**
  - [Installation](#installation)
- **[Bonne Pratique](#bonne-pratique)**
  - [Gestion des Branches](#gestion-des-branches)
  - [Conventions des Commits](#conventions-des-commits)export default CharactersModel;
  - [Merge Requests (MR)](#merge-requests-mr)
- **[Comment faire ?](#comment-faire-)**
  - [Création d'une branche](#création-dun-branche)
  - [Création d'un commit](#création-dun-commit)

---

## Installation/Lancement

#### Configuration requise :

- **NodeJs**
- **MariaDB**
- **PhpMyAdmin**
- **Postman/Hoppscotch/Bruno**

### Installation

- **Accéder au repository github**
- **Cloner le projet :** `git clone <lien du repo>`

  - [Back-End](https://github.com/Godlonx/Horizon-API.git)
  - [Font-End](https://github.com/Godlonx/Horizon-Front.git)

### Lancement

#### Back-End (Horizon-API)

- **Installer/Mettre à jour les dépendences :** `npm install` ou `npm i`
- **Lancer l'application :** `npm start`

#### Front-End (Horizon-Front)

## Bonne pratique

### Gestion des Branches

- **Branche principale** : `main` - contient le code prêt pour la production.
- **Branches de développement** : - Créer des branches spécifiques pour chaque fonctionnalité ou correction de bug, en suivant la convention :
  - `feature/<numero de ticket>nom-fonctionnalite` pour les nouvelles fonctionnalités
  - `fix/<numero de ticket>nom-bug` pour les corrections de bugs
- **Protection des branches principales** : La branche `main` est protégée et ne peut être modifiée qu'à travers des pull requests (PR) approuvées.

---

### Conventions des Commits

- **Format des messages de commit** : Utiliser le format suivant pour les messages de commit :
  - `[numéro de ticket] <emoji>|<message de commit>`
  - exemple : `HAPI0001 💄| Update UI on login page`
  - exemple de site d'emojis : [Gitmoji](https://gitmoji.dev/)

---

### Merge Requests (MR)

- **Création de MR** : Ouvrir une MR dès que le développement du ticket est terminé. [Creation d'un MR](#creation-des-mr)
- **Description des MR** : Fournir le lien vers le ticket
- **Revue de code** : Chaque MR doit être révisée par au moins un membre senior de l’équipe avant d’être fusionnée.

---

## Comment Faire ?

### Création d'une branche

- **Se placer sur la branche `Main` :** `git switch main` ou `git checkout main`
- **Créer une branche :**
  - `git checkout -d "<nom de branch>"` ou `git switch -c "<nom de branch>`
  - _Attention à la **[convention de nommage des branches](#gestion-des-branches)**_
- **Lors du premier push :** `git push --set-upstream origin <nom de branch>`

### Création d'un commit

- **Verifier les fichiers modifiés :** `git status`
- **Ajouter les fichier souhaiter :**
  - Un fichier en particulier :`git add <chemin du fichier>`
  - Tous les fichier : `git add .`
  - _Attention: soyez sûr de ne pas ajouter de fichiers non voulus_
- **Verifier les fichiers ajoutés au commit :** `git status`
- **Faire un commit :**
  - `git commit -m "<message de commit>"`
  - _Attention : soyez sûr de respecter les **[convention de commits](#conventions-des-commits)**_
- **Pousser les modifications sur le dépôt distant :** `git push`
