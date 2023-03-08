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
    <Navbar/>
      <div className="bg-black">
        <h1>Public Feed</h1>
        <main className="bg-black pt-20 h-screen">
          {props.feed.map((post) => (
            <div key={post.id} className="text-white">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default Menus;
