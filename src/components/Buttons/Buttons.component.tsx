import React, { Component, ReactNode } from 'react';
import { Button } from '@material-ui/core';

interface IProps {
  text: string;
  color?: string;
  outlined?: boolean;
  size?: 'small' | 'medium' | 'large';
  icon?: ReactNode;
  onClick?: () => void;
}

export class Buttons extends Component<IProps> {

  public render(): ReactNode {
    const { text, color, outlined, size, icon, onClick } = this.props;
    return (
      <>
        <Button
          size={size}
          variant={outlined ? 'outlined' : 'contained'}
          className={`buttons ${color}`}
          onClick={onClick}
        >
          <span className="icons">{icon}</span> {text}
        </Button>
      </>
    );
  }
}

