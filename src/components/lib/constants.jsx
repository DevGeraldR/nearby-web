import { AiOutlineEdit } from "react-icons/ai";
import { GrChapterAdd } from "react-icons/gr";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "addPlace",
    label: "Add Place",
    path: "/",
    icon: <GrChapterAdd />,
  },
  {
    key: "editPlace",
    label: "Edit Place",
    path: "/editPlace",
    icon: <AiOutlineEdit />,
  },
];
