import { Card, Table, Row, Col, Statistic, Tag } from 'antd';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from 'recharts';

// Sample data
const userData = [
    { key: '1', name: 'Abir Hasan', email: 'abir@example.com', role: 'Admin', status: 'Active', joined: '2025-01-15' },
    { key: '2', name: 'Sara Ahmed', email: 'sara@example.com', role: 'Editor', status: 'Active', joined: '2025-03-22' },
    { key: '3', name: 'Rahim Khan', email: 'rahim@example.com', role: 'Viewer', status: 'Inactive', joined: '2024-11-10' },
    { key: '4', name: 'Nadia Islam', email: 'nadia@example.com', role: 'Guest', status: 'Active', joined: '2025-06-05' },
    { key: '5', name: 'Karim Mia', email: 'karim@example.com', role: 'Editor', status: 'Active', joined: '2025-02-28' },
];

const roleData = [
    { name: 'Admin', value: 1 },
    { name: 'Editor', value: 2 },
    { name: 'Viewer', value: 1 },
    { name: 'Guest', value: 1 },
];

const COLORS = ['#ff4d4f', '#1890ff', '#52c41a', '#faad14'];

const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
        render: (role) => {
            let color = role === 'Admin' ? 'red' : role === 'Editor' ? 'blue' : role === 'Viewer' ? 'green' : 'gold';
            return <Tag color={color}>{role}</Tag>;
        },
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status) => <Tag color={status === 'Active' ? 'success' : 'error'}>{status}</Tag>,
    },
    { title: 'Joined', dataIndex: 'joined', key: 'joined' },
];

const UsersPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Users Management</h1>

            <Row gutter={[16, 16]} className="mb-6">
                <Col xs={24} sm={12} lg={6}>
                    <Card>
                        <Statistic
                            title="Total Users"
                            value={userData.length}
                            styles={{ content: { color: '#3f8600' } }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card>
                        <Statistic
                            title="Active Users"
                            value={userData.filter(u => u.status === 'Active').length}
                            styles={{ content: { color: '#52c41a' } }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card>
                        <Statistic
                            title="Admins"
                            value={userData.filter(u => u.role === 'Admin').length}
                            styles={{ content: { color: '#ff4d4f' } }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card>
                        <Statistic
                            title="New This Month"
                            value={2}
                            styles={{ content: { color: '#faad14' } }}
                        />
                    </Card>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col xs={24} lg={16}>
                    <Card title="User List">
                        <Table
                            columns={columns}
                            dataSource={userData}
                            pagination={{ pageSize: 5 }}
                            scroll={{ x: 'max-content' }}
                        />
                    </Card>
                </Col>

                <Col xs={24} lg={8}>
                    <Card title="User Roles Distribution">
                        <div style={{ width: '100%', height: 320 }}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie
                                        data={roleData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={true}
                                        outerRadius={100}
                                        dataKey="value"
                                        nameKey="name"
                                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    >
                                        {roleData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend verticalAlign="bottom" height={36} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default UsersPage;