/**
 * SEO & Site Configuration for Thanay Krishna C U Portfolio
 * Central source of truth for metadata, canonical URLs, and structured data.
 */

function getBaseUrl(): string {
  // 1. Explicit production site URL from environment
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.trim().replace(/\/+$/, '');
  }

  // 2. Default canonical production domain
  return 'https://thanay.vercel.app';
}

export const siteConfig = {
  name: 'Thanay Krishna C U',
  shortName: 'Thanay Krishna',
  headline: 'Thanay Krishna C U | Data Science Engineer & Developer',
  titleTemplate: '%s | Thanay Krishna C U',
  description:
    'Portfolio of Thanay Krishna C U — Data Science Engineer & Developer specializing in AI, machine learning, and modern software development.',
  url: getBaseUrl(),
  canonicalUrl: 'https://thanay.vercel.app',
  jobTitle: 'Data Science Engineer & Developer',
  profession: 'Data Science Engineer and Developer, building AI and modern software solutions.',
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
    linkedin: 'https://www.linkedin.com/in/thanay-krishna-c-u-a1b67831b',
    twitterHandle: '@ThanayKrishna',
  },
  keywords: [
    'Thanay Krishna C U',
    'Thanay Krishna',
    'Thanay Krishna GitHub',
    'Thanay Krishna AI developer',
    'Thanay Krishna Data Science',
    'Thanay Krishna CU',
    'Thanay CU',
    'Thanay C U',
    'Thanay',
    'AI Developer',
    'Data Science Student',
    'Data Science Engineer',
    'Data Science Developer',
    'Software Engineer',
    'Software Development',
    'Computer Science Student Kerala',
    'IES College of Engineering',
    'Thrissur',
    'Kerala India',
    'BloomWatch Pro',
    'MEDOS',
    'Patchwise',
    'Personal Portfolio',
  ],
  googleVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
    process.env.GOOGLE_SITE_VERIFICATION ||
    'ZW361SYeC9qaNjvn9U3VQiUf0dazNHX-nBaxfcxOXKc',
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
          'Thanay Krishna CU',
          'Thanay CU',
          'Thanay C U',
          'Thanay',
          'THANAY KRISHNA CU',
          'THANAY KRISHNA C U',
          'THANAY-KRISHNA',
        ],
        givenName: 'Thanay',
        additionalName: 'Krishna',
        familyName: 'C U',
        url: `${url}/`,
        image: `${url}/opengraph-image`,
        jobTitle: siteConfig.jobTitle,
        description: siteConfig.description,
        sameAs: [
          siteConfig.social.github,
          siteConfig.social.linkedin,
        ],
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
          'Software Development',
          'Developer Tooling',
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
        url: `${url}`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        description: siteConfig.description,
        publisher: {
          '@id': `${url}/#person`,
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'ProfilePage',
        '@id': `${url}/#profilepage`,
        url: `${url}/`,
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
