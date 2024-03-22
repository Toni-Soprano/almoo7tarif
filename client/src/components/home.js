import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  Breadcrumb,
  Layout,
  Menu,
  Avatar,
  Dropdown,
  Input,
  theme,
  Button,
} from "antd";
import Banner from "../cmmons/banner";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import BasicExample from "../cmmons/cardd"; // Import BasicExample component

const { Header, Content } = Layout;
const items = [
  { key: "1", label: "Home", link: "/home" },
  { key: "2", label: "Services", link: null },
  { key: "3", label: "About", link: null },
];

const App = () => {
  const { colorBgContainer, borderRadiusLG } = theme.useToken();
  const [selectedSection, setSelectedSection] = useState("1");
  const userName = localStorage.getItem("name");
  const userImg = localStorage.getItem("img");
  const contentRef = useRef(null); // Reference for the Content section
  const servicesRef = useRef(null); // Reference for the Services section
  const location = useLocation();

  useEffect(() => {
    // Set selected section based on the current location pathname
    const currentSection = items.find(
      (item) => item.link === location.pathname
    );
    if (currentSection) {
      setSelectedSection(currentSection.key);
    }
  }, [location]);

  const handleMenuClick = ({ key }) => {
    setSelectedSection(key);
    // Scroll to the Content section when clicking on "Services" link
    if (key === "2" && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("img");
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        <Link to="/">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  const selectedItem = items.find((item) => item.key === selectedSection);

  const handleSearch = (value) => {
    // Handle search by location functionality here
    console.log("Search by location:", value);
  };

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #e8e8e8",
          justifyContent: "space-between",
        }}
      >
        <div className="demo-logo">
          <img
            src="/assets/img/logo.png"
            alt="Your Logo"
            style={{ height: "100px", marginRight: "40px" }}
          />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          selectedKeys={[selectedSection]}
          onClick={handleMenuClick}
          style={{
            borderBottom: "1px solid #e8e8e8",
            flex: 1,
            minWidth: 0,
            textAlign: "right",
          }}
        >
          {items.map((item, index) => (
            <Menu.Item
              key={item.key}
              style={{
                backgroundColor:
                  selectedSection === item.key ? "red" : "transparent",
                transition: "background-color 0.3s",
                marginRight: index === 1 ? "20px" : 0, // Add marginRight for the second menu item (Services)
              }}
              className={selectedSection === item.key ? "selected" : ""}
            >
              {item.link ? (
                <Link to={item.link}>{item.label}</Link>
              ) : (
                item.label
              )}
            </Menu.Item>
          ))}
        </Menu>

        {userName ? (
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white m-20">
            Welcome, {userName}
          </span>
        ) : (
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Welcome, Guest
          </span>
        )}
        <div>
          {userName && (
            <Dropdown overlay={menu} trigger={["click"]}>
              <Avatar
                icon={<UserOutlined />}
                src={`http://localhost:3900/Public/uploads/${userImg}`}
                style={{ cursor: "pointer" }}
              />
            </Dropdown>
          )} 
        </div>
      </Header>
      <div ref={contentRef}>
        {/* Reference for scrolling */}
        <Content
          style={{
            padding: "32px 48px",
            position: "relative",
            marginRight:"64px",
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            {selectedItem && (
              <Breadcrumb.Item>
                {selectedItem.link ? (
                  <Link to={selectedItem.link}>{selectedItem.label}</Link>
                ) : (
                  selectedItem.label
                )}
              </Breadcrumb.Item>
            )}
          </Breadcrumb>
          <div className="text-center     ">
            <div
              style={{
                backgroundImage: `url(" assets/img/plumber-making-phone-gesture-removebg-preview.png")`,
                backgroundColor:"#02386E",
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
                padding: "150px",
                minHeight: "400px",
                margin: "134px",
                top: "20px",
                marginTop: "20px",
                marginRight: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "space-evenl",
                textAlign: "left",
                overlay:"none",
                overflow:"none",
              }}
            >
              <div style={{ marginLeft:"240px"}}> 
              <div style={{  marginBottom: "20px", textAlign:"center" }}>
                <h1
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "#fff",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    marginLeft:"90px",
                  }}
                >
                  Welcome
                </h1>
                <p
                  style={{
                    fontSize: "1.5rem",
                    color: "#fff",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                    marginLeft:"90px",
                  }}
                >
                  Explore our services and offerings
                </p>
              </div>
              <div style={{ width: "80%", marginLeft: "120px" }}>
                <Input
                  placeholder="Search by location..."
                  onPressEnter={(e) => handleSearch(e.target.value)}
                  prefix={
                    <SearchOutlined
                      style={{ cursor: "pointer", color: "#ff4d4f" }}
                    />
                  }
                  suffix={
                    <Button
                      type="primary"
                      style={{
                        backgroundColor: "#ff4d4f",
                        borderColor: "#ff4d4f",
                        borderRadius: "0 4px 4px 0",
                      }}
                      onClick={() => handleSearch("value")}
                    >
                      Search
                    </Button>
                  }
                  
                />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "-190px",
                marginLeft:"100px" ,
              }}
            >
              <Card
                title="Website Stats"
                style={{
                  width: 300,
                  marginRight: "20px",
                  borderRadius: "10px",
                }}
              >
                {/* Content for website stats card */}
              </Card>
              <Card
                title="Service 1"
                style={{
                  width: 300,
                  marginRight: "20px",
                  borderRadius: "10px",
                }}
              >
                {/* Content for service 1 card */}
              </Card>
              <Card
                title="Service 2"
                style={{ width: 300, borderRadius: "10px" }}
              >
                {/* Content for service 2 card */}
              </Card>
            </div>
          </div>
        </Content>
      </div>
      <h1 className="text-center p-5">Services</h1>
      <BasicExample />
      {/* Services section */}
    </Layout>
  );
};

export default App;
