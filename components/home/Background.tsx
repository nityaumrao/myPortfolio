import React from 'react'
import { Abg } from '../ui/background'
import About from './Text'
import Char from './Char'
import SocialButton from './Button'

const Background = () => {
    return (
        <div>
            <Abg>
                <div className="relative z-10">
                    {/* <div style={{ height: "4.5rem" }} /> */}
                    <main className="flex flex-col gap-2 justify-start text-left">
                        <div className="pt-28 w-full max-w-3xl ">
                            <About />
                        </div>
                    </main>
                </div>
                <div className="pt-0 pl-200 absolute bottom-30 right-20 animate-float z-0">
                    <Char />
                </div>
                <div className="relative top-20 z-10 flex justify-center mt-20 mb-10">
                    <SocialButton />
                </div>
            </Abg>
        </div>
    )
}

export default Background