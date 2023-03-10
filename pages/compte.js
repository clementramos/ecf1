"use client";
import Link from "next/link";
import Header from "/components/Header";
import Footer from "/components/Footer";
import { signOut, useSession } from "next-auth/react";
import Router from "next/router";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  if (session) {
    return (
      <>
        <Header />
        <div className="card sm:pt-20 bg-black shadow-xl shadow-cyan-500 pt-24 pb-24 h-full flex w-full flex-1 shrink-0 flex-col items-center justify-center px-8 text-center sm:px-20">
          <div className="column w-1/2 items-center gap-8 rounded-2xl bg-blue-ecf py-8 px-4 shadow-md pt-8 sm:min-w-[60rem] sm:px-10">
            <p className="pb-10 text-4xl text-center text-yellow-ecf sm:px-5 sm:text-center sm:text-4xl">
              Bonjour !
            </p>
            <p className="rounded-lg bg-gray-300 p-2 text-2xl w-fit mx-auto font-mono"></p>

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
              <label className="text-2xl text-center text-yellow-ecf sm:px-5 sm:text-start">
                <p className="pb-5"> Allergies :</p>
                <input
                  className="text-orange-400 "
                  value=""
                  required
                  type="radio"
                  name=""
                  id="txtEmail"
                  placeholder="example@mail.com"
                />{" "}
                Oui
                <input
                  className="text-orange-400 ml-5"
                  value=""
                  required
                  type="radio"
                  name=""
                  id="txtEmail"
                  placeholder="example@mail.com"
                />{" "}
                Non
              </label>
              <label className="text-2xl text-center text-yellow-ecf sm:px-5 sm:text-start">
                <p className="pb-5"> Nombre de convives par défaut :</p>
                <input
                  type="number"
                  class="peer block min-h-[auto] w-fit rounded border-0 bg-white tex-red-ecf py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInputText"
                  placeholder="1"
                  min={1}
                  max={10}
                />
              </label>
              <button
                className="mx-5 rounded w-fit text-xl border-2 border-yellow-ecf bg-white px-8 py-2 font-bold text-yellow-ecf hover:bg-yellow-ecf hover:text-white focus:bg-yellow-ecf focus:text-white"
                type="submit"
                id="btnLogin"
              >
                Sauvegarder
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
                className="rounded-full text-xl border-2 border-yellow-ecf bg-white px-8 py-2 font-bold text-yellow-ecf hover:bg-yellow-ecf hover:text-white focus:bg-yellow-ecf focus:text-white"
                onClick={() => signOut().then(() => Router.push("/"))}
              >
                Se déconnecter
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div className="bg-black h-screen">
          <p className="text-center text-2xl p-96 text-white">
            Vous n'êtes pas authentifié. <br></br> Merci de vous <a href="/loginPage" className="underline text-yellow-ecf">connecter</a> pour
            accèder à votre compte
          </p>
        </div>
      </>
    );
  }
};

export default ProfilePage;
