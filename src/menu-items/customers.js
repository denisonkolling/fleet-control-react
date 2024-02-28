import { UserAddOutlined } from "@ant-design/icons";

const icons = {
  UserAddOutlined,
};

export const customers = {
  id: "customers",
  title: "Customers",
  type: "group",
  children: [
    {
      id: "create-customer",
      title: "Create",
      type: "item",
      url: "/create-customer",
      icon: icons.UserAddOutlined,
    },
  ],
};
