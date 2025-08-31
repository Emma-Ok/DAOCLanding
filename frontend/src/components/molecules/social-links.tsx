import { SocialIcon } from "@/components/atoms/social-icon"
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/diego_ao_25/", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/nombreartista", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/nombreartista", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/in/nombreartista", label: "LinkedIn" },
]

export function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center">
      {socialLinks.map((social, index) => (
        <SocialIcon key={index} icon={social.icon} href={social.href} label={social.label} />
      ))}
    </div>
  )
}
