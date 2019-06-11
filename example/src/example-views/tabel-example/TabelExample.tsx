import React, { ComponentElement } from 'react';
import styles from './TabelExample.module.scss';
import { Component } from 'react';
import { TableComponent, TableColumn } from 'priority-style-react';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


export default class TabelExample extends Component {

    data = [
        { unvoice: 'IN1234567890', payByDate: '12/03/20', details: 'First month subscription for', amount: '1000' },
        { unvoice: 'IN1234567891', payByDate: '29/07/19', details: 'First month subscription for', amount: '2000' },
    ];
    dataMob = [
        { info:{unvoice:'IN1234567890',details: 'First month subscription for', amount: '1000'} ,payByDate: '12/03/20'  },
        
        { info:{unvoice:'IN1234567891',details: 'First month subscription for', amount: '1000'} ,payByDate: '05/11/19'  }
    ];

    renderDesktopExample(data) {
        const columns: any = [{
            title: 'Unvoice', dataIndex: 'unvoice', key: 'unvoice'
        }, {
            title: 'Pay by Date', dataIndex: 'payByDate', key: 'payByDate'
        }, {
            title: 'Details', dataIndex: 'details', key: 'details'
        }, {
            title: 'Amount', dataIndex: 'amount', key: 'amount'
        }]

        return (
            <TableComponent columns={columns} data={data} />
        )
    }

    renderMobileExample(data) {
        const renderMobileInfoCell = (data: any, row: any, index: any) => {
            return (
                <div className={styles.mobileCell}>
                    <div className={styles.tableCell}>
                        {data.info.unvoice}
                    </div>
                    <div className={styles.tableHeader}>
                        Details
                    </div>
                    <div className={styles.tableCell}>
                        {data.info.details}
                    </div>
                    <div className={styles.tableHeader}>
                        Amount
                    </div>
                    <div className={styles.tableCell}>
                        {data.info.amount}
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


        return (
            <TableComponent columns={renderMobileRow(data)} data={data} />
        )
    };

    render() {
        return (
            <React.Fragment>
                {this.renderDesktopExample(this.data)}
                {this.renderMobileExample(this.dataMob)}
            </React.Fragment>
        )
    }

}



