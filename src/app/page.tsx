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
    <>
      <header className="bg-[#2c2f33] py-8">
        <div className="container">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-[#7289da] mb-4">Strwbry</h1>
            <p className="text-xl text-[#99aab5] mb-8">Freelance Minecraft Plugin & Unity Developer</p>
            
            <nav className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="social-link">
                About Me
              </Link>
              <Link href="/projects" className="social-link">
                Projects
              </Link>
              <Link href="/contact" className="social-link">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#7289da] mb-6">About Me</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-[#99aab5]">
              I'm a software engineer and game developer with a Master's in Software Engineering and a Bachelor's in Computer Game Design and Development. 
              Currently, I am open to freelance opportunities and collaborations in Unity game development or Minecraft plugin development.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#7289da] mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link 
                key={index} 
                href={project.link}
                target={project.isExternal ? "_blank" : undefined}
                className="project-card block hover:no-underline"
              >
                <h3 className="text-xl font-semibold text-[#7289da] mb-4">{project.title}</h3>
                <p className="text-[#99aab5]">{project.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#7289da] mb-6">Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link 
              href="https://github.com/StrwbryPanda" 
              target="_blank"
              className="social-link text-center"
            >
              GitHub (Personal)
            </Link>
            <Link 
              href="https://github.com/StrwbryDev" 
              target="_blank"
              className="social-link text-center"
            >
              GitHub (Organization)
            </Link>
            <Link 
              href="https://modrinth.com/user/Strwbry" 
              target="_blank"
              className="social-link text-center"
            >
              Modrinth
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-[#2c2f33] py-8 mt-16 text-center">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Strwbry. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
} 