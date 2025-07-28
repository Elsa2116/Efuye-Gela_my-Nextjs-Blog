export default function Blog() {
  function SectionWrapper({ bgGradient, barColor, waveStroke, children }) {
    return (
      <section
        className="max-w-4xl mx-auto mt-10 rounded-xl shadow-lg overflow-hidden flex"
        style={{ background: bgGradient }}
      >
        <div className="relative w-8 flex-shrink-0">
          <div
            className="absolute inset-y-0 left-0 w-3 rounded-tr-xl rounded-br-xl shadow-lg"
            style={{ backgroundColor: barColor }}
          />
          <svg
            className="absolute top-0 left-3 h-full w-5"
            viewBox="0 0 20 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0 C10 50 10 50 0 100"
              stroke={waveStroke}
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>

        <div className="p-10 flex-1 drop-shadow-md">{children}</div>
      </section>
    );
  }

  const blogCards = [
    {
      title: "React & Next.js Tips",
      description: "Quick tips on hooks, routing, and components.",
    },
    {
      title: "Tailwind Tricks",
      description: "Clean UI with utility-first CSS.",
    },
    {
      title: "Coding Habits",
      description: "How I stay consistent and improve.",
    },
    {
      title: "Recent Projects",
      description: "A glimpse of what I’m building now.",
    },
  ];

  return (
    <>
      {/* ABOUT ME Section */}
      <SectionWrapper
        bgGradient="linear-gradient(90deg, #166534 0%, #a7f3d0 100%)"
        barColor="#14532d"
        waveStroke="#14532d"
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-green-600 shadow-md"
          />

          {/* Description */}
          <div>
            <h1 className="text-4xl font-bold mb-6 text-white">About Me</h1>
            <p className="mb-4 leading-relaxed max-w-xl text-white">
              I'm a front-end developer focused on building fast, accessible,
              and visually appealing web apps using modern tools like{" "}
              <strong>React</strong>, <strong>Next.js</strong>, and{" "}
              <strong>Tailwind CSS</strong>.
            </p>
            <h2 className="text-2xl font-semibold mb-2 text-white">Skills</h2>
            <ul className="list-disc list-inside grid grid-cols-2 gap-1 max-w-xl text-white mb-6">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>Responsive Design</li>
              <li>Git & GitHub</li>
            </ul>
            <div className="flex gap-6 text-white text-lg">
              <a
                href="https://github.com/Elsa2116"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-300 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/elsa-alemayehu-9420aa339/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-300 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* BLOG SECTION Title */}
      <SectionWrapper
        bgGradient="linear-gradient(90deg, #166534 20%, #a7f3d0 100%)"
        barColor="#14532d"
        waveStroke="#14532d"
      >
        <div className="w-full">
          <h2 className="text-4xl font-extrabold mb-8 tracking-tight text-center text-white">
            My Blog
          </h2>
          <p className="text-green-200 text-center mb-12 max-w-xl mx-auto">
            Sharing tips, tricks, and insights from my coding journey.
          </p>

          {/* Blog Cards Grid */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            {blogCards.map(({ title, description }, i) => (
              <li
                key={i}
                className="flex flex-col gap-4 p-6 bg-green-900/90 rounded-xl shadow-lg border-2 border-green-700 hover:bg-green-800 hover:scale-105 transform transition duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.38 0-2.5 1.12-2.5 2.5S10.62 13 12 13s2.5-1.12 2.5-2.5S13.38 8 12 8z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2m0 14v2m6.364-10.364l-1.414 1.414M5.05 18.364l-1.414-1.414M21 12h-2M5 12H3m14.364 6.364l-1.414-1.414M6.464 6.464L5.05 5.05"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold underline decoration-green-400 decoration-2">
                    {title}
                  </h3>
                </div>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
    </>
  );
}
