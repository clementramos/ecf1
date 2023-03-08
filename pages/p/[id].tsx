import { GetServerSideProps } from "next";
import prisma from "../../lib/prisma";
import { PostProps } from "../../components/Post";
import ReactMarkdown from "react-markdown";
import Navbar from "../../components/Navbar";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: post,
  };
};

const Post: React.FC<PostProps> = (props) => {
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  return (
    <>
      <Navbar />
      <div className="bg-black h-screen">
        <img
          src="/logonobg.png"
          alt="programme"
          width={400}
          height={500}
          className="mx-auto sm:px-5"
          loading="eager"
        />
        <div className="flex justify-center">
          <div className="w-1/2 bg-red-ecf rounded-lg shadow shadow-white items-center pb-2">
            <p className="text-white text-center text-4xl pt-5">{title}</p>
            <p className="font-thin text-sm text-white text-left pl-2 pb-5">
              Par : {props?.author?.name || "Unknown author"}
            </p>
            <ReactMarkdown children={props.content} />
            <a href="/menus" className="text-white italic p-2 underline">
            &lt;- Retour aux menus
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
