ECF1 - E-commerce website for a restaurant

This is an evaluation project that consists of creating an e-commerce website for a restaurant using Next.js, Tailwind, and Prisma.
Installation

To run this project on your local machine, follow the steps below:

    Clone the repository

    bash

git clone https://github.com/clementramos/ecf1.git

Navigate to the project directory

bash

cd ecf1

Install the dependencies

bash

npm install
# or
yarn

Start the development server

bash

    npm run dev
    # or
    yarn dev

    Visit http://localhost:3000 in your browser to view the project.

Technologies Used

This project uses the following technologies:

    Next.js
    Tailwind CSS
    Prisma

Project Structure

The project structure is as follows:

java

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

Functionality

This e-commerce website for a restaurant allows users to:

    Browse a list of available products
    Add products to a cart
    View their cart
    Increase or decrease the quantity of products in their cart
    Remove products from their cart
    Place an order

Contributing

This is an evaluation project and contributions are not accepted.
License

This project is licensed under the MIT License - see the LICENSE file for details.
