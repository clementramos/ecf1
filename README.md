# ECF1 - E-commerce website for a restaurant

This is an evaluation project that consists of creating an e-commerce website for a restaurant using Next.js, Tailwind, and Prisma.

# Installation

To run this project on your local machine, follow the steps below:

    Clone the repository

    bash

git clone https://github.com/clementramos/ecf1.git

Navigate to the project directory

cd ecf1

Install the dependencies

npm install
# or
yarn

Start the development server

    npm run dev
    # or
    yarn dev

    Visit http://localhost:3000 in your browser to view the project.

# Technologies Used

This project uses the following technologies:

    Next.js
    Tailwind CSS
    Prisma

# Project Structure

The project structure is as follows:


ecf1/
├── components/
│   ├── Cart/
│   ├── Footer/
│   ├── Header/
│   ├── Product/
│   ├── ProductList/
│   └── ...
├── pages/
│   ├── api/
│   ├── cart.js
│   ├── index.js
│   ├── products/
│   ├── _app.js
│   └── ...
├── public/
│   ├── images/
│   └── ...
├── styles/
│   ├── globals.css
│   └── ...
├── .env
├── .env.local
├── prisma/
├── package.json
└── ...

    components: This directory contains all the reusable components used in the project.
    pages: This directory contains all the pages of the application.
    public: This directory contains all the static assets used in the project.
    styles: This directory contains the global CSS styles used in the project.
    .env: This file contains the environment variables used in production.
    .env.local: This file contains the environment variables used in development.
    prisma: This directory contains the Prisma database schema and migrations.
    package.json: This file contains the project dependencies and scripts.

# Functionality

This e-commerce website for a restaurant allows users to:

    Browse a list of available products
    Add products to a cart
    View their cart
    Increase or decrease the quantity of products in their cart
    Remove products from their cart
    Place an order

# Contributing

This is an evaluation project and contributions are not accepted.
License

# This project is licensed under the MIT License - see the LICENSE file for details.


Diagramme de cas d'utilisation de l'utilisateur

Diagramme de cas d'utilisation de l'utilisateur
Consulter les menus

L'utilisateur peut consulter les menus disponibles du restaurant en naviguant sur le site web. Les menus sont organisés par catégories et affichent les prix et les descriptions des plats.
Effectuer une réservation

L'utilisateur peut effectuer une réservation pour une date et une heure spécifiques. Il peut choisir le nombre de personnes, sélectionner une table et ajouter des commentaires ou des demandes spéciales. L'utilisateur doit s'inscrire ou se connecter au site pour effectuer une réservation.
Contacter le restaurant

L'utilisateur peut contacter le restaurant pour poser des questions ou demander des informations supplémentaires. Il peut envoyer un message à l'aide d'un formulaire de contact ou appeler le restaurant directement.
Diagramme de cas d'utilisation de l'administrateur

Diagramme de cas d'utilisation de l'administrateur
Modifier les menus

L'administrateur peut modifier les menus proposés par le restaurant. Il peut ajouter, supprimer ou modifier des plats, ainsi que modifier les descriptions et les prix. Les modifications sont automatiquement reflétées sur le site web.
Modifier les horaires d'ouverture

L'administrateur peut modifier les horaires d'ouverture du restaurant. Il peut définir les heures d'ouverture pour chaque jour de la semaine, ainsi que les heures de fermeture pour les jours fériés et les événements spéciaux. Les modifications sont automatiquement reflétées sur le site web.
Gérer les réservations

L'administrateur peut gérer les réservations effectuées par les clients. Il peut voir les réservations en cours, modifier ou annuler des réservations existantes et ajouter des réservations manuellement. Les modifications sont automatiquement reflétées sur le site web.
