
import Navbar from "@/components/home/Navbar"
import About from "@/components/home/About"

export default function NavigationMenuDemo() {
  return (
    <>
      <Navbar className="bg-emerald-200" />
      <div style={{ height: "4.5rem" }} /> 
      <main className="pt-28">
        <div className="w-full max-w-3xl text-center">
          <About />
        </div>
      </main>
    </>
  )
}


