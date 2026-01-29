import { Card, Row, Col } from 'antd';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { month: 'Jan', orders: 4000, revenue: 24000 },
    { month: 'Feb', orders: 3000, revenue: 13980 },
    { month: 'Mar', orders: 2000, revenue: 9800 },
    { month: 'Apr', orders: 2780, revenue: 39080 },
    { month: 'May', orders: 1890, revenue: 48000 },
    { month: 'Jun', orders: 2390, revenue: 38000 },
    { month: 'Jul', orders: 3490, revenue: 43000 },
];

const AnalyticsPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Analytics</h1>

            <Row gutter={[16, 16]}>
                <Col xs={24} lg={12}>
                    <Card title="Monthly Orders & Revenue Trend">
                        <div style={{ width: '100%', height: 400 }}>
                            <ResponsiveContainer>
                                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                                    <Tooltip />
                                    <Legend />
                                    <Bar yAxisId="left" dataKey="orders" fill="#8884d8" name="Orders" />
                                    <Bar yAxisId="right" dataKey="revenue" fill="#82ca9d" name="Revenue (৳)" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} lg={12}>
                    <Card title="Key Metrics">
                        <p className="text-gray-600 mb-4">
                            More charts and insights can be added here...
                        </p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AnalyticsPage;