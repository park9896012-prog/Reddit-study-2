import React, { useState } from 'react';
import { Language } from '../types';
import { translations, sampleSubreddits } from '../translations';
import { Search, Compass, Users, ExternalLink, Check, Sparkles } from 'lucide-react';

interface SubredditFinderProps {
  currentLang: Language;
}

export const SubredditFinder: React.FC<SubredditFinderProps> = ({ currentLang }) => {
  const t = translations[currentLang].subredditsSection;

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [joinedSubreddits, setJoinedSubreddits] = useState<string[]>([]);

  const categories = ['All', 'General', 'Learning', 'Gaming', 'Tech', 'Language', 'Humor'];

  const toggleJoin = (id: string) => {
    if (joinedSubreddits.includes(id)) {
      setJoinedSubreddits(joinedSubreddits.filter((s) => s !== id));
    } else {
      setJoinedSubreddits([...joinedSubreddits, id]);
    }
  };

  const filteredSubreddits = sampleSubreddits.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description[currentLang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      activeCategory === 'All' || item.category.toLowerCase() === activeCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="subreddits" className="py-16 bg-[#F6F7F8] text-[#1A1A1B] border-b border-gray-200">
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

        {/* Filter Bar Controls */}
        <div className="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm mb-10 space-y-4">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-[#F6F7F8] border border-gray-200 rounded-2xl pl-12 pr-4 py-3 text-sm font-semibold text-gray-900 focus:outline-none focus:border-[#FF4500] transition-colors"
            />
          </div>

          {/* Category Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-bold px-4 py-2 rounded-full border transition-all ${
                    isActive
                      ? 'bg-[#FF4500] text-white border-[#FF4500] shadow-md'
                      : 'bg-[#F6F7F8] text-gray-700 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  {cat === 'All' ? t.allCategory : cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Subreddit Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSubreddits.map((item) => {
            const isJoined = joinedSubreddits.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-[#FF4500] text-white flex items-center justify-center font-black text-xs">
                        r/
                      </div>
                      <div>
                        <h4 className="font-extrabold text-base text-gray-900">{item.name}</h4>
                        <div className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
                          <Users className="w-3 h-3 text-[#FF4500]" /> {item.members} Members
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-normal min-h-[48px]">
                    {item.description[currentLang]}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Join & External Link Buttons */}
                <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                  <button
                    onClick={() => toggleJoin(item.id)}
                    className={`flex-1 text-xs font-extrabold py-2 rounded-xl transition-all flex items-center justify-center gap-1 ${
                      isJoined
                        ? 'bg-emerald-500 text-white shadow'
                        : 'bg-[#FF4500] hover:bg-[#E03D00] text-white shadow-sm'
                    }`}
                  >
                    {isJoined ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Joined</span>
                      </>
                    ) : (
                      <span>+ Join</span>
                    )}
                  </button>

                  <a
                    href={`https://www.reddit.com/${item.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-xl transition-colors"
                    title="Visit Reddit"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
