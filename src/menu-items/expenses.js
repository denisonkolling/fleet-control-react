import { LuBarChart3 } from "react-icons/lu";

const icons = {
  LuBarChart3,
};

export const expenses = {
  id: "expenses",
  title: "Expenses",
  type: "group",
  children: [
    {
      id: "sample-page",
      title: "Expenses Report",
      type: "item",
      url: "/sample-page",
      icon: icons.LuBarChart3,
    },
  ],
};
