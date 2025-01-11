import { TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Facebook, Github, Instagram, Linkedin, Slack } from "lucide-react";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}
export const socialLinks = [
  {
    title: "Github",
    href: "https://www.github.com",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "slack",
    href: "https://www.slack.com",
    icon: <Slack className="w-5 h-5" />,
  },
];

function SocialMedia({ className, tooltipClassName, iconClassName }: Props) {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5 w-full", className)}>
        {socialLinks.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link
                target="_black"
                rel="noopener noreferrer"
                href={item.href}
                className={cn(
                  "p-2 border border-white rounded-full hover:text-white hover:border-white hoverEffect",
                  iconClassName
                )}
              >
                {item.icon}
              </Link>
            </TooltipTrigger>

            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold rounded-sm text-sm p-1 mb-2",
                tooltipClassName
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export default SocialMedia;
