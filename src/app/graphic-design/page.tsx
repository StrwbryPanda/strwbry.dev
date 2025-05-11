import Image from 'next/image';
import Link from 'next/link';

export default function GraphicDesign() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-24">
          Graphic Design Portfolio
        </h1>

        {/* Game Assets Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-semibold mb-12">Game Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'EventHorizon_v4.png',
              'EventHorizon_v3.3.png',
              'EventHorizon_v2.png',
            ].map((file) => (
              <div key={file} className="border border-[#2c2f33] rounded-lg p-6 transition-all duration-300 hover:border-[#ff9af6]">
                <div className="aspect-[4/3] relative mb-4 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image src={`/graphic-design/gaming-assets/${file}`} alt={file} fill style={{objectFit: 'contain'}} />
                </div>
                <p className="text-[#99aab5]">Game Asset</p>
              </div>
            ))}
            {[
              'Slime_Move.gif',
              'Slime_Squish.gif',
              'Gem.gif',
            ].map((file) => (
              <div key={file} className="border border-[#2c2f33] rounded-lg p-6 transition-all duration-300 hover:border-[#ff9af6]">
                <div className="aspect-square relative mb-4 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image src={`/graphic-design/gaming-assets/${file}`} alt={file} fill style={{objectFit: 'contain'}} />
                </div>
                <p className="text-[#99aab5]">Game Asset</p>
              </div>
            ))}
            {[
              'Target.png',
              'Target2.png',
              'Target3.png',
              'Target4.png',
            ].map((file) => (
              <div key={file} className="border border-[#2c2f33] rounded-lg p-6 transition-all duration-300 hover:border-[#ff9af6]">
                <div className="aspect-[4/3] relative mb-4 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image src={`/graphic-design/gaming-assets/${file}`} alt={file} fill style={{objectFit: 'contain'}} />
                </div>
                <p className="text-[#99aab5]">Game Asset</p>
              </div>
            ))}
          </div>
        </section>

        {/* Branding Materials Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-semibold mb-12">Branding Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Streaming Assets */}
            {[
              'Background_1.png',
              'Background_2.png',
              'Background_3.png',
              'audition_background_progress_2.png',
              'Discord.png',
              'Donations.png',
              'Twitter.png',
              'Panel_Header_About_me.png',
            ].map((file) => (
              <div key={file} className="border border-[#2c2f33] rounded-lg p-6 transition-all duration-300 hover:border-[#ff9af6]">
                <div className="aspect-[4/3] relative mb-4 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image src={`/graphic-design/branding-materials/streaming-assets/${file}`} alt={file} fill style={{objectFit: 'contain'}} />
                </div>
                <p className="text-[#99aab5]">Streaming Asset</p>
              </div>
            ))}
            {/* Themed Discord Assets */}
            {[
              'supp.png','jungle.png','bot.png','mid.png','top.png',
              'mc_welcome.png','mc_server_info.png','mc_staff.png','mc_rules.png','mc_stamp.png','mc_prizes.png','mc_faq.png','mc_header.png',
              'hk_stamp.png','hk_prizes.png','hk_FAQ.png','hk_header.png',
              'tts_faq.png','tts_header.png','tts_prizes.png','stamp_card.png','ori_final.png','Prizing2.png','FAQ.png',
              'competition club2.png','esportsprogramstaff.png','esportsclubofficers.png',
            ].map((file) => (
              <div key={file} className="border border-[#2c2f33] rounded-lg p-6 transition-all duration-300 hover:border-[#ff9af6]">
                <div className="aspect-[4/3] relative mb-4 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image src={`/graphic-design/branding-materials/themed-discord-assets/${file}`} alt={file} fill style={{objectFit: 'contain'}} />
                </div>
                <p className="text-[#99aab5]">Themed Discord Asset</p>
              </div>
            ))}
          </div>
        </section>

        {/* Infographics Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-semibold mb-12">Infographics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'KSU ESI.png',
              'KSU ESII.png',
              'NCK7_redofinal.png',
              'Schedule.png',
            ].map((file) => (
              <div key={file} className="border border-[#2c2f33] rounded-lg p-6 transition-all duration-300 hover:border-[#ff9af6]">
                <div className={`relative mb-4 rounded-lg flex items-center justify-center overflow-hidden aspect-video`}>
                  <Image src={`/graphic-design/infographics/${file}`} alt={file} fill style={{objectFit: 'contain'}} />
                </div>
                <p className="text-[#99aab5]">Infographic</p>
              </div>
            ))}
            {/* Center Warwick Builds if it's the last item in an odd grid */}
            <div className="md:col-span-2 flex justify-center">
              <div className="border border-[#2c2f33] rounded-lg p-6 transition-all duration-300 hover:border-[#ff9af6] w-full md:w-1/2">
                <div className="relative mb-4 rounded-lg flex items-center justify-center overflow-hidden aspect-[3/4]">
                  <Image src="/graphic-design/infographics/Warwick Builds.png" alt="Warwick Builds.png" fill style={{objectFit: 'contain'}} />
                </div>
                <p className="text-[#99aab5]">Infographic</p>
              </div>
            </div>
          </div>
        </section>

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
  );
} 