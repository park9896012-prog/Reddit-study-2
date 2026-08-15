import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ArrowDown, MessageSquare, Flame, ShieldCheck, Sparkles, Compass, Users } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang].hero;

  return (
    <section id="hero" className="relative bg-[#1A1A1B] text-white pt-12 pb-20 overflow-hidden border-b border-[#343536]">
      {/* Background Subtle Gradient Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#FF4500]/15 via-transparent to-transparent pointer-events-none blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#272729] border border-[#FF4500]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#FF4500] shadow-sm animate-pulse">
              <Flame className="w-4 h-4 fill-current" />
              <span>{t.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              {t.title.split('Reddit')[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF7A00]">
                Reddit
              </span>
              {t.title.split('Reddit')[1]}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
              {t.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#step1"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#FF4500] hover:bg-[#E03D00] text-white font-bold text-base px-7 py-3.5 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 group"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#subreddits"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#272729] hover:bg-[#343536] text-gray-200 hover:text-white font-semibold text-base px-6 py-3.5 rounded-full border border-gray-700 transition-all"
              >
                <Compass className="w-5 h-5 text-[#FF4500]" />
                <span>{t.ctaSecondary}</span>
              </a>
            </div>

            {/* Quick Stats Ticker */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800">
              <div className="bg-[#272729]/60 backdrop-blur border border-gray-800 rounded-2xl p-3 text-center lg:text-left">
                <div className="text-2xl font-black text-[#FF4500]">{t.stats.time}</div>
                <div className="text-xs text-gray-400 font-medium">{t.stats.timeLabel}</div>
              </div>

              <div className="bg-[#272729]/60 backdrop-blur border border-gray-800 rounded-2xl p-3 text-center lg:text-left">
                <div className="text-2xl font-black text-amber-400">{t.stats.difficulty}</div>
                <div className="text-xs text-gray-400 font-medium">{t.stats.difficultyLabel}</div>
              </div>

              <div className="bg-[#272729]/60 backdrop-blur border border-gray-800 rounded-2xl p-3 text-center lg:text-left">
                <div className="text-2xl font-black text-emerald-400">{t.stats.subreddits}</div>
                <div className="text-xs text-gray-400 font-medium">{t.stats.subredditsLabel}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Graphic / Reddit Community Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-[#272729] border border-[#343536] rounded-3xl p-6 shadow-2xl">
              
              {/* Header Bar Mockup */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF4500] flex items-center justify-center text-white font-black text-xl shadow-md">
                    r/
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white flex items-center gap-1.5">
                      r/welcome_to_reddit
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-xs text-gray-400 flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-[#FF4500]" /> 1,240,000 Members
                      </span>
                    </div>
                  </div>
                </div>
                <button className="bg-[#FF4500] text-white text-xs font-bold px-3.5 py-1.5 rounded-full hover:bg-[#E03D00] transition-colors">
                  Join
                </button>
              </div>

              {/* Sample Post Card Inside Visual */}
              <div className="mt-4 bg-[#1A1A1B] border border-gray-800 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Posted by u/RedditBeginner_2026</span>
                  </div>
                  <span className="bg-[#FF4500]/20 text-[#FF4500] font-bold px-2 py-0.5 rounded text-[10px]">
                    GUIDE
                  </span>
                </div>

                <h3 className="font-bold text-base text-gray-100">
                  👋 Reddit에 처음 오셨나요? 핵심 카르마와 서브레딧 규칙 총정리!
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">
                  익명으로 관심사를 나누고 글로벌 소통을 시작해 보세요. 업보트(▲) 버튼 하나로 가치 있는 콘텐츠가 상단으로 올라갑니다!
                </p>

                {/* Post Footer Votes & Comments */}
                <div className="flex items-center gap-3 pt-2 text-xs font-bold text-gray-300">
                  <div className="flex items-center gap-1 bg-[#272729] px-3 py-1.5 rounded-full border border-gray-700 text-[#FF4500]">
                    <span>▲</span>
                    <span>12.4k</span>
                    <span>▼</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#272729] px-3 py-1.5 rounded-full border border-gray-700">
                    <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
                    <span>842 Comments</span>
                  </div>
                </div>
              </div>

              {/* Decorative Snoo Mascot Graphic Card */}
              <div className="mt-4 bg-gradient-to-r from-[#FF4500]/20 to-amber-500/20 border border-[#FF4500]/30 rounded-2xl p-4 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-xs font-extrabold text-amber-300 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Quick Tip
                  </div>
                  <div className="text-xs text-gray-200 font-medium">
                    아래 4가지 단계를 따라가면 3분 만에 모든 준비 완료!
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#FF4500] flex items-center justify-center text-white text-2xl font-black shadow-lg">
                  🤖
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
