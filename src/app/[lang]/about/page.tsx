import { getDictionary } from "@/lib/dictionary";
import React from "react";

const About = async function ({
  params: { lang },
}: {
  params: any;
}) {
  const { page } = await getDictionary(lang);
  return   <main>
  <div>
    <div className=" p-2 ">
      <div className="container ">
        <h1 className="text-4xl ">
        <h1 className="text-4xl ">{page.about.title}</h1>
        </h1>
      </div>
    </div>
  </div>
</main>;
};

export default About;
