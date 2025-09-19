import React from 'react'
import Logo from '../../assets/logo/LogoComponent';

const Hero = () => {
    return (
        <section className="relative w-full my-16 overflow-y-auto">
            <div>
                <Logo
                    className="animate-svg relative w-full h-full"
                    data-duration="100"
                    data-stagger="80"
                />
            </div>
        </section>
    )
}

export default Hero