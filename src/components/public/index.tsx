import Image from "next/image";

export function Index() {
  return (
    <div className="w-full bg-primary">
      <div className="max-w-2xl mx-auto px-6 pt-3 flex items-center justify-center font-outfit">
        <Image
          className="drop-shadow-xl"
          src="/safar_index.png"
          alt="safar index photo"
          width={800}
          height={38}
          priority
          draggable={false}
        />
        <div className="absolute px-6 inset-0 z-1 flex flex-row items-center justify-between">
          <div className="w-1/2 mt-32">
            <h1 className="text-left pt-2 mb-10 relative before:content-[''] before:absolute before:top-0 before:left-0 before:border-t-8 before:w-1/4 before:border-white">
              <span className="text-white text-3xl font-bold block mt-2">
                Hello, I&apos;m
              </span>
              <span className="text-mainText text-6xl font-bold block mt-2">
                M. Safarudin .P
              </span>
              <span className="text-white text-4xl font-bold block mt-2">
                an IT Enthusiast
              </span>
              <span className="text-white text-lg w-3/4 text-justify italic font-normal block mt-2">
                Currently exploring full-stack web development, especially
                backend, AI, and research-driven projects.
              </span>
            </h1>
            <div
              className="mt-6 w-fit"
              role="complementary"
              aria-labelledby="social-heading"
            >
              <h2
                id="social-heading"
                className="text-mainText text-xl font-extrabold mb-3"
              >
                Follow Me
              </h2>
              <nav aria-label="Social media links">
                <ul className="flex gap-4 list-none group">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/muhammad-safarudin-pratama/"
                      className="text-white inline-flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-125 group-hover:text-gray-400 hover:!text-blue-500"
                      aria-label="Follow me on LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Safmica"
                      className="text-white inline-flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-125 group-hover:text-gray-400 hover:!text-white"
                      aria-label="Follow me on GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github text-2xl"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/prtma.sfr"
                      className="text-white inline-flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-125 group-hover:text-gray-400 hover:!text-pink-400"
                      aria-label="Follow me on Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram text-2xl"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="w-1/3 mt-24 flex flex-col gap-7">
            <section aria-labelledby="about-heading">
              <h2
                id="about-heading"
                className="text-mainText text-3xl font-bold block mt-2"
              >
                About Me
              </h2>
              <p className="text-white text-lg font-normal italic text-justify block mt-2">
                A 5th-semester Informatics Engineering student at Universitas
                Sriwijaya, actively involved in various student organizations
                and activities.
              </p>
              <a
                href="#about"
                className="text-white font-extrabold hover:text-blue-300 mt-3 inline-flex items-center gap-1"
                aria-label="Learn more about my background and experience"
              >
                Learn More
                <span>&rarr;</span>
              </a>
            </section>
            <section aria-labelledby="my-project-heading">
              <h2
                id="my-project-heading"
                className="text-mainText text-3xl font-bold block mt-2"
              >
                My Projects
              </h2>
              <p className="text-white text-lg font-normal italic text-justify block mt-2">
                Focused on backend development while exploring different IT
                domains. Open to internship and job opportunities in the tech
                industry.
              </p>
              <a
                href="#my-projects"
                className="text-white font-extrabold hover:text-blue-300 mt-3 inline-flex items-center gap-1"
                aria-label="Browse my projects and portfolio"
              >
                Browse Portfolio
                <span>&rarr;</span>
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
