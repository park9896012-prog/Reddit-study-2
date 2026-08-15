import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Github, Code2, Check, Copy, Terminal, ShieldCheck, Zap } from 'lucide-react';

interface GitHubDeploymentInfoProps {
  currentLang: Language;
}

export const GitHubDeploymentInfo: React.FC<GitHubDeploymentInfoProps> = ({ currentLang }) => {
  const t = translations[currentLang].githubInfo;
  const [copied, setCopied] = useState(false);

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(t.cloneCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 bg-[#1A1A1B] text-white border-b border-[#343536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#272729] border border-gray-700 rounded-3xl p-6 sm:p-8 space-y-6">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-700 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-white">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg sm:text-xl text-white">{t.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 font-medium">{t.desc}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> SEO Indexing Ready
              </span>
              <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Zap className="w-4 h-4" /> Fast Speed
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            
            {/* Terminal Command Box */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                GitHub Repository Clone Command
              </label>
              <div className="bg-[#1A1A1B] border border-gray-800 rounded-xl p-3.5 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-emerald-400 truncate">
                  <Terminal className="w-4 h-4 shrink-0" />
                  <span className="truncate">{t.cloneCmd}</span>
                </div>
                <button
                  onClick={handleCopyCmd}
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 p-2 rounded-lg transition-colors shrink-0 ml-2"
                  title="Copy command"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* SEO & Robots.txt Info */}
            <div className="bg-[#1A1A1B] border border-gray-800 rounded-xl p-4 text-xs space-y-2">
              <div className="font-bold text-gray-200 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#FF4500]" />
                <span>/public/robots.txt 설정 완료</span>
              </div>
              <p className="text-gray-400 leading-relaxed font-normal">
                {t.robotsTxtNotice}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
