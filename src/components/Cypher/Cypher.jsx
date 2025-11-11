import React from 'react'
import Container from '../containter'
import CypherImg from '../../assets/PNGs/cypher.webp'
import OverlaySVG from '../../assets/Svg/overlaySVG.svg'



const Cypher = () => {
    return (

        <Container className='h-screen relative flex items-center justify-between gap-20'>
            {/* left */}
            <div className='relative flex items-center justify-center flex-1'>
                <div className='flex items-center justify-center flex-1'>
                    <div className='mb-4'>
                        <h1 className='vertical-text Tungsten-bold text-[10rem] tracking-wide'>CYPHER.REYNA.VIP</h1>
                    </div>
                    <div className='w-[650px]'>
                        <img src={CypherImg} alt="cypher" className='w-full h-auto' />
                    </div>
                    <div className='absolute bottom-5 left-0  bg-[#5B8FF0]/90 mix-blend-multiply z-10'>
                        <img className=' mix-blend-multiply w-216 z-10' src={OverlaySVG} alt="overlay" />
                    </div>
                </div>

            </div>
            {/* right */}
            <div className='flex flex-col flex-1 gap-12 justify-center'>
                <div className='flex items-start flex-col'>
                    <h3 className='FF-Mark font-bold text-2xl'>CHARACTER</h3>
                    <h1 className='Tungsten-bold text-[12rem] leading-none'>CYPHER</h1>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex items-start flex-col'>
                        <h3 className='FF-Mark font-bold text-2xl'>ROLE</h3>
                        <h1 className='Tungsten-bold text-6xl'>SENTINEL</h1>
                    </div>
                    <div className='flex items-start flex-col'>
                        <h3 className='FF-Mark font-bold text-2xl mb-2'>BIOGRAPHY</h3>
                        <div>
                            <p className='FF-Mark max-w-xl leading-relaxed text-lg mb-10'>The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.</p>
                            <div className='w-full h-0.5 bg-[#5581CA]'></div>
                        </div>

                    </div>
                </div>
            </div>
        </Container>


    )
}

export default Cypher