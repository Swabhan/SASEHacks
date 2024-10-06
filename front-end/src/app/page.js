import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/city.jpg')" }}>
      {/* Text Overlay */}
      <div className="absolute left-10 z-10" style={{ top: '10%' }}> {/* Custom position */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          WE'LL HELP <br />
          YOU TO  <br />
          <span className="bg-purple-500 text-white px-3 py-1 inline-block">
            CONNECT MORE
          </span> <br />
          AND LOVE
        </h1>
      </div>

      {/* <p className="text-xs text-gray-800">
        Could teach you not only <br />
        scoot, but chess also
      </p> */}
        {/* Sign In and Log In Buttons */}
        <div className="absolute bottom-20 right-20 z-10 flex space-x-4">
        <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">
          Sign In
        </button>
        <button className="bg-white text-purple-500 px-4 py-2 rounded border border-purple-500 hover:bg-purple-500 hover:text-white transition">
          Log In
        </button>
      </div>
    </div>
  );
}
