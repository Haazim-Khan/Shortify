import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">

      {/* Header */}
      <header className="w-full bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="text-2xl font-bold text-blue-600">
            Shortify
          </h1>

          <nav className="hidden md:flex gap-6 items-center">
            <Link
              href="https://github.com/Haazim-Khan"
              target="_blank"
              className="bg-gray-100 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition"
            >
              GitHub
            </Link>
          </nav>

        </div>
      </header>


      {/* Hero Section */}
      <main className="flex flex-1 items-center justify-center px-6">

        <div className="text-center max-w-3xl">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Simplify Your Links
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Turn long URLs into short, clean, and shareable links instantly.
          </p>

          <Link href="/shorten">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-md">
              Shorten URL
            </button>
          </Link>

        </div>

      </main>


      {/* Footer */}
      <footer className="border-t bg-white/70 backdrop-blur">
        <div className="max-w-7xl mx-auto text-center py-4 text-gray-500 text-sm">
          © {new Date().getFullYear()} Haazim. All rights reserved.
        </div>
      </footer>

    </div>
  );
}