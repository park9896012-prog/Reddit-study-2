import React, { useState } from 'react';
import { Language } from '../types';
import { translations, glossaryTerms } from '../translations';
import { HelpCircle, ChevronDown, ChevronUp, Calculator, BookOpen, Sparkles, Flame, Check } from 'lucide-react';

interface KarmaQuizFAQProps {
  currentLang: Language;
}

export const KarmaQuizFAQ: React.FC<KarmaQuizFAQProps> = ({ currentLang }) => {
  const t = translations[currentLang].faq;

  // FAQ accordion open states
  const [openFaq, setOpenFaq] = useState<'subreddit' | 'karma' | null>('subreddit');

  // Karma Simulator sliders
  const [postUpvotesInput, setPostUpvotesInput] = useState<number>(150);
  const [commentUpvotesInput, setCommentUpvotesInput] = useState<number>(320);

  // Approximate Karma Formula (Upvotes diminishing returns curve)
  const calculatedPostKarma = Math.floor(postUpvotesInput * 0.85);
  const calculatedCommentKarma = Math.floor(commentUpvotesInput * 0.95);
  const totalKarma = calculatedPostKarma + calculatedCommentKarma;

  return (
    <section id="faq" className="py-16 bg-white text-[#1A1A1B] border-b border-gray-200">
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

        {/* 2 Main FAQ Accordions */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          
          {/* FAQ 1: Subreddit */}
          <div className="bg-[#F6F7F8] border border-gray-200 rounded-2xl overflow-hidden transition-all">
            <button
              onClick={() => setOpenFaq(openFaq === 'subreddit' ? null : 'subreddit')}
              className="w-full text-left p-5 flex items-center justify-between font-bold text-base sm:text-lg text-gray-900 hover:text-[#FF4500] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FF4500]/10 text-[#FF4500] flex items-center justify-center text-sm font-black">
                  Q1
                </span>
                <span>{t.whatIsSubredditQ}</span>
              </div>
              {openFaq === 'subreddit' ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </button>

            {openFaq === 'subreddit' && (
              <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-4 font-normal">
                {t.whatIsSubredditA}
              </div>
            )}
          </div>

          {/* FAQ 2: Karma */}
          <div className="bg-[#F6F7F8] border border-gray-200 rounded-2xl overflow-hidden transition-all">
            <button
              onClick={() => setOpenFaq(openFaq === 'karma' ? null : 'karma')}
              className="w-full text-left p-5 flex items-center justify-between font-bold text-base sm:text-lg text-gray-900 hover:text-[#FF4500] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FF4500]/10 text-[#FF4500] flex items-center justify-center text-sm font-black">
                  Q2
                </span>
                <span>{t.whatIsKarmaQ}</span>
              </div>
              {openFaq === 'karma' ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </button>

            {openFaq === 'karma' && (
              <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-4 font-normal">
                {t.whatIsKarmaA}
              </div>
            )}
          </div>

        </div>

        {/* Interactive Karma Calculator Simulator */}
        <div className="bg-[#1A1A1B] text-white rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-2xl mb-16">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-800">
            <div>
              <span className="text-xs font-extrabold text-[#FF4500] uppercase tracking-wider flex items-center gap-1">
                <Calculator className="w-4 h-4" /> Karma Formula Simulator
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {t.karmaSimulatorTitle}
              </h3>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Slider Inputs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Post Upvotes Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-gray-300">
                  <span>게시글에서 받은 업보트 (Post Upvotes):</span>
                  <span className="text-[#FF4500] font-black text-sm">{postUpvotesInput} ▲</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={2000}
                  step={10}
                  value={postUpvotesInput}
                  onChange={(e) => setPostUpvotesInput(Number(e.target.value))}
                  className="w-full accent-[#FF4500] bg-gray-700 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Comment Upvotes Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-gray-300">
                  <span>댓글에서 받은 업보트 (Comment Upvotes):</span>
                  <span className="text-amber-400 font-black text-sm">{commentUpvotesInput} ▲</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={2000}
                  step={10}
                  value={commentUpvotesInput}
                  onChange={(e) => setCommentUpvotesInput(Number(e.target.value))}
                  className="w-full accent-amber-400 bg-gray-700 h-2 rounded-lg cursor-pointer"
                />
              </div>

            </div>

            {/* Calculated Result Display Card */}
            <div className="lg:col-span-5 bg-[#272729] border border-gray-700 rounded-3xl p-6 text-center space-y-3 shadow-xl">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                예상 획득 카르마 (Calculated Total Karma)
              </span>

              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-amber-400">
                {totalKarma.toLocaleString()} <span className="text-2xl text-gray-400 font-bold">Karma</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-semibold pt-2 border-t border-gray-700">
                <div className="bg-[#1A1A1B] p-2.5 rounded-xl text-gray-300">
                  Post Karma: <span className="text-[#FF4500] font-bold">{calculatedPostKarma}</span>
                </div>
                <div className="bg-[#1A1A1B] p-2.5 rounded-xl text-gray-300">
                  Comment Karma: <span className="text-amber-400 font-bold">{calculatedCommentKarma}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Glossary Terms Grid */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#FF4500] uppercase tracking-wider flex items-center justify-center gap-1">
              <BookOpen className="w-4 h-4" /> Glossary
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">
              {t.glossaryTitle}
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {glossaryTerms.map((item) => (
              <div
                key={item.term}
                className="bg-[#F6F7F8] border border-gray-200 rounded-2xl p-5 hover:border-[#FF4500]/50 hover:shadow-md transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-base text-gray-900">{item.term}</span>
                  {item.fullName && (
                    <span className="text-[10px] bg-[#FF4500]/10 text-[#FF4500] font-bold px-2 py-0.5 rounded">
                      {item.fullName}
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {item.meaning[currentLang]}
                </p>

                {item.example && (
                  <div className="text-[11px] font-mono text-gray-500 pt-1 border-t border-gray-200">
                    ex: {item.example}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
