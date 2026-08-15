/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Step1Account } from './components/Step1Account';
import { Step2Post } from './components/Step2Post';
import { Step3Feed } from './components/Step3Feed';
import { Step4Profile } from './components/Step4Profile';
import { KarmaQuizFAQ } from './components/KarmaQuizFAQ';
import { SubredditFinder } from './components/SubredditFinder';
import { GitHubDeploymentInfo } from './components/GitHubDeploymentInfo';
import { ContactFooter } from './components/ContactFooter';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ko');

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  return (
    <div className="min-h-screen bg-[#F6F7F8] text-[#1A1A1B] flex flex-col font-sans antialiased selection:bg-[#FF4500] selection:text-white">
      {/* Top Header Navigation */}
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero currentLang={currentLang} />

        {/* Step 1: Account Creation & Interests */}
        <Step1Account currentLang={currentLang} />

        {/* Step 2: Post Creation & Upload */}
        <Step2Post currentLang={currentLang} />

        {/* Step 3: Feed Customization & Interaction */}
        <Step3Feed currentLang={currentLang} />

        {/* Step 4: Profile & Snoo Customization */}
        <Step4Profile currentLang={currentLang} />

        {/* Interactive FAQ, Karma Calculator & Glossary */}
        <KarmaQuizFAQ currentLang={currentLang} />

        {/* Starter Subreddits Finder */}
        <SubredditFinder currentLang={currentLang} />

        {/* GitHub Deployment & Repository Structure Info */}
        <GitHubDeploymentInfo currentLang={currentLang} />
      </main>

      {/* Footer with Contact Email & Language Switcher */}
      <ContactFooter currentLang={currentLang} onLanguageChange={handleLanguageChange} />
    </div>
  );
}
