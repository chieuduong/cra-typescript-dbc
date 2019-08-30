import React, { Component, ReactNode } from 'react';
import { IconButton } from '@material-ui/core';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Close from '@material-ui/icons/Close';

interface IProps {
  openDrawer: boolean;
  closeAndResetForm: () => void;
}

interface IState {
  isOpen: boolean;
}

export class FormDrawer extends Component<IProps> {
  public state: IState = {
    isOpen: !!this.props.openDrawer,
  };

  // private toggleDrawer = (): any => {
  //   this.setState((state: IState) => ({
  //     isOpen: !state.isOpen,
  //   }));
  // }

  public render(): ReactNode {
    const { children, openDrawer, closeAndResetForm } = this.props;
    const onClick = (): void => {
      return;
    }
    return (
      <>
        <SwipeableDrawer
          className="form-drawer"
          anchor="right"
          open={openDrawer}
          onClose={closeAndResetForm}
          onOpen={onClick}
        >
          <IconButton
            onClick={closeAndResetForm}
            color="inherit"
            className="close-form"
          >
            <Close />
          </IconButton>
          {children}
        </SwipeableDrawer>
      </>
    );
  }
}

