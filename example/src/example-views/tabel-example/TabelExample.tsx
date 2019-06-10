import React, { ComponentElement } from 'react';
import styles from './TabelExample.module.scss';
import { Component } from 'react';
import { TableComponent, TableColumn } from 'priority-style-react';



export default class TabelExample extends Component {

    data = [
        { unvoice: 'IN1234567890', payByDate: '12/03/20', details: 'First month subscription for', amount: '1000' },
        { unvoice: 'IN1234567891', payByDate: '29/07/19', details: 'First month subscription for', amount: '2000' },
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
        const renderMobileInfoCell = (data: any,row:any , index:any) => {
            return (
                    <div className={styles.mobileCell}>
                        <div className={styles.tableCell}>
                            {data.unvoice}
                        </div>
                        <div className={styles.tableHeader}>
                            Details
                    </div>
                        <div className={styles.tableCell}>
                            {data.details}
                        </div>
                        <div className={styles.tableHeader}>
                            Amount
                    </div>
                        <div className={styles.tableCell}>
                            {data.amount}
                        </div>
                    </div>
             
            )
        }
        const renderMobileDataCell = (data: any,row:any , index:any) => {
            return (
                    <div className={styles.mobileCell}>
                        {data.payByDate}
                    </div>
             
            )
        }

        const columnsMob: any = [
            { dataIndex: 'checkbox', key: 'checkbox',render:()=> <input type="checkbox"></input> },
            { dataIndex: 'info', key: 'info',render:()=> renderMobileInfoCell(data[0],'2','info' ) },
            { dataIndex: 'data', key: 'data',render:()=> renderMobileDataCell(data[0],'3','data' )}
        ]
        return (
            <TableComponent columns={columnsMob} data={data} />
        )
    };

    render() {
        return (
            <React.Fragment>
                {this.renderDesktopExample(this.data)}
                {this.renderMobileExample(this.data)}
            </React.Fragment>
        )
    }

}



