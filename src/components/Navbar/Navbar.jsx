import React from 'react'
import Container from '../containter'
import RiotGamesLogo from '../../assets/Svg/RiotGamesLogo'
import ValorantLogo from '../../assets/Svg/ValorantLogo'

const Navbar = () => {
    return (
        <Container>
            <nav className='flex items-center justify-between max-width-full h-20 bg-nav-background px-10'>
                {/* left nav */}
                <div className='flex items-center justify-center gap-10'>
                    <div className='flex items-center justify-center gap-10 '>
                        <RiotGamesLogo />
                        <ValorantLogo />
                    </div>
                    <ul className='flex items-center justify-center text-primary-background gap-10 FF-Mark text-[13px]'>
                        <li>MEDIA</li>
                        <li>NEWS</li>
                        <li>ESPORTS</li>
                        <li>LEADERBOARDS</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                {/* right nav */}
                <div>
                    <button className='flex items-center justify-center w-40 h-12 bg-linear-to-r from-[#ff3744] via-[#ff5560] to-[#ff7763] rounded-2xl text-black FF-Mark text-[13px]'>DOWNLOAD NOW</button>
                </div>

            </nav>

        </Container>
    )
}

export default Navbar