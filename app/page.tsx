import { Abg } from "@/components/ui/background"
import { Terminal } from "@/components/ui/terminal"
import Navbar from "@/components/home/Navbar"
import About from "@/components/home/About"
import Char from "@/components/home/Char"
import Background from "@/components/home/Background"
import SocialButton from "@/components/home/Button"

export default function NavigationMenuDemo() {
  return (
    <>
      <Navbar className="bg-emerald-200" />
      <Background  />
      <div className="relative z-10 bottom-50 flex justify-center mt-20 mb-10">
        <SocialButton />
      </div>
      

    </>
  )
}


