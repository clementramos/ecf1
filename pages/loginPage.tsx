"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/router";
import { useState } from 'react'

const ProfilePage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const data = await response.json()
    if (!response.ok) {
      setError(data.message)
      return
    } else {
      router.push('/compte')
    }
    console.log(data)
  }
  const handleSignIn = async () => {
    const result = await signIn('google', { redirect: false });

    if (result?.error) {
      // handle sign in error
    } else if (result?.url) {
      // redirect to sign in page
      router.push(result.url);
    } else {
      // sign in successful, redirect to dashboard
      router.push('/compte');
    }
  };
  return (
    <>
      <Navbar />
      <div className="h-full bg-black bg-no-repeat bg-cover to-orange-400">
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
              aria-label="Continuer avec Google"
              role="button"
              onClick={handleSignIn}
              className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
                alt="Google"
                width={25}
              />
              <p className="text-base font-medium ml-4 text-gray-700">
                Connexion avec Google
              </p>
            </button>
            <div className="w-full flex items-center justify-between py-5 z-50">
              <hr className="w-full bg-black h-0.5" />
              <p className="text-base font-medium leading-4 px-2.5 text-black">
                OU
              </p>
              <hr className="w-full bg-black h-0.5" />
            </div>
            <form className="column  max-w-5xl" onSubmit={handleSubmit}>
              <label
                htmlFor="email"
                className="text-left block text-base font-medium text-black"
              >
                <p className="pb-2">E-mail :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  name="password"
                  id="txtPassword"
                  placeholder="Mot de passe"
                />
              </label>
              <div id="divLoginError" className="group">
                <div id="forgotPassword" className="errorlabel">
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
                className="underline decoration-yellow-ecf hover:text-yellow-ecf"
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
