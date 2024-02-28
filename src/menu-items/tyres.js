import { GiCarWheel } from "react-icons/gi";
import { TfiRulerPencil } from "react-icons/tfi";

const icons = {
  GiCarWheel,
  TfiRulerPencil,
};

export const tyres = {
  id: "tyres",
  title: "Tyres",
  type: "group",
  children: [
    {
      id: "create-tyre",
      title: "Create",
      type: "item",
      url: "/create-tyre",
      icon: icons.GiCarWheel,
    },
    {
      id: "tyre-reading",
      title: "Reading",
      type: "item",
      url: "/tyre-reading",
      icon: icons.TfiRulerPencil,
    },
  ],
};
