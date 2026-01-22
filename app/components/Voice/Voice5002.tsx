'use client';
import Image from 'next/image';

export default function Voice5002() {
  const testimonials = [
    {
      id: 1,
      image: '/img/Voice5002_Bg_1.jpg',
      grade: '小学6年生',
      headline: '勉強の不安がゼロに!',
      body: 'いつでもどこからでも、そしてどんな問題でも解説をしてくれるので、',
      highlight1: '勉強や受験に対しての不安がなくなり助かっています!',
      alt: 'Elementary school student',
    },
    {
      id: 2,
      image: '/img/Voice5002_Bg_2.jpg',
      grade: '中学3年生',
      headline: '学習進度が1.5倍に!',
      body: '分かるところはどんどん進め、分からないところはその場で丁寧に解説してもらえるため、',
      highlight1: '学習のスピードがとても早くなりました!',
      alt: 'Middle school student',
    },
    {
      id: 3,
      image: '/img/Voice5002_Bg_3.jpg',
      grade: '高校2年生',
      headline: '成績が20点アップ!',
      body: '自分は化学と物理が苦手でしたが、ポイントをしぼって分かりやすく教えてくれたので',
      highlight1: '定期テストの点数が20点上がりました!',
      highlight2: 'いつでも辞書的に活用できるのがとても便利です!',
      alt: 'High school student',
    },
    {
      id: 4,
      image: '/img/Voice5002_Bg_4.jpg',
      grade: '予備校生',
      headline: '自学自習の質が向上!',
      body: '分からない問題だけピンポイントで解説してもらえるため、',
      highlight1: '自学自習の質が高まりました!',
      highlight2: '勉強時の強力な味方となっています!',
      highlight3: '周りにいつも先生がいるわけではないので、',
      alt: 'Prep school student',
    },
  ];

  return (
    <div className="w-full bg-[#fdf8f0] py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          {/* USER'S VOICE Title Image */}
          <div className="hidden md:block relative w-full h-24 mb-6">
            <Image
              src="/img/Voice5002_Letter_2.png"
              alt="USER'S VOICE"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
          <div className=" block md:hidden relative w-full h-16  mb-4">
            <Image
              src="/img/Voice5002_Letter_1.png"
              alt="USER'S VOICE"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
          {/* Japanese Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
            ユーザーの声
          </h2>
        </div>

        {/* Testimonials Section */}
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Image with Grade Badge */}
                <div className="relative w-full h-64 lg:h-72">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.alt}
                    fill
                    className="object-cover object-center"
                  />
                  {/* Grade Badge */}
                  <div className="absolute bottom-0 left-0 bg-orange-400 text-white px-4 py-2 rounded-tr-md">
                    <p className="text-lg lg:text-xl font-semibold">
                      {testimonial.grade}
                    </p>
                  </div>

                  {/* icon */}
                  <div className="absolute -bottom-10 lg:-bottom-15 right-5 w-20 h-20 lg:w-24 lg:h-24">
                    <Image
                      src="/img/Voice5002_Icon_1.png"
                      alt="USER'S VOICE"
                      fill
                      className="object-contain object-center"
                      priority
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-10">
                  {/* Headline */}
                  <h3 className="text-orange-400 text-2xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
                    {testimonial.headline}
                  </h3>

                  {/* Body Text */}
                  <p className="text-gray-800 text-base lg:text-lg ">
                    {testimonial.body}
                  </p>
                  <p className="bg-orange-400 text-white px-1 text-base lg:text-lg mb-1  inline-block">
                    {testimonial.highlight1}
                  </p>
                  {testimonial.highlight3 && (
                    <p className="text-gray-800 px-1 text-base lg:text-lg mb-1 inline-block">
                      {testimonial.highlight3}
                    </p>
                  )}
                  {testimonial.highlight2 && (
                    <p className="bg-orange-400 text-white px-1 text-base lg:text-lg mb-1 inline-block">
                      {testimonial.highlight2}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

