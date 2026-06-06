// Site-wide constants. Single source of truth for the corporate site.
// Schema, footer, nav, portfolio grid and llms.txt all read from here.

export const SITE = {
  name: 'Timberline Ventures LLC',
  shortName: 'Timberline Ventures',
  tagline: 'A studio building useful digital products',
  description:
    'Timberline Ventures LLC is an independent digital product studio. We build and operate a portfolio of consumer apps and high-trust information sites \u2014 from bilingual ITIN financial guides to native iOS collector apps.',
  url: 'https://timberlineventuresllc.com',
  locale: 'en-US',
  contactEmail: 'hello@timberlineventuresllc.com',
  foundedYear: '2023',
  // Founder / principal \u2014 used for Person and Organization schema. The
  // /about page is the canonical entity anchor for the whole portfolio.
  founder: {
    name: 'Bob Guillow',
    role: 'Founder & Principal',
    sameAs: [
      // Add LinkedIn / X / GitHub when ready. Empty entries are filtered out
      // before rendering so it\u2019s safe to leave them blank.
      // 'https://www.linkedin.com/in/...',
    ],
  },
  // Analytics + tracking. All values come from env vars at build time so
  // local builds and forks don't fire analytics.
  analytics: {
    ga4Id: import.meta.env.PUBLIC_GA4_ID ?? '',
    gscVerification: import.meta.env.PUBLIC_GSC_VERIFICATION ?? '',
    indexNowKey: import.meta.env.PUBLIC_INDEXNOW_KEY ?? '',
  },
  // Bold / dark premium palette. Forest-green base, warm gold accent \u2014
  // evokes the "timberline" name and ties the portfolio together.
  theme: {
    bg: '#0B1410',
    bgAlt: '#0F1C15',
    card: '#13231B',
    text: '#ECE7D8',
    muted: '#9AA59B',
    accent: '#CBA35A',
    accentSoft: '#E4C988',
    border: '#26352B',
  },
};

// The portfolio. Each brand links out to its live property (decided: link to
// live sites). `group` drives the two homepage sections; `subOrganization`
// schema is generated from this array so the entity graph stays in sync.
export const PORTFOLIO = [
  {
    name: 'ITIN Lending',
    url: 'https://itinlending.net',
    group: 'Financial information',
    blurb:
      'Plain-English, bilingual guides to loans, mortgages, auto and business financing for ITIN holders in the U.S.',
    initials: 'IL',
  },
  {
    name: 'ITIN Credit Card',
    url: 'https://itincreditcard.com',
    group: 'Financial information',
    blurb:
      'How ITIN holders qualify for, choose and build credit with credit cards \u2014 without a Social Security number.',
    initials: 'IC',
  },
  {
    name: 'ITIN Credit Score',
    url: 'https://itincreditscore.com',
    group: 'Financial information',
    blurb:
      'Building, checking and improving a U.S. credit score on an ITIN, explained step by step in English and Spanish.',
    initials: 'IS',
  },
  {
    name: 'Pour Picks',
    url: 'https://apps.apple.com/us/app/pour-picks/id6764040132',
    group: 'Consumer apps',
    blurb:
      'A native iOS cellar for bourbon and whiskey collectors \u2014 catalog bottles, track value, and journal every pour.',
    initials: 'PP',
  },
  {
    name: 'Stick Picks',
    url: 'https://stickpicks.app',
    group: 'Consumer apps',
    blurb:
      'The cigar collector\u2019s journal for iOS \u2014 manage your humidor, track collection value and rate every stick.',
    initials: 'SP',
  },
  {
    name: 'Perfume Picks',
    url: 'https://perfumepicks.app',
    group: 'Consumer apps',
    blurb:
      'A fragrance wardrobe for iOS \u2014 organize your collection, log wears and discover what to reach for next.',
    initials: 'FP',
  },
];

export const PORTFOLIO_GROUPS = ['Financial information', 'Consumer apps'];

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];
