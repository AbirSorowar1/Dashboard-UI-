import { Card, Statistic, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const DashboardPage = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>

            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} lg={6}>
                    <Card>
                        <Statistic
                            title="Total Revenue"
                            value={112893}
                            precision={2}
                            styles={{ content: { color: '#3f8600' } }}
                            prefix={<ArrowUpOutlined />}
                            suffix="৳"
                        />
                    </Card>
                </Col>

                <Col xs={24} sm={12} lg={6}>
                    <Card>
                        <Statistic
                            title="Active Users"
                            value={2456}
                            styles={{ content: { color: '#1677ff' } }}
                        />
                    </Card>
                </Col>

                <Col xs={24} sm={12} lg={6}>
                    <Card>
                        <Statistic
                            title="New Orders"
                            value={189}
                            styles={{ content: { color: '#faad14' } }}
                        />
                    </Card>
                </Col>

                <Col xs={24} sm={12} lg={6}>
                    <Card>
                        <Statistic
                            title="Conversion Rate"
                            value={12.8}
                            precision={1}
                            styles={{ content: { color: '#cf1322' } }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <Card title="Recent Activity" className="h-96">
                    <p className="text-gray-500">Activity log coming soon...</p>
                </Card>
                <Card title="Sales Trend" className="h-96">
                    <p className="text-gray-500">Chart coming soon...</p>
                </Card>
            </div>
        </div>
    );
};

export default DashboardPage;