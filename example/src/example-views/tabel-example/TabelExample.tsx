import React, { ComponentElement } from 'react';
import styles from './TabelExample.module.scss';
import { Component } from 'react';
import { TableComponent } from 'priority-style-react';





export default class TabelExample extends Component {
  
    render() {
        const columns = [{
            title: 'Unvoice', dataIndex: 'unvoice', key:'unvoice'
          }, {
            title: 'Pay by Date', dataIndex: 'payByDate', key:'payByDate'
          }, {
            title: 'Details', dataIndex: 'details', key:'details'
          }, {
            title: 'Amount', dataIndex: 'amount', key:'amount'
          }];
           
          const data = [
            { unvoice: 'IN1234567890', payByDate: '12/03/20', details: 'First month subscription for', amount:'1000' },
            { unvoice: 'IN1234567891', payByDate: '29/07/19', details: 'First month subscription for', amount:'2000' },
          ];
        return (
       
                <TableComponent  columns={columns} data={data}/>
           
        )
    }

}



