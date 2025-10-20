"use client";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/widget/Section";
import { ProjectHeader } from "@/components/widget/ProjectHeader";
import { ProjectData } from "@/types/project";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProjectTemplateProps {
  project: ProjectData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export function ProjectTemplate({ project }: ProjectTemplateProps) {
  return (
    <motion.main 
      className="max-w-7xl mx-auto px-6 py-10 space-y-6 lg:mt-32 mt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Back Button */}
      <motion.div>
        <Link href="/">
          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 text-black border-gray-200 hover:bg-gray-200 cursor-pointer hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft size={18} />
            Kembali
          </Button>
        </Link>
      </motion.div>

      <motion.div>
        <ProjectHeader 
          title={project.title} 
          subtitle={project.subtitle} 
          tools={project.tools} 
          date={project.date} 
        />
      </motion.div>

      {(project.kaggleLink || project.githubLink) && (
        <motion.div>
          <Section title="Links">
            <div className="flex flex-wrap gap-4">
              {project.kaggleLink && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={project.kaggleLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-[#32fb00] text-black rounded-lg transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    Dataset Kaggle
                  </Link>
                </motion.div>
              )}
              {project.githubLink && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gray-100 border border-gray-200 text-black rounded-lg hover:from-gray-900 hover:to-black transition-all duration-300"
                  >
                    <Github size={20} />
                    GitHub Repository
                  </Link>
                </motion.div>
              )}
            </div>
          </Section>
        </motion.div>
      )}

      <motion.div>
        <Section title="Ringkasan Proyek">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <div className="whitespace-pre-line bg-gray-50 p-6 rounded-2xl border border-gray-200">
              {project.summary}
            </div>
          </div>
        </Section>
      </motion.div>

      {project.images.length > 0 && (
        <motion.div>
          <Section title="Visualisasi Data">
            <div className={`gap-8 grid ${project.images.length === 1 ? 'grid-cols-1' : project.images.length === 2 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2'}`}>
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-white p-4">
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      width={image.width} 
                      height={image.height} 
                      className="rounded-xl w-full h-auto object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    <div className="mt-4 text-center">
                      <h3 className="text-sm font-medium text-gray-800">{image.alt}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </motion.div>
      )}

      <motion.div>
        <Section title="Insight Utama">
          <div className="p-8 rounded-2xl bg-gray-100 border border-gray-200">
            <ul className="space-y-4">
              {project.insights.map((insight, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-300 text-black rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 leading-relaxed">{insight}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </Section>
      </motion.div>
    </motion.main>
  );
}
