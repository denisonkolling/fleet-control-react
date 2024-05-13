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
      id: "trip-expense",
      title: "Trip Expense",
      type: "item",
      url: "/trip-expense",
      icon: icons.DollarOutlined,
    },
  ],
};
