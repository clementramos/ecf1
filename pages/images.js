import Image from "next/image";
import Header from "../components/Header";

export default function Home({ images }) {
  return (
    <>
      <Header />
      <div className="h-full bg-black p-10">
        <h1 className="sr-only">Gallerie :</h1>
        <h2 className="text-4xl font-bold text-center text-white pt-24">
          Galerie :
        </h2>
        <ul className="grid grid-cols-3 gap-5 pt-10">
          {images.map((image) => {
            return (
              <li key={image.id}>
                <a href={image.link} rel="noreferrer">
                  <div className="block">
                    <Image
                      width={image.width}
                      height={image.width}
                      src={image.image}
                      alt=""
                    />
                  </div>
                  <h3 className="m-2 text-xl text-black hover:text-white">
                    {image.title}
                  </h3>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center items-center">
          <button className="text-xl font-bold w-auto py-2 px-5 border-white border border-white rounded text-white bg-transparent hover:shadow-xl hover:shadow-yellow-ecf mr-10">
            <a href="/">Retour à la page principale</a>
          </button>

          <button className="text-xl font-bold w-auto py-2 px-5 border-white border border-white rounded text-white bg-transparent hover:shadow-xl hover:shadow-yellow-ecf">
            <a href="/booking">Réserver une table</a>
          </button>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ":" +
            process.env.CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
    }
  ).then((r) => r.json());
  const { resources } = results;

  const images = resources.map((resource) => {
    const { width, height } = resource;
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
    };
  });
  return {
    props: {
      images,
    },
  };
}
