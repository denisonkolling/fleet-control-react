import { TruckOutlined } from "@ant-design/icons";
import { TbMap2 } from "react-icons/tb";

const icons = {
  TruckOutlined,
  TbMap2,
};

export const vehicles = {
  id: "vehicles",
  title: "Vehicles",
  type: "group",
  children: [
    {
      id: "create-vehicle",
      title: "Vehicles Registration",
      type: "item",
      url: "/create-vehicle",
      icon: icons.TruckOutlined,
    },
    {
      id: "vehicles-map",
      title: "Vehicles Map",
      type: "item",
      url: "/vehicles-map",
      icon: icons.TbMap2,
    },

  ],
};
