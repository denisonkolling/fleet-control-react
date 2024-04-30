import { DashboardOutlined, FileAddOutlined } from "@ant-design/icons";
const icons = {
  DashboardOutlined,
  FileAddOutlined
};

export const dashboard = {
  id: "group-dashboard",
  title: "Dashboard",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/",
      icon: icons.DashboardOutlined,
      breadcrumbs: false,
    },
    {
      id: "imageUpload",
      title: "Image Upload",
      type: "item",
      url: "/image-upload",
      icon: icons.FileAddOutlined,
      breadcrumbs: false,
    },
  ],
};
