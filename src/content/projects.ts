import { FaGithub } from "react-icons/fa"
import { PiLinkSimpleBold } from "react-icons/pi"

export const PROJECTS = [
  {
    title: "Johanifycss",
    description:
      "Este es un framework minimalista de css",
    image: "/neovim.jpg",
    tags: ["Astro.js" , "Svelte", "css" , "react.js"],
    links: [
      {
        name: "Lazy",
        // url: "https://github.com/slydragonn/nvim-lazy",
        icon: FaGithub,
      },
      {
        name: "Packer",
        // url: "https://github.com/slydragonn/dotfiles",
        icon: FaGithub,
      },
    ],
  },
  {
    title: "Markdown Web Editor",
    description: "A Simple and Straightforward Markdown Web Editor",
    image: "/markwriter.jpg",
    tags: ["React", "Next.js", "Codemirror", "ChakraUI"],
    links: [
      {
        name: "Preview",
        url: "https://markwriter.vercel.app/",
        icon: PiLinkSimpleBold,
      },
      {
        name: "Github",
        // url: "https://github.com/slydragonn/markwriter",
        icon: FaGithub,
      },
    ],
  },
  {
    title: "Landing Page",
    description: "Landing page for entrepreneurship competition",
    image: "/blueriver.jpg",
    tags: ["JavaScript", "Next.js"],
    links: [
      {
        name: "Preview",
        url: "https://blue-river.vercel.app/",
        icon: PiLinkSimpleBold,
      },
    ],
  },
  {
    title: "Minimalist Portfolio",
    description:
      "minimalist-dragon is a free to use template for the Astro Themes repository.",
    image: "/minimalist-dragon.jpg",
    tags: ["Astro", "TypeScript"],
    links: [
      {
        name: "Astro Themes",
        // url: "https://astro.build/themes/details/minimalist-dragon/",
        icon: PiLinkSimpleBold,
      },
      {
        name: "Github",
        // url: "https://github.com/slydragonn/minimalist-dragon",
        icon: FaGithub,
      },
    ],
  },
]
