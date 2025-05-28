"use client"

import { motion } from "framer-motion"
import { Settings, Edit, ImageIcon, Code } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const customizationSteps = [
  {
    icon: Edit,
    title: "Update Personal Info",
    description: "Edit app/config/portfolio-data.ts to change your name, bio, contact details, and social links",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ImageIcon,
    title: "Replace Images",
    description: "Add your professional photos to the public folder and update the image paths in the config file",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Add Your Projects",
    description: "Update the projects array with your actual GitHub repositories, live demos, and tech stacks",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Settings,
    title: "Customize Skills & Experience",
    description: "Modify the skills, timeline, and about sections to reflect your actual experience and expertise",
    color: "from-orange-500 to-red-500",
  },
]

export default function CustomizationGuide() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Easy Customization
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Your portfolio is designed to be easily customizable. Follow these simple steps to make it yours!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {customizationSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${step.color} rounded-lg`}>
                      <step.icon className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">📁 Main Configuration File</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              All your portfolio content is centralized in one easy-to-edit file:
            </p>
            <code className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg text-blue-600 dark:text-blue-400 font-mono">
              app/config/portfolio-data.ts
            </code>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Simply edit this file to update your entire portfolio content!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
