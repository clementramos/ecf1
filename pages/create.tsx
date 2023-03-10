// pages/create.tsx
import Header from "../components/Header";
import React, { useState } from "react";
import Router from "next/router";

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [titleFormula, setTitleFormula] = useState("");
  const [priceFormula, setPriceFormula] = useState("");
  const [contentFormula, setContentFormula] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // TODO
  };

  return (
    <>
      <Header />
      <div className="h-screen bg-black grid grid-cols-2 gap-4">
        <form onSubmit={submitData} className="pt-36 mx-auto w-3/4">
          <p className="text-2xl text-white text-center pb-5">
            Nouvelle carte :
          </p>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titre de la carte"
            type="text"
            value={title}
            className="w-full p-1 m-1 rounded border-2"
          />
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Description"
            rows={8}
            value={content}
            className="w-full p-1 m-1 rounded border-2"
          />
          <input
            autoFocus
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Prix"
            type="text"
            value={price}
            className="w-full p-1 m-1 rounded border-2"
          />
          <input
            disabled={!content || !title || !price}
            type="submit"
            value="Générer"
            className="bg-yellow-ecf rounded w-3/4 h-10 p-1 m-1"
          />
          <button className="bg-yellow-ecf rounded w-1/5 h-10 p-1 m-1">
            {" "}
            <a
              className="text-red-ecf"
              href="#"
              onClick={() => Router.push("/")}
            >
              ou annuler
            </a>
          </button>
        </form>
        <form onSubmit={submitData} className="pt-36 mx-auto w-3/4">
          <p className="text-2xl text-white text-center pb-5">
            Nouvelle formule :
          </p>
          <input
            autoFocus
            onChange={(e) => setTitleFormula(e.target.value)}
            placeholder="Titre de la formule"
            type="text"
            value={titleFormula}
            className="w-full p-1 m-1 rounded border-2"
          />
          <textarea
            cols={50}
            onChange={(e) => setContentFormula(e.target.value)}
            placeholder="Description"
            rows={8}
            value={contentFormula}
            className="w-full p-1 m-1 rounded border-2"
          />
          <input
            autoFocus
            onChange={(e) => setPriceFormula(e.target.value)}
            placeholder="Prix"
            type="text"
            value={priceFormula}
            className="w-full p-1 m-1 rounded border-2"
          />
          <input
            disabled={!contentFormula || !titleFormula || !priceFormula}
            type="submit"
            value="Générer"
            className="bg-yellow-ecf rounded w-3/4 h-10 p-1 m-1"
          />
          <button className="bg-yellow-ecf rounded w-1/5 h-10 p-1 m-1">
            {" "}
            <a
              className="text-red-ecf"
              href="#"
              onClick={() => Router.push("/")}
            >
              ou annuler
            </a>
          </button>
        </form>
      </div>
    </>
  );
};

export default Draft;
