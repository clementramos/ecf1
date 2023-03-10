// pages/drafts.tsx

import React from "react";
import { GetServerSideProps } from "next";
import { useSession, getSession } from "next-auth/react";
import Header from "../components/Header";
import Post, { PostProps } from "../components/Post";
import prisma from "../lib/prisma";
import Router from "next/router";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
  }

  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session.user.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { drafts },
  };
};

type Props = {
  drafts: PostProps[];
};

const Drafts: React.FC<Props> = (props) => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <Header />
        <div className="bg-black h-full">
          <p className="text-center text-2xl p-96 text-white">
            Vous n'êtes pas authentifié et n'êtes pas autorisé à voir cette
            page. <br></br> Merci de vous{" "}
            <a href="/loginPage" className="underline text-yellow-ecf">
              connecter
            </a>{" "}
            pour accèder à votre compte
          </p>
        </div>
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="bg-black h-screen pb-36">
        <p className="text-6xl text-white text-center mb-10 pt-36">
          Mes brouillons :
        </p>
        <main>
          {props.drafts.length > 0 ? (
            props.drafts.map((post) => (
              <>
                <div className="relative mb-10">
                  <a
                    className="absolute inset-0 z-10 w-3/4 bg-white text-center flex flex-col mx-auto items-center justify-center opacity-0 hover:opacity-100 bg-yellow-ecf bg-opacity-95 rounded duration-300 cursor-pointer text-5xl"
                    onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}
                  >
                    Voir le menu
                  </a>
                  <a className="relative w-3/4">
                    <div
                      key={post.id}
                      className="text-white mx-auto h-1/2 flex flex-wrap content-center w-3/4 rounded border-yellow-ecf border"
                    >
                      <Post post={post} />
                    </div>
                  </a>
                </div>
              </>
            ))
          ) : (
            <div className="bg-black h-full pt-10">
              <p className="text-center text-2xl text-white">
                Vous n'avez aucun brouillons en cours.<br></br> Vous pouvez en
                créer un{" "}
                <a href="/create" className="underline text-yellow-ecf">
                  ici.
                </a>{" "}
              </p>
              {/* <img src="/404.jpg"/> */}
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Drafts;
