import Link from "next/link";
import Header from "../components/Header";
import { useState, useEffect, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import Router from "next/router";

const Upload = () => {
  const [imageUploaded, setImageUploaded] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleChange = (event) => {
    setImageUploaded(event.target.files[0]);
  };

  const submitData = async (e) => {
    e.preventDefault();

    if (!imageUploaded) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", imageUploaded);

      await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      Router.push("/images");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="h-screen bg-black flex flex-col justify-center items-center">
        <div className="w-3/4 bg-transparent  rounded-lg shadow-yellow-ecf shadow-lg p-10">
          <form onSubmit={submitData}>
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
              name="image"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleChange}
            />
            <div className="flex flex-col justify-center items-center ">
              <p className="text-white text-xl pt-5">Image sélectionnée : </p>
              <img
                src={previewImage}
                className="mt-4 object-cover rounded pb-10"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              {" "}
              <button
                className="bg-green-700 hover:shadow-green-100 hover:shadow-lg text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Sauvegarder
              </button>{" "}
              <Link
                href={"/addPictures"}
                className="bg-red-ecf text-white hover:shadow-red-ecf hover:shadow-lg font-bold py-2 px-4 rounded text-center"
              >
                Annuler
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Upload;
