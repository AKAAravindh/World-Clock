function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 px-[clamp(1rem,7vw,7%)] pt-16 pb-8 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold font-timer text-white">
            Chrono<span className="text-[#55feac]">World</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-xs">
            Stay connected with every moment, anywhere in the world.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-white font-semibold">Explore</h3>

          <ul className="mt-4 space-y-3 text-gray-400">
            <li>World Clock</li>
            <li>Time Zones</li>
            <li>Favorites</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-white font-semibold">Features</h3>

          <ul className="mt-4 space-y-3 text-gray-400">
            <li>12 / 24 Hour Format</li>
            <li>Multiple Locations</li>
            <li>Dark Theme</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-white font-semibold">Connect</h3>

          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/AKAAravindh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300 cursor-pointer hover:text-[#55feac]"
            >
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/its-aravindh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300 cursor-pointer hover:text-[#55feac]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-gray-500">
        <p>© 2026 ChronoWorld. All rights reserved.</p>

        <p>Built with React + Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
