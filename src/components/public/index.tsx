import Image from "next/image";

export function Index() {
  return (
    <div className="w-full bg-primary">
      <div className="max-w-7xl mx-auto px-6 pt-3 flex items-center justify-center font-outfit">
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
          <div className="w-1/2">
            <h1 className="text-left pt-2 relative before:content-[''] before:absolute before:top-0 before:left-0 before:border-t-8 before:w-1/3 before:border-white">
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
          </div>
          <div className="w-1/3">
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
          </div>
        </div>
      </div>
    </div>
  );
}
