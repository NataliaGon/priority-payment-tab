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
}

export interface TableProperties extends ComponentBaseProperties {
  rtl?: boolean,
  containerId?: string,
  scroll?: TableScrollOptions,
  rowKey?: string | ((record: any) => string),
  data?: Object[],
  onRow?: (record: any, index: any) => void,
  onHeaderRow: (record: any, index: any) => void,
  columns: TableColumn[]
}

export class TableComponent extends ComponentBase<TableProperties> {

  initDefaults() {
    let providedProperties = this.props;
  }

  componentDidMount() {
    var elem: any;
    elem = document.getElementById('root');

    let cs: string;
    if (window.getComputedStyle) { // all browsers
      cs = window.getComputedStyle(elem, null).getPropertyValue('direction');
    } else {
      cs = elem.currentStyle.direction; // IE5-8
    }
  }

  public render() {

    const columns = this.props.rtl ? this.props.columns.reverse() : this.props.columns;

    return (
      <Table
        columns={ columns }
        data={ this.props.data }>
      </Table>
    );
  }
}
