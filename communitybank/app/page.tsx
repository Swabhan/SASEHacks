import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-blue-900 font-sans">
      {/* Light Blue Navigation Bar */}
      <nav className="bg-blue-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Image
            src="/logo.jpeg"
            alt="Bank Logo"
            width={60}
            height={14.5}
          />

          <h3>Community Bank</h3>
         
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-8 p-8 sm:p-16">
        {/* Picture at the top */}
        <Image
          src="/timebank.jpeg" // Replace with a relevant image
          alt="Bank Overview"
          width={300}
          height={150}
          className="rounded-lg shadow-lg"
        />

        <h1 className="text-4xl font-bold text-center sm:text-left">
          Welcome to your Community Bank
        </h1>
        <p className="text-lg text-center sm:text-left">
        Trade your time, not your money. Strengthen your community by connecting and helping friends with skills that matter.
        </p>

        <p className="text-lg text-center sm:text-left">
        Empower your community to build relationships and grow closer together!
        </p>

        {/* Buttons with Divider */}
        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-8">
          <a
            className="flex-1 rounded-full border border-blue-900 bg-blue-900 text-white transition-colors text-center py-3 hover:bg-blue-700 text-base sm:text-lg"
            href="/time-bank"
          >
            Time Bank
          </a>
          <div className="h-0.5 w-full sm:w-auto bg-blue-200 sm:h-full sm:w-0.5"></div>
          <a
            className="flex-1 rounded-full border border-blue-900 transition-colors text-center py-3 hover:bg-blue-100 hover:border-blue-900 text-base sm:text-lg"
            href="/community"
          >
            Connect with Your Community
          </a>
        </div>
      </main>

    </div>
  );
}
