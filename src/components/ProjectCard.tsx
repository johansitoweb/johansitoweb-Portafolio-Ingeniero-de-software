import { useEffect, useRef, useState } from "react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

interface ProjectLink {
  name: string
  url: string
  icon: any
}

interface ProjectCardProps {
  image: string
  title: string
  description: string
  tags: string[]
  links: ProjectLink[]
}

const ProjectCard = ({
  image,
  title,
  description,
  tags,
  links,
}: ProjectCardProps) => {
  const projectRef = useRef(null)
  const [threshold, setThreshold] = useState(0.5)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { // condicional if logica
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            entry.target.classList.remove("opacity-0")
            entry.target.classList.remove("animate-fade-out-down")
            setThreshold(0.3)
          } else {
            entry.target.classList.remove("animate-fade-in-up")
            entry.target.classList.add("animate-fade-out-down")
            entry.target.classList.add("opacity-0")

            setThreshold(0.5)
          }
        })
      },
      {
        threshold: threshold,
        rootMargin: "0px",
      }
    )

    if (projectRef.current) {
      observer.observe(projectRef.current)
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current)
      }
    }
  }, [threshold])

  return (
    <article className="flex flex-col gap-8 opacity-0" ref={projectRef}>
      <img
        src={image}
        alt={title}
        className="w-[800px] rounded-3xl border border-slate-200 dark:border-slate-700"
      />
      <div className="flex flex-col justify-between gap-4">
        <h3 className="font-bold text-2xl">{title}</h3>
        <div className="flex gap-4">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              className="bg-slate-800 text-slate-200 dark:text-slate-800 dark:bg-slate-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <p className="max-w-[800px] text-lg">{description}</p>
        <div className="flex gap-4">
          {links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noreferrer">
              <Button variant="secondary">
                <link.icon />
                {link.name}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
