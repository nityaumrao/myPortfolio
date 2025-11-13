import { CursorProvider, Cursor } from "@/components/ui/cursor"
import About from "@/components/about/About"
import Home from "../components/home/Home"
import Skills from "@/components/skills/Skills"
import Reveal from "@/components/ui/reveal"

export default function NavigationMenuDemo() {
  return (<>
  <CursorProvider>
      <Cursor>
        <div className="w-10 h-10  border-2 border-[#3E3F29] rounded-full" />
      </Cursor> 
      <Reveal>
        <Home />
      </Reveal>
      <Reveal delay={0.08}>
        <About />
      </Reveal>
      <Reveal delay={0.16}>
        <Skills />
      </Reveal>
    </CursorProvider>
  </>
  )
}



