import Link from 'next/link'

interface Project {
  title: string;
  description: string;
  link: string;
  isExternal?: boolean;
  language?: string;
  stars?: number;
}

// Featured projects that have dedicated pages or special handling
const featuredProjects: Project[] = [
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
  },
  {
    title: 'SWE6633 Final Project',
    description: 'UI Prototype for a Project Management System Using Unity. A comprehensive project showcasing Unity development skills and UI/UX design principles.',
    link: 'https://github.com/StrwbryPanda/SWE6633_Final_Project',
    isExternal: true
  },
  {
    title: 'Adventra',
    description: 'Group Project implementing Agile Methodology and Sprint Cycles. A collaborative project demonstrating team development practices and project management skills.',
    link: 'https://github.com/StrwbryPanda/SWE_6733_Group_3_Adventra',
    isExternal: true
  },
  {
    title: 'PhysiCoaster',
    description: 'Unity 3D Group Project for Educational and Serious Game Design. An educational game that combines physics concepts with engaging gameplay.',
    link: 'https://github.com/StrwbryPanda/PhysiCoasterReupload',
    isExternal: true
  },
  {
    title: 'TwistedTrails',
    description: 'Unity 2D Group Project for User Interaction Engineering Course. A 2D game project focusing on user interaction and game design principles.',
    link: 'https://github.com/StrwbryPanda/TwistedTrails',
    isExternal: true
  }
]

async function getGitHubRepos() {
  const personalRes = await fetch('https://api.github.com/users/StrwbryPanda/repos?sort=updated&per_page=100', {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  const orgRes = await fetch('https://api.github.com/users/StrwbryDev/repos?sort=updated&per_page=100', {
    next: { revalidate: 3600 }
  });

  const personalRepos = await personalRes.json();
  const orgRepos = await orgRes.json();

  // Combine and filter repositories
  const allRepos = [...personalRepos, ...orgRepos]
    .filter(repo => !repo.fork && !repo.archived)
    .map(repo => ({
      title: repo.name,
      description: repo.description || 'No description available',
      link: repo.html_url,
      isExternal: true,
      language: repo.language,
      stars: repo.stargazers_count
    }));

  return allRepos;
}

export default async function ProjectsPage() {
  const githubProjects = await getGitHubRepos();

  return (
    <div className="min-h-screen">
      <header className="bg-[#2c2f33] py-8">
        <div className="container">
          <Link href="/" className="text-[#7289da] hover:text-[#99aab5] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7289da] mb-8">Projects</h1>
          
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-[#7289da] mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-8">
              {featuredProjects.map((project, index) => (
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

          <section>
            <h2 className="text-2xl font-semibold text-[#7289da] mb-6">All Projects</h2>
            <div className="grid grid-cols-1 gap-6">
              {githubProjects.map((project, index) => (
                <Link 
                  key={index} 
                  href={project.link}
                  target="_blank"
                  className="project-card block hover:no-underline"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-[#7289da] mb-2">{project.title}</h3>
                    {project.stars > 0 && (
                      <span className="text-[#99aab5] flex items-center gap-1">
                        ★ {project.stars}
                      </span>
                    )}
                  </div>
                  <p className="text-[#99aab5] mb-2">{project.description}</p>
                  {project.language && (
                    <span className="text-sm text-[#7289da]">{project.language}</span>
                  )}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-[#2c2f33] py-8 mt-16 text-center">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Strwbry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 