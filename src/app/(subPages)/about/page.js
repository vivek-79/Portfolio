

'use client'

import { HatModel } from "@/app/comps/models/Hat";
import RenderModel from "../../comps/RenderModel";
import AboutDetails from "@/app/comps/about";
export default function About() {
  return (
    <main className="w-full h-screen ">
      <img fetchPriority="high" sizes="100vw" id="back-gnd" src='/background/about-background.png' alt="background-img" className="fixed top-0 left-0 w-full h-full object-center object-cover opacity-25" />
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute w-full flex flex-col text-center top-[50%] sm:top-[40%] left-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl text-accent">Vivek</h1>
          <code className="text-white w-full whitespace-nowwrap">If <p className="inline text-blue-400">(</p>heart ===<p className="inline text-green-400">&apos;beating&apos;</p><p className="inline text-blue-400">)</p>
            <p className="inline text-pink-400">{'{'}</p><br />
            return <p className="inline text-red-500">(</p><br />
            <p>wake</p>
            <p>Eat</p>
            <p>Work</p>
            <p>Sleep</p>
            <p className="inline text-red-500">)</p><p className="inline text-pink-400">{'}'}</p>
          </code>
          <div className="w-full absolute -bottom-24 mt-4 pb-3 pt-3 bg-zinc-800/6 backdrop-blur-md border-[0.5px] border-[#e9e63c8f] rounded-lg">
            <p className="text-left px-4 text-sm">Terminal</p>
            <p className="text-left px-4 text-red-400">Error 400: User not allowed to sleep </p>
        </div>
        </div>
      </div>
      <div className="w-full relative -top-24">
      <AboutDetails />
      </div>
    </main>
  );
}