
const Gallery = (props) => {
  return (
      <div className="page">
        <h1>Image Gallery</h1>
        <main>
          {props.images.map((image) => (
            <img
              src={`https://res.cloudinary.com/${process.env.CLOUD_NAME}/v${image.version}/${image.publicId}.${image.format}`}
              key={image.publicId}
            />
          ))}
        </main>
      </div>
  );
};
console.log(process.env.SERVER_PATH);


export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.SERVER_PATH}/api/images`);
  const images = await res.json();
  return {
    props: { images },
  };
};

export default Gallery;