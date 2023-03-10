import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Router from "next/router";
import Header from "../../components/Header";
import { PostProps } from "../../components/Post";
import { useSession } from "next-auth/react";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return {
    props: post,
  };
};

async function publishPost(id: string): Promise<void> {
  await fetch(`/api/publish/${id}`, {
    method: "PUT",
  });
  await Router.push("/menus");
}

const Post: React.FC<PostProps> = (props) => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return (
      <>
        <Header />
        <div className="bg-black h-screen">
          <p className="text-center text-2xl p-96 text-white">
            En cours de connexion, merci de patienter...
          </p>
        </div>
      </>
    );
  }
  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === props.author?.email;
  let title = props.title;
  if (!props.published) {
    title = `${title} (Brouillon)`;
  }

  return (
    <>
      <Header />
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
          <div className="w-1/2 bg-black rounded-lg shadow-lg shadow-yellow-ecf border border-yellow-ecf items-center pb-2">
            <p className="text-white text-center text-4xl pt-5">{title}</p>
            <p className="font-thin text-sm text-white text-center p-2">
              Par : {props?.author?.name || "Auteur inconnu"}
            </p>
            <ReactMarkdown
              children={props.content}
              className="text-white p-2"
            />

            <p className="text-white text-xl text-left p-2">
              Prix : {props.price}{" "}
            </p>
            <div className="text-center">
              {!props.published && userHasValidSession && postBelongsToUser && (
                <button
                  onClick={() => publishPost(props.id)}
                  className="text-white mx-auto rounded border p-2 border-yellow-ecf text-2xl hover:shadow-lg hover:shadow-yellow-ecf"
                >
                  Publier le menu
                </button>
              )}
            </div>
            <div className="text-center pt-5">
              <a
                href="/menus"
                className="text-red-ecf text-lg italic p-2 b-5 underline"
              >
                &lt;- Retour aux menus
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
