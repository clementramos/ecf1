"use client";
import Link from "next/link";
import Header from "/components/Header";
import { signOut, useSession } from "next-auth/react";
import Router from "next/router";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  if (session) {
    return (
      <>
        <Header />
        <div className="card bg-black shadow-xl shadow-cyan-500 pt-12 pb-24 h-full flex w-full flex-1 shrink-0 flex-col items-center justify-center px-8 text-center sm:px-20">
          <img
            src="/logonobg.png"
            alt="programme"
            width={400}
            height={500}
            className="mx-auto sm:px-5"
            loading="eager"
          />
          <div className="column w-3/4 items-center gap-8 rounded-2xl bg-neutral-600 py-8 px-4 shadow-lg shadow-yellow-ecf border border-yellow-ecf pt-8 sm:min-w-[60rem] sm:px-10">
            <p className="pb-10 text-4xl text-center text-white sm:px-5 sm:text-center sm:text-4xl">
              Bonjour, {session.user.name} !
            </p>
            <p className="rounded-lg bg-gray-300 p-2 text-2xl w-fit mx-auto font-mono">
              {session.user.email} - type de compte : {session.user.role}
            </p>
            <p className="text-white text-3xl pt-5 underline">Accès rapide :</p>
            <div className="grid grid-cols-3 gap-4 pt-5">
              <Link
                href="create"
                className="text-white text-xl border border-white p-4 shadow-yellow-ecf shadow-md hover:bg-neutral-800"
              >
                Créer un menu / carte
              </Link>
              <Link
                href="menus"
                className="text-white text-xl border border-white p-4 shadow-yellow-ecf shadow-md hover:bg-neutral-800"
              >
                Voir les menus du moment
              </Link>
              <Link
                href="/drafts"
                className="text-white text-xl border border-white p-4 shadow-yellow-ecf shadow-md hover:bg-neutral-800"
              >
                Mes brouillons
              </Link>
            </div>

            <div class="w-full flex items-center justify-between py-5 z-50">
              <hr class="w-full bg-black h-0.5" />
              <img
                src={"/profil.svg"}
                alt="photo de profil"
                width={90}
                height={90}
                className="p-3 mx-auto rounded-lg"
              />
              <hr class="w-full bg-black h-0.5" />
            </div>
            <form className="grid grid-cols-1 gap-5">
              <div className="text-2xl text-center text-white sm:px-5 ">
                <p className="pb-5 underline"> Allergies :</p>
                <input
                  className="text-orange-400 "
                  value="OUI"
                  type="radio"
                  name="allergies"
                  id="txtEmail"
                  placeholder="example@mail.com"
                />{" "}
                OUI
                <input
                  className="text-orange-400 ml-5"
                  value="Non"
                  type="radio"
                  name="allergies"
                  id="txtEmail"
                  placeholder="example@mail.com"
                />{" "}
                NON
              </div>
              <label className="text-2xl text-center text-white sm:px-5 ">
                <p className="pb-5 underline">
                  {" "}
                  Nombre de convives par défaut :
                </p>
                <input
                  type="number"
                  class="mb-10 peer block min-h-[auto] mx-auto w-fit rounded border-0 bg-white text-black py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInputText"
                  placeholder="1"
                  min={1}
                  max={10}
                />
              </label>
              <button
                className="mx-5 rounded mx-auto w-fit text-xl border-2 border-white bg-white px-8 py-2 font-bold text-black hover:shadow-yellow-ecf hover:shadow-lg"
                type="submit"
                id="btnLogin"
              >
                Sauvegarder vos préférences
              </button>
            </form>

            <div class="w-full flex items-center justify-between py-5 z-50">
              <hr class="w-full bg-black h-0.5" />
              <img
                src={"/logout.svg"}
                alt="se déconnecter"
                width={100}
                height={100}
                className="p-3 mx-auto rounded-lg"
              />
              <hr class="w-full bg-black h-0.5" />
            </div>
            <div className="text-center ">
              <button
                type="button"
                className="rounded-full text-xl border-2 border-red-ecf bg-white px-8 py-2 font-bold text-red-ecf hover:bg-red-ecf hover:text-white focus:bg-red-ecf focus:text-white"
                onClick={() => signOut().then(() => Router.push("/"))}
              >
                Se déconnecter
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div className="bg-black h-screen">
          <p className="text-center text-2xl p-96 text-white">
            Vous n'êtes pas authentifié. <br></br> Merci de vous{" "}
            <a href="/loginPage" className="underline text-yellow-ecf">
              connecter
            </a>{" "}
            pour accèder à votre compte
          </p>
        </div>
      </>
    );
  }
};

export default ProfilePage;
