import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./Header";

const variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.75,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.5,
    },
  },
};

export default function Hero() {
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typing) {
        setText((prevText) => prevText + "par arnaud michant"[prevText.length]);
        if (text.length === 17) {
          setTyping(false);
        }
      } else {
        if (text.length === 0) {
          setTyping(true);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text, typing]);

  return (
    <>
      <div>
        <div className="bg-black h-full">
          <div className="pb-48 bg-cuistot sm:bg-cover bg-center h-screen">
            <Header />
            <h1 className="sm:pt-48 pt-48 text-center sm:text-[10rem] text-[4rem] w-full text-white">
              Le Quai Antique
            </h1>
            <p className="uppercase text-center sm:text-5xl text-xl w-full text-white">
              {text}
            </p>
            <div className="flex justify-center items-center pt-12">
              <button className="text-xl uppercase w-auto py-4 px-10 border-white border border-white text-white bg-transparent hover:shadow-md hover:shadow-white">
                <a href="/images">Accèdez à la galerie d'images</a>
              </button>
            </div>
          </div>

          <div
            id="home"
            className="sm:h-screen h-full sm:grid sm:grid-cols-3 sm:gap-5 sm:p-10 grid grid-cols-1 gap-5 p-10"
          >
            <div>
              <h1 className="pt-24 text-center text-yellow-ecf text-2xl">
                Notre philosophie alimentaire
              </h1>
              <div class="w-full flex items-center justify-between py-5 z-50">
                <hr class="w-20 bg-yellow-ecf h-0.5" />
                <p class="sm:text-5xl text-xl font-medium leading-4 text-yellow-ecf">
                  LE QUAI ANTIQUE
                </p>
                <hr class="w-20 bg-yellow-ecf h-0.5" />
              </div>

              <p className="text-xl text-justify text-white px-1 pt-5">
                Arnaud Michant est un chef talentueux et passionné, connu pour
                sa cuisine créative et raffinée. Après avoir travaillé dans de
                prestigieux établissements gastronomiques en France et à
                l'étranger, il a décidé de créer son propre restaurant en 2015 :
                Le Quai Antique.
                <br></br>
                <br></br>
                Situé dans un bâtiment historique du centre-ville, Le Quai
                Antique offre une expérience culinaire unique, mettant en valeur
                les produits locaux et les saveurs de la région. La cuisine
                d'Arnaud Michant est caractérisée par une approche innovante et
                audacieuse, mélangeant les techniques traditionnelles avec des
                ingrédients modernes pour créer des plats surprenants et
                délicieux.
                <br></br>
                <br></br>
                Depuis son ouverture, Le Quai Antique a reçu de nombreuses
                distinctions et éloges, attirant des clients du monde entier.
                Pour Arnaud Michant, son restaurant est bien plus qu'un simple
                lieu de restauration : c'est un lieu d'expression de sa passion
                et de son amour pour la cuisine, où il peut partager son talent
                avec le monde entier.
              </p>
            </div>
            <Image
              src="/fleur.svg"
              width={550}
              height={550}
              alt="fleur de vie"
              className="my-auto mx-auto max-sm:hidden"
            />
            <div className="mx-auto ">
              <Image
                src="/chef.jpg"
                width={500}
                height={500}
                alt="Chef "
                className="my-auto rounded shadow-lg border-none shadow-yellow-ecf"
              />{" "}
              <h1 className="text-2xl pt-10 italic text-center text-yellow-ecf">
                Arnaud Michant
              </h1>
              <h1 className="text-2xl italic text-center text-yellow-ecf">
                Chef du restaurant "Le Quai Antique"{" "}
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <button className="text-xl uppercase w-auto py-4 px-10 border-yellow-ecf border border-yellow-ecf text-yellow-ecf bg-transparent hover:shadow-md hover:shadow-white">
              <a href="tel:0652787143">Appelez pour réserver</a>
            </button>
          </div>

          <div className="pt-24 grid grid-cols-1 gap-5 sm:grid sm:grid-cols-2 sm:gap-5">
            <div className="mx">
              <h1 className="text-2xl italic text-center text-yellow-ecf">
                Midi
              </h1>
              <p class="sm:text-5xl text-xl text-center font-medium leading-4 text-yellow-ecf uppercase">
                Formules
              </p>
              <div className="block">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  plat du jour
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    14.00 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  plat du jour + café gourmand
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    17.50€
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  plat du jour + dessert
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    19.50 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  enfant (-12 ans)
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    9.50 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">
                Cabillaud en tempura ou steak frais haché, Gourmandise de la
                pâtissière, sirop à l'eau.
              </p>
            </div>

            <Image
              src="/midi.jpg"
              width={700}
              height={700}
              alt="midi"
              className="mx-auto"
            />
          </div>
          <h1 className="text-2xl italic text-center text-yellow-ecf pt-12">
            Pour commencer
          </h1>
          <p class="sm:text-5xl text-xl text-center font-medium leading-4 text-yellow-ecf uppercase">
            entrées & tapas
          </p>
          <div className="pt-10 grid grid-cols-1 gap-5 sm:grid sm:grid-cols-2 sm:gap-5">
            <div className="mx">
              <div className="block">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  GYOZA AU POULET{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    16.00 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">6 pièces</p>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  PATA NEGRA{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    10.80€
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">130 grammes</p>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  NEMS POULET 6 PIÈCES{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    7.50 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">
                Salade romaine, menthe fraiche, sauce nem
              </p>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  PAN CON TOMATE{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    10.50 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">Soir uniquement</p>
            </div>

            <div className="mx">
              <div className="block">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  croquetas de morue{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    11.00 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">5 pièces</p>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  saint marcellin{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    10.50€
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">
                Mariné olives et romarin
              </p>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  LAMELLES DE SEICHES GRILLÉES{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    11.50 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">En persillade</p>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  BURRATA PESTO DE BASILIC{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    11.50 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">Tomates marinées</p>
            </div>
          </div>
          <Image
            src="/tapas.png"
            width={1000}
            height={100}
            alt="midi"
            className="mx-auto"
          />
          <h1 className="text-2xl italic text-center text-yellow-ecf">
            Ensuite
          </h1>
          <p class="sm:text-5xl text-xl text-center font-medium leading-4 text-yellow-ecf uppercase">
            plats
          </p>
          <div className="pt-10 grid grid-cols-1 gap-5 sm:grid sm:grid-cols-2 sm:gap-5">
            <div className="mx">
              <div className="block">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  plat du jour{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    14.00 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>

              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  NEMS POULET PAR 10{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    10.80€
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">
                Salade romaine, menthe fraiche, sauce nems
              </p>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  CABRI BURGER{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    7.50 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">
                Pain artisanal, bœuf, crème de chèvre, cabécou, chèvre buche,
                cheddar, salade
              </p>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  CLASSIC BEEF BURGER{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    10.50 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">
                Pain buns artisanal, steak bœuf 150g, cheddar, iceberg, tomate,
                sauce burger
              </p>
            </div>

            <div className="mx">
              <div className="block">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  ENTRECÔTE GRILLÉE{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    11.00 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">
                À la fleur de sel (300 gr environ)
              </p>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  SOUPE THAÏ{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    10.50€
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">
                Crevettes, vermicelle de riz, coriandre, carotte, soja
              </p>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  ARAIGNÉE DE COCHON{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    11.50 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">Huile de thym</p>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  CROUSTI CESAR{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    11.50 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">
                Salade romaine, bacon, croutons, œuf mollet, poulet
                croustillant, parmesan, pétale de radis, sauce césar, oignons
                frits
              </p>
            </div>
          </div>
          <Image
            src="/plats.png"
            width={1000}
            height={100}
            alt="midi"
            className="mx-auto"
          />
          <h1 className="text-2xl italic text-center text-yellow-ecf">
            Finir en beauté
          </h1>
          <p class="sm:text-5xl text-xl text-center font-medium leading-4 text-yellow-ecf uppercase">
            Desserts
          </p>
          <div className="pt-10 grid grid-cols-1 gap-5 sm:grid sm:grid-cols-2 sm:gap-5">
            <div className="mx">
              <div className="block">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  TOUT CHOCOLAT{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    14.00 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">
                Crumble cacao, fleur de sel, ganache chocolat noir, tuile choco
                et sauce chocolat (allergènes : gluten, lactose, fruits à coque){" "}
              </p>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  P'TIT SUISSE{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    10.80€
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">
                Meringue, yaourt, cassis, crème de marron (allergènes : gluten,
                lactose )
              </p>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  LEMON &PEANUTS{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    7.50 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">
                Sablé breton, crémeux et confit de citron, praliné cacahuète
                (allergènes : lactose,gluten, fruits à coque) cheddar, salade
              </p>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  BABA AU RHUM{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    10.50 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">
                Crème fouettée et sirop parfumé au rhum (allergènes : gluten,
                lactose)
              </p>
            </div>

            <div className="mx">
              <div className="block">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  DESSERT DU JOUR{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    11.00 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">
                Le midi en formule à 3,50€
              </p>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  CAFÉ GOURMAND{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    10.50€
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">5 pièces</p>
              <div className="block pt-9">
                <p class="sm:text-2xl text-xl text-left pl-5 font-medium leading-4 text-yellow-ecf uppercase">
                  THÉ GOURMAND{" "}
                </p>
                <div className="pl-5 pr-5">
                  <p class="sm:text-2xl text-xl text-right font-medium leading-4 text-yellow-ecf uppercase">
                    11.50 €
                  </p>
                  <div class="w-full bg-yellow-ecf h-0.5 pl-5"></div>
                </div>
              </div>
              <p className="text-white pl-5 italic pt-2">THÉ GOURMAND</p>
            </div>
          </div>
          <Image
            src="/dessert.png"
            width={1000}
            height={100}
            alt="midi"
            className="mx-auto"
          />
          <div className="flex justify-center items-center">
            <button className="text-xl uppercase w-auto border-white border-none text-white bg-transparent hover:shadow-lg hover:shadow-yellow-ecf hover:scale-125">
              {" "}<a href="/menus"> <Image
                src="/MENU.png"
                width={500}
                height={100}
                alt="midi"
                className="mx-auto"
              /></a>
             
            </button>
          </div>
          <div id="contact" className="pt-20 h-full bg-black">
            <div className="sm:grid sm:grid-cols-2 sm:gap-4 grid grid-cols-1 gap-4">
              <div className="mx-auto">
                <h1 className="text-white text-5xl mx-auto pt-10 text-center pb-12">
                  Le Quai Antique Restaurant
                </h1>
                <p className="text-white text-center text-xl py-2">
                  59 Rue Commandant Joseph Perceval
                </p>
                <p className="text-white text-center text-2xl py-2">
                  06 52 78 71 43
                </p>
                <p className="text-white text-center text-2xl py-2">
                  <a href="mailto:restaurant@lequaiantique.fr">
                    restaurant@lequaiantique.fr
                  </a>
                </p>
                <div className="text-center pt-5">
                  <button className="text-xl uppercase w-auto py-4 px-10 border-yellow-ecf border border-yellow-ecf text-yellow-ecf bg-transparent hover:shadow-md hover:shadow-white">
                    <a href="/booking">Réserver</a>
                  </button>
                </div>
              </div>
              <div className="mx-auto">
                <h1 className="text-white text-5xl pt-10 pb-12 text-center">
                  Le Quai Antique Chambres d'hotes
                </h1>
                <p className="text-white text-center text-xl py-2">
                  59 Rue Commandant Joseph Perceval
                </p>
                <p className="text-white text-center text-2xl py-2">
                  06 52 78 71 43
                </p>
                <p className="text-white text-center text-2xl py-2">
                  <a href="mailto:chambres@lequaiantique.fr">
                    chambres@lequaiantique.fr
                  </a>
                </p>
                <div className="text-center pt-5">
                  <button className="text-xl uppercase w-auto py-4 px-10 border-yellow-ecf border border-yellow-ecf text-yellow-ecf bg-transparent hover:shadow-md hover:shadow-white">
                    <a href="/booking">Réserver</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center pt-12 pb-24 bg-black">
              <p className="text-white text-2xl">Nous situer :</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.9994795584257!2d5.917414440456537!3d45.57044906739134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba8f80236e527%3A0x946d0806cd514b7c!2s59%20Rue%20Commandant%20Joseph%20Perceval%2C%2073000%20Chamb%C3%A9ry!5e0!3m2!1sfr!2sfr!4v1678184347040!5m2!1sfr!2sfr"
                width="90%"
                height="350"
                title="map"
                className="mx-auto my-5"
                loading="eager"
              />
              <img
                src="/logonobg.png"
                width={500}
                height={50}
                className="mx-auto"
              />
              <p className="text-white text-xl mb-10">
                Le Quai Antique Restaurant & Chambres d’hôtes, 59 Rue Commandant
                Joseph Perceval
              </p>
              <p className="text-white text-xl mb-10">
                <a href="https://goo.gl/maps/MkVNF4E8X6pc9x157">
                  73000 Chambéry
                </a>
                , <a href="tel:0652787143">06 52 78 71 43, </a>
                <a href="mailto:restaurant@lequaiantique.fr">
                  restaurant@lequaiantique.fr
                </a>
              </p>
              <p className="text-white text-xl pb-10">
                {/* Horaires: du lundi au vendredi de 07:00 à 15:00 et de 18:00 à
                23:00 */}
                <a href="horaires">Horaires</a>
              </p>
              <a
                className="text-red-ecf text-xl hover:underline"
                href="mentions-legales"
              >
                Mentions Légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
