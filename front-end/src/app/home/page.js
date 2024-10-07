import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-purple-900 font-sans">
      {/* Main Content with Full-Screen Background */}
      <main
        className="relative flex flex-col justify-between min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/city.jpg')" }} // Using the background image
      >
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col justify-center px-4 sm:px-8">
          <h1 className="text-4xl md:text-6xl text-white leading-tight">
            WELCOME TO YOUR <br />
            <span className="bg-purple-500 text-white font-bold px-3 py-1 inline-block">
              COMMUNITY BANK
            </span>
          </h1>
          <p className="text-lg text-white mt-10 bg-purple-600 p-4 shadow-md rounded-lg font-cursive w-full max-w-2xl">
            <span className="text-green-500">Trade your time, not your money</span>. 
            <span className="text-yellow-500">Strengthen</span> your community by connecting and helping friends with 
            <span className="text--500">skills</span> that matter. 
            <span className="text-blue-500">Empower</span> your community to build 
            <span className="text-pink-500">relationships</span> and grow closer together!
          </p>

        </div>

        {/* Spacer to push buttons to the bottom */}
        <div className="flex-grow"></div> {/* Takes remaining space */}

        {/* Buttons at the Bottom */}
        <div className="relative z-10 mb-8 flex flex-col sm:flex-row items-center justify-center w-full gap-5">
          <a
            className="flex-1 rounded-full bg-purple-900 border-purple-900 text-white  py-3 text-base sm:text-lg text-center transition-colors hover:bg-purple-700"
            href="/timebank"
          >
            Time Bank
          </a>
          <div className="h-0.5 w-full sm:w-auto bg-purple-200 sm:h-full sm:w-0.5"></div>
          <a
            className="flex-1 rounded-full bg-purple-900 border-purple-900 text-white  py-3 text-base sm:text-lg text-center transition-colors hover:bg-purple-700"
            href="/community"
          >
            Connect with Your Community
          </a>
        </div>
      </main>
    </div>
  );
}
