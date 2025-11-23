'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface ServiceCard {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  hashtags: string[];
}

export default function Service5004() {
  const services: ServiceCard[] = [
    {
      id: 1,
      image: '/img/Service5004_Service_1.jpg',
      title: '何か新しいことにチャレンジしたい',
      subtitle: 'チャレンジ・スキルアップ',
      description: '活躍できる場所は一つとは限りません。新たなチャレンジの可能性を広げよう。',
      hashtags: ['#自分の可能性', '#新しい自分の発見', '#もう一つの居場所', '#コミュニティ'],
    },
    {
      id: 2,
      image: '/img/Service5004_Service_2.jpg',
      title: '地域の人と一緒にまちの課題を解決したい',
      subtitle: 'まちづくり・地域貢献',
      description: '地域の人と繋がり、現場での体験を通じ、あなたらしい関わり方を見つけよう。',
      hashtags: ['#社会課題解決', '#スキルを活かして貢献', '#地域に入り込んで活動', '#地域を盛り上げたい'],
    },
    {
      id: 3,
      image: '/img/Service5004_Service_3.jpg',
      title: 'これからのために地域で学び直しをしたい',
      subtitle: 'リスキリング・リカレント',
      description: 'さまざまな場所でくらし、働き、学べる時代。地域での学びで新しい自分を見つけよう。',
      hashtags: ['#セカンドキャリア', '#学びたい', '#大人の学び', '#人生100年時代'],
    },
    {
      id: 4,
      image: '/img/Service5004_Service_4.jpg',
      title: '自然・四季を感じて癒されたい',
      subtitle: '自然・スローライフ',
      description: 'その地域ならではの自然との関わり方で癒しを体感しよう。',
      hashtags: ['#自然を感じたい', '#気分転換したい', '#デトックス', '#四季を堪能', '#安らぎ'],
    },
    {
      id: 5,
      image: '/img/Service5004_Service_5.jpg',
      title: '新しい場所で新しい趣味を見つけたい',
      subtitle: '趣味満喫',
      description: '農作業、工芸、釣り、その地域だからこそできる趣味があなたを待っています。',
      hashtags: ['#自然の中できる趣味', '#手仕事', '#農作業', '#趣味を見つける', '#工芸'],
    },
    {
      id: 6,
      image: '/img/Service5004_Service_6.jpg',
      title: '自然豊かな場所で子育てをしたい',
      subtitle: '子育て',
      description: '自然豊かな土地で、まちぐるみ・地域ぐるみで子どもをのびのびと育てよう。',
      hashtags: ['#自然を満喫した子育て', '#自然の中で遊ぶ', '#子どもの居場所', '#地域ぐるみの子育て'],
    },
  ];

  return (
    <div className="w-full bg-[#e7f1e7] py-12 md:py-16 lg:py-20 p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">

      <div className="max-w-8xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 bg-white rounded-4xl">
        {/* Hero Section */}
        <div className="mb-12 md:mb-16 lg:mb-20 flex flex-col items-center">

          {/* Subtitle */}
          <p className=" text-center text-sm md:text-base text-gray-600 font-semibold mb-2 md:mb-4">
            「くらし」から見つける
          </p>

          {/* Main Title */}
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#4caf50] mb-8 md:mb-12 tracking-widest">
            LIFESTYLE
          </h1>

          {/* Headline */}
          <h2 className=" text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-800 mb-4 md:mb-6 tracking-widest">
            地域で実現する自分らしい「くらし」
          </h2>

          {/* Sub-headline */}
          <p className=" text-center text-xs md:text-base lg:text-lg text-gray-700 font-bold leading-[25px] md:leading-[40px]">
            自由な働き方や自分らしい生き方が選べる時代。
            <br className="hidden md:block" />
            「人生で大切なことは？」と聞かれたら、あなたは何を思い浮かべますか？
          </p>

          {/* CTA Button */}
          <button className="bg-[#f5f5dc] hover:bg-[#e8e8d0] text-gray-800 px-6 md:px-8 lg:px-12 py-3 md:py-4 rounded-full text-sm md:text-xl lg:text-2xl font-bold tracking-widest">
            自分らしい「くらし」を叶えるヒントを、地域を覗いて探してみる
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 md:mb-12 ">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white rounded-lg md:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 lg:h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-120"
                />
              </div>

              {/* Content */}
              <div className=" absolute bottom-0 right-0 px-4 py-2 md:p-4 text-white font-bold">
                {/* Title */}
                <h3 className="text-xs md:text-sm">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-md md:text-lg mb-2">
                  {service.subtitle}
                </p>

                <div className=' border-t-4 border-white border-dotted mb-2'/>

                {/* Description */}
                <p className="text-xs md:text-xs lg:text-sm mb-4 md:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Hashtags */}
                <div className="flex flex-wrap">
                  {service.hashtags.map((hashtag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 mb-1"
                    >
                      {hashtag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center group">
          <button className="bg-gray-700 group-hover:bg-green-800 text-white px-6 md:px-8 lg:px-12 py-3 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base lg:text-lg font-medium transition-colors flex items-center gap-2 md:gap-3">
            <span>掲載をご希望の<br className=' block md:hidden'/>自治体様・団体様はこちら</span>
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

