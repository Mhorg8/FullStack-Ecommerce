import { TopFooterItem } from "@/types";
import {
  ClockIcon,
  MapIcon,
  MessageCircleIcon,
  PhoneIcon,
} from "lucide-react";
import React from "react";
const TopFooterItems: TopFooterItem[] = [
  {
    title: "Visit Us",
    subTitle: "New Orlean ,USA",
    icon: (
      <MapIcon className="text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: "Call Us",
    subTitle: "+98 923 229 8976",
    icon: (
      <PhoneIcon className="text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: "Working  Hours",
    subTitle: "Mon - Sat: 10:00 AM - 7:00 PM",
    icon: (
      <ClockIcon className="text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: "Email Us",
    subTitle: "example@gmail.com",
    icon: (
      <MessageCircleIcon className="text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
      {TopFooterItems.map((item, index) => (
        <ContentItem
          key={index}
          icon={item.icon}
          title={item.title}
          subTitle={item.subTitle}
        />
      ))}
    </div>
  );
};

const ContentItem = ({ icon, title, subTitle }: TopFooterItem) => {
  return (
    <div className="flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors">
      {icon}

      <div>
        <h3 className="font-semibold text-gray-900 group-hover:text-darkColor ">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900 transition-colors">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default FooterTop;
