import { FC } from "react";
import { motion } from "motion/react";
import Logo from "../header/Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface SidebarProps {
  onClose: () => void;
  isOpen: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    // sidebar container
    <div
      className={`fixed inset-y-0 left-0 z-50 bg-darkColor/50 shadow-xl hoverEffect w-full ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <motion.div
        ref={sidebarRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="min-w-72 max-w-96 bg-darkColor text-white/70 h-full p-10 border-r border-r-white flex flex-col gap-6"
      >
        {/* action div */}
        <div className="flex items-center justify-between">
          <button onClick={onClose}>
            <Logo text="Tulus" className="text-white" />
          </button>

          <button className="hover:text-red-500 hoverEffect ">
            <X className="w-7 h-7" onClick={onClose} />
          </button>
        </div>
        {/*  menu links */}

        <div className="flex flex-col items-start gap-3.5 text-base font-semibold tracking-wide">
          {headerData.map((item) => (
            <Link
              onClick={onClose}
              key={item.href}
              href={item.href}
              className={`hover:text-white  cursor-pointer hoverEffect relative group ${
                pathname === item.href && "text-white"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* social media links */}
        <SocialMedia />
      </motion.div>
    </div>
  );
};

export default Sidebar;
