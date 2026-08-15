import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { UserPlus, Shield, Check, Heart, Sparkles, UserCheck, Lock, Chrome } from 'lucide-react';

interface Step1Props {
  currentLang: Language;
}

export const Step1Account: React.FC<Step1Props> = ({ currentLang }) => {
  const t = translations[currentLang].step1;

  // Simulator state
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Gaming', 'Tech']);
  const [nickname, setNickname] = useState<string>('SnooExplorer_2026');
  const [accountCreated, setAccountCreated] = useState<boolean>(false);

  const interestOptions = [
    { id: 'Gaming', emoji: '🎮', label: 'Gaming' },
    { id: 'Tech', emoji: '💻', label: 'Technology' },
    { id: 'Memes', emoji: '😂', label: 'Humor & Memes' },
    { id: 'Movies', emoji: '🎬', label: 'Movies & TV' },
    { id: 'Science', emoji: '🔬', label: 'Science & TIL' },
    { id: 'Kpop', emoji: '🎵', label: 'K-Pop & Music' },
    { id: 'Food', emoji: '🍕', label: 'Food & Cooking' },
    { id: 'Sports', emoji: '⚽', label: 'Sports & Fitness' },
  ];

  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== id));
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  return (
    <section id="step1" className="py-16 bg-white text-[#1A1A1B] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="text-center space-y-3 mb-12">
          <span className="inline-block bg-[#FF4500]/10 text-[#FF4500] font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            {t.tag}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* Grid: 3 Concept Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Google Signup */}
          <div className="bg-[#F6F7F8] border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
              <Chrome className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">{t.googleSignupTitle}</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {t.googleSignupDesc}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-600">
              <Check className="w-4 h-4" /> 5초 간편 가입 지원
            </div>
          </div>

          {/* Card 2: Anonymity Nickname */}
          <div className="bg-[#F6F7F8] border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF4500]/10 text-[#FF4500] flex items-center justify-center font-bold">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">{t.usernameTipsTitle}</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {t.usernameTipsDesc}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#FF4500]">
              <Lock className="w-4 h-4" /> 익명성 100% 보장
            </div>
          </div>

          {/* Card 3: Interests Selection */}
          <div className="bg-[#F6F7F8] border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">{t.interestsTitle}</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {t.interestsDesc}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-amber-600">
              <Sparkles className="w-4 h-4" /> 맞춤 메인 피드 자동 생성
            </div>
          </div>

        </div>

        {/* Interactive Signup & Interest Selector Simulator Box */}
        <div className="bg-[#1A1A1B] text-white rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-2xl space-y-6">
          
          {/* Security & Anti-Phishing Safety Note Banner */}
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 flex items-start sm:items-center gap-3 text-xs text-emerald-300 font-medium">
            <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
            <div className="leading-relaxed">
              {t.simulatorSafetyNote}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-gray-800 gap-4">
            <div>
              <span className="text-xs font-extrabold text-[#FF4500] uppercase tracking-wider flex items-center gap-1">
                <UserPlus className="w-4 h-4" /> Interactive Sandbox Simulator
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                {t.simulatorTitle}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                {t.simulatorSubtitle}
              </p>
            </div>

            {accountCreated && (
              <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4" /> 가상 계정 생성 테스트 성공!
              </span>
            )}
          </div>

          {/* Simulator Form Controls */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Nickname Input */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                  가상 닉네임 (Username) 테스트 입력
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">
                    u/
                  </span>
                  <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value.replace(/[^a-zA-Z0-9_]/g, ''))}
                    maxLength={20}
                    className="w-full bg-[#272729] border border-gray-700 rounded-xl pl-9 pr-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-[#FF4500] transition-colors"
                    placeholder="SnooExplorer_2026 (비밀번호 수집 없음)"
                  />
                </div>
                <p className="text-[11px] text-gray-400 flex items-center gap-1">
                  <span>* 오프라인 시뮬레이션용 가상 ID입니다 (비밀번호나 이메일을 수집하지 않습니다).</span>
                </p>
              </div>

              {/* Interest Badges Toggle */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                  관심 카테고리 선택 ({selectedInterests.length}개 선택됨)
                </label>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map((item) => {
                    const isSelected = selectedInterests.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleInterest(item.id)}
                        className={`text-xs font-semibold px-3.5 py-2 rounded-full border transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#FF4500] text-white border-[#FF4500] shadow-md scale-105'
                            : 'bg-[#272729] text-gray-300 border-gray-700 hover:border-gray-500'
                        }`}
                      >
                        <span>{item.emoji}</span>
                        <span>{item.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Simulator Button */}
              <button
                onClick={() => setAccountCreated(true)}
                className="w-full bg-gradient-to-r from-[#FF4500] to-[#FF7A00] hover:from-[#E03D00] hover:to-[#FF5700] text-white font-extrabold text-sm py-3.5 rounded-xl shadow-lg transition-all transform active:scale-95"
              >
                계정 생성 및 피드 생성 테스트 (Simulate Signup)
              </button>

            </div>

            {/* Live Result Preview Mockup */}
            <div className="lg:col-span-5 bg-[#272729] border border-gray-700 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-700">
                <span className="text-xs font-bold text-gray-300">내 계정 카드 미리보기</span>
                <span className="text-[10px] text-gray-400 bg-black/40 px-2 py-0.5 rounded">Mockup</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FF4500] flex items-center justify-center text-white text-2xl font-bold shadow">
                  🤖
                </div>
                <div>
                  <div className="font-extrabold text-base text-white">
                    u/{nickname || 'Guest_User'}
                  </div>
                  <div className="text-xs text-emerald-400 font-medium">
                    1 Karma • Reddit Joined Just Now
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <div className="text-xs font-semibold text-gray-400">구독 중인 서브레딧 피드:</div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedInterests.length > 0 ? (
                    selectedInterests.map((interest) => (
                      <span
                        key={interest}
                        className="bg-[#1A1A1B] text-[#FF4500] text-xs font-bold px-2.5 py-1 rounded-md border border-[#FF4500]/30"
                      >
                        r/{interest.toLowerCase()}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-gray-500 italic">카테고리를 선택해 주세요</span>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
