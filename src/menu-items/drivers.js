import { UserAddOutlined } from "@ant-design/icons";

const icons = {
  UserAddOutlined,
};

export const drivers = {
  id: "drivers",
  title: "Drivers",
  type: "group",
  children: [
    {
      id: "create-driver",
      title: "Create Driver",
      type: "item",
      url: "/sample-page",
      icon: icons.UserAddOutlined,
    },
  ],
};
