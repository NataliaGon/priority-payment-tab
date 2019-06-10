import * as React from "react";
import classNames from 'classnames/bind';
import Table from 'rc-table';
import { ComponentBaseProperties, ComponentBase, PriorityIcon } from "../../core";
import styles from "./Table.module.scss";
const cx = classNames.bind(styles);


interface TableState {
  rtl?:boolean
}

interface TableProperties extends ComponentBaseProperties {
  
}

export class TableComponent extends ComponentBase<TableProperties> {

  componentDidMount(){
    var elem:any;
     elem = document.getElementById('root');
    var cs:any;
    if (window.getComputedStyle) { // all browsers
        cs = window.getComputedStyle(elem, null).getPropertyValue('direction');
    } else {
        cs = elem.currentStyle.direction; // IE5-8
    }
    console.log(cs);
  }

  state={
    rtl:true
  }
    public render() {
        const columns = [{
            title: 'Name', dataIndex: 'name', key:'name', width: 100,
          }, {
            title: 'Age', dataIndex: 'age', key:'age', width: 100,
          }, {
            title: 'Address', dataIndex: 'address', key:'address', width: 200,
          }, {
            title: 'Operations', dataIndex: '', key:'operations', render: () => <a href="#">Delete</a>,
          }];
           
          const data = [
            { name: 'Jack', age: 28, address: 'some where', key:'1' },
            { name: 'Rose', age: 36, address: 'some where', key:'2' },
          ];

        return (
      
              <div className={cx('component')}>
              {this.state.rtl? <Table columns={columns.reverse()} data={data} onRow={()=>console.log('mouse enter')} ></Table>:<Table columns={columns} data={data} ></Table>}       
              </div>
           
        );
    }
}


