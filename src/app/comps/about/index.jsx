

import React from 'react'
import Itemlayout from './ItemLay'

function AboutDetails() {
    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 gap-4 xs:6 md:gap-8 w-full'>

                <Itemlayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start space-y-8'}>
                    <h2 className='text-xl md:text-2xl text-left w-full capitalize'>Artitect of Enchantment</h2>
                    <p className='font-light text-xs sm:text-sm md:text-base'>
                        My journey in web development is powered by an array of mystical tools and languages, with javascript
                        casting the core of my enchantments. I wield frameworks like React.js and Next.js with precision, crafting
                        seamless portals (websites) that connect realms (users) across the digital universe. The ancient arts of the
                        jamstack empower me to create fast, secure, and dynamic experience, while my design skills ensure every
                        creation is not only functional but visually captivating. Join me as I continue to explore new spells and
                        technologies to shape the future of the web.
                    </p>
                </Itemlayout>
                <Itemlayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                        25+<sub className='font-semibold text-base'>clients</sub>
                    </p>
                </Itemlayout>
                <Itemlayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                        2+<sub className='font-semibold text-base'>years of experience</sub>
                    </p>
                </Itemlayout>
            </div>
        </section>
    )
}

export default AboutDetails