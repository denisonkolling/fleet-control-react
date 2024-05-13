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
      title: "Trip Registration",
      type: "item",
      url: "/create-trip",
      icon: icons.BiTrip,
    },
    {
      id: "trip-expenses",
      title: "Trip Expenses",
      type: "item",
      url: "/trip-expenses",
      icon: icons.DollarOutlined,
    },
  ],
};
