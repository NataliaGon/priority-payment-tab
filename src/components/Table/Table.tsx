import classNames from 'classnames/bind';
import Table from 'rc-table';
import * as React from "react";
import { ComponentBase, ComponentBaseProperties } from "../../core";
import styles from "./Table.module.scss";

const cx = classNames.bind(styles);

export interface TableScrollOptions {
  x?: boolean,
  y?: boolean
}

export interface TableColumn {
  key: string,
  className?: string,
  title?: string,
  dataIndex: string,
  width?: number,
  align?: string,
  onCell?: (record?: any, index?: any) => void,
  onHeaderCell?: (record?: any) => void,
  render?: (value?: any, row?: any, index?: any) => React.ReactNode
}

export interface TableProperties extends ComponentBaseProperties {
  className?: string,

  containerId?: string,
  scroll?: TableScrollOptions,
  rowKey?: string | ((record?: any) => string),
  data?: any[],
  onRow?: (record?: any, index?: any) => void,
  onHeaderRow?: (record?: any, index?: any) => void,
  showHeader?: boolean,
  title?: (data?: any) => React.ReactNode,
  footer?: (data?: any) => React.ReactNode,
  columns: TableColumn[],
  emptyState?: () => React.ReactNode | string;
}

export class TableComponent extends ComponentBase<TableProperties> {
  public render() {
    const columns = this.props.rtl ? this.props.columns.reverse() : this.props.columns;
    return (
      <Table
        className={ cx('component') }
        columns={ columns }
        data={ this.props.data }
        id={ this.props.containerId }
        scroll={ this.props.scroll }
        rowKey={ this.props.rowKey }
        onRow={ this.props.onRow }
        onHeaderRow={ this.props.onHeaderRow }
        emptyText={ this.props.emptyState }
        showHeader={ this.props.showHeader }
        title={ this.props.title }
        footer={ this.props.footer }
      >
      </Table>
    );
  }
}
