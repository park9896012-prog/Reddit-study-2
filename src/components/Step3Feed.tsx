import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ArrowUp, ArrowDown, Bookmark, EyeOff, MessageSquare, Send, UserPlus, Check, Sparkles, Heart } from 'lucide-react';

interface Step3Props {
  currentLang: Language;
}

export const Step3Feed: React.FC<Step3Props> = ({ currentLang }) => {
  const t = translations[currentLang].step3;

  // Simulator state
  const [voteState, setVoteState] = useState<'up' | 'down' | 'none'>('none');
  const [voteCount, setVoteCount] = useState<number>(452);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  
  // Comments state
  const [comments, setComments] = useState<string[]>([
    '와 정말 유용한 정보네요! 서브레딧 규칙 참고하겠습니다.',
    'Reddit 카르마 올리는 법 알려주셔서 감사합니다.',
  ]);
  const [newComment, setNewComment] = useState<string>('');

  // DM state
  const [dmMessages, setDmMessages] = useState<Array<{ sender: string; text: string }>>([
    { sender: 'u/RedditPro_99', text: '안녕하세요! r/gaming 서브레딧에 작성하신 글 잘 보았습니다 👋' },
  ]);
  const [newDmText, setNewDmText] = useState<string>('');

  const handleUpvote = () => {
    if (voteState === 'up') {
      setVoteState('none');
      setVoteCount(voteCount - 1);
    } else {
      if (voteState === 'down') setVoteCount(voteCount + 2);
      else setVoteCount(voteCount + 1);
      setVoteState('up');
    }
  };

  const handleDownvote = () => {
    if (voteState === 'down') {
      setVoteState('none');
      setVoteCount(voteCount + 1);
    } else {
      if (voteState === 'up') setVoteCount(voteCount - 2);
      else setVoteCount(voteCount - 1);
      setVoteState('down');
    }
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    setComments([...comments, newComment]);
    setNewComment('');
  };

  const handleSendDm = () => {
    if (!newDmText.trim()) return;
    setDmMessages([...dmMessages, { sender: 'Me', text: newDmText }]);
    setNewDmText('');
  };

  return (
    <section id="step3" className="py-16 bg-white text-[#1A1A1B] border-b border-gray-200">
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

        {/* 3 Interactive Interaction Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Upvote & Downvote */}
          <div className="bg-[#F6F7F8] border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF4500]/10 text-[#FF4500] flex items-center justify-center font-bold">
              <ArrowUp className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">{t.votingTitle}</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {t.votingDesc}
            </p>
          </div>

          {/* Card 2: Save & Hide */}
          <div className="bg-[#F6F7F8] border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
              <Bookmark className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">{t.saveHideTitle}</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {t.saveHideDesc}
            </p>
          </div>

          {/* Card 3: DM & Chat */}
          <div className="bg-[#F6F7F8] border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">{t.dmTitle}</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {t.dmDesc}
            </p>
          </div>

        </div>

        {/* Interactive Feed Post & Voting Simulator */}
        <div className="bg-[#1A1A1B] text-white rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-2xl space-y-6">
          
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-3.5 text-xs text-blue-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>ℹ️ 시뮬레이터 안내: 보팅(Upvote) 및 1:1 메시지 체험은 오프라인 로컬 상태로 작동하는 학습용 예시입니다.</span>
          </div>

          <div className="flex items-center justify-between pb-6 border-b border-gray-800">
            <div>
              <span className="text-xs font-extrabold text-[#FF4500] uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-4 h-4" /> Live Interactive Feed Simulator
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {t.simulatorTitle}
              </h3>
              <p className="text-xs text-gray-400">{t.simulatorSubtitle}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Feed Post Interaction Card */}
            <div className="lg:col-span-7 bg-[#272729] border border-gray-700 rounded-2xl p-5 space-y-4">
              
              {/* Subreddit Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#FF4500] flex items-center justify-center font-black text-sm text-white">
                    r/
                  </div>
                  <div>
                    <div className="font-extrabold text-sm text-white flex items-center gap-2">
                      r/todayilearned
                      <button
                        onClick={() => setIsFollowing(!isFollowing)}
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full transition-all ${
                          isFollowing
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-[#FF4500] text-white hover:bg-[#E03D00]'
                        }`}
                      >
                        {isFollowing ? '✓ Following' : '+ Follow'}
                      </button>
                    </div>
                    <div className="text-[11px] text-gray-400">Posted by u/TechGuru_Master • 3 hours ago</div>
                  </div>
                </div>

                {/* Save Button */}
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                    isSaved
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-[#1A1A1B] text-gray-400 border-gray-700 hover:text-white'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{isSaved ? 'Saved!' : 'Save'}</span>
                </button>
              </div>

              {/* Post Title */}
              <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                TIL: Reddit의 'Upvote'는 단순한 좋아요가 아니라, 인터넷의 민주적 트렌드 가치 지표입니다!
              </h4>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                유저들의 업보트 수에 따라 좋은 글이 상단으로 노출되는 가중 알고리즘이 적용됩니다. 직접 아래 화살표를 눌러 실시간 투표를 변경해 보세요!
              </p>

              {/* Voting Bar & Action Bar */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                
                {/* Voting Bar */}
                <div className="flex items-center gap-1 bg-[#1A1A1B] p-1 rounded-full border border-gray-700">
                  <button
                    onClick={handleUpvote}
                    className={`p-2 rounded-full transition-all ${
                      voteState === 'up'
                        ? 'bg-[#FF4500] text-white shadow'
                        : 'text-gray-400 hover:text-[#FF4500] hover:bg-[#272729]'
                    }`}
                    aria-label="Upvote"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>

                  <span className={`px-2 text-xs font-black ${
                    voteState === 'up' ? 'text-[#FF4500]' : voteState === 'down' ? 'text-blue-400' : 'text-gray-200'
                  }`}>
                    {voteCount}
                  </span>

                  <button
                    onClick={handleDownvote}
                    className={`p-2 rounded-full transition-all ${
                      voteState === 'down'
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-gray-400 hover:text-blue-400 hover:bg-[#272729]'
                    }`}
                    aria-label="Downvote"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-xs text-gray-400 font-medium">
                  {comments.length} Comments
                </div>
              </div>

              {/* Comment Thread Input */}
              <div className="pt-2 space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="댓글을 작성해 보세요..."
                    className="flex-1 bg-[#1A1A1B] border border-gray-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF4500]"
                  />
                  <button
                    onClick={handleAddComment}
                    className="bg-[#FF4500] hover:bg-[#E03D00] text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
                  >
                    댓글
                  </button>
                </div>

                {/* Render Comments */}
                <div className="space-y-2 pt-1 max-h-40 overflow-y-auto">
                  {comments.map((comment, index) => (
                    <div key={index} className="bg-[#1A1A1B] p-2.5 rounded-xl border border-gray-800 text-xs text-gray-300">
                      <span className="font-bold text-[#FF4500] mr-2">u/User_{index + 1}:</span>
                      {comment}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Direct Message (Chat) Box Simulator */}
            <div className="lg:col-span-5 bg-[#272729] border border-gray-700 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="font-bold text-sm text-white">1:1 Chat (u/RedditPro_99)</span>
                  </div>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">Direct Message</span>
                </div>

                {/* Message Log */}
                <div className="py-4 space-y-3 max-h-48 overflow-y-auto">
                  {dmMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex flex-col ${msg.sender === 'Me' ? 'items-end' : 'items-start'}`}
                    >
                      <span className="text-[10px] text-gray-400 mb-0.5">{msg.sender}</span>
                      <div
                        className={`text-xs px-3 py-2 rounded-2xl max-w-[85%] ${
                          msg.sender === 'Me'
                            ? 'bg-[#FF4500] text-white rounded-br-none'
                            : 'bg-[#1A1A1B] border border-gray-700 text-gray-200 rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Input */}
              <div className="pt-3 border-t border-gray-700 flex gap-2">
                <input
                  type="text"
                  value={newDmText}
                  onChange={(e) => setNewDmText(e.target.value)}
                  placeholder="메시지를 입력하세요..."
                  className="flex-1 bg-[#1A1A1B] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF4500]"
                />
                <button
                  onClick={handleSendDm}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-xl transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
