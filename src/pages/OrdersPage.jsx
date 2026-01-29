import { Card, Row, Col, Statistic } from 'antd';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from 'recharts';

const pieData = [
    { name: 'Pending', value: 35 },
    { name: 'Processing', value: 20 },
    { name: 'Shipped', value: 25 },
    { name: 'Delivered', value: 120 },
    { name: 'Cancelled', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#4CAF50', '#FF8042'];

const OrdersPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Orders</h1>

            <Row gutter={[16, 16]}>
                <Col xs={24} lg={8}>
                    <Card>
                        <Statistic
                            title="Total Orders"
                            value={210}
                            styles={{ content: { color: '#3f8600' } }}
                        />
                    </Card>
                </Col>
                <Col xs={24} lg={8}>
                    <Card>
                        <Statistic
                            title="Pending"
                            value={35}
                            styles={{ content: { color: '#faad14' } }}
                        />
                    </Card>
                </Col>
                <Col xs={24} lg={8}>
                    <Card>
                        <Statistic
                            title="Delivered"
                            value={120}
                            styles={{ content: { color: '#52c41a' } }}
                        />
                    </Card>
                </Col>
            </Row>

            <Card title="Order Status Distribution" className="mt-6">
                <div style={{ width: '100%', height: 400 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                labelLine={true}
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="value"
                                nameKey="name"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </Card>

            <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600">
                    Full order list / table can be added below the chart.
                </p>
            </div>
        </div>
    );
};

export default OrdersPage;