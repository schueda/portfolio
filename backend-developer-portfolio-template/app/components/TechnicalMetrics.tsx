"use client";

import { motion } from "framer-motion";

const experienceData = [
  {
    sectionTitle: "FourSys",
    cards: [
      {
        title: "IOS Software Engineer",
        period: "November 2024 - Present",
        location: "Remote",
        details: [
          "Engineered and deployed key features for the Bradesco iOS app, enhancing user experience and functionality.",
          "Successfully navigated and enhanced a large-scale, complex codebase, improving maintainability and performance.",
          "Applied Agile, Swift, and Software Architecture best practices daily.",
        ],
      },
    ],
  },
  {
    sectionTitle: "Airbus Defence and Space",
    cards: [
      {
        title: "Intern",
        period: "April 2024 - August 2024",
        location: "Ingolstadt, Germany",
        details: [
          "Wrote a thesis on the identification and provision of security measures for onboard military aircraft software.",
          "Researched and deepened the knowledge of cyber-security, as well as software engineering.",
        ],
      },
    ],
  },
  {
    sectionTitle: "Apple Developer Academy PUCPR",
    cards: [
      {
        title: "Jr. Mentor",
        period: "January 2023 - February 2024",
        location: "Curitiba, Brazil",
        details: [
          "Guided and mentored a group of 50 students in coding iOS native Apps.",
          "Provided 1-on-1 coding sessions and taught concepts such as Object-Oriented Programming, code optimization, Clean Code principles, and versioning control.",
          "Assisted students in understanding and using Apple&apos;s newest frameworks.",
        ],
      },
      {
        title: "Learner",
        period: "March 2021 - December 2022",
        location: "Curitiba, Brazil",
        details: [
          "Created a great quantity of native iOS Apps in Swift, using a variety of frameworks from Apple.",
          "Learned Object-Oriented programming, project management, design patterns, and software architecture.",
          "Gained some introductory knowledge in UX/UI design and business.",
          "Developed soft skills such as storytelling, teamwork, and effective interpersonal communication.",
        ],
      },
    ],
  },
  {
    sectionTitle: "Fast Pro",
    cards: [
      {
        title: "Jr. Developer",
        period: "July 2020 - September 2020",
        location: "Remote",
        details: [
          "Built a dashboard to map and visualize mobile network dead zones in São Paulo.",
          "Utilized JavaScript to parse and analyze geospatial data collected from a mobile, city-wide geolocator to pinpoint network failures.",
        ],
      },
    ],
  },
];

export default function TechnicalMetrics() {
  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {experienceData.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-xl font-semibold mb-6 text-green-400 text-center">
                {section.sectionTitle}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {section.cards.map((card, cardIndex) => (
                  <motion.div
                    key={cardIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 w-full max-w-md"
                  >
                    <h4 className="text-lg font-semibold text-gray-300 text-center">
                      {card.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4 text-center">
                      {card.period} • {card.location}
                    </p>
                    <ul className="mt-2 space-y-2 text-gray-400">
                      {card.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>• {detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
