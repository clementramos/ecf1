import { GetStaticProps } from "next";
import prisma from "../lib/prisma";
import React from "react";
import Post, { PostProps } from "../components/Post";
import Navbar from "../components/Navbar";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

type Props = {
  feed: PostProps[];
};

const Menus: React.FC<Props> = (props) => {
  return (
    <>
      <Navbar />
      <div className="bg-black">
        <main className="bg-black pt-24 h-screen">
          <img
            src="/logonobg.png"
            alt="programme"
            width={400}
            height={500}
            className="mx-auto sm:px-5"
            loading="eager"
          />
          <div className="flex justify-center">
            <div className="w-1/2 bg-red-ecf rounded-lg shadow shadow-white items-center">
              <p className="text-white text-center text-4xl pt-5">Menus : </p>
              <div className="grid grid-cols-2 gap-4">
                {props.feed.map((post) => (
                  <div key={post.id} className="text-white text-2xl">
                    <Post post={post} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Menus;
