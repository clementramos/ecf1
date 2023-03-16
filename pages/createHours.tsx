// pages/create.tsx
import Header from "../components/Header";
import React, { useState } from "react";
import Router from "next/router";

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch("api/hour", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/draftsHours");
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
            Nouveaux horaires d'ouverture :
          </p>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titre à afficher sur la page"
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
            disabled={!content || !title }
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
       
      </div>
    </>
  );
};

export default Draft;
