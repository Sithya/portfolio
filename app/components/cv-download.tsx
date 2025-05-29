"use client";

import { motion } from "framer-motion";
import { Download, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { personalInfo } from "../config/portfolio-data";

export default function CVDownload() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = personalInfo.cvUrl;
    link.download = "Ry_Kunsithya_CV.pdf";
    link.click();
  };

  const cvFeatures = [
    "Complete work experience",
    "Technical skills & certifications",
    "Education & achievements",
    "Project portfolio",
    "Contact information",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-white/20 rounded-full">
                  <FileText size={48} />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-center">
                Download My CV
              </CardTitle>
              <p className="text-blue-100 text-lg mt-2">
                Get a comprehensive overview of my skills, experience, and
                achievements
              </p>
            </CardHeader>

            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    What's included:
                  </h3>
                  <ul className="space-y-3">
                    {cvFeatures.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle
                          className="text-green-500 mr-3"
                          size={20}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleDownload}
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Download className="mr-3 h-5 w-5" />
                      Download CV (PDF)
                    </Button>
                  </motion.div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    Updated: December 2024 • Size: ~2MB
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
