import React, { Component, ReactNode } from 'react';
import 'assets/style.scss';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { i18n } from 'utils/lib/i18n';

export class TopBar extends Component<{}> {
  public render(): ReactNode {
    return (
      <>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              className="menuButton"
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className="title" variant="h6" noWrap>
              {i18n.t('general.title')}
            </Typography>
            <div className="search">
              <div className="search-icon">
                <SearchIcon />
              </div>
              <InputBase
                placeholder={i18n.t('general.search')}
                color="white"
                className="input-wrapper"
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className="section-desktop">
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={() => { return; }}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

