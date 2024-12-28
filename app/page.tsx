import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GamepadIcon as GameController, Star } from 'lucide-react'
import ThemeSwitch from "@/components/theme-switch"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      title: "Cosmic Defender",
      description: "A space-themed roguelike shooter built with Unity. Features procedurally generated levels and dynamic difficulty scaling.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Unity", "C#", "2D Graphics"]
    },
    {
      title: "Dungeon Delver",
      description: "Top-down dungeon crawler with pixel art aesthetics. Implemented custom pathfinding and combat systems.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Godot", "GDScript", "Pixel Art"]
    },
    {
      title: "Speed Racer VR",
      description: "Virtual reality racing game with realistic physics and multiplayer support. Built for Meta Quest.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Unreal Engine", "C++", "VR"]
    }
  ]

  const skills = [
    "Unity Game Development",
    "Unreal Engine",
    "C# & C++ Programming",
    "3D Modeling & Animation",
    "Game Design & Level Design",
    "Version Control (Git)",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ThemeSwitch />
      
      {/* Hero Section with blue gradient */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-500/5" />
        <div className="container relative mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            Game Developer Portfolio
          </h1>
          <p className="text-xl text-muted-foreground">
            Crafting immersive digital experiences through code and creativity
          </p>
        </div>
      </section>

      {/* Projects Grid with enhanced hover effects */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link href="#" key={index}>
              <Card className="overflow-hidden h-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 bg-card text-card-foreground">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <GameController className="h-5 w-5" />
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary"
                        className="bg-blue-500/10 text-blue-600 dark:bg-blue-500/5 dark:text-blue-400"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Skills Section with blue accents */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
          Personal Profile
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-4 rounded-lg bg-blue-500/5 dark:bg-blue-500/2 transition-all duration-300 hover:scale-105 hover:bg-blue-500/10 dark:hover:bg-blue-500/5"
              >
                <Star className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

