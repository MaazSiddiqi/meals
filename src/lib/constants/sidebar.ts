import { Home } from "lucide-react";

type SidebarItem = {
  title: string;
  url: string;
  icon?: React.ElementType;
};

export const SIDEBAR_ITEMS = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
] as const satisfies SidebarItem[];
