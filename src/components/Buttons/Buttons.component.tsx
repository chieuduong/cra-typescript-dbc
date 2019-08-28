import React, { Component, ReactNode } from 'react';
import { Button } from '@material-ui/core';

interface IProps {
  text: string;
  color?: string;
  outlined?: boolean;
  size?: 'small' | 'medium' | 'large';
  icon?: ReactNode;
}

export class Buttons extends Component<IProps> {

  public render(): ReactNode {
    const { text, color, outlined, size, icon } = this.props;
    return (
      <>
        <Button size={size} variant={outlined ? 'outlined' : 'contained'} className={`buttons ${color}`}>
          {icon} {text}
        </Button>
      </>
    );
  }
}

