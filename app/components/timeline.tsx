"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { timeline } from "../config/portfolio-data"

const getTypeColor = (type: string) => {
  switch (type) {
    case "education":
      return "from-green-500 to-emerald-500"
    case "internship":
      return "from-blue-500 to-cyan-500"
    case "achievement":
      return "from-purple-500 to-pink-500"
    default:
      return "from-gray-500 to-gray-600"
  }
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Key milestones and experiences that shaped my career
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline Icon */}
                <div
                  className={`relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getTypeColor(event.type)} rounded-full shadow-lg`}
                >
                  <event.icon className="text-white" size={24} />
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{event.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                        <Calendar size={16} className="mr-1" />
                        {event.date}
                      </div>
                    </div>

                    <div className="flex items-center text-blue-600 dark:text-blue-400 mb-3">
                      <span className="font-semibold">{event.organization}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {event.location}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{event.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {event.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
