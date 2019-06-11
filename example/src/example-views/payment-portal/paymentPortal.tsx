import React, { ComponentElement, Component } from 'react';
import { GridContainer, GridItem, Title, TabPane, Tabs, CheckBox, TableColumn, TableComponent } from 'priority-style-react';

type PanelContentProperties = {
    id?: Object;
    children?: any
}

const PanelContent: (props: PanelContentProperties) => ComponentElement<PanelContentProperties, any> = (props) => {

    return (
        <div>
            {props.children}
        </div>
    );
}



export default class PaymentPortal extends Component {
    data = [
        { invoice: 'IN1234567890', payByDate: '12/03/20', details: 'First month subscription for', amount: '1000' },
        { invoice: 'IN1234567891', payByDate: '29/07/19', details: 'First month subscription for', amount: '2000' },
    ];

    renderCheckBoxCell(record) {
        return (
            <CheckBox onChange={() => {
                console.log(`invoice #${record.invoice} checked`);
            }} />
        )
    }

    renderDesktopExample(data) {
        const columns: TableColumn[] = [
            { dataIndex: 'check-box', key: 'check-box', render: (value, row) => this.renderCheckBoxCell(row), width: 1, align: 'top' },
            { title: 'Invoice', dataIndex: 'invoice', key: 'invoice' },
            { title: 'Pay by Date', dataIndex: 'payByDate', key: 'payByDate' },
            { title: 'Details', dataIndex: 'details', key: 'details' },
            { title: 'Amount', dataIndex: 'amount', key: 'amount' }];

        return (
            <TableComponent columns={columns} data={data} scroll={{ x: true }} />
        )
    }
    renderMobileExample(data) {
        const renderMobileInfoCell = (record: any) => {
            return (
                <div>
                    <div>
                        {record.invoice}
                    </div>
                    <div className='rc-table-thead'>
                        Details
                    </div>
                    <div>
                        {record.details}
                    </div>
                    <div className='rc-table-thead'>
                        Amount
                    </div>
                    <div>
                        {record.amount}
                    </div>
                </div>

            )
        }

        const columnsMob: TableColumn[] = [
            { dataIndex: 'check-box', key: 'check-box', render: (value, row) => this.renderCheckBoxCell(row), width: 1 },
            { dataIndex: 'info', key: 'info', render: (value, record) => renderMobileInfoCell(record) },
            { dataIndex: 'payByDate', key: 'payByDate', width: 1 }
        ];

        return (
            <TableComponent columns={columnsMob} data={data} showHeader={false} />
        )
    };

    render() {
        return (
            <GridContainer columnsDesktop={ 12 } gutterWidthDesktop={ 30 } paddingDesktop={ 30 }>
                <GridItem columns={6} offset={4}>
                    <div>
                        <Title skin="h1" textColor="grey">Payment for</Title>
                        <Title skin="h1" textColor="blue">Electra ltd.</Title>
                    </div>
                    <Tabs
                        defaultActiveKey="1">
                        <TabPane tab={'My open invoces (3)'} key="1" >
                            <PanelContent id='1'><div>{this.renderDesktopExample(this.data)}</div></PanelContent>
                        </TabPane>
                        <TabPane tab={'Payments Made (3)'} key="2" >
                            <PanelContent id='2'><div>{this.renderMobileExample(this.data)}</div></PanelContent>
                        </TabPane>
                    </Tabs>
                </GridItem>
            </GridContainer>
        )
    }
}
