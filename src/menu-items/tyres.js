import { GiCarWheel } from "react-icons/gi";

const icons = {
  GiCarWheel,
};

export const tyres = {
  id: "tyres",
  title: "Tyres",
  type: "group",
  children: [
    {
      id: "create-tyre",
      title: "Create Tyre",
      type: "item",
      url: "/create-tyre",
      icon: icons.GiCarWheel,
    },
  ],
};
