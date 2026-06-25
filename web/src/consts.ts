// Site-wide constants. Single source of truth for the corporate site.
// Schema, footer, nav, portfolio grid and llms.txt all read from here.

export const SITE = {
  name: 'Timberline Ventures LLC',
  shortName: 'Timberline Ventures',
  tagline: 'A studio building apps that learn your taste',
  description:
    'Timberline Ventures LLC is an independent digital product studio. We build a family of iOS apps that learn what you like and get sharper the more you use them, plus bilingual financial guides for ITIN holders.',
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
      'Plain-English, bilingual guides to loans, mortgages, and auto and business financing for ITIN holders in the U.S.',
    initials: 'IL',
  },
  {
    name: 'ITIN Credit Card',
    url: 'https://itincreditcard.com',
    group: 'Financial information',
    blurb:
      'How ITIN holders qualify for a credit card and build credit with it, no Social Security number required.',
    initials: 'IC',
  },
  {
    name: 'ITIN Credit Score',
    url: 'https://itincreditscore.com',
    group: 'Financial information',
    blurb:
      'Building, checking, and improving a U.S. credit score on an ITIN, explained step by step in English and Spanish.',
    initials: 'IS',
  },
  {
    name: 'Pour Picks',
    url: 'https://apps.apple.com/us/app/pour-picks/id6764040132',
    group: 'Consumer apps',
    blurb:
      'A bourbon and whiskey cellar for iOS. Catalog your bottles, track what they\u2019re worth, and journal every pour.',
    initials: 'PP',
    icon: '/assets/icons/pourpicks.png',
  },
  {
    name: 'Stick Picks',
    url: 'https://stickpicks.app',
    group: 'Consumer apps',
    blurb:
      'A cigar journal for iOS. Manage your humidor, keep an eye on collection value, and rate every stick you smoke.',
    initials: 'SP',
    icon: '/assets/icons/stickpicks.png',
  },
  {
    name: 'Perfume Picks',
    url: 'https://perfumepicks.app',
    group: 'Consumer apps',
    blurb:
      'A fragrance wardrobe for iOS. Organize your bottles, log your wears, and figure out what to reach for next.',
    initials: 'FP',
    icon: '/assets/icons/perfumepicks.png',
  },
  {
    name: 'Percolate',
    url: 'https://percolateapp.com',
    group: 'Consumer apps',
    blurb:
      'A specialty-coffee shelf for iOS. Track your bags, log cupping notes, and find the next roast worth buying.',
    initials: 'PC',
    icon: '/assets/icons/percolate.png',
  },
  {
    name: 'Underdial',
    url: 'https://underdial.com',
    group: 'Consumer apps',
    blurb:
      'A watch advisor for iOS that gives a straight answer. Find your next solid watch under $1,000.',
    initials: 'UD',
    icon: '/assets/icons/underdial.png',
  },
  {
    name: 'Cabin',
    url: '/cabin',
    group: 'Consumer apps',
    blurb:
      'Private jet charter for iOS. It learns how you like to fly, then points you to the few charters worth your time.',
    initials: 'CB',
    icon: '/assets/icons/cabin.svg',
    internal: true,
    cta: 'Coming soon',
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
