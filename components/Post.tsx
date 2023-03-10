import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  price: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <>
      <div onClick={() => Router.push("/p/[id]", `/p/${post.id}`)} className="p-5">
        <p className="text-4xl mb-2">{post.title}</p>
        <p className="font-thin text-sm mb-5">Par : {authorName}</p>
        <ReactMarkdown children={post.content} />
        <p className="font-bold text-xl mt-5">Prix : {post.price} </p>
      </div>
    </>
  );
};

export default Post;
