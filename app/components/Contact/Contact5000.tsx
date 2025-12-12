'use client';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface FormData {
  inquiryType: string;
  companyName: string;
  name: string;
  email: string;
  inquiryContent: string;
}

export default function Contact5000() {
  const [formData, setFormData] = useState<FormData>({
    inquiryType: '',
    companyName: '',
    name: '',
    email: '',
    inquiryContent: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: value,
    }));
  };

  const handleReset = () => {
    setFormData({
      inquiryType: '',
      companyName: '',
      name: '',
      email: '',
      inquiryContent: '',
    });
  };

  const inquiryTypes = [
    { id: 'manufacturing-request', label: '製造依頼', value: 'manufacturing-request' },
    { id: 'manufacturing-inquiry', label: '製造についてのお問い合わせ', value: 'manufacturing-inquiry' },
    { id: 'job-application', label: '採用のご応募', value: 'job-application' },
    { id: 'other', label: 'その他お問い合わせ', value: 'other' },
  ];

  return (
    <div className="w-full bg-white py-8 md:py-12 lg:py-16 font-['Yu_Mincho','Hiragino_Mincho_ProN','MS_PMincho',serif]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row w-full gap-6 md:gap-8 lg:gap-10">
        <div className='  w-full md:w-1/4'>
          {/* Title */}
          <h1 className="text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600">
            メールでの<br className='hidden md:block' />お問い合せ
          </h1>
        </div>
        <div className=' w-full md:w-3/4'>
          {/* Header Section */}
          <div className="mb-8 md:mb-10 lg:mb-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 md:gap-6">
              {/* Introductory Text */}
              <div className="space-y-2 md:space-y-3 text-sm md:text-base text-black leading-relaxed">
                <p>メールでのお問い合わせをご希望の方はフォームよりお送り下さい。<br />送信内容を確認させていただき担当よりご連絡致します。</p>
                <p className="">
                  土・日・祝日・年末年始のお問い合わせについては、翌営業日以降に対応させていただきます。また、お問合せの内容によっては、ご回答できない場合やお時間がかかる場合がございますのであらかじめご了承ください。
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6 md:space-y-8">
            <div className=' border-t-2 border-dotted border-gray-300'></div>
            {/* Inquiry Type Section */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 md:gap-4">
                <label className="block w-full sm:w-36 md:w-48 text-sm md:text-base font-medium text-gray-600">
                  お問い合わせ種別{' '}
                  <span className="text-red-500 text-sm md:text-base">※必須</span>
                </label>
                <div className="grid grid-rows-4 md:grid-cols-2 gap-3 items-start">
                  {inquiryTypes.map((type) => (
                    <label
                      key={type.id}
                      className="flex gap-2 md:gap-3 cursor-pointer rounded hover:bg-gray-50 transition-colors items-start"
                    >
                      <input
                        type="radio"
                        name="inquiryType"
                        value={type.value}
                        checked={formData.inquiryType === type.value}
                        onChange={() => handleRadioChange(type.value)}
                        className="w-4 h-4 md:w-5 md:h-5 text-amber-700 focus:ring-1 focus:ring-black focus:ring-offset-2"
                      />
                      <span className="text-sm md:text-base text-black">
                        {type.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className=' border-t-2 border-dotted border-gray-300'></div>

            {/* Input Fields Section */}
            <div className="space-y-4 md:space-y-6">
              {/* Company Name */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4">
                <label className="w-full sm:w-36 md:w-48 text-sm md:text-base text-gray-600 font-medium">
                  企業名
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-[#f5f5f0] border border-gray-300 rounded text-sm md:text-base text-black focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
                />
              </div>
              <div className=' border-t-2 border-dotted border-gray-300'></div>

              {/* Name */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4">
                <label className="w-full sm:w-36 md:w-48 text-sm md:text-base text-gray-600 font-medium">
                  お名前{' '}
                  <span className="text-red-500 text-sm md:text-base">※必須</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-[#f5f5f0] border border-gray-300 rounded text-sm md:text-base text-black focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
                />
              </div>
              <div className=' border-t-2 border-dotted border-gray-300'></div>
              {/* Email */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4">
                <label className="w-full sm:w-36 md:w-48 text-sm md:text-base text-gray-600 font-medium">
                  Email{' '}
                  <span className="text-red-500 text-sm md:text-base">※必須</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-[#f5f5f0] border border-gray-300 rounded text-sm md:text-base text-black focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
                />
              </div>
              <div className=' border-t-2 border-dotted border-gray-300'></div>
              {/* Inquiry Content */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 md:gap-4">
                <label className="w-full sm:w-36 md:w-48 text-sm md:text-base text-gray-600 font-medium pt-2">
                  お問合せ内容{' '}
                  <span className="text-red-500 text-sm md:text-base">※必須</span>
                </label>
                <textarea
                  name="inquiryContent"
                  value={formData.inquiryContent}
                  onChange={handleInputChange}
                  required
                  rows={8}
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-[#f5f5f0] border border-gray-300 rounded text-sm md:text-base text-black focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent resize-y"
                />
              </div>
            </div>
            <div className=' border-t-2 border-dotted border-gray-300'></div>

            {/* Privacy Policy Section */}
            <div className="border border-gray-300 rounded p-4 md:p-6 space-y-4 md:space-y-6">
              <h2 className="text-center text-lg md:text-xl font-bold text-black">
                個人情報保護方針
              </h2>
              <div className="max-h-48 md:max-h-64 overflow-y-auto space-y-3 md:space-y-4 text-xs md:text-sm text-black leading-relaxed pr-2">
                <p>
                  有限会社佐四は、個人情報を適切に取扱うことが重要な社会的責務のひとつであると考え、以下の個人情報保護方針に基づき、個人情報の保護に努めることを宣言いたします。
                </p>
                <p>
                  <span className=' text-black font-semibold'>法令遵守等について</span><br />有限会社佐西は、個人情報の保護に関連する法令等を遵守いたします。
                </p>
                <p>
                  <span className=' text-black font-semibold'>個人情報の取得・利用について</span><br />有限会社佐酉は、個人情報について利用目的を特定したうえ、適法かつ公正な手段により取得するとともに、特定した目的以外には利用いたしません。
                </p>
                <p>
                  <span className=' text-black font-semibold'>個人情報の第三者への提供について</span><br />有限会社佐酉は、事前のご承諾を得た場合その他法令等に基づく手続を経た場合を除き、個人情報の第三者への提供は行いません。
                </p>
                <p>
                  <span className=' text-black font-semibold'>個人情報の適正な管理について</span><br />有限会社佐酉は、個人情報の適正な管理のために、本方針及び情報管理に関する諸規程等に基づき必要かつ適切な安全管理措置を講じるとともに、役員及び従業員その他関係者に対し必要な教育を行います。
                </p>
              </div>
            </div>

            {/* Action Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6">
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 sm:flex-none sm:w-36 md:w-48 bg-gray-600 hover:bg-gray-700 text-white px-4 md:px-6 py-4 md:py-6  text-sm md:text-base font-medium transition-colors"
              >
                リセット
              </button>
              <button
                type="submit"
                className="flex-1 sm:flex-auto bg-[#8b6914] hover:bg-[#6b5010] text-white px-4 md:px-6 py-4 md:py-6  text-sm md:text-base font-medium transition-colors flex items-center justify-center gap-2 group"
              >
                <span>送信内容を確認する</span>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-5" />
              </button>
            </div>
          </form>
        </div>
      </div >

    </div >
  );
}

