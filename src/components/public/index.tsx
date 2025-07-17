import Image from "next/image";

export function Index() {
  return (
    <div className="w-full bg-primary">
      <div className="max-w-7xl mx-auto px-6 pt-3 flex items-center justify-center font-outfit">
        <Image
          className=""
          src="/safar_home.png"
          alt="safar home photo"
          width={800}
          height={38}
          priority
        />
        <div className="absolute px-6 inset-0 z-1 flex flex-row items-center justify-between">
          <div className="w-1/2">
            <h1 className="text-white text-6xl font-bold text-left border-t-2 pt-2">
              Hello, I`m Safar<br />
              an IT Enthusiast
            </h1>
          </div>
          <div className="w-1/3">
            <h1 className="text-white text-4xl font-bold text-right">
              Teks di Atas Gambar
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
