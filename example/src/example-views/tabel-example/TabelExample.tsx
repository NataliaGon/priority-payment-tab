import React, { Component } from 'react';
import { TableComponent, TableColumn, CheckBox } from 'priority-style-react';

const cx = classNames.bind(styles);


export default class TabelExample extends Component {

    data = [
        { invoice: 'IN1234567890', payByDate: '12/03/20', details: 'First month subscription for', amount: '1000' },
        { invoice: 'IN1234567891', payByDate: '29/07/19', details: 'First month subscription for', amount: '2000' },
    ];

    renderCheckBoxCell(record) {
        return (
            <CheckBox onChange={ () => {
                console.log(`invoice #${record.invoice} checked`);
            } } />
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
            <TableComponent columns={ columns } data={ data } scroll={ { x: true } } />
        )
    }

    renderMobileExample(data) {

        const renderMobileInfoCell = (record: any) => {
            return (
                <div>
                    <div>
                        { record.invoice }
                    </div>
                    <div className='rc-table-thead'>
                        Details
                    </div>
                    <div>
                        { record.details }
                    </div>
                    <div className='rc-table-thead'>
                        Amount
                    </div>
                    <div>
                        { record.amount }
                    </div>
                </div>

            )
        }
        const renderMobileDataCell = (data: any, row: any, index: any) => {
            return (
                <div className={styles.mobileCell}>
                    {data.payByDate}
                </div>
            )
        }

        const renderMobileRow = (data: any) => {
            let col
            for (let i in data) {
                col =
                    [{ dataIndex: 'checkbox', key: 'checkbox', render: () => <input type="checkbox"></input> },
                    { dataIndex: 'info', key: 'info', render: () => renderMobileInfoCell(data[i], '0', 'info') },
                    { dataIndex: 'data', key: 'data', render: () => renderMobileDataCell(data[i], '1', 'data') }]

            }
            return col
            // return data.map((i) => {
            //     return (
            //         [{ dataIndex: 'checkbox', key: 'checkbox', render: () => <input type="checkbox"></input> },
            //         { dataIndex: 'info', key: 'info', render: () => renderMobileInfoCell(data[i], '2', 'info') },
            //         { dataIndex: 'data', key: 'data', render: () => renderMobileDataCell(data[i], '3', 'data') }]
            //     )
            // })

        }


        const columnsMob: TableColumn[] = [
            { dataIndex: 'check-box', key: 'check-box', render: (value, row) => this.renderCheckBoxCell(row), width: 1 },
            { dataIndex: 'info', key: 'info', render: (value, record) => renderMobileInfoCell(record) },
            { dataIndex: 'payByDate', key: 'payByDate', width: 1 }
        ];

        return (
            <TableComponent columns={ columnsMob } data={ data } showHeader={ false } />
        )
    };

    render() {
        return (
            <React.Fragment>
                { this.renderDesktopExample(this.data) }
                { this.renderMobileExample(this.data) }
            </React.Fragment>
        )
    }

}
