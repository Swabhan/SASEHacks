import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-purple-900 font-sans">
      {/* Main Content with Full-Screen Background */}
      <main
        className="flex flex-col justify-between min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/city.jpg')" }} // Use the same background image
      >
        {/* Content Overlay */}
        <div className="absolute left-0 z-10 w-full" style={{ top: '10%' }}>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight text-left pl-4">
            WELCOME TO YOUR <br />
            <span className="bg-purple-500 text-white px-3 py-1 inline-block">
              COMMUNITY BANK
            </span> <br />
          </h1>
          <p className="text-lg text-white text-left w-full max-w-2xl mx-auto p-4 bg-purple-400 shadow-md  font-cursive">
            Trade your time, not your money. Strengthen your community by connecting and helping friends with skills that matter. Empower your community to build relationships and grow closer together!
          </p>
        </div>

        {/* Spacer to push buttons to the bottom */}
        <div className="flex-grow"></div> {/* This div takes all available space */}

        {/* Buttons with Divider, positioned at the bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-8 mb-8 z-10">
          <a
            className="flex-1 rounded-full border border-purple-900 bg-purple-900 text-white transition-colors text-center py-3 hover:bg-purple-700 text-base sm:text-lg"
            href="/timebank"
          >
            Time Bank
          </a>
          <div className="h-0.5 w-full sm:w-auto bg-purple-200 sm:h-full sm:w-0.5"></div>
          <a
            className="flex-1 rounded-full border border-purple-900 bg-purple-900 text-white transition-colors text-center py-3 hover:bg-purple-700 text-base sm:text-lg"
            href="/community"
          >
            Connect with Your Community
          </a>
        </div>
      </main>
    </div>
  );
}
