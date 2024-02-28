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
      title: "Create Customer",
      type: "item",
      url: "/create-customer",
      icon: icons.UserAddOutlined,
    },
  ],
};
