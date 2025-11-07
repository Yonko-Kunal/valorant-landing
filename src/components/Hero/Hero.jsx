import React from 'react'
import Container from '../containter'
import valorantText from '../../assets/PNGs/valorantText.webp'
import { motion } from 'motion/react'

const Hero = () => {
    return (
        <Container className='relative h-[80vh] w-full overflow-hidden'>
            <video
                autoPlay
                loop
                muted
                playsInline
                className='absolute h-full w-full object-cover z-10'>
                <source src='/videos/hero/vct24prev.webm' type='video/webm' />
                <source src='/videos/hero/vct25prev.mp4' type='video/mp4' />
            </video>
            <div className='absolute inset-0 overlay-2 z-15'></div>
            <div className='absolute inset-0 overlay-1 z-15'></div>
            <div className='Tungsten-bold flex items-start top-15 left-10 flex-col w-full h-full relative z-20 text-5xl gap-12'>
                <div className='flex flex-col items-start gap-6'>
                    <img src={valorantText} alt="textLogo" />
                    <p className='text-primary-background text-3xl w-100'>VALORANT — A 5v5 tactical shooter featuring agents with unique abilities</p>
                </div>
                <div>
                    <motion.button
                        animate={{
                            width: '200px'
                        }}

                        transition={{
                            delay: 1
                        }}

                        className='DINNextW1G relative text-xl text-primary-background bg-secondary-background px-12 py-4 hover:text-black hover:bg-primary-background'>
                        PLAY NOW
                    </motion.button>
                </div>


            </div>
        </Container>
    )
}

export default Hero