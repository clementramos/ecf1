import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type HourProps = {
  id: string;
  title: string;
  content: string;
  published: boolean;
};

const Hour: React.FC<{ hours: HourProps }> = ({ hours }) => {
  return (
    <>
      <div onClick={() => Router.push("/h/[id]", `/h/${hours.id}`)} className="p-5">
        <p className="text-4xl mb-2">{hours.title}</p>
        <ReactMarkdown children={hours.content} />
      </div>
    </>
  );
};

export default Hour;
