"use client";
import Link from "next/link";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div class="h-full bg-black bg-no-repeat bg-cover to-orange-400">
        <div className="pt-16 pb-6 flex flex-col items-center justify-center">
          <img
            src="/logonobg.png"
            alt="programme"
            width={300}
            height={500}
            className="mx-auto sm:px-5"
            loading="eager"
          />
          <div className="bg-white shadow-2xl rounded w-1/ sm:m-6 p-10">
            <p className="text-3xl text-left font-black sm:text-center sm:text-2xl w-fit">
              Connexion à votre compte
            </p>
            <p className="pb-4 text-lg text-left font-thin sm:pb-10 sm:text-center sm:text-xl w-fit">
              Pas de compte ?{" "}
              <a
                href="signInPage"
                className="underline decoration-yellow-ecf hover:text-yellow-ecf font-medium"
              >
                Créer-en un ici.
              </a>
            </p>
            <button
              aria-label="Continuer avec github"
              role="button"
              class="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
            >
              <img
                src="/github-mark.svg"
                alt="github"
                width={25}
              />
              <p class="text-base font-medium ml-4 text-gray-700">
                Connexion avec GitHub
              </p>
            </button>
            <div class="w-full flex items-center justify-between py-5 z-50">
              <hr class="w-full bg-black h-0.5" />
              <p class="text-base font-medium leading-4 px-2.5 text-black">
                OU
              </p>
              <hr class="w-full bg-black h-0.5" />
            </div>
            <form className="column  max-w-5xl">
              <label
                htmlFor="email"
                className="text-left block text-base font-medium text-black"
              >
                <p className="pb-2">E-mail :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  type="email"
                  name="email"
                  id="txtEmail"
                  placeholder="moi@mail.com"
                />
              </label>
              <label
                htmlFor="password"
                className="pt-2 text-left block mb-2 text-base font-medium text-black"
              >
                <p className="pb-1">Mot de passe :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  type="password"
                  name="password"
                  id="txtPassword"
                  placeholder="Mot de passe"
                />
              </label>
              <div id="divLoginError" class="group">
                <div id="forgotPassword" class="errorlabel">
                  <a
                    href="passwordReset"
                    className="underline decoration-yellow-ecf hover:text-yellow-ecf font-medium"
                  >
                    Mot de passe oublié ?
                  </a>
                </div>
              </div>
              <div className="pt-8"></div>
              <button
                className="button-inverse w-full uppercase py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-yellow-ecf  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                type="submit"
                id="btnLogin"
              >
                Connexion
              </button>
            </form>
            <p className="pt-8 pb-4 text-xl text-center font-thin italic sm:px-5 sm:text-center sm:text-sm w-fit">
              En continuant, vous indiquez acceptez notre{" "}
              <a
                href="mentions-legales"
                class="underline decoration-yellow-ecf hover:text-yellow-ecf"
                target="_blank"
              >
                politique de confidentialité{" "}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
