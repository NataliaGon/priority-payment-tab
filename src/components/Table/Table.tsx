import classNames from 'classnames/bind';
import Table from 'rc-table';
import * as React from "react";
import { ComponentBase, ComponentBaseProperties } from "../../core";
import styles from "./Table.module.scss";
import { Container } from '../Layout/Container/Container';

const cx = classNames.bind(styles);

export interface TableScrollOptions {
  x: boolean,
  y: boolean
}

export interface TableColumn extends ComponentBaseProperties {
  key: string,
  title: string,
  dataIndex: string
}
type TableCol = {
  key?: string,
  title?: string,
  dataIndex?: string
}
export interface TableProperties extends ComponentBaseProperties {
  containerId?: string,
  scroll?: TableScrollOptions,
  rowKey?: string | ((record: any) => string),
  data?: any[],
  onRow?: (record: any, index: any) => void,
  onHeaderRow?: (record: any, index: any) => void,
  columns?:any
}

export class TableComponent extends ComponentBase<TableProperties> {

  initDefaults() {
    let providedProperties = this.props;
  }


  public render() {

    const columns = this.props.rtl ? this.props.columns.reverse() : this.props.columns;

    return (
      <Table
        className={cx ('component') } 
        columns={ columns }
        data={ this.props.data }>
      </Table>
    );
  }
}
