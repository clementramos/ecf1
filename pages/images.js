import Image from "next/image"
import images from "../images"

export default function Images({ images }) {
  console.log('images', images)
  return (
    <>
      <h1 className="sr-only">My Images</h1>
      <h2>Folders</h2>
      <h2 className>Images</h2>
      <ul className>
        {images?.map(image => {
          return (
            <li key={image.id}>
              <a href={image.link} rel="noreferrer">
                <div className>
                  <Image
                    width={image.width}
                    height={image.height}
                    src={image.image}
                    alt=""
                  />
                </div>
                <h3 className>{image.title}</h3>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

async function handleOnLoadMore(e) {
  e.preventDefault();
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
      nextCursor,
      totalCount,
      folders
    }
  }
}
