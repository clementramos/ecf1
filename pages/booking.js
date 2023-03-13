import React from "react";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

export default function Home() {
  // Initialize our states
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const options = [];
  for (let hour = 12; hour <= 22; hour++) {
    for (let minute = 0; minute <= 45; minute += 15) {
      options.push(
        `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`
      );
    }
  }

  // Yup error message overrides
  const errMess = {
    req: "Merci de remplir ce champ !",
  };

  // Our Yup Schema for this form
  const ContactSchema = yup.object().shape({
    name: yup
      .string()
      .label("Nom complet")
      .required(errMess.req)
      .min(3)
      .max(20),
    email: yup
      .string()
      .label("Adresse Email")
      .required(errMess.req)
      .email("Adresse Email Invalide"),
    couverts: yup.number().required(errMess.req),
    date: yup.date().required(errMess.req),
    radioGroup: yup.string().required(errMess.req),
    hour: yup.string().required(errMess.req),
  });

  // Destruct useForm() and set our Yup schema as the validation resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  // Send our valid form data to our back-end API
  const submitForm = async (data) => {
    setIsSubmitting(true);

    const res = await axios({
      method: "POST",
      url: "/api/contact-form",
      data: data,
    })
      .then((res) => {
        setIsSubmitting(false);
        return res;
      })
      .catch((e) => {
        alert("Une erreur est survenue.");
        console.error(e);
      });

    if (res.data.status === 1) {
      setIsSubmitted(true);
    } else {
      alert(res.data.message);
    }
  };

  return (
    <>
      <Header />
      <div className="h-full bg-black">
        <img
          src="/logonobg.png"
          alt="programme"
          width={300}
          height={500}
          className="mx-auto sm:px-5"
          loading="eager"
        />

        <div className="pt-16 flex flex-col items-center bg-black h-screen">
          <div className="bg-white shadow-2xl rounded w-1/2 p-10">
            {!isSubmitted ? (
              <>
                <form onSubmit={handleSubmit((data) => submitForm(data))}>
                  <p className="text-3xl text-left font-black sm:text-center sm:text-2xl w-fit">
                    Formulaire de réservation :
                  </p>
                  <div class="w-full flex items-center justify-between py-5 z-50">
                    <hr class="w-full bg-black h-0.5" />
                  </div>
                  <label
                    htmlFor="name"
                    className="text-left block text-base font-medium text-black"
                  >
                    Nom complet pour la réservation :
                  </label>
                  <p className="text-red-500 italic">{errors.name?.message}</p>
                  <input
                    type="text"
                    placeholder="John Attends"
                    isInvalid={errors.name}
                    {...register("name")}
                    className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mb-5"
                  />
                  <label
                    htmlFor="couverts"
                    className="text-left block text-base font-medium text-black"
                  >
                    Nombre de couverts :
                  </label>
                  <p className="text-red-500 italic">
                    {errors.couverts?.message}
                  </p>
                  <input
                    type="number"
                    placeholder="10"
                    isInvalid={errors.couverts}
                    {...register("couverts")}
                    className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mb-5"
                  />
                  <label
                    htmlFor="date"
                    className="text-left block text-base font-medium text-black"
                  >
                    Date :
                  </label>
                  <p className="text-red-500 italic">{errors.date?.message}</p>
                  <input
                    type="date"
                    placeholder=""
                    isInvalid={errors.date}
                    {...register("date")}
                    className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mb-5"
                  />
                  <label
                    htmlFor="radioGroup"
                    className="text-left block text-base font-medium text-black"
                  >
                    Allergies :
                  </label>
                  <p className="text-red-500 italic">
                    {errors.radioGroup?.message}
                  </p>
                  <input
                    className="text-orange-400 mb-5"
                    value="OUI"
                    type="radio"
                    name="allergies"
                    id="radioGroup"
                    placeholder="example@mail.com"
                    isInvalid={errors.radioGroup}
                    {...register("radioGroup")}
                  />{" "}
                  OUI
                  <input
                    className="text-orange-400 ml-5"
                    value="Non"
                    type="radio"
                    name="allergies"
                    id="radioGroup"
                    placeholder="example@mail.com"
                    isInvalid={errors.radioGroup}
                    {...register("radioGroup")}
                  />{" "}
                  NON
                  <label className="text-left block text-base font-medium text-black">
                    Heure :
                  </label>
                  <p className="text-red-500 italic">{errors.hour?.message}</p>
                  <input
                    list="times"
                    type="time"
                    min="12:00"
                    max="22:00"
                    // step="13500"
                    isInvalid={errors.hour}
                    {...register("hour")}
                    className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  />
                  <datalist id="times">
                    {options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </datalist>
                  <small className="italic">
                    Le restaurant est ouvert de 12h à 22h
                  </small>
                  <label
                    htmlFor="email"
                    className="text-left mt-5 block text-base font-medium text-black"
                  >
                    Email pour la réservation :
                  </label>
                  <p className="text-red-500 italic">{errors.email?.message}</p>
                  <input
                    type="text"
                    placeholder="email@gmail.com"
                    isInvalid={errors.email}
                    {...register("email")}
                    className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mb-5"
                  />
                  <button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                    className="button-inverse w-full uppercase py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-yellow-ecf  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                  </button>
                </form>
              </>
            ) : (
              <>
                <p className="text-black text-6xl font-bold mb-10">Merci !</p>
                <p className="text-black text-2xl">
                  Votre réservation est prise en compte.
                  <br></br>
                  Vous devrez recevoir un mail de confirmation sous peu.
                </p>
                <p className="text-black text-lg pt-5">
                  Vous pouvez maintenant quitter cette page.
                </p>
                <div className="flex justify-center items-center pt-10">
                  <button className="text-xl font-bold w-auto py-2 px-5 border border-black rounded text-black bg-transparent hover:shadow-xl hover:shadow-black">
                    <a href="/">Retour à la page principale</a>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
