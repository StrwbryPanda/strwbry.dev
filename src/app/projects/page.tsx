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
    title: 'Adventra',
    description: 'Group Project implementing Agile Methodology and Sprint Cycles. A collaborative project demonstrating team development practices and project management skills.',
    link: 'https://github.com/StrwbryPanda/SWE_6733_Group_3_Adventra',
    isExternal: true
  },
  {
    title: 'strwbry.dev',
    description: 'Personal portfolio website built with Next.js and Tailwind CSS, showcasing my projects and skills.',
    link: 'https://github.com/StrwbryPanda/strwbry.dev',
    isExternal: true
  }
]

// Additional projects to be shown in the All Projects section
const additionalProjects: Project[] = [
  {
    title: 'SWE6633 Final Project',
    description: 'UI Prototype for a Project Management System Using Unity. A comprehensive project showcasing Unity development skills and UI/UX design principles.',
    link: 'https://github.com/StrwbryPanda/SWE6633_Final_Project',
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
    .filter(repo => !repo.fork && !repo.archived && repo.name !== 'ScoreSync' && repo.name !== 'strwbry.dev')
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
  const allProjects = [...additionalProjects, ...githubProjects];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Projects</h1>
        
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-8">
              {featuredProjects.map((project, index) => (
                <Link 
                  key={index} 
                  href={project.link}
                  target={project.isExternal ? "_blank" : undefined}
                  className="text-white hover:text-[#ff9af6] transition-colors relative group"
                >
                  <div className="border border-[#2c2f33] rounded-lg p-8 transition-all duration-300 hover:border-[#ff9af6]">
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-[#ff9af6] transition-colors relative">
                      <span className="relative">
                        {project.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff9af6] transition-all duration-200 group-hover:w-full"></span>
                      </span>
                    </h3>
                    <p className="text-[#99aab5]">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">All Projects</h2>
            <div className="grid grid-cols-1 gap-6">
              {allProjects.map((project, index) => (
                <Link 
                  key={index} 
                  href={project.link}
                  target="_blank"
                  className="text-white hover:text-[#ff9af6] transition-colors relative group"
                >
                  <div className="border border-[#2c2f33] rounded-lg p-8 transition-all duration-300 hover:border-[#ff9af6]">
                    <div className="flex flex-col items-center">
                      <h3 className="text-xl font-semibold mb-2 relative">
                        <span className="relative">
                          {project.title}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff9af6] transition-all duration-200 group-hover:w-full"></span>
                        </span>
                      </h3>
                      {project.stars > 0 && (
                        <span className="text-[#99aab5] flex items-center gap-1">
                          ★ {project.stars}
                        </span>
                      )}
                      <p className="text-[#99aab5] mb-2">{project.description}</p>
                      {project.language && (
                        <span className="text-sm">{project.language}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12">
          <Link
            href="/"
            className="text-white hover:text-[#ff9af6] transition-colors relative group"
          >
            <span className="relative">
              Back to Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff9af6] transition-all duration-200 group-hover:w-full"></span>
            </span>
          </Link>
        </div>
      </div>
    </main>
  )
} 