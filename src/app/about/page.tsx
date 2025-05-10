import Link from 'next/link'

export default function AboutPage() {
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7289da] mb-8">About Me</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-[#99aab5] mb-8">
              I'm a software engineer and game developer with a Master's in Software Engineering and a Bachelor's in Computer Game Design and Development. 
              Currently, I am open to freelance opportunities and collaborations in Unity game development or Minecraft plugin development.
            </p>

            <h2 className="text-2xl font-semibold text-[#7289da] mt-12 mb-4">Education</h2>
            <ul className="list-disc list-inside text-[#99aab5] space-y-2 mb-8">
              <li>Master's in Software Engineering</li>
              <li>Bachelor's in Computer Game Design and Development</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#7289da] mt-12 mb-4">Skills</h2>
            <ul className="list-disc list-inside text-[#99aab5] space-y-2 mb-8">
              <li>Unity Game Development</li>
              <li>Minecraft Plugin Development (Java)</li>
              <li>Software Engineering</li>
              <li>Game Design</li>
            </ul>
          </div>
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