

'use client'
import Image from "next/image";
import ProjeectList from "../../comps/projects";
import { projectsData } from "../../data";
import RenderModel from "../../comps/RenderModel";
import Staff from "../../comps/models/Staff";
export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <img fetchPriority="high" sizes="100vw" id="back-gnd" src='/background/projects-background.png' alt="background-img"  className="fixed top-0 left-0 w-full h-full object-center object-cover opacity-25"/>
      <div className="w-full h-screen z-10 absolute flex justify-center items-center">
      <ProjeectList projects={projectsData}/>
        <div className="fixed flex items-center justify-center top-5 lg:top-0  lg:left-0 h-screen -z-10">
        <RenderModel>
          <Staff/>
        </RenderModel>
        </div>
      </div>
    </main>
  );
}