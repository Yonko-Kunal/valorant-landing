import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText) //required so that gsap knows that we will be using split text later in the project

//to ensure that when spliting and animating the text the font is already applied
document.fonts.ready.then(() => {
    function createSplitTexts(elements) {
        const splits = {}

        elements.forEach(({ key, selector, type }) => {
            const config = { type, mask: type }

            if (type === "chars") config.charsClass = "char"
            if (type === "lines") config.linesClass = "line"
            splits[key] = SplitText.create(selector, config)
        })

        return splits
    }

    const splitElements = [
        { key: "logoChars", selector: ".preloader-logo h1", type: "chars" },
        { key: "footerLines", selector: ".preloader-footer p", type: "lines" },
    ]

    const splits = createSplitTexts(splitElements)

    gsap.set([splits.logoChars.chars], { x: "100%" })
    gsap.set([
        splits.footerLines.lines
    ], { y: "100%" }
    )

    function animateProgress(duration = 4) {
        const tl = gsap.timeline()
        const counterSteps = 5
        let currentProgress = 0

        for (let i = 0; i < counterSteps; i++) {
            const finalStep = i === counterSteps - 1
            const targetProgress = finalStep
                ? 1
                : Math.min(currentProgress + Math.random() * 0.3 + 0.1, 0.9)
            currentProgress = targetProgress

            tl.to(".preloader-progress-bar", {
                scaleX: targetProgress,
                duration: duration / counterSteps,
                ease: 'power3.out'
            })
        }

        return tl
    }

    const tl = gsap.timeline({ delay: 0.5 })

    tl.to(splits.logoChars.chars, {
        x: "0%",
        stagger: 0.05,
        duration: 1,
        ease: 'power4.inOut'
    }).to(
        splits.footerLines.lines,
        {
            y: "0%",
            stagger: 0.1,
            duration: 1,
            ease: 'power4.inOut'
        },
        "0.25"
    )
        .add(animateProgress(), "<")
        .set(".preloader-progress", { backgroundColor: "var(--primary-background)" })
        .to(
            splits.logoChars.chars, {
            x: "-100%",
            stagger: 0.05,
            duration: 1,
            ease: 'power4.inOut'
        }, "-=0.5"
        ).to(
            splits.footerLines.lines, {
            y: "-100%",
            stagger: 0.1,
            duration: 1,
            ease: 'power4.inOut'
        }, "<"
        ).to(
            ".preloader-progress", {
            opacity: 0,
            duration: 0.5,
            ease: 'power3.out'
        }, "-=0.25"
        ).to(
            ".preloader-mask", {
            scale: 5,
            duration: 2.5,
            ease: 'power3.out'
        }, "<"
        ).to(".hero", {
            filter: "blur(0px)",
            duration: 2.5,
            ease: "power3.out"
        }, "<").set([".hero-title", ".hero-text", ".hero-button"], {
            opacity: 0,
            y: 40
        }, "<").to([".hero-title", ".hero-text", ".hero-button"], {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power4.out',
        }, "<+=0.7")

})


const Preloader = () => {
    return (
        <div>
            <div className="preloader-progress">
                <div className="preloader-progress-bar"></div>
                <div className="preloader-logo">
                    <h1>
                        VALORANT
                    </h1>
                </div>
            </div>

            <div className="preloader-mask"></div>

            <div className="preloader-content">
                <div className="preloader-footer">
                    <p>© 2020-2025 Riot Games, Inc. RIOT GAMES, VALORANT and any associated logos are trademarks, service marks, and/or registered trademarks of Riot Games, Inc.</p>
                </div>
            </div>
        </div>

    )
}

export default Preloader