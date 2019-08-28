import React, { Component, ReactNode } from 'react';
import { IProps } from './Styleguide.container';
import { Typography, Grid, Paper, Divider, Table, TableHead, TableBody } from '@material-ui/core';
import { Buttons } from 'components/Buttons';
import { TableCell, TableRow } from '@material-ui/core';

export class Styleguide extends Component<IProps> {
  public render(): ReactNode {
    return (
      <div className="styleguide">
        <Typography variant="h3" className="color-primary mg-20">Styleguide : Cra Typescript Saga</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" className="mg-10 color-primary">1. Columns</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper>xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
        </Grid>
        <Divider className="mg-20" />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" className="mg-10 color-primary">2. Typography</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom>
              h2. Heading
            </Typography>
            <Typography variant="h3" gutterBottom>
              h3. Heading
            </Typography>
            <Typography variant="h4" gutterBottom>
              h4. Heading
            </Typography>
            <Typography variant="h5" gutterBottom>
              h5. Heading
            </Typography>
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="body2" gutterBottom>
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
              button text
            </Typography>
          </Grid>
        </Grid>
        <Divider className="mg-20" />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" className="mg-10 color-primary">3. Buttons</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Buttons text="Primary" color="primary" />
            <Buttons text="Default" />
            <Buttons outlined text="Outlined" color="primary" />
          </Grid>
        </Grid>
        <Divider className="mg-20" />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" className="mg-10 color-primary">4. Table</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Employee Name</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Address</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Steven</TableCell>
                  <TableCell>Staff</TableCell>
                  <TableCell>Paris</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Jose</TableCell>
                  <TableCell>Staff</TableCell>
                  <TableCell>London</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </div>
    );
  }
}