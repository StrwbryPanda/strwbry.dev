import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About Me</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-[#99aab5] mb-8 text-center">
              I'm a software engineer and game developer with a Master's in Software Engineering and a Bachelor's in Computer Game Design and Development. 
              Currently, I am open to freelance opportunities and collaborations in Unity game development or Minecraft plugin development.
            </p>

            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
            <ul className="list-disc list-inside text-[#99aab5] space-y-2 mb-8 text-center">
              <li>Master's in Software Engineering</li>
              <li>Bachelor's in Computer Game Design and Development</li>
            </ul>

            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <ul className="list-disc list-inside text-[#99aab5] space-y-2 mb-8 text-center">
              <li>Unity Game Development</li>
              <li>Minecraft Plugin Development (Java)</li>
              <li>Software Engineering</li>
              <li>Game Design</li>
            </ul>
          </div>
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