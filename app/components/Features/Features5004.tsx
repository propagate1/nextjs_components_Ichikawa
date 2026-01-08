"use client";
import Image from "next/image";

export default function Features5004() {
  const showrooms = [
    {
      id: 1,
      image: "/img/Features5004_Feature_1.jpg",
      city: "東京本社",
    },
    {
      id: 2,
      image: "/img/Features5004_Feature_2.jpg",
      city: "新宿",
    },
    {
      id: 3,
      image: "/img/Features5004_Feature_3.jpg",
      city: "秋葉原",
    },
    {
      id: 4,
      image: "/img/Features5004_Feature_4.jpg",
      city: "大阪",
    },
    {
      id: 5,
      image: "/img/Features5004_Feature_5.jpg",
      city: "名古屋",
    },
    {
      id: 6,
      image: "/img/Features5004_Feature_6.jpg",
      city: "博多",
    },
    {
      id: 7,
      image: "/img/Features5004_Feature_7.jpg",
      city: "仙台",
    },
    {
      id: 8,
      image: "/img/Features5004_Feature_8.jpg",
      city: "広島",
    },
    {
      id: 9,
      image: "/img/Features5004_Feature_9.jpg",
      city: "札幌",
    },
  ];

  return (
    <div className="w-full bg-[#AC9E4C] py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Subtle dotted pattern background effect */}
      <div className="absolute inset-0 z-10 w-full h-[30%] md:h-[80%] lg:h-full left-0 md:left-20">
        <Image
          src="/img/Features5004_Bg_1.png"
          alt="Background"
          fill
          className="object-contain object-right md:object-center lg:object-left opacity-20"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-30">
        {/* Main Slogan Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-relaxed">
            <span>MAXHUBを</span>
            <span
              className="bg-white text-black px-3 md:px-4 lg:px-5 py-1 md:py-2 mx-1 md:mx-2 inline-block"
              style={{
                clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
              }}
            >
              全国9拠点のショールーム
            </span>
            <span>で体感できます!</span>
          </h2>
        </div>

        {/* Showroom Images - Single horizontal row on desktop, responsive grid on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-3 md:gap-4 lg:gap-3 xl:gap-4 z-30">
          {showrooms.map((showroom) => (
            <div key={showroom.id} className="flex flex-col items-center">
              {/* Showroom Image */}
              <div className="relative w-full aspect-[4/3] mb-2 md:mb-3 shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src={showroom.image}
                  alt={`${showroom.city} showroom`}
                  fill
                  className="object-cover"
                  priority={showroom.id <= 3}
                />
              </div>

              {/* City Name Label */}
              <p className="text-xs md:text-sm lg:text-base font-medium text-gray-900 text-center">
                {showroom.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
