import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { FileText, Image as ImageIcon, Link as LinkIcon, BarChart2, PlusCircle, Tag, Send, Sparkles, CheckCircle2 } from 'lucide-react';

interface Step2Props {
  currentLang: Language;
}

export const Step2Post: React.FC<Step2Props> = ({ currentLang }) => {
  const t = translations[currentLang].step2;

  // Simulator state
  const [postType, setPostType] = useState<'text' | 'image' | 'link' | 'poll'>('text');
  const [targetSubreddit, setTargetSubreddit] = useState('r/AskReddit');
  const [postTitle, setPostTitle] = useState('Reddit 초보자를 위한 가장 유용한 서브레딧은 어디인가요?');
  const [postBody, setPostBody] = useState('오늘 처음 가입했는데, 가볍게 사람들과 소통하기 좋은 관심 커뮤니티가 궁금합니다!');
  const [postFlair, setPostFlair] = useState('[Question]');
  const [publishedPosts, setPublishedPosts] = useState<Array<{
    id: number;
    type: string;
    subreddit: string;
    title: string;
    body: string;
    flair: string;
    votes: number;
    time: string;
  }>>([
    {
      id: 1,
      type: 'text',
      subreddit: 'r/AskReddit',
      title: 'Reddit 초보자를 위한 가장 유용한 서브레딧은 어디인가요?',
      body: '오늘 처음 가입했는데, 가볍게 사람들과 소통하기 좋은 관심 커뮤니티가 궁금합니다!',
      flair: '[Question]',
      votes: 1,
      time: 'Just now',
    },
  ]);

  const handlePublishPost = () => {
    if (!postTitle.trim()) return;
    const newPost = {
      id: Date.now(),
      type: postType,
      subreddit: targetSubreddit,
      title: postTitle,
      body: postBody,
      flair: postFlair,
      votes: 1,
      time: 'Just now',
    };
    setPublishedPosts([newPost, ...publishedPosts]);
  };

  return (
    <section id="step2" className="py-16 bg-[#F6F7F8] text-[#1A1A1B] border-b border-gray-200">
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

        {/* 3 Core Workflow Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Create Button Location */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF4500]/10 text-[#FF4500] flex items-center justify-center font-bold">
              <PlusCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">{t.createBtnTitle}</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {t.createBtnDesc}
            </p>
          </div>

          {/* Card 2: 4 Post Types */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">{t.postTypesTitle}</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {t.postTypesDesc}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="bg-gray-100 text-gray-700 text-[11px] font-bold px-2 py-0.5 rounded">Text</span>
              <span className="bg-gray-100 text-gray-700 text-[11px] font-bold px-2 py-0.5 rounded">Media</span>
              <span className="bg-gray-100 text-gray-700 text-[11px] font-bold px-2 py-0.5 rounded">Link</span>
              <span className="bg-gray-100 text-gray-700 text-[11px] font-bold px-2 py-0.5 rounded">Poll</span>
            </div>
          </div>

          {/* Card 3: Community & Flair */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
              <Tag className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">{t.communitySelectTitle}</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {t.communitySelectDesc}
            </p>
          </div>

        </div>

        {/* Interactive Post Builder Simulator */}
        <div className="bg-[#1A1A1B] text-white rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-2xl space-y-6">
          
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-3.5 text-xs text-blue-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>ℹ️ 시뮬레이터 안내: 아래 작성 창은 브라우저 가상 데모이며 서버로 전송되거나 실제 Reddit.com에 업로드되지 않습니다.</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-gray-800 gap-2">
            <div>
              <span className="text-xs font-extrabold text-[#FF4500] uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-4 h-4" /> Reddit Post Editor Mockup
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {t.simulatorTitle}
              </h3>
            </div>
            <span className="text-xs text-gray-400 bg-[#272729] px-3 py-1.5 rounded-full border border-gray-700">
              실시간 글 작성 및 업로드 테스트
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Editor Input Column */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Select Community */}
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  1. 게시할 커뮤니티 (Subreddit) 선택
                </label>
                <select
                  value={targetSubreddit}
                  onChange={(e) => setTargetSubreddit(e.target.value)}
                  className="w-full bg-[#272729] border border-gray-700 rounded-xl px-4 py-3 text-sm font-bold text-white focus:outline-none focus:border-[#FF4500]"
                >
                  <option value="r/AskReddit">r/AskReddit (질문 & 답변)</option>
                  <option value="r/gaming">r/gaming (게임 관련)</option>
                  <option value="r/technology">r/technology (IT/테크)</option>
                  <option value="r/korea">r/korea (한국 정보 & 문화)</option>
                  <option value="r/todayilearned">r/todayilearned (오늘 배운 지식)</option>
                </select>
              </div>

              {/* Select Format Tab */}
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  2. 게시글 유형 선택
                </label>
                <div className="grid grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setPostType('text')}
                    className={`flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 rounded-xl border transition-all ${
                      postType === 'text'
                        ? 'bg-[#FF4500] text-white border-[#FF4500]'
                        : 'bg-[#272729] text-gray-400 border-gray-700 hover:text-white'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" /> Text
                  </button>

                  <button
                    type="button"
                    onClick={() => setPostType('image')}
                    className={`flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 rounded-xl border transition-all ${
                      postType === 'image'
                        ? 'bg-[#FF4500] text-white border-[#FF4500]'
                        : 'bg-[#272729] text-gray-400 border-gray-700 hover:text-white'
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5" /> Media
                  </button>

                  <button
                    type="button"
                    onClick={() => setPostType('link')}
                    className={`flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 rounded-xl border transition-all ${
                      postType === 'link'
                        ? 'bg-[#FF4500] text-white border-[#FF4500]'
                        : 'bg-[#272729] text-gray-400 border-gray-700 hover:text-white'
                    }`}
                  >
                    <LinkIcon className="w-3.5 h-3.5" /> Link
                  </button>

                  <button
                    type="button"
                    onClick={() => setPostType('poll')}
                    className={`flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 rounded-xl border transition-all ${
                      postType === 'poll'
                        ? 'bg-[#FF4500] text-white border-[#FF4500]'
                        : 'bg-[#272729] text-gray-400 border-gray-700 hover:text-white'
                    }`}
                  >
                    <BarChart2 className="w-3.5 h-3.5" /> Poll
                  </button>
                </div>
              </div>

              {/* Title & Body Inputs */}
              <div className="space-y-3">
                <input
                  type="text"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  placeholder="제목을 입력하세요 (Title)..."
                  className="w-full bg-[#272729] border border-gray-700 rounded-xl px-4 py-3 text-sm font-bold text-white placeholder-gray-500 focus:outline-none focus:border-[#FF4500]"
                />

                <textarea
                  value={postBody}
                  onChange={(e) => setPostBody(e.target.value)}
                  rows={3}
                  placeholder="본문 내용을 자유롭게 작성하세요 (Body text)..."
                  className="w-full bg-[#272729] border border-gray-700 rounded-xl px-4 py-3 text-xs font-normal text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#FF4500]"
                />
              </div>

              {/* Flair Tag Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  3. 말머리 태그 (Flair) 지정
                </label>
                <div className="flex flex-wrap gap-2">
                  {['[Question]', '[Discussion]', '[News]', '[Help]', '[OC]'].map((flair) => (
                    <button
                      key={flair}
                      type="button"
                      onClick={() => setPostFlair(flair)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                        postFlair === flair
                          ? 'bg-[#FF4500]/20 text-[#FF4500] border-[#FF4500]'
                          : 'bg-[#272729] text-gray-400 border-gray-700'
                      }`}
                    >
                      {flair}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Post Button */}
              <button
                onClick={handlePublishPost}
                className="w-full bg-[#FF4500] hover:bg-[#E03D00] text-white font-extrabold text-sm py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Reddit에 글 등록하기 (Post)</span>
              </button>

            </div>

            {/* Live Feed Output Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-gray-800">
                <span className="text-xs font-bold text-gray-300">게시된 커뮤니티 피드</span>
                <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Live Rendered
                </span>
              </div>

              <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                {publishedPosts.map((post) => (
                  <div key={post.id} className="bg-[#272729] border border-gray-700 rounded-2xl p-4 space-y-2 shadow">
                    
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#FF4500]">{post.subreddit}</span>
                        <span>• Posted by u/RedditBeginner_2026</span>
                      </div>
                      <span className="text-[10px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                        {post.time}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="bg-[#FF4500]/20 text-[#FF4500] text-[10px] font-extrabold px-2 py-0.5 rounded">
                        {post.flair}
                      </span>
                      <h4 className="font-bold text-sm text-white">{post.title}</h4>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed font-normal">
                      {post.body}
                    </p>

                    {/* Interactive Post Footer Votes */}
                    <div className="flex items-center gap-3 pt-2 text-xs font-bold text-gray-400 border-t border-gray-800">
                      <div className="flex items-center gap-1 bg-[#1A1A1B] px-3 py-1 rounded-full border border-gray-700 text-[#FF4500]">
                        <span>▲</span>
                        <span>1</span>
                        <span>▼</span>
                      </div>
                      <span>0 Comments</span>
                      <span className="text-[11px] text-gray-500">Share</span>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
