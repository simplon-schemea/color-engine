# Angular : Les services - Exercice D2 - ToDo List


## Préparation
Créez un nouveau composant nommé "todo" dans le dossier `src/app/exercices/4-services/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).


## Introduction
Un des rôles des services dans Angular est de centraliser la logique applicative. On peut faire appel au même service dans plusieurs composants, ce qui permet d'alléger les composants et de limiter leur rôle à la gestion de l'expérience utilisateur (UX).

Les services permettent également de conserver et partager des données à travers toute l'application.

### Documentation
- Guide : [Singleton services](https://angular.io/guide/singleton-services)
- Guide : [Introduction aux services et à l'injection de dependances](https://angular.io/guide/architecture-services)
- Guide : [L'injection de dépendances dans Angular](https://angular.io/guide/dependency-injection)
- Guide : [Providers](https://angular.io/guide/providers)
- Guide : [Services and dependency injection](https://angular.io/guide/architecture#services-and-dependency-injection)
- Guide : [Les injecteurs hiérarchiques](https://angular.io/guide/hierarchical-dependency-injection)


## Partie 1
Dans cet exercice vous créerez un service et deux composants qui l'exploitent.

Créez un service "todo". Le service comporte une propriété qui est la liste de tâches à faire, ainsi qu'une méthode permettant d'ajouter une tâche à la liste.


## Partie 2
Créez deux nouveaux composants :
- todo-list
- todo-form

Vous afficherez les deux composants dans le composant "todo".


## Partie 3
Le composant "todo-list" doit injecter le service "todo" et afficher la liste des tâches à l'aide de la directive `ngFor`. Vous devez gérer le cas où la liste est vide en affichant un message.


## Partie 4
Le composant "todo-form" doit également injecter le service "todo" et propose un formulaire qui permet d'ajouter une tâche à la liste.


## Partie 5
On doit pouvoir supprimer une tâche lorsqu'elle est teminée. Ajoutez un bouton cliquable à côté de chaque élément permettant de retirer cet élément de la liste.

---

VirtuoWorks® - tous droits réservés©