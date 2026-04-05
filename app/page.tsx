import Link from "next/link";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
const skills = [
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Intermediate" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Git & GitHub", level: "Intermediate" },
  { name: "Web3 / Solidity", level: "Beginner" },
];

const projects = [
  {
    title: "Personal Blog",
    description: "A markdown-powered blog built with Next.js and Tailwind CSS. Features dynamic routing and MDX rendering.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://my-blog-lemon-delta.vercel.app",
    githubUrl: "https://github.com/patrickcrypt136/my-blog",
  },
  {
    title: "Drape E-commerce",
    description: "A full React e-commerce app with a customer shop and manager dashboard.",
    tags: ["React", "JavaScript", "CSS"],
    liveUrl: "",
    githubUrl: "",
  },
];
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Nav */}
      <nav className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
        <span className="font-bold text-lg tracking-tight">Patrick Kelvin</span>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="https://my-blog-lemon-delta.vercel.app" target="_blank" className="hover:text-white transition-colors">Blog</a>
        </div>
      </nav>

      <Hero />

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-800">
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        <p className="text-gray-400 mb-10">Technologies I work with</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition-all">
              <p className="font-medium text-sm mb-1">{skill.name}</p>
              <p className="text-xs text-gray-500">{skill.level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-800">
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <p className="text-gray-400 mb-10">Things I've built</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 text-sm">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Live →
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
<section id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-800">
  <h2 className="text-2xl font-bold mb-2">Contact</h2>
  <p className="text-gray-400 mb-10">Let's work together or just say hi</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
    {/* Left */}
    <div className="flex flex-col gap-4">
      <p className="text-gray-300 text-sm">Reach me directly at</p>
      <a href="mailto:patrickcrypt136@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
        patrickcrypt136@gmail.com
      </a>
      <div className="flex gap-4 mt-2">
        <a href="https://github.com/patrickcrypt136" target="_blank" className="border border-gray-700 hover:border-gray-500 text-gray-300 px-5 py-2 rounded-lg text-sm transition-colors">
          GitHub
        </a>
        <a href="https://x.com/patrickcrypt136" target="_blank" className="border border-gray-700 hover:border-gray-500 text-gray-300 px-5 py-2 rounded-lg text-sm transition-colors">
          X (Twitter)
        </a>
      </div>
    </div>

    {/* Right - Form */}
    <ContactForm />
  </div>
</section>
      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-600 text-sm">
        Built by Patrick Kelvin with Next.js & Tailwind CSS
      </footer>
    </main>
  );
}