import Link from 'next/link'

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: 'ScoreSync',
    description: 'A Minecraft Paper plugin for tracking scores in minigame tournaments.',
  },
  {
    title: 'EventHorizon',
    description: 'A Minecraft Paper plugin for managing server events and competitions.',
  },
  {
    title: 'PhysiCoaster',
    description: 'A Unity 3D educational game project focusing on physics concepts.',
  },
]

export default function Home() {
  return (
    <>
      <header className="bg-[#2c2f33] py-8 text-center">
        <div className="container">
          <h1 className="text-4xl font-bold text-[#7289da] mb-4">StrwbryDev</h1>
          <p className="text-xl text-[#99aab5] mb-8">Freelance Minecraft Plugin & Unity Developer</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://github.com/StrwbryPanda" target="_blank" className="social-link">
              GitHub (Personal)
            </Link>
            <Link href="https://github.com/StrwbryDev" target="_blank" className="social-link">
              GitHub (Organization)
            </Link>
            <Link href="https://modrinth.com/user/Strwbry" target="_blank" className="social-link">
              Modrinth
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-16">
        <section>
          <h2 className="text-3xl font-bold text-[#7289da] mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="text-xl font-semibold text-[#7289da] mb-4">{project.title}</h3>
                <p className="text-[#99aab5]">{project.description}</p>
              </div>
            ))}
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