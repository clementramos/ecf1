# ECF - Projet restaurant, "Le Quai Antique"
## Table des matières : 
1. [Set-up](#setup)
2. [Création d'un profil ADMIN](#admin)
3. [Scripts SQL](#sql)
4. [Charte Graphique](#charte)
5. [Mise en page](#page)
6. [Logos](#logos)
7. [Documentation](#documentation)

<a name="setup"></a>
> ### Déploiement en local :

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/clementramos/ecf1)

Ou

```
npx create-next-app --example https://github.com/clementramos/ecf1 ECF
# ou
yarn create next-app --example https://github.com/clementramos/ecf1 ECF
```
##### Remplacez les variables d'environnement

###### Ensuite, installez les modules et lancer le serveur

```bash
npm install
npm run dev

# ou

yarn
yarn dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=edge-middleware-eap) ([Documentation](https://nextjs.org/docs/deployment)).

<a name="admin"></a>
> ### Création d'un administrateur :

#### 1. Créez un fichier nommé `seed.ts` dans le répertoire `prisma`
![seed](https://user-images.githubusercontent.com/81080837/225086373-7d65c95b-998d-4759-acf6-70dd7bb7f95f.png)
##### Remplacez le mail par le votre.
#### 2. Ajoutez `prisma.seed` dans votre `package.json`
![seed1](https://user-images.githubusercontent.com/81080837/225086673-ff5a3c8a-2500-4f8e-ba22-b6b029dfae60.png)
#### 3. Executez la commande suivante dans le terminal :
`npx prisma db seed`

<a name="sql"></a>
> ### Scripts SQL :
#### Ajout de prisma dans le projet :
##### Pour cela, il faut installer le CLI de prisma :
`npm install prisma --save-dev`
##### Je crée ensuite le schema de ma base de données prisma avec le template en faisant comme cela :
`npx prisma init`
###### Cette commande crée un nouvier dossier `prisma` avec le fichier `schema.prisma` à l'intérieur.
##### Je connecte ensuite la base de données :
![prisma](https://user-images.githubusercontent.com/81080837/225087682-d0298202-a433-4045-81e5-c45c6ac5196b.png)

##### Et je peux ensuite créer mes tables à l'intérieur :
![prismadb](https://user-images.githubusercontent.com/81080837/225088105-940954c4-95a3-411f-ba4e-683c4a55f850.png)

###### Transcris en SQL :
![sql](https://user-images.githubusercontent.com/81080837/225883001-c5734271-99cb-4f06-a3b8-674f65a3e57c.png)

##### J'éxecute ensuite la commande `npx prisma db pull` pour confirmer.

<a name="charte"></a>
> ### Charte graphique :
![Le Quai Antique](https://user-images.githubusercontent.com/81080837/225022197-e1e736ab-7a6f-4866-9f01-5a44f58f3ee9.png)

<a name="page"></a>
> ### Mise en page

Le design est simple, épuré et moderne, avec une utilisation minimaliste de la couleur et une typographie claire et facile à lire.
Les boutons ont un arrière-plan jaune-orangé et un texte blanc, avec des bordures arrondies.
Les images sont utilisées pour illustrer les plats du menu et les photos du restaurant.
Le site utilise une mise en page responsive pour assurer une expérience utilisateur cohérente sur toutes les tailles d'écran.

<a name="logos"></a>
> ### Logos
![logonobg](https://user-images.githubusercontent.com/81080837/225088883-3296fb0e-9425-43f2-9bec-5ee561c49be8.png)
![logo](https://user-images.githubusercontent.com/81080837/225088963-d48d7923-aa4f-491f-ac4d-870f9504d6a1.png)

<a name="documentation"></a>
> ### Documentation

> [Documentation.pdf](https://github.com/clementramos/ecf1/files/11000711/documentation_technique_ramos.pdf)
> 
> [Charte graphique et maquettes.pdf](https://github.com/clementramos/ecf1/files/10972199/charte_graphique_ramos.pdf)
