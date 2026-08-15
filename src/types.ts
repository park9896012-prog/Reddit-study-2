export type Language = 'ko' | 'en' | 'ja' | 'zh' | 'es';

export interface TranslationContent {
  nav: {
    guide: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    faq: string;
    subreddits: string;
    startGuide: string;
    safetyBanner: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      time: string;
      timeLabel: string;
      difficulty: string;
      difficultyLabel: string;
      subreddits: string;
      subredditsLabel: string;
    };
  };
  step1: {
    tag: string;
    title: string;
    subtitle: string;
    googleSignupTitle: string;
    googleSignupDesc: string;
    usernameTipsTitle: string;
    usernameTipsDesc: string;
    interestsTitle: string;
    interestsDesc: string;
    simulatorTitle: string;
    simulatorSubtitle: string;
    simulatorSafetyNote: string;
  };
  step2: {
    tag: string;
    title: string;
    subtitle: string;
    createBtnTitle: string;
    createBtnDesc: string;
    postTypesTitle: string;
    postTypesDesc: string;
    communitySelectTitle: string;
    communitySelectDesc: string;
    simulatorTitle: string;
    simulatorSubtitle: string;
  };
  step3: {
    tag: string;
    title: string;
    subtitle: string;
    votingTitle: string;
    votingDesc: string;
    saveHideTitle: string;
    saveHideDesc: string;
    dmTitle: string;
    dmDesc: string;
    simulatorTitle: string;
    simulatorSubtitle: string;
  };
  step4: {
    tag: string;
    title: string;
    subtitle: string;
    snooTitle: string;
    snooDesc: string;
    searchTipsTitle: string;
    searchTipsDesc: string;
    notifTitle: string;
    notifDesc: string;
    simulatorTitle: string;
    simulatorSubtitle: string;
  };
  faq: {
    tag: string;
    title: string;
    subtitle: string;
    whatIsSubredditQ: string;
    whatIsSubredditA: string;
    whatIsKarmaQ: string;
    whatIsKarmaA: string;
    karmaSimulatorTitle: string;
    glossaryTitle: string;
  };
  subredditsSection: {
    tag: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategory: string;
  };
  githubInfo: {
    title: string;
    desc: string;
    cloneCmd: string;
    robotsTxtNotice: string;
  };
  footer: {
    title: string;
    copyrightNotice: string;
    contactEmail: string;
    emailCopySuccess: string;
    disclaimer: string;
  };
}

export interface SubredditItem {
  id: string;
  name: string; // e.g. r/AskReddit
  category: string; // e.g. General, Tech, Gaming, Language
  members: string;
  description: Record<Language, string>;
  tags: string[];
}

export interface GlossaryTerm {
  term: string;
  fullName?: string;
  meaning: Record<Language, string>;
  example?: string;
}
