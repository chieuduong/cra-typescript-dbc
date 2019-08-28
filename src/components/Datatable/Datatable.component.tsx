import React, { Component, ReactNode } from 'react';
import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';

interface IProps {
  dataHead: ReactNode;
  dataBody: ReactNode;
}

export class Datatable extends Component<IProps> {

  public render(): ReactNode {
    const { dataHead, dataBody } = this.props;
    return (
      <>
        <Table>
          <TableHead>
            {dataHead}
          </TableHead>
          <TableBody>
            {dataBody}
          </TableBody>
        </Table>
      </>
    );
  }
}

