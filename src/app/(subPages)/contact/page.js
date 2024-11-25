

'use client'

import { HatModel } from "@/app/comps/models/Hat";
import RenderModel from "../../comps/RenderModel";
import AboutDetails from "@/app/comps/about";
import Form from "@/app/comps/contact/Form";
export default function Contact() {
  return (
    <main>
      <img id="back-gnd" src='/background/contact-background.png' alt="background-img" className="fixed top-0 left-0 w-full h-full object-center object-cover opacity-25" />
      <article className="py-8 sm:py-0 relative w-full flex flex-col items-center justify-center space-y-8 ">
          <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
            <h1 className="text-accent font-semibold text-center text-4xl capitalize whitespace-nowrap">
              Summon the wizard
            </h1>
            <p className="text-center font-light text-sm xs:text-base">
              Step into the circle of enchantment and wave your words into the fabric of the cosmos. Whether your
              seek to conjure collaborations, unlock mysteries, or simply share tales of adventure, your mssage are 
              treasure scrolls within this realm. Use the form below to send your missives through the ethereal 
              network, and await the whisper of magic in response.
            </p>
          </div>
          <Form/>
      </article>
    </main>
  );
}