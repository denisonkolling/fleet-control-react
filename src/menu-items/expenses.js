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
      id: "expense-report",
      title: "Report",
      type: "item",
      url: "/expense-report",
      icon: icons.LuBarChart3,
    },
  ],
};
