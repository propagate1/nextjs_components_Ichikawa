'use client';
import Image from 'next/image';

export default function Challenges5001() {
  const roles = [
    {
      id: 1,
      avatar: '/img/Challenges5001_Avatar_1.png',
      role: '経営者',
      problems: [
        '・理念、方針が浸透しない',
        '・情報漏洩など、セキュリティが不安',
      ],
    },
    {
      id: 2,
      avatar: '/img/Challenges5001_Avatar_2.png',
      role: '人事担当者',
      problems: [
        '・離職率を下げたい',
        '・社員、組織管理コスト下げたい',
      ],
    },
    {
      id: 3,
      avatar: '/img/Challenges5001_Avatar_3.png',
      role: 'マネジャー',
      problems: [
        '・業務生産性を上げたい',
        '・コミュニケーションコストを下げたい',
      ],
    },
    {
      id: 4,
      avatar: '/img/Challenges5001_Avatar_4.png',
      role: '従業員',
      problems: [
        '・会社への帰属意識が持てない',
      ],
    },
  ];

  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          {/* Faded PR and EM text */}
          <div className="relative mb-4 md:mb-6">
            <div className="relative mb-4 md:mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-200 leading-none">
                PROBLEM
              </h1>
              {/* "特徴" Subtitle */}
              <div className="absolute text-left font-bold inset-0 flex items-center justify-center">
                <p className="text-lg md:text-xl lg:text-2xl text-black">
                  よくあるお悩み
                </p>
              </div>
            </div>

          </div>

          {/* Main Question */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight">
            こんなお悩み、ありませんか?
          </h1>
        </div>

        {/* Role Sections - Four Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 xl:gap-8">
          {roles.map((role) => (
            <div key={role.id} className="flex flex-col items-center">
              {/* Problem Box - Light Gray Rounded Rectangle */}
              <div className="w-full h-20 md:h-28 lg:h-40 bg-gray-200 rounded-lg md:rounded-xl p-4 md:p-5 mb-4 md:mb-6">
                <ul className="space-y-2 md:space-y-3">
                  {role.problems.map((problem, index) => (
                    <li
                      key={index}
                      className="text-sm md:text-base lg:text-lg text-black leading-relaxed font-bold"
                    >
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Avatar Illustration */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-36 lg:h-36 xl:w-40 xl:h-40 mb-4 md:mb-6">
                <Image
                  src={role.avatar}
                  alt={role.role}
                  fill
                  className="object-contain"
                  priority={role.id <= 2}
                />
              </div>
              {/* Role Label */}
              <p className="text-base md:text-lg lg:text-xl font-medium text-gray-600">
                {role.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

