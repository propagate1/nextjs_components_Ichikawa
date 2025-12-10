'use client';
import Image from 'next/image';
import { MapPin, ChevronRight } from 'lucide-react';

export default function Voice5001() {
  const testimonials = [
    {
      id: 1,
      avatar: '/img/Voice5001_Avatar_1.png',
      title: '対応はもう満点以上です。',
      text: '大変よく誠実に、そして専門家らしい知見に基づいてテキパキと私の要望に応じていただけました。対応はもう満点以上です。仕分けもしていただけましたので遺品の整理がしやすくなって大変助かりました。',
      location: '東京都文京区',
      age: '60代',
      gender: '男性',
      service: '出張買取を利用',
    },
    {
      id: 2,
      avatar: '/img/Voice5001_Avatar_2.png',
      title: '色々教えてもらい勉強になりました!',
      text: '商品知識がしっかりとしていて、とても勉強されているんだな、査定知識がすごいなと思いましたね。説明も申し分なく「頼りになるな」と感じました。',
      location: '千葉県船橋市',
      age: '40代',
      gender: '女性',
      service: '出張買取を利用',
    },
    {
      id: 3,
      avatar: '/img/Voice5001_Avatar_3.png',
      title: 'ほかの方にも紹介したいです。',
      text: 'とても親切で分かりやすくて、同席してた両親も喜んでましたね。良い対応していただきまして来てもらって本当に良かったですね。また何かあればお願いしたいですし、ほかの方にも紹介したいです。',
      location: '埼玉県川越市',
      age: '50代',
      gender: '女性',
      service: '出張買取を利用',
    },
    {
      id: 4,
      avatar: '/img/Voice5001_Avatar_4.png',
      title: '誰かの役にたてばうれしいです。',
      text: '良かったですよ! 着物の事とかよく勉強されていますね。今回は処分の仕方に困っていたので、誰かの役にたてばうれしいです。気になっている物がまだあるので、また機会があればお願いしたいと思います。',
      location: '宮城県岩沼市',
      age: '80代',
      gender: '女性',
      service: '出張買取を利用',
    },
  ];

  return (
    <div className="w-full bg-[#fbdbaa] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-left mb-20 md:mb-28">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            ご利用されたお客様の声
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-700">
            バイセルは日々たくさんのお客様にご利用いただいております。
          </p>
        </div>

        {/* Testimonials Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg overflow-visible shadow-sm relative"
            >
              {/* Orange Top Border */}
              <div className="h-2 bg-[#ff6b35] w-full rounded-t-3xl overflow-hidden"></div>

              {/* Card Content */}
              <div className="p-4 md:p-6 lg:p-8 pt-8 md:pt-10 lg:pt-12">
                {/* Avatar - Overlapping the orange border */}
                <div className="absolute top-8 left-1/6 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Spacer for avatar */}
                <div className="h-12 md:h-14 lg:h-16 mb-4 md:mb-6"></div>

                {/* Review Title */}
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-3 md:mb-4">
                  {testimonial.title}
                </h3>

                {/* Review Text */}
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-5">
                  {testimonial.text}
                </p>

                {/* Dotted Separator */}
                <div className="border-t-2 border-dotted border-gray-300 mb-4 md:mb-5"></div>

                {/* Customer Details */}
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-gray-600" />
                  <span>
                    {testimonial.location} {testimonial.age}
                    {testimonial.gender} {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="text-center space-y-4 md:space-y-6">
          {/* Disclaimers */}
          <div className=" text-left space-y-2 md:space-y-3 text-xs md:text-sm text-gray-600">
            <p>お客様の声から当社で選択の上で掲載しています。</p>
            <p>
              掲載しているお客様の声の内容はお客様個人の感想であり、お買い取りした商品はお客様によって異なります。
            </p>
          </div>

          {/* View More Button */}
          <button className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#faf8f5] border-2 border-[#ff6b35] rounded-full text-sm md:text-base font-medium text-gray-800 hover:bg-[#ff6b35] hover:text-white transition-colors shadow-sm">
            <span>お客様の声をもっと見る</span>
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#ff6b35] group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}

