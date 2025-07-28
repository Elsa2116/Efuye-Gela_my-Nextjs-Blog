export default function Home() {
  // Reusable Section wrapper for consistent design
  function SectionWrapper({ bgGradient, barColor, waveStroke, children }) {
    return (
      <section
        className="max-w-4xl mx-auto mt-10 rounded-xl shadow-lg overflow-hidden flex"
        style={{ background: bgGradient }}
      >
        {/* Left vertical accent bar with decorative wave shape */}
        <div className="relative w-8 flex-shrink-0">
          <div
            className="absolute inset-y-0 left-0 w-3 rounded-tr-xl rounded-br-xl shadow-lg"
            style={{ backgroundColor: barColor }}
          ></div>
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

        {/* Content */}
        <div className="p-10 flex-1 text-white drop-shadow-md">{children}</div>
      </section>
    );
  }

  return (
    <>
      <SectionWrapper
        bgGradient="linear-gradient(90deg, #166534 0%, #a7f3d0 100%)"
        barColor="#14532d"
        waveStroke="#14532d"
      >
        <h1 className="text-5xl font-extrabold mb-6 tracking-wide">
          Welcome to My Next.js Blog
        </h1>
        <p className="text-lg mb-4 leading-relaxed">
          This blog is built with <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Next.js</span>, and styled using{" "}
          <span className="font-semibold">Tailwind CSS</span>.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Over time, I have mastered various web technologies including{" "}
          <span className="italic font-medium">React</span>,{" "}
          <span className="italic font-medium">Tailwind CSS</span>,{" "}
          <span className="italic font-medium">HTML</span>,{" "}
          <span className="italic font-medium">CSS</span>, and{" "}
          <span className="italic font-medium">JavaScript</span>.
        </p>
        <p className="text-lg leading-relaxed">
          Now, I am diving deep into{" "}
          <span className="font-bold underline decoration-green-300 decoration-2">
            Next.js
          </span>{" "}
          — exploring server-side rendering and static site generation, building
          projects to sharpen my skills and grow as a developer.
        </p>
      </SectionWrapper>

      <SectionWrapper
        bgGradient="linear-gradient(90deg, #166534 20%, #a7f3d0 100%)"
        barColor="#14532d"
        waveStroke="#14532d"
      >
        <div className="text-green-100">
          <h2 className="text-4xl font-extrabold mb-8 tracking-tight text-center">
            What’s Next on My Journey
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            {/* Card 1 */}
            <li className="flex flex-col gap-4 p-6 bg-green-900/90 rounded-xl shadow-lg border-2 border-green-700 hover:bg-green-800 hover:scale-105 transform transition duration-300 cursor-pointer">
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
                  Advanced React Patterns
                </h3>
              </div>
              <p>
                Learning hooks, context API, and performance optimization
                techniques.
              </p>
            </li>

            {/* Card 2 */}
            <li className="flex flex-col gap-4 p-6 bg-green-900/90 rounded-xl shadow-lg border-2 border-green-700 hover:bg-green-800 hover:scale-105 transform transition duration-300 cursor-pointer">
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
                    d="M3 10h18M3 6h18M3 14h18M3 18h18"
                  />
                </svg>
                <h3 className="text-xl font-semibold underline decoration-green-400 decoration-2">
                  Full-Stack Projects
                </h3>
              </div>
              <p>
                Building APIs with Next.js API routes and connecting databases.
              </p>
            </li>

            {/* Card 3 */}
            <li className="flex flex-col gap-4 p-6 bg-green-900/90 rounded-xl shadow-lg border-2 border-green-700 hover:bg-green-800 hover:scale-105 transform transition duration-300 cursor-pointer">
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
                    d="M9 12l2 2 4-4"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16h10M7 8h10"
                  />
                </svg>
                <h3 className="text-xl font-semibold underline decoration-green-400 decoration-2">
                  Deployment & CI/CD
                </h3>
              </div>
              <p>
                Automating builds and deploying projects on Vercel and Netlify.
              </p>
            </li>

            {/* Card 4 */}
            <li className="flex flex-col gap-4 p-6 bg-green-900/90 rounded-xl shadow-lg border-2 border-green-700 hover:bg-green-800 hover:scale-105 transform transition duration-300 cursor-pointer">
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <h3 className="text-xl font-semibold underline decoration-green-400 decoration-2">
                  UI/UX Improvements
                </h3>
              </div>
              <p>
                Mastering responsive design and accessibility best practices.
              </p>
            </li>
          </ul>
        </div>
      </SectionWrapper>
    </>
  );
}
