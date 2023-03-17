"use client";
import Link from "next/link";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import { useState } from 'react'
import { useRouter } from 'next/router'

function SignupPage() {
  const [email, setEmail] = useState('')
  const [allergies, setAllergies] = useState('')
  const [convives, setConvives] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!email || !password || !allergies || !convives || !name) {
      setError('Elément manquant. Merci de vérifier la saisie')
      return
    }
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, allergies, convives, password })
    })
    const data = await response.json()
    if (!response.ok) {
      setError(data.message)
      return
    }
    router.push('/compte')
  }
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
              Création d'un compte
            </p>
            <p className="pb-4 text-lg text-left font-thin sm:pb-10 sm:text-center sm:text-xl w-fit">
              Déjà membre ?{" "}
              <a
                href="loginPage"
                className="underline decoration-yellow-ecf hover:text-yellow-ecf font-medium"
              >
                Connectez-vous ici.
              </a>
            </p>

            <form className="column  max-w-5xl" onSubmit={handleSubmit}>
            <label
                htmlFor="name"
                className="text-left block text-base font-medium text-black"
              >
                <p className="pb-2">Nom - Prénom :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  name="name"
                  id="txtEmail"
                  placeholder="John Doe"
                />
              </label>
              <label
                htmlFor="email"
                className="text-left block text-base font-medium text-black"
              >
                <p className="pb-2 pt-5">E-mail :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  name="email"
                  id="txtEmail"
                  placeholder="moi@mail.com"
                />
              </label>
              <label
                htmlFor="email"
                className="text-left block text-base font-medium text-black"
              >
                <p className="pb-2 pt-5">Allergies :</p>
                <input
                className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full "
                value={allergies}
                onChange={(event) => setAllergies(event.target.value)}
                required
                type="text"
                name="allergies"
                id="txtEmail"
                placeholder="OUI / NON"
              />{" "}
              
              
              </label>
              <label
                htmlFor="convives"
                className="text-left block text-base font-medium text-black"
              >
                <p className="pb-2 pt-5">Nombre de convives par défaut :</p>
                <input
                type="text"
                value={convives}
                onChange={(event) => setConvives(event.target.value)}
                class="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full "
                id="exampleFormControlInputText"
                name="convives"
                placeholder="Max. 10"
                min={1}
                max={10}
              />
              </label>
              <label
                htmlFor="password"
                className="pt-2 text-left block mb-2 text-base font-medium text-black"
              >
                <p className="pb-1 pt-5">Mot de passe :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  name="password"
                  id="txtPassword"
                  placeholder="Mot de passe"
                />
              </label>
              {error && <p>{error}</p>}
              <div className="pt-8"></div>
              <button
                className="button-inverse w-full uppercase py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-yellow-ecf  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                type="submit"
                id="btnLogin"
              >
                Création du compte
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

export default SignupPage;
