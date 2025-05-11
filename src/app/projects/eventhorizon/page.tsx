import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function EventHorizonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <header className="py-8">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-white hover:text-[#ff9af6] transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#ff9af6] after:left-1/2 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-200 after:-translate-x-1/2">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">EventHorizon</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-[#99aab5] mb-8">
              EventHorizon is a powerful Minecraft Paper plugin designed to streamline the management of server events and competitions. 
              It provides server administrators with a comprehensive suite of tools to create, manage, and monitor various types of events.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-[#99aab5] space-y-2 mb-8">
              <li>Event creation and management system</li>
              <li>Customizable event types and rules</li>
              <li>Real-time event monitoring and statistics</li>
              <li>Player registration and team management</li>
              <li>Automated event scheduling and notifications</li>
            </ul>

            <div className="flex flex-col sm:flex-row justify-center gap-16 mt-12">
              <Link 
                href="https://github.com/StrwbryDev/EventHorizon" 
                target="_blank"
                className="text-white hover:text-[#ff9af6] transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#ff9af6] after:left-1/2 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-200 after:-translate-x-1/2"
              >
                View Source Code
              </Link>
              <Link 
                href="/javadocs/eventhorizon/index.html"
                className="text-white hover:text-[#ff9af6] transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#ff9af6] after:left-1/2 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-200 after:-translate-x-1/2"
              >
                JavaDocs
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 mt-16 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Strwbry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 