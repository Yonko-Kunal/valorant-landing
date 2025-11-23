import React from "react";
import Container from "../Containter";
import { motion } from "motion/react";
import { colors } from "../../constants/colors";
import { Tilt } from "../motion-primitives/tilt";

const About = () => {
    return (
        <Container className="flex md:flex-row flex-col items-center justify-between h-screen bg-black! text-primary-background overflow-x-hidden md:px-20 px-9 md:gap-20 md:pt-0 pt-12 gap-1 ">
            {/* left */}
            <div className="flex-1 flex flex-col gap-6">
                <h1 className="Tungsten-bold md:text-9xl text-6xl">WE ARE VALORANT</h1>
                <h3 className="FF-Mark tracking-wide md:text-lg text-sm">DEFY THE LIMITS</h3>
                <p className="FF-Mark md:text-lg text-md leading-relaxed max-w-2xl">
                    Blend your style and experience on a global, competitive stage. You
                    have 13 rounds to attack and defend your side using sharp gunplay and
                    tactical abilities. And, with one life per-round, you'll need to think
                    faster than your opponent if you want to survive. Take on foes across
                    Competitive and Unranked modes as well as Deathmatch and Spike Rush.
                </p>
                <div className="hero-button w-full flex md:items-start items-center md:justify-start justify-center">
                    <motion.button
                        initial={{
                            backgroundColor: colors.secondaryBackground,
                            color: colors.primaryBackground,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        whileHover={{
                            backgroundColor: colors.primaryBackground,
                            color: colors.navBackground,
                        }}
                        className="DINNextW1G relative text-xl px-12 py-4 md:w-80 w-full cursor-pointer"
                    >
                        LEARN THE GAME
                    </motion.button>
                </div>
            </div>
            {/* right */}
            <div className="flex-1 flex items-center justify-center">
                <Tilt rotationFactor={4} isRevese>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-cover"
                    >
                        <source src="/videos/About/valo_game_prev.webm" type="video/webm" />
                        <source src="/videos/About/valo_game_prev.mp4" type="video/mp4" />
                    </video>
                </Tilt>
            </div>
        </Container>
    );
};

export default About;
