import React, { Component, ReactNode } from 'react';
import { IProps } from './Styleguide.container';
import { Typography, Grid, Paper, Divider, Table, TableHead, TableBody, Fab } from '@material-ui/core';
import { Buttons } from 'components/Buttons';
import { TableCell, TableRow, Chip, Avatar } from '@material-ui/core';
import { i18n } from 'utils/lib/i18n';
import AddCircle from '@material-ui/icons/AddCircleOutlineOutlined';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import AddIcon from '@material-ui/icons/Add';
import EditRounded from '@material-ui/icons/EditRounded';
import { Loading } from 'components/Loading';

export class Styleguide extends Component<IProps> {
  public render(): ReactNode {
    const handleDelete = () => {
      alert('You clicked the delete icon.');
    };

    const handleClick = () => {
      alert('You clicked the Chip.');
    };

    return (
      <div className="styleguide">
        <Typography variant="h5" className="color-primary mg-20">{i18n.t('styleguide.title')}</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" className="mg-10 color-primary">{i18n.t('styleguide.content.grid')}</Typography>
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
            <Typography variant="h6" className="mg-10 color-primary">{i18n.t('styleguide.content.buttons')}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Buttons text="Primary" color="primary" />
            <Buttons text="Default" />
            <Buttons outlined text="Outlined" color="primary" />
            <Buttons
              icon={<AddCircle />}
              text="With Icons"
              color="primary"
            />
            <Fab
              size="small"
              color="primary"
              aria-label="add"
              style={{ margin: '0 8px' }}
            >
              <AddIcon />
            </Fab>
            <Fab
              size="small"
              color="secondary"
              aria-label="add"
            >
              <EditRounded />
            </Fab>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" className="mg-10 color-primary">{i18n.t('styleguide.content.tag')}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <div className="chips">
                <Chip label="Basic" variant="outlined" />
                <Chip
                  icon={<FaceIcon />}
                  label="Clickable deletable"
                  onClick={handleClick}
                  onDelete={handleDelete}
                  variant="outlined"
                />
                <Chip
                  label="Custom delete icon"
                  onClick={handleClick}
                  onDelete={handleDelete}
                  deleteIcon={<DoneIcon />}
                  variant="outlined"
                />
                <Chip
                  avatar={<Avatar>M</Avatar>}
                  label="Primary clickable"
                  clickable
                  color="primary"
                  onDelete={handleDelete}
                  deleteIcon={<DoneIcon />}
                  variant="outlined"
                />
                <Chip
                  icon={<FaceIcon />}
                  label="Primary clickable"
                  clickable
                  color="primary"
                  onDelete={handleDelete}
                  deleteIcon={<DoneIcon />}
                  variant="outlined"
                />
                <Chip
                  icon={<FaceIcon />}
                  label="Deletable secondary"
                  onDelete={handleDelete}
                  color="secondary"
                  variant="outlined"
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Divider className="mg-20" />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" className="mg-10 color-primary">{i18n.t('styleguide.content.loading')}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Loading />
          </Grid>
        </Grid>
        <Divider className="mg-20" />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" className="mg-10 color-primary">{i18n.t('styleguide.content.typo')}</Typography>
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
            <Typography variant="body2" gutterBottom>
              body. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Grid>
        </Grid>
        <Divider className="mg-20" />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" className="mg-10 color-primary">{i18n.t('styleguide.content.table')}</Typography>
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