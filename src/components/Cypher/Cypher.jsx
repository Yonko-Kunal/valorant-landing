import { useEffect, useRef } from 'react'
import Container from '../containter'
import CypherImg from '../../assets/PNGs/cypher.webp'
import OverlaySVG from '../../assets/Svg/overlaySVG.svg'
import { motion } from 'motion/react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

const Cypher = () => {
    const hasAnimated = useRef(false)

    useEffect(() => {
        if (hasAnimated.current) return
        hasAnimated.current = true

        document.fonts.ready.then(() => {
            const splitElements = [
                { key: "cypherTitleHeading", selector: ".cypherHead", type: "lines" },
                { key: "cypherTitle", selector: ".cypherTitle", type: "chars" },
                { key: "cypherRoleHeading", selector: ".cypherRoleHead", type: "lines" },
                { key: "cypherRole", selector: ".cypherRole", type: "lines" },
                { key: "cypherBioHeading", selector: ".cypherBioHead", type: "lines" },
                { key: "cypherBio", selector: ".cypherBio", type: "lines" },
            ]

            const splits = {}
            splitElements.forEach(({ key, selector, type }) => {
                const config = { type, mask: type }
                if (type === "chars") config.charsClass = "char"
                if (type === "lines") config.linesClass = "line"
                splits[key] = SplitText.create(selector, config)
            })

            gsap.set([splits.cypherTitle.chars], { x: "100%" })
            gsap.set([splits.cypherTitleHeading.lines], { y: "100%" })
            gsap.set([splits.cypherRoleHeading.lines], { y: "100%" })
            gsap.set([splits.cypherRole.lines], { y: "100%" })
            gsap.set([splits.cypherBioHeading.lines], { y: "100%" })
            gsap.set([splits.cypherBio.lines], { y: "100%" })
            gsap.set(".cypherPng", { x: "100%", opacity: "0%" })
            gsap.set(".overlayBox", { x: "-100%", opacity: "0%" })
            gsap.set(".bioUnderLine", { y: "100%", opacity: "0%" })
            gsap.set(".agentText", { x: "-100%", opacity: "0%" })

            gsap.timeline({
                scrollTrigger: {
                    trigger: '.cypher-section',
                    start: 'top 60%',
                    toggleActions: 'play none none none',
                    // scrub: 1,
                    // pin: true
                }
            }).to(".cypherPng", {
                x: "0%",
                opacity: "100%",
                duration: 0.4,
            }).to(".overlayBox", {
                x: "0%",
                opacity: "100%",
                delay: 0.6,
                duration: 0.4,
            }).to(".agentText", {
                x: "0%",
                opacity: "100%"
            }).to(splits.cypherTitleHeading.lines, {
                y: "0%",
                stagger: 0.1,
                duration: 1,
                ease: 'power4.inOut',
            }).to(splits.cypherTitle.chars, {
                x: "0%",
                stagger: 0.1,
                duration: 0.4,
                ease: 'power4.inOut'
            }).to(splits.cypherRoleHeading.lines, {
                y: "0%",
                stagger: 0.1,
                duration: 0.4,
                ease: 'power4.inOut',
            }).to(splits.cypherRole.lines, {
                y: "0%",
                stagger: 0.1,
                duration: 0.4,
                ease: 'power4.inOut',
            }).to(splits.cypherBioHeading.lines, {
                y: "0%",
                stagger: 0.1,
                duration: 0.4,
                ease: 'power4.inOut',
            }).to(splits.cypherBio.lines, {
                y: "0%",
                stagger: 0.1,
                duration: 0.4,
                ease: 'power4.inOut',
            }).to(".bioUnderLine", {
                y: "0%",
                opacity: "100%",
                ease: 'power4.in'
            })
        })
    }, [])


    const agents = [
        {
            name: "CYPHER"
        },
        {
            name: "REYNA"
        },
        {
            name: "VIPER"
        },
        {
            name: "JETT"
        }
    ]
    return (

        <Container className='cypher-section h-screen relative flex items-center justify-between gap-20 z-19'>
            {/* left */}
            <div className='relative flex items-center justify-center flex-1'>
                <div className='flex items-center justify-center flex-1'>
                    <div className='mb-4 overflow-hidden h-screen'>
                        <motion.div className='agentText'
                            animate={{
                                y: [0, "-50%"]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: 'linear'
                            }}
                        >
                            <h1 className='vertical-text Tungsten-bold text-[10rem] tracking-wide'>
                                {agents.map((item, index) => (
                                    <span key={index}>{item.name}.</span>
                                ))}
                            </h1>
                            <h1 className='vertical-text Tungsten-bold text-[10rem] tracking-wide'>
                                {agents.map((item, index) => (
                                    <span key={`duplicate-${index}`}>{item.name}.</span>
                                ))}
                            </h1>
                        </motion.div>
                    </div>
                    <div className='cypherPng w-[650px]'>
                        <img src={CypherImg} alt="cypher" className='w-full h-auto' />
                    </div>
                    <div className='overlayBox absolute bottom-5 left-0  bg-[#5B8FF0]/90 mix-blend-multiply z-10'>
                        <img className=' mix-blend-multiply w-216 z-10' src={OverlaySVG} alt="overlay" />
                    </div>
                </div>

            </div>
            {/* right */}
            <div className='flex flex-col flex-1 gap-15 justify-center'>
                <div className='flex items-start flex-col'>
                    <h3 className='cypherHead FF-Mark font-bold text-2xl'>CHARACTER</h3>
                    <h1 className='cypherTitle Tungsten-bold text-[12rem] leading-none'>CYPHER</h1>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex items-start flex-col'>
                        <h3 className='cypherRoleHead FF-Mark font-bold text-2xl'>ROLE</h3>
                        <h1 className='cypherRole Tungsten-bold text-6xl'>SENTINEL</h1>
                    </div>
                    <div className='flex items-start flex-col'>
                        <h3 className='cypherBioHead FF-Mark font-bold text-2xl mb-2'>BIOGRAPHY</h3>
                        <div>
                            <p className='cypherBio FF-Mark max-w-xl leading-relaxed text-lg mb-10'>The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.</p>
                            <div className='bioUnderLine w-full h-0.5 bg-[#5581CA]'></div>
                        </div>

                    </div>
                </div>
            </div>
        </Container>


    )
}

export default Cypher