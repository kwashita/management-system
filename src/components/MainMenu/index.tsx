import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  { label: "Option 1", key: "/page1", icon: <PieChartOutlined /> },
  { label: "Option 2", key: "/page2", icon: <DesktopOutlined /> },
  {
    label: "User",
    key: "page3",
    icon: <UserOutlined />,
    children: [
      { label: "301", key: "/page3/page301" },
      { label: "Bill", key: "4" },
      { label: "Alex", key: "5" },
    ],
  },
  {
    label: "Team",
    key: "sub2",
    icon: <TeamOutlined />,
    children: [
      { label: "Team 1", key: "6" },
      { label: "Team 2", key: "7" },
    ],
  },
  { label: "Files", key: "9", icon: <FileOutlined /> },
];

const Comp: React.FC = () => {
  const [openKeys, setOpenKeys] = useState([""]);
  const currentRoute = useLocation();
  console.log(currentRoute);

  const navigateTo = useNavigate();

  const menuClick = (e: { key: string }) => {
    navigateTo(e.key);
  };

  const menuOpenSwitch = (keys: string[]) => {
    console.log(keys);
    setOpenKeys(() => {
      keys.shift();
      return keys;
    });
    // setOpenKeys(() => keys[keys.length - 1]);
  };
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      items={items}
      onClick={menuClick}
      onOpenChange={menuOpenSwitch}
      openKeys={openKeys}
    />
  );
};

export default Comp;
