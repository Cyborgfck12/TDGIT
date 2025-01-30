# Rapport : Versionning avec Git

## Table des matières
1. [Introduction](#introduction)
2. [Historique des VCS](#historique)
3. [Principes Fondamentaux de Git](#principes-fondamentaux)
4. [Projet Pratique](#projet-pratique)
5. [Fonctionnalités Avancées](#fonctionnalites-avancees)
6. [Plateformes de Collaboration](#plateformes)
7. [Démonstration et Résultats](#demonstration)
8. [Conclusion](#conclusion)

## Introduction <a name="introduction"></a>

Ce rapport présente une étude approfondie des systèmes de gestion de versions, en mettant l'accent sur Git. Le projet combine une partie théorique et une démonstration pratique à travers le développement d'une application web de gestion de tâches.

## Historique des VCS <a name="historique"></a>

### Évolution des systèmes de gestion de versions
- **SCCS (1972)**
  - Premier système de contrôle de versions
  - Gestion locale des fichiers
  - Concept de versions séquentielles

- **RCS (1982)**
  - Amélioration avec gestion de versions locales
  - Introduction des branches
  - Stockage efficace des différences

- **CVS (1986)**
  - Introduction du concept client-serveur
  - Support du développement collaboratif
  - Limitations dans la gestion des versions

- **SVN (2000)**
  - Amélioration majeure de CVS
  - Versioning des répertoires
  - Copies atomiques

- **Git (2005)**
  - Système distribué
  - Créé par Linus Torvalds
  - Performance et flexibilité accrues

### Naissance de Git
- **Contexte** : Développement du noyau Linux
- **Objectifs** :
  - Performance
  - Distribution
  - Intégrité des données
  - Support des développements non linéaires

## Principes Fondamentaux de Git <a name="principes-fondamentaux"></a>

### Structure de Git
1. **Le répertoire .git**
   - Objects (blobs, trees, commits)
   - Références (HEAD, branches)
   - Configuration

2. **Les zones de Git**
   - Working Directory
   - Staging Area
   - Repository

### Commandes de Base
1. **Initialisation et Configuration**
   ```bash
   git init
   git config --global user.name "Nom"
   git config --global user.email "email"
   ```

2. **Gestion des modifications**
   ```bash
   git add <fichier>
   git commit -m "message"
   git status
   git log
   ```

3. **Branches et Fusion**
   ```bash
   git branch <nom-branche>
   git checkout <nom-branche>
   git merge <nom-branche>
   ```

## Projet Pratique <a name="projet-pratique"></a>

### Application de Gestion de Tâches

#### Structure du Projet
```
GitVersionningProject/
├── demo/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── rapport/
│   └── rapport.md
└── README.md
```

#### Fonctionnalités Implémentées
1. **Gestion des Projets**
   - Création de projets
   - Attribution de tâches aux projets
   - Suivi de l'avancement

2. **Gestion des Tâches**
   - Ajout/Suppression de tâches
   - Catégorisation
   - Système de tags
   - Priorités
   - Dates d'échéance

3. **Interface Utilisateur**
   - Design responsive
   - Thème clair/sombre
   - Statistiques en temps réel

### Workflow Git Utilisé

1. **Initialisation**
   ```bash
   git init
   git remote add origin https://github.com/Cyborgfck12/TDGIT.git
   ```

2. **Développement des Fonctionnalités**
   ```bash
   git checkout -b feature/categories
   # Développement...
   git add .
   git commit -m "feat: Ajout du système de catégories"
   ```

3. **Gestion des Branches**
   - `master` : code stable
   - `feature/categories` : système de catégories
   - `feature/tags` : système de tags

4. **Résolution de Conflits**
   - Exemple lors de la fusion des branches categories et tags
   - Utilisation de git status pour identifier les conflits
   - Résolution manuelle dans les fichiers

## Fonctionnalités Avancées <a name="fonctionnalites-avancees"></a>

### Commandes Git Avancées Utilisées

1. **Stash**
   ```bash
   git stash save "Styles temporaires pour les tags"
   git stash pop
   ```

2. **Rebase**
   - Réorganisation de l'historique
   - Maintien d'un historique propre

3. **Cherry-pick**
   - Sélection de commits spécifiques
   - Application ciblée de modifications

### Bonnes Pratiques
1. **Messages de Commit**
   - Format : `type: description`
   - Types : feat, fix, style, docs, etc.
   - Messages clairs et descriptifs

2. **Gestion des Branches**
   - Une branche par fonctionnalité
   - Branches courtes et ciblées
   - Fusion régulière vers master

## Plateformes de Collaboration <a name="plateformes"></a>

### GitHub
1. **Utilisation dans le Projet**
   - Hébergement du code
   - Gestion des versions
   - Documentation (README.md)

2. **Fonctionnalités Utilisées**
   - Push/Pull
   - Gestion des branches
   - Résolution de conflits

## Démonstration et Résultats <a name="demonstration"></a>

### Application
1. **Interface Utilisateur**
   - Design moderne et intuitif
   - Responsive design
   - Support des thèmes

2. **Fonctionnalités**
   - Gestion complète des tâches
   - Catégorisation et tags
   - Statistiques

### Git
1. **Historique des Commits**
   - Commits atomiques
   - Messages descriptifs
   - Branches bien organisées

2. **Workflow**
   - Feature branches
   - Merge strategies
   - Conflict resolution

## Conclusion <a name="conclusion"></a>

Ce projet a permis de mettre en pratique les concepts fondamentaux et avancés de Git à travers le développement d'une application web fonctionnelle. Les points clés incluent :

1. **Maîtrise de Git**
   - Commandes de base et avancées
   - Gestion des branches
   - Résolution de conflits

2. **Développement Web**
   - HTML5, CSS3, JavaScript moderne
   - Interface responsive
   - Fonctionnalités avancées

3. **Bonnes Pratiques**
   - Code propre et maintainable
   - Commits atomiques
   - Documentation claire

Le projet est disponible sur GitHub : [https://github.com/Cyborgfck12/TDGIT.git](https://github.com/Cyborgfck12/TDGIT.git)
