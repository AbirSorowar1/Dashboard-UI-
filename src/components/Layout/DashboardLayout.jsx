import { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DashboardOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    BarChartOutlined,
    SettingOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { borderRadiusLG },
    } = theme.useToken();

    const location = useLocation();

    const menuItems = [
        {
            key: '/dashboard',
            icon: <DashboardOutlined />,
            label: <Link to="/dashboard">Dashboard</Link>,
        },
        {
            key: '/users',
            icon: <UserOutlined />,
            label: <Link to="/users">Users</Link>,
        },
        {
            key: '/orders',
            icon: <ShoppingCartOutlined />,
            label: <Link to="/orders">Orders</Link>,
        },
        {
            key: '/analytics',
            icon: <BarChartOutlined />,
            label: <Link to="/analytics">Analytics</Link>,
        },
        {
            key: '/settings',
            icon: <SettingOutlined />,
            label: <Link to="/settings">Settings</Link>,
        },
        {
            key: '/logout',
            icon: <LogoutOutlined />,
            label: 'Logout',
            danger: true,
        },
    ];

    return (
        <Layout className="min-h-screen">
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                width={200}
                collapsedWidth={80}
                className="!bg-white !border-r !border-gray-100"  // full white + light border
                style={{
                    background: '#ffffff',           // force pure white
                    boxShadow: 'none',               // no shadow
                    borderRight: '1px solid #f0f0f0' // very light border (optional)
                }}
            >
                <div
                    className="h-16 flex items-center justify-center text-xl font-bold text-blue-600"
                    style={{ background: '#ffffff' }} // header part also white
                >
                    {collapsed ? 'AD' : 'Dashboard'}
                </div>

                <Menu
                    theme="light"
                    mode="inline"
                    selectedKeys={[location.pathname]}
                    items={menuItems}
                    className="border-none bg-white"  // ensure menu bg white
                    style={{ background: '#ffffff' }}
                />
            </Sider>

            <Layout>
                <Header
                    className="bg-white border-b border-gray-200 px-4 flex items-center justify-between"
                    style={{ background: '#ffffff' }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        className="text-lg"
                    />

                    <div className="flex items-center gap-4">
                        <span className="font-medium">Abir</span>
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                            A
                        </div>
                    </div>
                </Header>

                <Content className="p-6 bg-gray-50">
                    <div
                        className="p-6 bg-white"
                        style={{
                            borderRadius: borderRadiusLG,
                            minHeight: 'calc(100vh - 112px)',
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;