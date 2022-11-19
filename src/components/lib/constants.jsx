import { FcPlus, FcSettings } from "react-icons/fc";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "addPlace",
    label: "Add Place",
    path: "/",
    icon: <FcPlus />,
  },
  {
    key: "editPlace",
    label: "Edit Place",
    path: "/editPlace",
    icon: <FcSettings />,
  },
];
