import React from 'react'
import { Button, Card, Row, Col, Input } from 'antd'

class DemoView extends React.Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col className='gutter-row' xs={24} md={18}>
                        <Card title='Card Title'>
                            <Row gutter={16}>
                                <Col className='gutter-row' xs={24} md={6}>
                                    <h3>Section 1</h3>
                                    <p>Subtext for section header.</p>
                                </Col>
                                <Col className='gutter-row' xs={24} md={18}>
                                    <div className='mb-3'>
                                        <div className='data-label'>
                                            Input 1
                                        </div>
                                        <Input placeholder='Enter info...'></Input>
                                    </div>
                                    <div className='mb-3'>
                                        <div className='data-label'>
                                            Input 2
                                        </div>
                                        <Input placeholder='Enter info...'></Input>
                                    </div>
                                    <div>
                                        <div className='data-label'>
                                            Input 3
                                        </div>
                                        <Input placeholder='Enter info...'></Input>
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                            <Row gutter={16}>
                                <Col className='gutter-row' xs={24} md={6}>
                                    <h3>Section 2</h3>
                                    <p>Subtext for section header.</p>
                                </Col>
                                <Col className='gutter-row' xs={24} md={18}>
                                    <div className='mb-3'>
                                        <div className='data-label'>
                                            Input 4
                                        </div>
                                        <Input placeholder='Enter info...'></Input>
                                    </div>
                                    <div className='mb-3'>
                                        <div className='data-label'>
                                            Input 5
                                        </div>
                                        <Input placeholder='Enter info...'></Input>
                                    </div>
                                    <div>
                                        <div className='data-label'>
                                        Input 6
                                        </div>
                                        <Input placeholder='Enter info...'></Input>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col className='gutter-row' xs={24} md={6}>
                        <Card>
                            <Button type='primary' block>Save Info</Button>
                            <Button type='link' block>Cancel</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DemoView
