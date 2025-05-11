import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"

interface Project {
  title: string;
  description: string;
  link: string;
  isExternal?: boolean;
}

const projects: Project[] = [
  {
    title: 'EventHorizon',
    description: 'An interactive game mode plugin that introduces random, server-wide events to boost replayability and player engagement. Features positive, negative, and neutral events that can run standalone or integrate with other game modes.',
    link: '/projects/eventhorizon',
    isExternal: false
  },
  {
    title: 'ScoreSync',
    description: 'A Minecraft Paper plugin for tracking scores in minigame tournaments.',
    link: 'https://github.com/StrwbryPanda/ScoreSync',
    isExternal: true
  }
]

const NavLinks = () => (
  <>
    <Link href="/about" className="text-white hover:text-[#ff9af6] transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#ff9af6] after:left-1/2 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-200 after:-translate-x-1/2">
      About Me
    </Link>
    <Link href="/projects" className="text-white hover:text-[#ff9af6] transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#ff9af6] after:left-1/2 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-200 after:-translate-x-1/2">
      Projects
    </Link>
    <Link href="/graphic-design" className="text-white hover:text-[#ff9af6] transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#ff9af6] after:left-1/2 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-200 after:-translate-x-1/2">
      Graphic Design
    </Link>
    <Link href="/contact" className="text-white hover:text-[#ff9af6] transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#ff9af6] after:left-1/2 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-200 after:-translate-x-1/2">
      Contact
    </Link>
  </>
)

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header section with title and navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-0 mb-16 sm:mb-24">
          {/* Left side - Title and tagline */}
          <div className="flex flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Strwbry</h1>
            <p className="text-base sm:text-lg text-[#99aab5] mt-2">Freelance Minecraft Plugin & Unity Developer</p>
          </div>
          
          {/* Right side - Navigation buttons */}
          <nav className="hidden sm:flex flex-wrap gap-8">
            <NavLinks />
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="sm:hidden">
              <Button variant="ghost" size="sm" className="text-white hover:text-[#ff9af6] p-2 rounded-full">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-gray-900 border-l border-gray-800">
              <nav className="flex flex-col gap-6 mt-8">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* About Me section */}
        <section className="mb-24 sm:mb-32 max-w-3xl">
          <p className="text-lg sm:text-xl text-[#99aab5] leading-relaxed">
            I'm a software engineer and game developer with a Master's in Software Engineering and a Bachelor's in Computer Game Design and Development. 
            Currently, I am open to freelance opportunities and collaborations in Unity game development or Minecraft plugin development.
          </p>
        </section>

        {/* Featured Projects section */}
        <section className="mb-24 sm:mb-32">
          <h2 className="text-xl sm:text-2xl font-semibold mb-8 sm:mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            {projects.map((project, index) => (
              <Link 
                key={index} 
                href={project.link}
                target={project.isExternal ? "_blank" : undefined}
                className="group"
              >
                <div className="border border-[#2c2f33] rounded-lg p-6 sm:p-8 transition-all duration-300 hover:border-[#ff9af6]">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 group-hover:text-[#ff9af6] transition-colors">{project.title}</h3>
                  <p className="text-[#99aab5] leading-relaxed text-sm sm:text-base">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Links section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-8 sm:mb-12">Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <Link 
              href="https://github.com/StrwbryPanda" 
              target="_blank"
              className="text-white hover:text-[#ff9af6] transition-colors relative group"
            >
              <span className="relative">
                GitHub (Personal)
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff9af6] transition-all duration-200 group-hover:w-full"></span>
              </span>
            </Link>
            <Link 
              href="https://github.com/StrwbryDev" 
              target="_blank"
              className="text-white hover:text-[#ff9af6] transition-colors relative group"
            >
              <span className="relative">
                GitHub (Organization)
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff9af6] transition-all duration-200 group-hover:w-full"></span>
              </span>
            </Link>
            <Link 
              href="https://modrinth.com/user/Strwbry" 
              target="_blank"
              className="text-white hover:text-[#ff9af6] transition-colors relative group"
            >
              <span className="relative">
                Modrinth
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff9af6] transition-all duration-200 group-hover:w-full"></span>
              </span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
} 