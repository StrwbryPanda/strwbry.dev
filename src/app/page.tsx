import Link from 'next/link'

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

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Header section with title and navigation */}
        <div className="flex justify-between items-center mb-24">
          {/* Left side - Title and tagline */}
          <div className="flex flex-col">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Strwbry</h1>
            <p className="text-lg text-[#99aab5] mt-2">Freelance Minecraft Plugin & Unity Developer</p>
          </div>
          
          {/* Right side - Navigation buttons */}
          <nav className="flex flex-wrap gap-8">
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
          </nav>
        </div>

        {/* About Me section */}
        <section className="mb-32 max-w-3xl">
          <p className="text-xl text-[#99aab5] leading-relaxed">
            I'm a software engineer and game developer with a Master's in Software Engineering and a Bachelor's in Computer Game Design and Development. 
            Currently, I am open to freelance opportunities and collaborations in Unity game development or Minecraft plugin development.
          </p>
        </section>

        {/* Featured Projects section */}
        <section className="mb-32">
          <h2 className="text-2xl font-semibold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Link 
                key={index} 
                href={project.link}
                target={project.isExternal ? "_blank" : undefined}
                className="group"
              >
                <div className="border border-[#2c2f33] rounded-lg p-8 transition-all duration-300 hover:border-[#ff9af6]">
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-[#ff9af6] transition-colors">{project.title}</h3>
                  <p className="text-[#99aab5] leading-relaxed">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Links section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-12">Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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