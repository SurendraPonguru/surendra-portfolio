
import { ReactNode } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  color: string;
}
import { socialMedia } from "@/assests/context";

function SocialLink({ href, icon, label, color }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 ${color}`}
    >
      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 group-hover:rotate-12">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-medium">{label}</h3>
        {/* <p className="text-white/80 text-sm">{href.replace(/(mailto:|tel:)/, "")}</p> */}
      </div>
    </a>
  );
}

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <SocialLink
        href={socialMedia.github}
        icon={<Github size={20} />}
        label="GitHub"
        color="bg-gray-800 hover:bg-gray-700"
      />
      <SocialLink
        href={socialMedia.linkedin}
        icon={<Linkedin size={20} />}
        label="LinkedIn"
        color="bg-blue-600 hover:bg-blue-500"
      />
      <SocialLink
        href={socialMedia.x}
        icon={<FaXTwitter size={20} />}
        label="X (Twitter)"
        color="bg-black hover:bg-gray-900"
      />
      <SocialLink
        href={socialMedia.instagram}
        icon={<Instagram size={20} />}
        label="Instagram"
        color="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400"
      />
      <SocialLink
        href={`mailto:${socialMedia.email}`}
        icon={<Mail size={20} />}
        label="Email"
        color="bg-emerald-600 hover:bg-emerald-500"
      />
      <SocialLink
        href={`tel:${socialMedia.Phone}`}
        icon={<Phone size={20} />}
        label="Phone"
        color="bg-amber-600 hover:bg-amber-500"
      />
    </div>
  );
}
