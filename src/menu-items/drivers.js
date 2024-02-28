import { UserAddOutlined } from "@ant-design/icons";
import { BiStopwatch } from "react-icons/bi";

const icons = {
  UserAddOutlined,
  BiStopwatch,
};

export const drivers = {
  id: "group-driver",
  title: "Drivers",
  type: "group",
  children: [
    {
      id: "create-driver",
      title: "Create Driver",
      type: "item",
      url: "/create-driver",
      icon: icons.UserAddOutlined,
    },
    {
      id: "driving-hours",
      title: "Driving Hours",
      type: "item",
      url: "/driving-hours",
      icon: icons.BiStopwatch,
    },
  ],
};
