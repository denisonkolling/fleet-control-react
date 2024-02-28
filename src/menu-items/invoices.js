import { LiaFileInvoiceSolid } from "react-icons/lia";

const icons = {
  LiaFileInvoiceSolid,
};

export const invoices = {
  id: "invoices",
  title: "Invoices",
  type: "group",
  children: [
    {
      id: "create-invoice",
      title: "Create",
      type: "item",
      url: "/create-invoice",
      icon: icons.LiaFileInvoiceSolid,
    },
  ],
};
