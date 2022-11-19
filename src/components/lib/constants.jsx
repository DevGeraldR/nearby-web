import { AiOutlineEdit } from "react-icons/ai";
import { GrUserAdmin, GrChapterAdd } from "react-icons/gr";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "addPlace",
    label: "Add Place",
    path: "/",
    icon: <GrChapterAdd />,
  },
  {
    key: "editPlace",
    label: "EditPlace",
    path: "/editPlace",
    icon: <AiOutlineEdit />,
  },
  {
    key: "applyAdmin",
    label: "Apply Admin",
    path: "/applyAdmin",
    icon: <GrUserAdmin />,
  },
];
