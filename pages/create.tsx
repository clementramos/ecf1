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
    try {
      const body = { title, content, price };
      await fetch("api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="h-screen bg-black grid grid-cols-1 gap-4">
        <form onSubmit={submitData} className="pt-36 mx-auto w-3/4">
          <p className="text-2xl text-white text-center pb-5">
            Nouveau menu :
          </p>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titre de la carte"
            type="text"
            value={title}
            className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mb-5"
          />
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Description"
            rows={8}
            value={content}
            className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mb-5"
          />
          <input
            autoFocus
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Prix"
            type="text"
            value={price}
            className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mb-5"
          />
          <input
            disabled={!content || !title || !price}
            type="submit"
            value="Générer"
            className="button-inverse w-full uppercase py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-yellow-ecf  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 mb-5"
          />
          <button className="button-inverse w-full uppercase py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-yellow-ecf  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">
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
        {/* <form onSubmit={submitData} className="pt-36 mx-auto w-3/4">
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
        </form> */}
      </div>
    </>
  );
};

export default Draft;
