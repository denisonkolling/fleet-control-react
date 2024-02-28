import { BiTrip } from "react-icons/bi";
import { DollarOutlined } from "@ant-design/icons";

const icons = {
  BiTrip,
  DollarOutlined,
};

export const trips = {
  id: "trips",
  title: "Trips",
  type: "group",
  children: [
    {
      id: "create-trip",
      title: "Create Trip",
      type: "item",
      url: "/create-trip",
      icon: icons.BiTrip,
    },
    {
      id: "sample-page",
      title: "Trip Expenses",
      type: "item",
      url: "/sample-page",
      icon: icons.DollarOutlined,
    },
  ],
};
