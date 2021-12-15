import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import SVGIcon from './icons/SVGIcon';
import NUMBERS from '../../constants/numbers';
import ICONS from './icons';

const buttonWidth = NUMBERS.NAVIGATION_PANEL.GRID_WIDTH;
const padding = NUMBERS.NAVIGATION_PANEL.PADDING;

const useStyles = makeStyles(() => ({
  onFocus: {
    '&:focus': {
      background: 'rgba(240, 240, 240, 0.5)',
    },
  },
  common: {
    position: 'absolute',
    borderRadius: '2px',
    padding: '0',
    width: `${buttonWidth}px`,
    height: `${buttonWidth}px`,
  },
  UP: { top: '0px', right: `${buttonWidth}px` },
  LEFT: { top: `${buttonWidth}px`, right: `${2 * buttonWidth}px` },
  HOME: { top: `${buttonWidth}px`, right: `${buttonWidth}px` },
  RIGHT: { top: `${buttonWidth}px`, right: '0px' },
  DOWN: { top: `${2 * buttonWidth}px`, right: `${buttonWidth}px` },
  ZOOM_IN: { top: `${3 * buttonWidth}px`, right: `${buttonWidth}px` },
  ZOOM_OUT: { top: `${4 * buttonWidth}px`, right: `${buttonWidth}px` },
}));

const NavigationButton = ({ ...rest }) => (
  <IconButton
    className={`${useStyles().onFocus} ${useStyles().common} ${useStyles()[rest.buttonName]}`}
    onClick={rest.callback}
  >
    <SVGIcon
      {...ICONS[rest.buttonName]}
      size="extra-large"
      viewBox="0 0 24 24"
      fill={() => (rest.isDisabled ? (rest.isDisabled() ? '#b0b0b0' : 'currentColor') : 'currentColor')}
      arialLabel={`navigation-button-${rest.buttonName}`}
    />
  </IconButton>
);

export default function navigationPanel() {
  function getStyle({ rect }) {
    return {
      pointerEvents: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: `${padding}px`,
      width: `${rect.width - padding}px`,
      height: `${rect.height - padding}px`,
      color: '#595959',
      fontStyle: 'normal',
      fontSize: '1.2em',
      textAlign: 'center',
      position: 'absolute',
    };
  }

  return {
    renderer: 'react',
    disableTriggers: true,
    render() {
      const style = getStyle({ rect: this.rect });
      const { actions, isDisabled } = this.settings.settings;
      return (
        <div style={style}>
          <NavigationButton buttonName="UP" callback={actions.up} />
          <NavigationButton buttonName="LEFT" callback={actions.left} />
          <NavigationButton buttonName="HOME" callback={actions.home} isDisabled={isDisabled.home} />
          <NavigationButton buttonName="RIGHT" callback={actions.right} />
          <NavigationButton buttonName="DOWN" callback={actions.down} />
          <NavigationButton buttonName="ZOOM_IN" callback={actions.zoomIn} />
          <NavigationButton buttonName="ZOOM_OUT" callback={actions.zoomOut} />
        </div>
      );
    },
  };
}
