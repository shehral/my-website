import Link from "next/link"
import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-4 bg-gradient-to-t from-black to-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start gap-2 mb-6 md:mb-0">
          <div className="text-xl font-sora font-bold text-gradient">Ali Shehral</div>
          <div className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <Link
            href="https://neurai.sites.northeastern.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors"
          >
            NEURAI Lab
            <ExternalLink size={14} />
          </Link>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/shehral"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-950"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://x.com/shehral_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-950"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com/in/shehral/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-950"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
