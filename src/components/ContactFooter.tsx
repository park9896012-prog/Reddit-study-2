import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Mail, Copy, Check, MessageSquare, Globe, Heart, ShieldAlert } from 'lucide-react';

interface ContactFooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ currentLang, onLanguageChange }) => {
  const t = translations[currentLang].footer;
  const [copied, setCopied] = useState(false);

  const contactEmail = 'ju9896012@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  return (
    <footer className="bg-[#0F0F10] text-gray-400 py-12 border-t border-[#272729]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Footer Section */}
        <div className="grid md:grid-cols-12 gap-8 items-start pb-8 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FF4500] flex items-center justify-center text-white font-bold">
                <MessageSquare className="w-4 h-4 fill-current" />
              </div>
              <span className="font-extrabold text-lg text-white">
                Reddit <span className="text-[#FF4500]">Guide</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-md leading-relaxed font-normal">
              {t.title}. 가입부터 첫 글 작성, 서브레딧 탐색, 카르마 시스템까지 초보자를 위한 다국어 완벽 가이드.
            </p>
          </div>

          {/* Contact Email & Language Switcher Column */}
          <div className="md:col-span-6 space-y-4 md:text-right">
            
            {/* Email Contact Card */}
            <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-[#1A1A1B] border border-gray-800 p-3.5 rounded-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-200">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>연락처 이메일:</span>
                <span className="text-amber-300 font-mono text-sm font-extrabold">{contactEmail}</span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="bg-[#FF4500] hover:bg-[#E03D00] text-white text-xs font-bold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>복사됨!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>이메일 복사</span>
                  </>
                )}
              </button>
            </div>

            {copied && (
              <p className="text-[11px] text-emerald-400 font-semibold animate-pulse">
                {t.emailCopySuccess}
              </p>
            )}

            {/* Language Selector Buttons */}
            <div className="flex flex-wrap items-center md:justify-end gap-1.5 pt-2">
              <Globe className="w-4 h-4 text-[#FF4500] mr-1" />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code)}
                  className={`text-xs font-bold px-3 py-1 rounded-full border transition-all ${
                    currentLang === lang.code
                      ? 'bg-[#FF4500] text-white border-[#FF4500]'
                      : 'bg-[#1A1A1B] text-gray-400 border-gray-800 hover:text-white'
                  }`}
                >
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-normal">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldAlert className="w-4 h-4 text-gray-400 shrink-0" />
            <p>{t.disclaimer}</p>
          </div>

          <div className="text-center md:text-right font-medium">
            {t.copyrightNotice}
          </div>
        </div>

      </div>
    </footer>
  );
};
