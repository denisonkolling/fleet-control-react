import { UserAddOutlined } from "@ant-design/icons";

const icons = {
  UserAddOutlined,
};

export const drivers = {
  id: "group-driver",
  title: "Drivers",
  type: "group",
  children: [
    {
      id: "create-driver",
      title: "Create Driver",
      type: "item",
      url: "/create-driver",
      icon: icons.UserAddOutlined,
    },
  ],
};
