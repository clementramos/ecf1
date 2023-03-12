import Link from "next/link";
import Header from "../components/Header";
import { useState, useEffect, ChangeEvent } from "react";
import { set, useForm } from "react-hook-form";
import Router from "next/router";

export default function Upload() {
  const [imageSrc, setImageSrc] = useState("");
  const [uploadData, setUploadData] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  function handleOnChange(changeEvent) {
    //Triggers when the file input changes.
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  async function handleOnSubmit(event) {
    //Triggers when the main form is submitted.
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    // //Check if the file is the right type.
    // const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    // if (!allowedTypes.includes(fileInput.target.files[0].type)) {
    //   setErrorMessage(
    //     "Le fichier choisir n'est pas autorisé. Merci de choisir entre jpeg, jpg et png."
    //   );
    //   return;
    // }
    console.log("fileInput", fileInput);

    const formData = new FormData();
    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    formData.append("upload_preset", "ecf-uploads");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dn6aqjk24/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    setImageSrc(data.secure.url);
    setUploadData(data);
  }


  return (
    <>
      <Header />
      <div className="h-screen bg-black flex flex-col justify-center items-center">
        <div className="w-3/4 bg-transparent  rounded-lg shadow-yellow-ecf shadow-lg p-10">
          <p className="text-2xl text-white text-left font-bold pb-5">
            Merci d'ajouter des images du type .jpeg / .jpg / .png uniquement.
          </p>
          <form
            onSubmit={handleOnSubmit}
            method="post"
            onChange={handleOnChange}
          >
            {/* <label
              htmlFor="title"
              className="pr-5 text-xl text-white text-left "
            >
              Titre :
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Titre de l'image"
              className="p-2 mt-5 mb-10 focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
            /> */}
            <label
              htmlFor="image"
              className="p-4 text-white text-center border-dashed border-4 border-gray-600 block cursor-pointer"
            >
              Ajouter une image
            </label>
            <input
              id="image"
              name="file"
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              style={{ display: "none" }}
              onChange={handleOnChange}
            />
            <div className="flex flex-col justify-center items-center ">
              <p className="text-white text-xl pt-5 text-left">
                Image sélectionnée :{" "}
              </p>
              <img
                src={imageSrc}
                className="mt-4 object-cover rounded pb-10"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            {/* {errorMessage && (
              <p className="text-red-ecf text-xl pt-2">{errorMessage}</p>
            )} */}
            {imageSrc && !uploadData && (
              <div className="grid grid-cols-2 gap-5">
                <>
                  <button
                    className="bg-green-700 hover:shadow-green-100 hover:shadow-lg text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Sauvegarder
                  </button>
                  <Link
                    href={"/compte"}
                    className="bg-red-ecf text-white hover:shadow-red-ecf hover:shadow-lg font-bold py-2 px-4 rounded text-center"
                  >
                    Annuler
                  </Link>
                </>
              </div>
            )}
            {uploadData && (
              <code>
                <pre>{JSON.stringify(uploadData, null, 2)}</pre>
              </code>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
