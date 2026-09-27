/**
 * SEO & Site Configuration for Thanay Krishna C U Portfolio
 * Central source of truth for metadata, canonical URLs, and structured data.
 */

function getBaseUrl(): string {
  // 1. Explicit production site URL from environment
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.trim().replace(/\/+$/, '');
  }

  // 2. Vercel production deployment URL
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.trim().replace(/\/+$/, '')}`;
  }

  // 3. Vercel deployment URL
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.trim().replace(/\/+$/, '')}`;
  }

  // 4. Default fallback domain
  return 'https://thanay.vercel.app';
}

export const siteConfig = {
  name: 'Thanay Krishna C U',
  shortName: 'Thanay Krishna',
  headline: 'Thanay Krishna C U | Data Science Engineer & Developer',
  titleTemplate: '%s | Thanay Krishna C U',
  description:
    'Thanay Krishna C U — B.Tech Computer Science and Data Science student, developer and technology enthusiast from Kerala, India. Building AI & IoT solutions.',
  url: getBaseUrl(),
  jobTitle: 'Data Science Engineer & Developer',
  profession: 'B.Tech Computer Science and Data Science student, developer, and technology enthusiast.',
  location: {
    locality: 'Thrissur',
    region: 'Kerala',
    country: 'India',
    display: 'Kerala, India',
  },
  institution: 'IES College of Engineering, Thrissur',
  email: 'thanaykrishna2255@gmail.com',
  social: {
    github: 'https://github.com/THANAY-KRISHNA',
    linkedin: 'https://www.linkedin.com/in/thanay-krishna-c-u-a1b67831b/',
    twitterHandle: '@ThanayKrishna',
  },
  keywords: [
    'Thanay Krishna',
    'Thanay Krishna C U',
    'Thanay',
    'Thanay C U',
    'Data Science Engineer',
    'Data Science Developer',
    'AI Developer',
    'IoT Developer',
    'Machine Learning Engineer',
    'Computer Science Student Kerala',
    'IES College of Engineering',
    'Thrissur',
    'Kerala India',
    'Personal Portfolio',
  ],
  googleVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
    process.env.GOOGLE_SITE_VERIFICATION ||
    undefined,
};

export function getPersonJsonLd() {
  const url = siteConfig.url;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${url}/#person`,
        name: siteConfig.name,
        alternateName: [
          'Thanay Krishna',
          'Thanay',
          'Thanay C U',
          'THANAY KRISHNA',
        ],
        givenName: 'Thanay',
        additionalName: 'Krishna',
        familyName: 'C U',
        url: url,
        image: `${url}/opengraph-image`,
        jobTitle: siteConfig.jobTitle,
        description: siteConfig.description,
        sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
        email: `mailto:${siteConfig.email}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteConfig.location.locality,
          addressRegion: siteConfig.location.region,
          addressCountry: siteConfig.location.country,
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: siteConfig.institution,
        },
        knowsAbout: [
          'Artificial Intelligence',
          'Data Science',
          'Machine Learning',
          'Internet of Things (IoT)',
          'Embedded Systems',
          'Python',
          'TypeScript',
          'Next.js',
          'React',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${url}/#website`,
        url: url,
        name: siteConfig.headline,
        alternateName: [
          'Thanay Krishna Portfolio',
          'Thanay Portfolio',
          'Thanay Krishna Website',
        ],
        description: siteConfig.description,
        publisher: {
          '@id': `${url}/#person`,
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'ProfilePage',
        '@id': `${url}/#profilepage`,
        url: url,
        name: siteConfig.headline,
        isPartOf: {
          '@id': `${url}/#website`,
        },
        mainEntity: {
          '@id': `${url}/#person`,
        },
      },
    ],
  };
}
