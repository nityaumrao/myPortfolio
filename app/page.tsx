import { CursorProvider, Cursor } from "@/components/ui/cursor"
import About from "@/components/about/About"
import Home from "../components/home/Home"
import Skills from "@/components/skills/Skills"

export default function NavigationMenuDemo() {
  return (<>
  <CursorProvider>
      <Cursor>
        <div className="w-10 h-10  border-2 border-[#3E3F29] rounded-full" />
      </Cursor> 
      <Home/>
      <About/>
      <Skills/>
    </CursorProvider>
  </>
  )
}



