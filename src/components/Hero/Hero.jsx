import { useEffect } from "react";
import Container from "../Containter";
import valorantText from "../../assets/PNGs/valorantText.webp";
import { motion } from "motion/react";
import { colors } from "../../constants/colors";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    useEffect(() => {
        gsap.set(".hero", {
            clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
            borderRadius: "0% 0% 40% 10%",
        });
        gsap.from(".hero", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".hero",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        });
    }, []);

    return (
        <Container className="hero relative h-[80vh] w-full overflow-hidden blur-sm z-20">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute h-full w-full object-cover z-10"
            >
                <source src="/videos/hero/vct25prev.webm" type="video/webm" />
                <source src="/videos/hero/vct25prev.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 overlay-2 z-15"></div>
            <div className="absolute inset-0 overlay-1 z-15"></div>
            <div className="Tungsten-bold flex md:items-start items-center justify-center md:justify-start px-10 md:py-10 py-0 flex-col w-full h-full relative z-20 text-5xl gap-12">
                <div className="flex flex-col items-center md:items-start md:gap-6 gap-4">
                    <img className="hero-title md:w-75 w-60" src={valorantText} alt="textLogo" />
                    <p className="hero-text text-primary-background md:text-3xl text-3xl md:w-100 w-90 text-center md:text-left">
                        VALORANT — A 5v5 tactical shooter featuring agents with unique
                        abilities
                    </p>
                </div>
                <div className="hero-button w-full">
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
                        className="DINNextW1G relative text-xl px-12 py-4 md:w-70 w-full cursor-pointer "
                    >
                        PLAY NOW
                    </motion.button>
                </div>
            </div>
        </Container>
    );
};

export default Hero;
