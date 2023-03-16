import { GetStaticProps } from "next";
import prisma from "../lib/prisma";
import React from "react";
import Hours, { HourProps } from "../components/Hours";
import Header from "../components/Header";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.hours.findMany({
    where: { published: true },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

type Props = {
  feed: HourProps[];
};

const Menus: React.FC<Props> = (props) => (
  <>
    <Header />
    <div className="bg-black h-full">
      <main className="bg-black pt-24 pb-24 h-full">
        <img
          src="/logonobg.png"
          alt="programme"
          width={400}
          height={500}
          className="mx-auto sm:px-5"
          loading="eager" />
        <div className="flex justify-center ">
          <div className="w-11/12 bg-black">
            {/* <p className="text-white text-center text-4xl pt-5 pb-10">Menus : </p> */}
            <div className="grid grid-cols-1 gap-10">
              {props.feed?.map((hours) => (
                <div key={hours.id} className="rounded-lg shadow-lg border border-yellow-ecf shadow-yellow-ecf items-center text-white text-2xl cursor-pointer mb-12">
                  <Hours hours={hours} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  </>
);

export default Menus;
