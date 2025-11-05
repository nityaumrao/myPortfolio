import React from 'react'
import { Abg } from '../ui/background'
import About from './About'
import Char from './Char'

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
            </Abg>
        
        </div>
    )
}

export default Background