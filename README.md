# Diagramme de classe pour les utilisateurs

La classe User représente un utilisateur du site web de restaurant. Chaque utilisateur a un identifiant unique, une adresse e-mail et un mot de passe. La classe contient également des méthodes pour la gestion des réservations et des messages.

# Diagramme de classe pour les réservations

La classe Reservation représente une réservation de table dans le restaurant. Chaque réservation a un identifiant unique, une date et une heure, le nombre de personnes et des commentaires ou des demandes spéciales. La classe contient également des références à l'utilisateur qui a effectué la réservation et à la table réservée.

# Diagramme de classe pour les tables

La classe Table représente une table dans le restaurant. Chaque table a un identifiant unique, un numéro et un nombre de places. La classe contient également des références aux réservations associées à cette table.

# Diagramme de classe pour les messages

La classe Message représente un message envoyé depuis le site web de restaurant. Chaque message a un identifiant unique, un sujet, un contenu et une date d'envoi. La classe contient également des références à l'utilisateur qui a envoyé le message et à l'administrateur qui l'a reçu.

# Diagramme de classe pour les menus

La classe Menu représente un menu de plat pour le restaurant. Chaque menu a un identifiant unique, un nom, une description et un prix. La classe contient également des références aux plats individuels qui composent le menu. La classe Dish représente un plat individuel sur le menu du restaurant. Chaque plat a un identifiant unique, un nom, une description et un prix.

# Diagramme de séquence pour la réservation d'une table

   L'utilisateur accède à la page de réservation sur le site web.
   Le système affiche les tables disponibles pour la date et l'heure sélectionnées.
   L'utilisateur choisit une table et sélectionne le nombre de personnes.
   L'utilisateur fournit ses informations de contact et ajoute des commentaires ou des demandes spéciales.
   Le système enregistre la réservation et envoie un e-mail de confirmation à l'utilisateur.

# Diagramme de séquence pour la modification d'une réservation

   L'utilisateur accède à la page de gestion des réservations sur le site web.
   Le système affiche les réservations en cours pour l'utilisateur.
   L'utilisateur choisit la réservation qu'il souhaite modifier.
   L'utilisateur modifie les détails de la réservation, tels que la date et l'heure ou le nombre de personnes.
   Le système met à jour la réservation et envoie un e-mail de confirmation à l'utilisateur.
    
# Diagramme de séquence pour la modification des horaires d'ouverture

   L'administrateur accède à la page de gestion des horaires sur le site web.
   Le système affiche les horaires d'ouverture actuels pour le restaurant.
   L'administrateur modifie les horaires d'ouverture pour un jour de la semaine spécifique ou pour un jour férié ou un événement spécial.
   Le système met à jour les horaires d'ouverture et les affiche sur le site web.

# Diagramme de séquence pour la modification des menus

   L'administrateur accède à la page de gestion des menus sur le site web.
   Le système affiche les menus actuels pour le restaurant.
   L'administrateur ajoute, supprime ou modifie un plat du menu.
   Le système met à jour le menu et l'affiche sur le site web.


# Diagramme de cas d'utilisation de l'utilisateur

### Consulter les menus

L'utilisateur peut consulter les menus disponibles du restaurant en naviguant sur le site web. Les menus sont organisés par catégories et affichent les prix et les descriptions des plats.

### Effectuer une réservation

L'utilisateur peut effectuer une réservation pour une date et une heure spécifiques. Il peut choisir le nombre de personnes, sélectionner une table et ajouter des commentaires ou des demandes spéciales. L'utilisateur doit s'inscrire ou se connecter au site pour effectuer une réservation.

### Contacter le restaurant

L'utilisateur peut contacter le restaurant pour poser des questions ou demander des informations supplémentaires. Il peut envoyer un message à l'aide d'un formulaire de contact ou appeler le restaurant directement.

# Diagramme de cas d'utilisation de l'administrateur

### Modifier les menus

L'administrateur peut modifier les menus proposés par le restaurant. Il peut ajouter, supprimer ou modifier des plats, ainsi que modifier les descriptions et les prix. Les modifications sont automatiquement reflétées sur le site web.

### Modifier les horaires d'ouverture

L'administrateur peut modifier les horaires d'ouverture du restaurant. Il peut définir les heures d'ouverture pour chaque jour de la semaine, ainsi que les heures de fermeture pour les jours fériés et les événements spéciaux. Les modifications sont automatiquement reflétées sur le site web.

### Gérer les réservations

L'administrateur peut gérer les réservations effectuées par les clients. Il peut voir les réservations en cours, modifier ou annuler des réservations existantes et ajouter des réservations manuellement. Les modifications sont automatiquement reflétées sur le site web.
