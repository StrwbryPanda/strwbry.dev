import Link from 'next/link'

export default function ContactPage() {
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
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7289da] mb-8">Contact Me</h1>
          
          <div className="space-y-8">
            <section className="bg-[#2c2f33] p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#7289da] mb-4">Discord</h2>
              <p className="text-[#99aab5] mb-4">
                Join my Discord server to chat, get support, or discuss potential collaborations.
              </p>
              <Link 
                href="https://discord.gg/dgjTQrUdjh"
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-[#7289da] text-white rounded-lg hover:bg-[#677bc4] transition-colors"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord Server
              </Link>
            </section>

            <section className="bg-[#2c2f33] p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#7289da] mb-4">Email</h2>
              <p className="text-[#99aab5] mb-4">
                For business inquiries, project proposals, or general questions, feel free to reach out via email.
              </p>
              <a 
                href="mailto:strwbry@strwbry.dev"
                className="inline-flex items-center px-6 py-3 bg-[#7289da] text-white rounded-lg hover:bg-[#677bc4] transition-colors"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                strwbry@strwbry.dev
              </a>
            </section>
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