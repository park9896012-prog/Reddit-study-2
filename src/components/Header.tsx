import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { MessageSquare, Globe, Menu, X, Sparkles, Mail, Compass } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang].nav;

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const navLinks = [
    { href: '#step1', label: t.step1 },
    { href: '#step2', label: t.step2 },
    { href: '#step3', label: t.step3 },
    { href: '#step4', label: t.step4 },
    { href: '#faq', label: t.faq },
    { href: '#subreddits', label: t.subreddits },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1A1A1B] text-white border-b border-[#343536] shadow-md backdrop-blur-md bg-opacity-95">
      {/* Top Security & Safety Banner Bar */}
      <div className="bg-[#272729] border-b border-gray-800 py-1 px-4 text-center text-[11px] font-semibold text-emerald-400 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>{t.safetyBanner}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Snoo Icon */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full bg-[#FF4500] flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-200">
            <MessageSquare className="w-5 h-5 fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-[#FF4500] transition-colors">
                Reddit <span className="text-[#FF4500]">Guide</span>
              </span>
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/30">
                Unofficial Guide
              </span>
            </div>
            <p className="text-[11px] text-gray-400 font-medium hidden sm:block">
              비공식 학습용 가이드 (100% 안전)
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs xl:text-sm font-medium text-gray-300 hover:text-white hover:bg-[#272729] px-3 py-1.5 rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Controls: Language Switcher & Contact Email */}
        <div className="flex items-center gap-2.5">
          {/* Language Selector Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1.5 bg-[#272729] hover:bg-[#343536] text-gray-200 text-xs font-semibold px-3 py-2 rounded-full border border-gray-700 transition-all"
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#FF4500]" />
              <span>{languages.find((l) => l.code === currentLang)?.flag}</span>
              <span className="hidden sm:inline-block">
                {languages.find((l) => l.code === currentLang)?.label}
              </span>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-1 w-36 bg-[#1A1A1B] border border-gray-700 rounded-xl shadow-xl py-1 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-150 z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code)}
                  className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center gap-2 hover:bg-[#272729] transition-colors ${
                    currentLang === lang.code ? 'text-[#FF4500] font-bold bg-[#272729]/50' : 'text-gray-300'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Contact Link */}
          <a
            href="mailto:ju9896012@gmail.com"
            className="hidden sm:flex items-center gap-1.5 text-xs text-gray-300 hover:text-white bg-[#272729] hover:bg-[#343536] px-3 py-2 rounded-full border border-gray-700 transition-colors"
            title="Contact Email"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden xl:inline">ju9896012@gmail.com</span>
          </a>

          {/* CTA Mobile / Desktop Button */}
          <a
            href="#step1"
            className="hidden md:flex items-center gap-1.5 bg-[#FF4500] hover:bg-[#E03D00] text-white text-xs font-bold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.startGuide}</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#272729]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A1A1B] border-t border-gray-800 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-200 hover:text-[#FF4500] hover:bg-[#272729] px-3 py-2.5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-gray-800 flex flex-col gap-2">
            <div className="text-xs text-gray-400 font-semibold px-1">언어 변경 (Select Language)</div>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-2 border ${
                    currentLang === lang.code
                      ? 'border-[#FF4500] text-[#FF4500] bg-[#FF4500]/10'
                      : 'border-gray-700 text-gray-300 bg-[#272729]'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
            <a
              href="mailto:ju9896012@gmail.com"
              className="flex items-center justify-center gap-2 text-xs font-medium text-amber-300 bg-[#272729] py-2.5 rounded-lg border border-amber-500/20 mt-2"
            >
              <Mail className="w-4 h-4" />
              <span>ju9896012@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
