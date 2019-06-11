import React, { Component } from 'react';
import { TableComponent, TableColumn, CheckBox } from 'priority-style-react';

export default class TableExample extends Component {

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
