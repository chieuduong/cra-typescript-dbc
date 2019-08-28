import history from './history';

const navigate = (path: string, mouseEvent?: React.MouseEvent, forceBlank?: boolean): void => {
  // ctrlKey = ctrl on Openings
  // metaKey = cmd on Mac and Openings on Openings
  // button 1 = wheel on mouse
  if (forceBlank || (mouseEvent && (mouseEvent.ctrlKey || mouseEvent.metaKey || mouseEvent.button === 1))) {
    window.open(path, '_blank');
  } else {
    history.push(path);
  }
};

export default navigate;