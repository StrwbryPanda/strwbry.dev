import Link from 'next/link'

export default function EventHorizonPage() {
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
          <h1 className="text-4xl font-bold text-[#7289da] mb-6">EventHorizon</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-[#99aab5] mb-8">
              EventHorizon is a powerful Minecraft Paper plugin designed to streamline the management of server events and competitions. 
              It provides server administrators with a comprehensive suite of tools to create, manage, and monitor various types of events.
            </p>

            <h2 className="text-2xl font-semibold text-[#7289da] mt-12 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-[#99aab5] space-y-2 mb-8">
              <li>Event creation and management system</li>
              <li>Customizable event types and rules</li>
              <li>Real-time event monitoring and statistics</li>
              <li>Player registration and team management</li>
              <li>Automated event scheduling and notifications</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Link 
                href="https://github.com/StrwbryDev/EventHorizon" 
                target="_blank"
                className="social-link text-center"
              >
                View Source Code
              </Link>
              <Link 
                href="/javadocs/eventhorizon/index.html"
                className="social-link text-center"
              >
                JavaDocs
              </Link>
            </div>
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