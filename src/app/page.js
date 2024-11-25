
'use client'
import RenderModel from "./comps/RenderModel";
import Wizard from '../app/comps/models/Wizard'
import Navigation from "./comps/navigation";
export default function Home() {

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between relative">
      <img fetchPriority="high" sizes="100vw" id="back-gnd"   src='/background/home-background.png' alt="background-img"  className="fixed left-0 top-0 w-full h-full object-center object-cover opacity-25 "></img>
      <div className="w-full h-screen z-10 absolute">
        {/*nav */}
        <Navigation/>
        <RenderModel>
          <Wizard/>
        </RenderModel>
      </div>
    </main>
  );
}
