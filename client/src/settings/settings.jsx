import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import Profile from "./profile";
import Security from "./security";
import Reservation from "./reservation";
import {
  SettingOutlined,
  UserOutlined,
  TableOutlined,
  AppstoreOutlined,
  LockOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;

const Settings = () => {
  const [selectedSection, setSelectedSection] = useState("settings");

  const handleMenuClick = (key) => {
    setSelectedSection(key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div className="logo">
          <Link to="/home">
            <img
              src="assets/img/logo.png"
              alt="Logo"
              style={{ maxWidth: "80%", maxHeight: "80%", margin: "auto" }}
            />
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedSection]}
          style={{ backgroundColor: "#000033" }}
        >
          <Menu.Item
            key="settings"
            icon={<SettingOutlined />}
            onClick={() => handleMenuClick("settings")}
            style={{
              backgroundColor:
                selectedSection === "settings" ? "red" : "transparent",
            }}
          >
            Settings
          </Menu.Item>
          <Menu.Item
            key="profile"
            icon={<UserOutlined />}
            onClick={() => handleMenuClick("profile")}
            style={{
              backgroundColor:
                selectedSection === "profile" ? "red" : "transparent",
            }}
          >
            My Account
          </Menu.Item>
          <Menu.Item
            key="appointments"
            icon={<TableOutlined />}
            onClick={() => handleMenuClick("appointments")}
            style={{
              backgroundColor:
                selectedSection === "appointments" ? "red" : "transparent",
            }}
          >
            My Appointments
          </Menu.Item>
          <Menu.Item
            key="products"
            icon={<AppstoreOutlined />}
            onClick={() => handleMenuClick("products")}
            style={{
              backgroundColor:
                selectedSection === "products" ? "red" : "transparent",
            }}
          >
            Products
          </Menu.Item>
          <Menu.Item
            key="privacy"
            icon={<LockOutlined />}
            onClick={() => handleMenuClick("privacy")}
            style={{
              backgroundColor:
                selectedSection === "privacy" ? "red" : "transparent",
            }}
          >
            Privacy & Security
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "16px" }}>
          {selectedSection === "settings" && <p>Settings content goes here</p>}
          {selectedSection === "profile" && <Profile />}
          {selectedSection === "privacy" && <Security />}
          {selectedSection === "appointments" && <Reservation />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Settings;
