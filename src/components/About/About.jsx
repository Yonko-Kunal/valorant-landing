import React from 'react'
import Container from '../Containter'
import { motion } from 'motion/react'
import { colors } from '../../constants/colors'

const About = () => {
    return (
        <Container className='flex items-center justify-between h-screen bg-black! text-primary-background overflow-x-hidden px-20 gap-20'>
            {/* left */}
            <div className='flex-1 flex flex-col gap-6'>
                <h1 className='Tungsten-bold text-9xl'>WE ARE VALORANT</h1>
                <h3 className='FF-Mark font-bold tracking-wide'>DEFY THE LIMITS</h3>
                <p className='FF-Mark text-lg leading-relaxed max-w-2xl'>Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.</p>
                <div className='hero-button'>
                    <motion.button
                        initial={{
                            backgroundColor: colors.secondaryBackground,
                            color: colors.primaryBackground
                        }}
                        transition={{
                            duration: 0.3
                        }}
                        whileHover={{
                            backgroundColor: colors.primaryBackground,
                            color: colors.navBackground,
                        }}
                        className='DINNextW1G relative text-xl px-12 py-4 cursor-pointer'>
                        LEARN THE GAME
                    </motion.button>
                </div>
            </div>
            {/* right */}
            <div className='flex-1 flex items-center justify-center'>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='w-full h-auto object-cover'>
                    <source src='/videos/About/valo_game_prev.webm' type='video/webm' />
                    <source src='/videos/About/valo_game_prev.mp4' type='video/mp4' />
                </video>
            </div>
        </Container>
    )
}

export default About