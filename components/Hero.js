import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
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
      <Header />
      <div>
        <div className="bg-black">
          <div className="pt-12 pb-48 bg-cuistot bg-cover h-1/4">
            <h1 className="sm:pt-48 pt-20 text-center sm:text-[10rem] text-[4rem] w-full text-white">
              Le Quai Antique
            </h1>
            <p className="uppercase text-center sm:text-5xl text-xl w-full text-white">
              {text}
            </p>
          </div>
          <div>
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
                  <button class="bg-red-ecf text-white font-thin py-2 px-4 border border-yellow-ecf rounded-lg text-2xl mx-auto hover:scale-125">
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
                  <button class="bg-red-ecf text-white font-thin py-2 px-4 border border-yellow-ecf rounded-lg text-2xl mx-auto hover:scale-125">
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
                Horaires: du lundi au vendredi de 07:00 à 15:00 et de 18:00 à
                23:00
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
