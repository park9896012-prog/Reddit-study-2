import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { User, Search, Bell, Sparkles, Sliders, Palette, Crown, Headphones, Wand2, ShieldCheck } from 'lucide-react';

interface Step4Props {
  currentLang: Language;
}

export const Step4Profile: React.FC<Step4Props> = ({ currentLang }) => {
  const t = translations[currentLang].step4;

  // Snoo customization state
  const [snooBg, setSnooBg] = useState<string>('#FF4500');
  const [snooHat, setSnooHat] = useState<string>('Antenna');
  const [snooOutfit, setSnooOutfit] = useState<string>('Hoodie');
  const [avatarApplied, setAvatarApplied] = useState<boolean>(false);

  const handleApplyAvatar = () => {
    setAvatarApplied(true);
    setTimeout(() => setAvatarApplied(false), 3000);
  };

  const hatOptions = [
    { id: 'Antenna', label: 'Classic Antenna', icon: '📡' },
    { id: 'Headphones', label: 'Gamer Headphones', icon: '🎧' },
    { id: 'Crown', label: 'Golden Crown', icon: '👑' },
    { id: 'Wizard', label: 'Wizard Hat', icon: '🧙' },
  ];

  const outfitOptions = [
    { id: 'Hoodie', label: 'Streetwear Hoodie', icon: '🧥' },
    { id: 'Suit', label: 'Business Suit', icon: '👔' },
    { id: 'Astronaut', label: 'Space Suit', icon: '🚀' },
    { id: 'Superhero', label: 'Hero Cape', icon: '🦸' },
  ];

  const bgColors = [
    { color: '#FF4500', name: 'Reddit Red' },
    { color: '#0079D3', name: 'Classic Blue' },
    { color: '#46D160', name: 'Emerald' },
    { color: '#A5A4A4', name: 'Silver Gray' },
    { color: '#D73535', name: 'Crimson' },
    { color: '#FFB000', name: 'Gold' },
  ];

  return (
    <section id="step4" className="py-16 bg-[#F6F7F8] text-[#1A1A1B] border-b border-gray-200">
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

        {/* 3 Core Profile Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Snoo Avatar */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF4500]/10 text-[#FF4500] flex items-center justify-center font-bold">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">{t.snooTitle}</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {t.snooDesc}
            </p>
          </div>

          {/* Card 2: Search Bar Shortcuts */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">{t.searchTipsTitle}</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {t.searchTipsDesc}
            </p>
            <div className="flex gap-2 pt-1 font-mono text-xs">
              <span className="bg-gray-100 px-2 py-1 rounded font-bold text-[#FF4500]">r/topic</span>
              <span className="bg-gray-100 px-2 py-1 rounded font-bold text-blue-600">u/user</span>
            </div>
          </div>

          {/* Card 3: Notifications & Feed Sorting */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
              <Bell className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">{t.notifTitle}</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {t.notifDesc}
            </p>
          </div>

        </div>

        {/* Interactive Snoo Avatar Builder Box */}
        <div className="bg-[#1A1A1B] text-white rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-2xl">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-800">
            <div>
              <span className="text-xs font-extrabold text-[#FF4500] uppercase tracking-wider flex items-center gap-1">
                <Wand2 className="w-4 h-4" /> Avatar Builder Simulator
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {t.simulatorTitle}
              </h3>
              <p className="text-xs text-gray-400">{t.simulatorSubtitle}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Customize Controls Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Background Colors */}
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  배경 색상 (Background Color)
                </label>
                <div className="flex flex-wrap gap-3">
                  {bgColors.map((c) => (
                    <button
                      key={c.color}
                      type="button"
                      onClick={() => setSnooBg(c.color)}
                      style={{ backgroundColor: c.color }}
                      className={`w-9 h-9 rounded-full border-2 transition-all transform hover:scale-110 ${
                        snooBg === c.color ? 'border-white ring-2 ring-[#FF4500] scale-110' : 'border-transparent'
                      }`}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Hat Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  헤어 & 모자 아이템 (Headwear)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {hatOptions.map((hat) => (
                    <button
                      key={hat.id}
                      type="button"
                      onClick={() => setSnooHat(hat.id)}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-bold transition-all ${
                        snooHat === hat.id
                          ? 'bg-[#FF4500] text-white border-[#FF4500]'
                          : 'bg-[#272729] text-gray-300 border-gray-700 hover:text-white'
                      }`}
                    >
                      <span>{hat.icon}</span>
                      <span>{hat.id}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Outfit Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  의상 스타일 (Outfit Style)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {outfitOptions.map((outfit) => (
                    <button
                      key={outfit.id}
                      type="button"
                      onClick={() => setSnooOutfit(outfit.id)}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-bold transition-all ${
                        snooOutfit === outfit.id
                          ? 'bg-[#FF4500] text-white border-[#FF4500]'
                          : 'bg-[#272729] text-gray-300 border-gray-700 hover:text-white'
                      }`}
                    >
                      <span>{outfit.icon}</span>
                      <span>{outfit.id}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Live Rendered Avatar Card */}
            <div className="lg:col-span-5 bg-[#272729] border border-gray-700 rounded-3xl p-6 text-center space-y-4 shadow-xl">
              <span className="text-xs font-bold text-gray-400">나만의 Snoo Avatar 완성</span>

              {/* Avatar Canvas Representation */}
              <div
                style={{ backgroundColor: snooBg }}
                className="w-36 h-36 mx-auto rounded-full flex items-center justify-center text-6xl shadow-2xl relative border-4 border-white/20 transition-all duration-300"
              >
                🤖
                {/* Overlay Accessories Icons */}
                <span className="absolute -top-2 text-3xl">
                  {hatOptions.find((h) => h.id === snooHat)?.icon}
                </span>
                <span className="absolute -bottom-2 text-3xl">
                  {outfitOptions.find((o) => o.id === snooOutfit)?.icon}
                </span>
              </div>

              <div>
                <div className="font-extrabold text-lg text-white">u/CustomSnoo_Creator</div>
                <div className="text-xs text-amber-300 font-semibold mt-0.5">
                  Style: {snooHat} + {snooOutfit}
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={handleApplyAvatar}
                  className="w-full bg-[#FF4500] hover:bg-[#E03D00] text-white font-bold text-xs py-2.5 rounded-xl transition-all"
                >
                  {avatarApplied ? '✓ 아바타가 저장되었습니다!' : '아바타 적용하기 (Apply Avatar)'}
                </button>
                {avatarApplied && (
                  <p className="text-[11px] text-emerald-400 font-semibold animate-pulse">
                    Snoo 아바타 스타일이 브라우저 미리보기에 반영되었습니다.
                  </p>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
