import { GiCarWheel } from "react-icons/gi";
import { TfiRulerPencil } from "react-icons/tfi";
import { BsCardList } from "react-icons/bs";

const icons = {
  GiCarWheel,
  TfiRulerPencil,
  BsCardList
};

export const tyres = {
  id: "tyres",
  title: "Tyres",
  type: "group",
  children: [
    {
      id: "create-tyre",
      title: "Tyre Registration",
      type: "item",
      url: "/create-tyre",
      icon: icons.GiCarWheel,
    },
    {
      id: "tyre-reading",
      title: "Wear Reading",
      type: "item",
      url: "/tyre-reading",
      icon: icons.TfiRulerPencil,
    },
    {
      id: "list-tyre-reading",
      title: "List",
      type: "item",
      url: "/list-tyre-reading",
      icon: icons.BsCardList,
    },
  ],
};
