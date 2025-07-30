"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  GraduationCap,
  MapPin,
  Phone,
  Calendar,
  User,
  Briefcase,
  Trophy,
  Menu,
  X,
} from "lucide-react"

export default function KrishnaPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [typewriterText, setTypewriterText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const typewriterTexts = [
    "Hello, I'm Krishna Prasath 👋",
    "Final-Year CSBS Student | Web Developer | Problem Solver",
    "Let's build something amazing together!",
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (currentTextIndex < typewriterTexts.length) {
      const currentText = typewriterTexts[currentTextIndex]
      let charIndex = 0

      const typeInterval = setInterval(() => {
        if (charIndex <= currentText.length) {
          setTypewriterText(currentText.slice(0, charIndex))
          charIndex++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            if (currentTextIndex < typewriterTexts.length - 1) {
              setCurrentTextIndex(currentTextIndex + 1)
              setTypewriterText("")
            }
          }, 400)
        }
      }, 25)

      return () => clearInterval(typeInterval)
    }
  }, [currentTextIndex])

  const projects = [
    {
      title: "Car Rental System",
      description:
        "A responsive car rental frontend website built using React.js and Tailwind CSS. Users can explore chauffeur and self-driven options with transparent KM-based pricing. Images are for demo only.",
      image: "/car-rental.png",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      liveUrl: "https://car-rental-using-react.vercel.app",
      githubUrl: "https://github.com/KRISHNAPRASATH90/car-rental-using-react",
    },
    {
      title: "Task Tracker (To-Do List)",
      description:
        "A clean React-based to-do list app with features to add, complete, and delete tasks. Built for productivity and demonstration of React component logic.",
      image: "/task-tracker.png",
      technologies: ["React.js", "JavaScript", "CSS", "HTML"],
      liveUrl: "https://task-tracker-nu-gilt.vercel.app",
      githubUrl: "https://github.com/KRISHNAPRASATH90/task-tracker",
    },
  ]

  const skills = [
    {
      name: "Programming Languages",
      icon: Code,
      technologies: ["C", "Python", "Java"],
    },
    {
      name: "Web Development",
      icon: ExternalLink,
      technologies: ["HTML", "CSS", "JavaScript", "React.js","sql"],
    },
  ]

  const education = [
    {
      degree: "B.Tech - Computer Science and Business Systems",
      institution: "KIT-Kalaignarkarunanidhi Institute of Technology, Coimbatore",
      period: "2022 - 2026",
      cgpa: "7.7 CGPA",
      status: "Final Year",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Velavan Mat.Hr.Sec. School",
      period: "2022",
      cgpa: "80%",
    },
    {
      degree: "10th Grade",
      institution: "Velavan Mat.Hr.Sec. School",
      period: "2020",
      cgpa: "75%",
    },
  ]

  const achievements = [
    "Infosys Springboard - Python Foundation Certification",
    "Infosys Springboard - TechA Frontend Development Foundation Certification",
    "Infosys Springboard - TechA Web Development Using HTML and CSS Foundation Certification",
    "Consistently Participating in weekly international contest platform such as CodeChef",
    "Completed a 14-day Internship at ETHER INFOTECH on ReactJS (2024), Coimbatore, Tamil Nadu",
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadResume = () => {
    // Convert Google Drive view link to direct download link
    const driveFileId = "1wi34OMsx5IYqkeiKjc6_QFCUQqHYDpO6"
    const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`

    // Open the direct download link
    window.open(directDownloadUrl, "_blank")
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 relative overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Enhanced Violet Live Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {/* Large Moving Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob-medium"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob-medium animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-medium animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/3 w-88 h-88 bg-fuchsia-400 rounded-full mix-blend-multiply filter blur-xl opacity-55 animate-blob-medium animation-delay-6000"></div>

        {/* Floating Particles */}
        <div className="absolute top-10 left-10 w-8 h-8 bg-violet-500 rounded-full animate-float-medium opacity-80 shadow-lg"></div>
        <div className="absolute top-20 right-20 w-10 h-10 bg-purple-500 rounded-full animate-float-medium-delayed opacity-75 shadow-lg"></div>
        <div className="absolute top-40 left-1/2 w-6 h-6 bg-indigo-500 rounded-full animate-float-medium-slow opacity-85 shadow-lg"></div>
        <div className="absolute bottom-20 right-10 w-9 h-9 bg-fuchsia-500 rounded-full animate-float-medium opacity-70 shadow-lg"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-violet-600 rounded-full animate-float-medium-delayed opacity-80 shadow-lg"></div>
        <div className="absolute top-60 right-1/3 w-7 h-7 bg-purple-600 rounded-full animate-float-medium-slow opacity-75 shadow-lg"></div>

        {/* Moving Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/6 w-full h-2 bg-gradient-to-r from-transparent via-violet-400 to-transparent animate-slide-right-medium opacity-70"></div>
          <div className="absolute top-1/3 w-full h-2 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-slide-left-medium opacity-65"></div>
          <div className="absolute top-1/2 w-full h-2 bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-slide-right-medium opacity-60"></div>
          <div className="absolute top-2/3 w-full h-2 bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent animate-slide-left-medium opacity-75"></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-16 right-16 w-20 h-20 border-4 border-violet-400 rotate-45 animate-spin-medium opacity-70 shadow-lg"></div>
        <div className="absolute bottom-32 left-16 w-16 h-16 border-4 border-purple-400 animate-pulse-medium opacity-80 shadow-lg"></div>
        <div className="absolute top-1/2 left-8 w-14 h-14 bg-indigo-400 rotate-45 animate-bounce-medium opacity-75 shadow-lg"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-32 right-1/4 w-64 h-64 bg-gradient-to-br from-violet-300 to-transparent rounded-full animate-pulse-medium opacity-50 shadow-2xl"></div>
        <div className="absolute bottom-48 left-1/4 w-56 h-56 bg-gradient-to-br from-purple-300 to-transparent rounded-full animate-pulse-medium-delayed opacity-55 shadow-2xl"></div>
      </div>

      {/* Content with higher z-index */}
      <div className="relative" style={{ zIndex: 10 }}>
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-violet-200 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-xl font-bold text-violet-900">Krishna Prasath DS</div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {["home", "about", "skills", "projects", "education", "achievements", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors ${
                      activeSection === section ? "text-violet-600 font-medium" : "text-gray-600 hover:text-violet-900"
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-600 hover:text-violet-900 p-2"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden pb-4 border-t border-violet-200 mt-4">
                <div className="flex flex-col space-y-2 pt-4">
                  {["home", "about", "skills", "projects", "education", "achievements", "contact"].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`capitalize text-left py-2 px-4 rounded transition-colors ${
                        activeSection === section
                          ? "text-violet-600 font-medium bg-violet-50"
                          : "text-gray-600 hover:text-violet-900 hover:bg-gray-50"
                      }`}
                    >
                      {section}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <Avatar className="w-32 h-32 sm:w-40 sm:h-40 mx-auto lg:mx-0 mb-6 lg:mb-8 border-4 border-violet-200 shadow-lg">
                  <AvatarImage
                    src="/profile.jpeg"
                    alt="Krishna Prasath DS"
                    className="object-cover object-center transform rotate-2 hover:rotate-0 transition-transform duration-300"
                  />
                  <AvatarFallback className="text-xl sm:text-2xl bg-violet-100">KP</AvatarFallback>
                </Avatar>

                <div className="mb-6 lg:mb-8">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 lg:mb-4 leading-tight">
                    {currentTextIndex === 0 && (
                      <span>
                        {typewriterText}
                        <span className="animate-pulse text-violet-600">|</span>
                      </span>
                    )}
                    {currentTextIndex > 0 && typewriterTexts[0]}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-violet-600 mb-3 lg:mb-4 leading-relaxed">
                    {currentTextIndex === 1 && (
                      <span>
                        {typewriterText}
                        <span className="animate-pulse">|</span>
                      </span>
                    )}
                    {currentTextIndex > 1 && typewriterTexts[1]}
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {currentTextIndex === 2 && (
                      <span>
                        {typewriterText}
                        <span className="animate-pulse text-violet-600">|</span>
                      </span>
                    )}
                  </p>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 mb-6 lg:mb-8 text-sm sm:text-base">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-6 lg:mb-8">
                  <Button
                    size="lg"
                    className="gap-2 bg-violet-600 hover:bg-violet-700 w-full sm:w-auto"
                    onClick={downloadResume}
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 border-violet-600 text-violet-600 hover:bg-violet-50 w-full sm:w-auto bg-transparent"
                    onClick={() => {
                      window.open(
                        "mailto:krishnaprasath810@gmail.com?subject=Let's Connect&body=Hi Krishna, I would like to connect with you.",
                        "_blank",
                      )
                    }}
                  >
                    <Mail className="w-4 h-4" />
                    Get In Touch
                  </Button>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-violet-600 hover:bg-violet-50 text-xs sm:text-sm"
                    onClick={() => window.open("https://github.com/KRISHNAPRASATH90", "_blank")}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-violet-600 hover:bg-violet-50 text-xs sm:text-sm"
                    onClick={() => window.open("https://linkedin.com/in/krishna-prasath-16273828b", "_blank")}
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-violet-600 hover:bg-violet-50 text-xs sm:text-sm"
                    onClick={() => window.open("https://www.codechef.com/users/krishna28prasa", "_blank")}
                  >
                    <Code className="w-4 h-4" />
                    CodeChef
                  </Button>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <img
                    src="/profile.jpeg"
                    alt="Krishna Prasath DS"
                    className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 sm:border-8 border-white shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
              <div className="w-20 h-1 bg-violet-600 mx-auto"></div>
            </div>

            <Card className="p-4 sm:p-6 lg:p-8 border-violet-200 bg-white/90 backdrop-blur-sm">
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Final-Year B.Tech Student</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      I'm a final-year B.Tech student (2022–2026) specializing in Computer Science and Business Systems
                      at KIT-Kalaignarkarunanidhi Institute of Technology, Coimbatore with a CGPA of 7.7. I have a
                      strong passion for web development and programming, with expertise in multiple programming
                      languages including C, Python, and Java.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Web Developer & Problem Solver
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      I specialize in frontend technologies including HTML, CSS, JavaScript, and React.js. I'm actively
                      learning and contributing to the developer community through platforms like CodeChef, constantly
                      improving my problem-solving skills and staying updated with the latest technologies.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-violet-600 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">+91 8248104043</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-violet-600 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700 break-all">krishnaprasath810@gmail.com</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-violet-600 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Coimbatore, Tamil Nadu</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-violet-600 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Final Year Student</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
              <div className="w-20 h-1 bg-violet-600 mx-auto"></div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow border-violet-200 bg-white/90 backdrop-blur-sm p-4 sm:p-6"
                >
                  <CardHeader className="pb-4">
                    <skill.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-violet-600 mb-3 sm:mb-4" />
                    <CardTitle className="text-lg sm:text-xl text-gray-900">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skill.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-violet-100 text-violet-800 text-xs sm:text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-violet-600 mx-auto"></div>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-violet-200 bg-white/90 backdrop-blur-sm"
                >
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg sm:text-xl text-gray-900">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-violet-300 text-violet-700 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex">
                      <Button
                        size="sm"
                        className="w-full gap-2 bg-violet-600 hover:bg-violet-700 text-xs sm:text-sm"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education Timeline</h2>
              <div className="w-20 h-1 bg-violet-600 mx-auto"></div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-4 sm:p-6 border-violet-200 bg-white/90 backdrop-blur-sm">
                  <div className="flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                      <p className="text-base sm:text-lg text-violet-600 font-medium mb-2">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm sm:text-base">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <GraduationCap className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm sm:text-base">{edu.cgpa}</span>
                        </div>
                        {edu.status && (
                          <Badge className="bg-violet-100 text-violet-800 text-xs sm:text-sm">{edu.status}</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Achievements & Certifications
              </h2>
              <div className="w-20 h-1 bg-violet-600 mx-auto"></div>
            </div>

            <div className="grid gap-3 sm:gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-3 sm:p-4 border-violet-200 bg-white/90 backdrop-blur-sm">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {index === achievements.length - 1 ? (
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />
                      ) : (
                        <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">{achievement}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-violet-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
            </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <Card className="p-4 sm:p-6 border-violet-200 bg-white/90 backdrop-blur-sm">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h3>
                    <p className="text-gray-600 text-xs sm:text-sm break-all">krishnaprasath810@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 border-violet-200 bg-white/90 backdrop-blur-sm">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Phone</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">+91 8248104043</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Button
                size="lg"
                className="gap-2 bg-violet-600 hover:bg-violet-700 w-full sm:w-auto text-sm"
                onClick={() => window.open("https://github.com/KRISHNAPRASATH90", "_blank")}
              >
                <Github className="w-4 h-4" />
                github.com/KRISHNAPRASATH90
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-violet-600 text-violet-600 hover:bg-violet-50 w-full sm:w-auto text-sm bg-transparent"
                onClick={() => window.open("https://linkedin.com/in/krishna-prasath-16273828b", "_blank")}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-violet-600 text-violet-600 hover:bg-violet-50 w-full sm:w-auto text-sm bg-transparent"
                onClick={() => window.open("https://www.codechef.com/users/krishna28prasa", "_blank")}
              >
                <Code className="w-4 h-4" />
                CodeChef Profile
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Krishna Prasath DS</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Final-Year B.Tech Student | Web Developer | Problem Solver
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="block text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="block text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="block text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Contact
                  </button>
                </div>
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h3>
                <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                  <p>Coimbatore, Tamil Nadu, India</p>
                  <p className="break-all">krishnaprasath810@gmail.com</p>
                  <p>+91 8248104043</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-4 sm:pt-6 text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2024 Krishna Prasath DS. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes blob-medium {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          25% {
            transform: translate(30px, -40px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(35px, -15px) scale(1.05);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-8px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }
        
        @keyframes float-medium-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-18px) translateX(-12px) rotate(90deg);
          }
          50% {
            transform: translateY(-25px) translateX(15px) rotate(180deg);
          }
          75% {
            transform: translateY(-8px) translateX(-10px) rotate(270deg);
          }
        }
        
        @keyframes float-medium-slow {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.2);
          }
        }
        
        @keyframes slide-right-medium {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes slide-left-medium {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes spin-medium {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes bounce-medium {
          0%, 100% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(-12px) rotate(45deg);
          }
        }
        
        @keyframes pulse-medium {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
        
        @keyframes pulse-medium-delayed {
          0%, 100% {
            opacity: 0.55;
            transform: scale(1);
          }
          50% {
            opacity: 0.85;
            transform: scale(1.3);
          }
        }
        
        .animate-blob-medium {
          animation: blob-medium 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-medium-delayed {
          animation: float-medium-delayed 7s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-medium-slow {
          animation: float-medium-slow 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-slide-right-medium {
          animation: slide-right-medium 12s linear infinite;
        }
        .animate-slide-left-medium {
          animation: slide-left-medium 10s linear infinite;
        }
        .animate-spin-medium {
          animation: spin-medium 15s linear infinite;
        }
        .animate-bounce-medium {
          animation: bounce-medium 4s ease-in-out infinite;
        }
        .animate-pulse-medium {
          animation: pulse-medium 6s ease-in-out infinite;
        }
        .animate-pulse-medium-delayed {
          animation: pulse-medium-delayed 7s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}
