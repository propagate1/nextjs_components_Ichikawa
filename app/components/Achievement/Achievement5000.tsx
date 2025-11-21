'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MapPin, Pause, Play } from 'lucide-react';

interface AchievementItem {
  id: number;
  image: string;
  description: string;
  price: string;
  location: string;
  service: string;
}

export default function Achievement5000() {
  const achievements: AchievementItem[] = [
    {
      id: 1,
      image: '/img/Achievement5000_Product_1.webp',
      description: '本場大島紬を含む着物',
      price: '1,274,000',
      location: '東京都足立区',
      service: '着物買取/出張買取を利用',
    },
    {
      id: 2,
      image: '/img/Achievement5000_Product_2.webp',
      description: '箪笥に眠っていた価値の高い着物 が多数',
      price: '452,100',
      location: '群馬県沼田市',
      service: '着物買取/出張買取を利用',
    },
    {
      id: 3,
      image: '/img/Achievement5000_Product_3.webp',
      description: '特殊切手などを含む切手数点で',
      price: '1,109,000',
      location: '東京都足立区',
      service: '切手買取/出張買取を利用',
    },
    {
      id: 4,
      image: '/img/Achievement5000_Product_4.webp',
      description: '本場大島紬を含む着物数点で',
      price: '119,000',
      location: '神奈川県相模原市',
      service: '着物買取/出張買取を利用',
    },
    {
      id: 5,
      image: '/img/Achievement5000_Product_5.webp',
      description: '大判、小判など複数の古銭',
      price: '733,000',
      location: '東京都目黒区',
      service: '古銭買取/出張買取を利用',
    },
    {
      id: 6,
      image: '/img/Achievement5000_Product_6.webp',
      description: '本場大島紬を含む着物',
      price: '850,000',
      location: '埼玉県川越市',
      service: '着物買取/出張買取を利用',
    },
    {
      id: 7,
      image: '/img/Achievement5000_Product_7.webp',
      description: '特殊切手などを含む切手数点で',
      price: '620,000',
      location: '千葉県船橋市',
      service: '切手買取/出張買取を利用',
    },
    {
      id: 8,
      image: '/img/Achievement5000_Product_8.webp',
      description: '箪笥に眠っていた価値の高い着物 が多数',
      price: '380,000',
      location: '東京都文京区',
      service: '着物買取/出張買取を利用',
    },
    {
      id: 9,
      image: '/img/Achievement5000_Product_9.webp',
      description: '大判、小判など複数の古銭',
      price: '950,000',
      location: '神奈川県横浜市',
      service: '古銭買取/出張買取を利用',
    },
    {
      id: 10,
      image: '/img/Achievement5000_Product_10.webp',
      description: '本場大島紬を含む着物数点で',
      price: '210,000',
      location: '東京都新宿区',
      service: '着物買取/出張買取を利用',
    },
  ];

  // Duplicate items for seamless infinite loop (3 copies for smooth scrolling)
  const duplicatedAchievements = [...achievements, ...achievements, ...achievements];
  const totalItems = achievements.length;

  // Start at the middle set for seamless scrolling in both directions
  const [currentIndex, setCurrentIndex] = useState(totalItems);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4); // Default to 4 cards (desktop)
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Detect screen size and update visible cards count
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 1024) {
        // Mobile/Tablet: 1 card
        setVisibleCards(1);
      } else {
        // Desktop: 4 cards
        setVisibleCards(4);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          // When we reach the end of the second set, jump back to start of second set
          if (nextIndex >= totalItems * 2) {
            // Disable transition, jump, then re-enable
            if (carouselRef.current) {
              carouselRef.current.style.transition = 'none';
            }
            setTimeout(() => {
              setCurrentIndex(totalItems);
              setTimeout(() => {
                if (carouselRef.current) {
                  carouselRef.current.style.transition = '';
                }
              }, 10);
            }, 0);
            return totalItems;
          }
          return nextIndex;
        });
      }, 3000); // Move every 3 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, totalItems]);

  // Handle seamless loop reset
  useEffect(() => {
    if (currentIndex >= totalItems * 2) {
      if (carouselRef.current) {
        carouselRef.current.style.transition = 'none';
        setCurrentIndex(totalItems);
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = '';
          }
        }, 10);
      }
    } else if (currentIndex < 0) {
      if (carouselRef.current) {
        carouselRef.current.style.transition = 'none';
        setCurrentIndex(totalItems * 2 - 1);
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = '';
          }
        }, 10);
      }
    }
  }, [currentIndex, totalItems]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex < 0) {
        // Jump to end of second set
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
          setTimeout(() => {
            setCurrentIndex(totalItems * 2 - 1);
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition = '';
              }
            }, 10);
          }, 0);
        }
        return totalItems * 2 - 1;
      }
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= totalItems * 2) {
        // Jump to start of second set
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
          setTimeout(() => {
            setCurrentIndex(totalItems);
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition = '';
              }
            }, 10);
          }, 0);
        }
        return totalItems;
      }
      return newIndex;
    });
  };

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className=" relative w-full bg-[#f7efdb] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 z-20">
        {/* Header Section */}
        <div className="text-mesg mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-700 mb-3 md:mb-4">
            <span className="text-base md:text-lg lg:text-xl text-yellow-900">\ 今の相場で査定 /</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">バイセルの買取実績</span>
          </h2>
          <div className="space-y-2 md:space-y-3 mt-6 md:mt-8 text-sm md:text-base lg:text-lg text-yellow-900">
            <p>
              日本全国の豊富な買取実績と相場データをもとに、最新の買取相場で買取・無料査定いたします。
            </p>
            <p >
              <span className=' font-bold'>おかげさまで累計買取数は業界TOPクラス!</span> バイセルは<span className=' font-bold'>4,300万</span>点以上※の買取実績があります。
            </p>
            <p className="text-xs md:text-sm text-yellow-900">
              ※<span className=' font-bold'>2015~2024</span>年の合計買取数(当社調べ)
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-8 md:mb-12 overflow-hidden z-20">
          <div className="overflow-x-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% / ${visibleCards})))`,
              }}
            >
              {duplicatedAchievements.map((achievement, index) => (
                <div
                  key={`${achievement.id}-${index}`}
                  className="flex-shrink-0 w-full lg:w-1/4 px-2 md:px-3"
                >
                  <div className="bg-white rounded-lg border-1 border-yellow-800 shadow-sm overflow-hidden h-full flex flex-col z-20">
                    {/* Item Image - Fixed Height */}
                    <div className="relative w-full h-48 md:h-56 lg:h-64 flex-shrink-0 bg-gray-50">
                      <Image
                        src={achievement.image}
                        alt={achievement.description}
                        fill
                        className="object-contain"
                        priority={index >= totalItems && index < totalItems + visibleCards}
                      />
                    </div>

                    {/* Card Content - Fixed Layout */}
                    <div className="p-3 flex flex-col flex-1 min-h-0">
                      {/* Item Description - Fixed Height */}
                      <div className="h-20 flex-shrink-0 mb-2">
                        <p className="text-sm md:text-lg font-bold text-yellow-900 line-clamp-2 h-full">
                          {achievement.description}
                        </p>
                      </div>

                      {/* Price - Fixed Height */}
                      <div className=" flex flex-row h-8 md:h-10 lg:h-12 mb-3 md:mb-4 flex-shrink-0 text-red-600">
                        <p className=" flex items-end text-xs md:text-sm pr-1">
                          買取金額
                        </p>
                        <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                          {achievement.price}円
                        </p>
                      </div>

                      {/* Dotted Separator */}
                      <div className="border-t border-dotted border-gray-300 mb-3 md:mb-4 flex-shrink-0"></div>

                      {/* Location & Service Details - Fixed Height */}
                      <div className="h-8 md:h-10 flex-shrink-0">
                        <div className="flex items-start gap-2 text-xs md:text-sm text-yellow-800">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-2">
                            {achievement.location} <br/>{achievement.service}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="relative flex justify-center items-center gap-4 md:gap-6 z-20">
          <button
            onClick={handlePrevious}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-400 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </button>

          <button
            onClick={handleTogglePause}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-400 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label={isPaused ? 'Play' : 'Pause'}
          >
            {isPaused ? (
              <Play className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            ) : (
              <Pause className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            )}
          </button>

          <button
            onClick={handleNext}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-400 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </button>
        </div>
      </div>
      <div className=' absolute w-full bottom-0 bg-[#cf9707] h-70 z-0'>
      </div>
    </div>
  );
}

