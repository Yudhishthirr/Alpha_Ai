import { LayoutDashboard,CodeIcon, ImageIcon, MessageSquare, MusicIcon, VideoIcon,SettingsIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {

    label:"Dashboard",
    icon:LayoutDashboard,
    href:"/dashboard",
    color:"text-sky-500",
    bgColor: "bg-violet-500/10",
  },
  {

    label:"Conversation",
    icon:MessageSquare,
    href:"/conversation",
    color:"text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {

    label:"Image Genration",
    icon:ImageIcon,
    href:"/image",
    color:"text-pink-700",
    bgColor: "bg-violet-500/10",
  },
  // {

  //   label:"Video Genration",
  //   icon:VideoIcon,
  //   href:"/video",
  //   color:"text-orange-700",
  //   bgColor: "bg-violet-500/10",
  // },
  {

    label:"Genrate Music",
    icon:MusicIcon,
    href:"/music",
    color:"text-emerald-700",
    bgColor: "bg-violet-500/10",
  },
  {

    label:"Genrate Code",
    icon:CodeIcon,
    href:"/code",
    color:"text-green-700",
    bgColor: "bg-violet-500/10",
  }
  // {

  //   label:"Settings",
  //   icon:SettingsIcon,
  //   href:"/setting",
  //   bgColor: "bg-violet-500/10",
  // }
];
