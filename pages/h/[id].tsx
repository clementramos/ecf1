import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Router from "next/router";
import Header from "../../components/Header";
import { HourProps } from "../../components/Hours";
import { useSession } from "next-auth/react";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const hours = await prisma.hours.findUnique({
    where: {
      id: String(params?.id),
    },
  });
  return {
    props: hours,
  };
};

async function publishHours(id: string): Promise<void> {
  await fetch(`/api/publish_hours/${id}`, {
    method: "PUT",
  });
  await Router.push("/horaires");
}

async function deleteHours(id: string): Promise<void> {
  await fetch(`/api/hour/${id}`, {
    method: "DELETE",
  });
  Router.push("/horaires");
}

const Post: React.FC<HourProps> = (props) => {
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
            <ReactMarkdown
              children={props.content}
              className="text-white p-2"
            />
            <div className="text-center grid grid-cols-2 gap-5">
              {!props.published && userHasValidSession && (
                <button
                  onClick={() => publishHours(props.id)}
                  className="text-white mx-auto rounded border p-2 border-yellow-ecf text-2xl hover:shadow-lg hover:shadow-yellow-ecf"
                >
                  Publier les horaires
                </button>
              )}
              {userHasValidSession && (
                <button
                  onClick={() => deleteHours(props.id)}
                  className="text-white mx-auto rounded border p-2 border-red-ecf text-2xl hover:shadow-lg hover:shadow-red-ecf"
                >
                  Supprimer les horaires
                </button>
              )}
            </div>
            <div className="text-center pt-5">
              <a
                href="/horaires"
                className="text-red-ecf text-lg italic p-2 b-5 underline"
              >
                &lt;- Retour à la page d'horaires
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
