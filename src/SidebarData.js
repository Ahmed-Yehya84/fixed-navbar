import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Главная",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Клиенты",
    path: "/clients",
    icon: <IoIcons.IoIosPaper />,
    className: "nav-text",
  },
  {
    title: "Сотрудники",
    path: "/coworkers",
    icon: <IoIcons.IoIosPeople />,
    className: "nav-text",
  },
  {
    title: "Аналитика",
    path: "/analytics",
    icon: <IoIcons.IoIosAnalytics />,
    className: "nav-text",
  },
];
