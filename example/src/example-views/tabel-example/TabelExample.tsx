import React, { ComponentElement } from 'react';
import styles from './TabelExample.module.scss';
import { Component } from 'react';
import { TableComponent, TableColumn, CheckBox } from 'priority-style-react';



export default class TabelExample extends Component {

    data = [
        { unvoice: 'IN1234567890', payByDate: '12/03/20', details: 'First month subscription for', amount: '1000' },
        { unvoice: 'IN1234567891', payByDate: '29/07/19', details: 'First month subscription for', amount: '2000' },
    ];

    renderCheckBoxCell() {
        return (
            <CheckBox />
        )
    }


    renderDesktopExample(data) {
        const columns: any = [
            { dataIndex: 'check-box', key: 'check-box', render: () => this.renderCheckBoxCell() },
            { title: 'Unvoice', dataIndex: 'unvoice', key: 'unvoice' },
            { title: 'Pay by Date', dataIndex: 'payByDate', key: 'payByDate' },
            { title: 'Details', dataIndex: 'details', key: 'details' },
            { title: 'Amount', dataIndex: 'amount', key: 'amount' }];

        return (
            <TableComponent columns={ columns } data={ data } />
        )
    }

    renderMobileExample(data) {
        const renderMobileInfoCell = (data: any, row: any, index: any) => {
            return (
                <div>
                    <div>
                        { data.unvoice }
                    </div>
                    <div className='rc-table-thead'>
                        Details
                    </div>
                    <div>
                        { data.details }
                    </div>
                    <div className='rc-table-thead'>
                        Amount
                    </div>
                    <div>
                        { data.amount }
                    </div>
                </div>

            )
        }

        const columnsMob: any = [
            { dataIndex: 'check-box', key: 'check-box', render: () => this.renderCheckBoxCell() },
            { dataIndex: 'info', key: 'info', render: () => renderMobileInfoCell(data[0], '1', 'check-box') },
            { dataIndex: 'payByDate', key: 'payByDate' }
        ]
        return (
            <TableComponent columns={ columnsMob } data={ data } />
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
