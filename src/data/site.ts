// Site-wide settings: menu, footer, contact. Edit here, not in the layout.

export const siteName = 'Living Stories Sermons';
export const siteUrl = 'https://www.livingstoriessermons.org';
export const contactEmail = 'peterlevenstrong@saintgregorys.org';

export const address = {
  line1: '500 De Haro St.',
  line2: 'San Francisco, CA 94107',
};

export type NavItem = { label: string; href?: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  { label: 'Book', href: '/book' },
  {
    label: 'About',
    children: [
      { label: 'Overview', href: '/overview' },
      { label: 'History', href: '/history' },
      { label: 'Sources of Inspiration', href: '/sources-of-inspiration' },
    ],
  },
  {
    label: 'How it Works',
    children: [
      { label: 'Step-By-Step', href: '/step-by-step' },
      { label: 'Materials', href: '/materials' },
      { label: 'Facilitating Sermons', href: '/facilitating-sermons' },
      { label: 'How to Start', href: '/how-to-start' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Training Materials', href: '/training-materials' },
      { label: 'Media', href: '/media' },
    ],
  },
  {
    label: 'Living Stories Lab',
    children: [
      { label: 'About the Lab', href: '/about-the-lab' },
      { label: 'Theses and Thrones', href: '/theses-and-thrones' },
    ],
  },
];

// Alt text for images (the Squarespace site had none). Keyed by file name.
export const imageAlt: Record<string, string> = {
  'facilitating-the-wondering-response-54dc4662.webp': 'A vested preacher seated among a congregation, leading a Living Stories conversation',
  'facilitating-the-wondering-response-3e515a20.webp': 'A vested preacher seated among a congregation, leading a Living Stories conversation',
  'godly-play-and-eucharist-3-f57b4e66.webp': 'An outdoor service with children and adults gathered around a table',
  'congregation-map-66010d24.webp': 'A map of where congregations using Living Stories Sermons are located',
  'story-blocks-tall-b1aa0907.webp': 'Wooden story figures arranged on a felt underlay',
  'story-blocks-f368fdd6.webp': 'Wooden story figures arranged on a felt underlay',
  'story-blocks-medium-f3cc6e2b.webp': 'Wooden story figures arranged on a felt underlay',
  'telling-the-story-6ded820c.webp': 'A congregation of all ages gathered around a storyteller in a church with painted icons',
  'materials-5599a100.webp': 'Wooden buildings and figures set on a round green felt underlay',
  'wondering-response-44a2153f.webp': 'Congregation members sharing responses during the wondering time',
  'pentecost-story-a8b01d58.webp': 'Wooden figures and paper symbols laid out for a Pentecost story',
  'participants-talking-f2cb6892.webp': 'Children and adults seated close together, listening during a sermon',
  'reflecting-on-the-story-c0c2ea5b.webp': 'Members of a congregation listening during worship',
  'cover-0f07184b.webp': 'Cover of Collaborative Sermons by Peter Levenstrong',
  'logo-a6ef8d36.webp': 'Theses and Thrones logo',
  'board-b5d600ab.webp': 'The Theses and Thrones game board, a map of the British Isles',
  'lab-at-work-aa7c9ee7.webp': 'Felt shapes, small figures, notebooks and drawings laid out on a work table',
};
