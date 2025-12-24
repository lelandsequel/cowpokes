export const neighborhoods = [
  "North Loop",
  "Hyde Park",
  "Mueller",
  "The Domain",
  "Crestview",
  "Allandale",
  "Cherrywood",
  "East Austin",
  "Downtown Austin",
  "South Congress",
  "Zilker",
  "Barton Hills",
  "Travis Heights",
  "Clarksville",
  "Tarrytown",
  "Rosedale",
  "Brentwood",
  "Highland",
  "University of Texas",
  "West Campus"
];

export const baseSchema = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  "name": "Cowpokes",
  "image": "https://cowpokes-atx-sokpyeon.zocomputer.io/portfolio/julia.jpg",
  "url": "https://cowpokes-atx-sokpyeon.zocomputer.io",
  "telephone": "",
  "priceRange": "5461",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "North Austin Private Studio",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "postalCode": "78758",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.36,
    "longitude": -97.72
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.instagram.com/cowpokes_/"
  ]
};
