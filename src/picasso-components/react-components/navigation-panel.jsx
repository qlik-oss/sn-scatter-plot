import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import SVGIcon from './icons/SVGIcon';
import NUMBERS from '../../constants/numbers';
import ICONS from './icons';

const buttonWidth = NUMBERS.NAVIGATION_PANEL.GRID_WIDTH;
const padding = NUMBERS.NAVIGATION_PANEL.PADDING;

const useStyles = (rtl) =>
  makeStyles(() => {
    const horizontalDistance = rtl ? 'left' : 'right';
    return {
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
      UP: { top: '0px', [horizontalDistance]: `${buttonWidth}px` },
      LEFT: { top: `${buttonWidth}px`, [horizontalDistance]: `${rtl ? 0 : 2 * buttonWidth}px` },
      HOME: { top: `${buttonWidth}px`, [horizontalDistance]: `${buttonWidth}px` },
      RIGHT: { top: `${buttonWidth}px`, [horizontalDistance]: `${rtl ? 2 * buttonWidth : 0}px` },
      DOWN: { top: `${2 * buttonWidth}px`, [horizontalDistance]: `${buttonWidth}px` },
      ZOOM_IN: { top: `${3 * buttonWidth}px`, [horizontalDistance]: `${buttonWidth}px` },
      ZOOM_OUT: { top: `${4 * buttonWidth}px`, [horizontalDistance]: `${buttonWidth}px` },
    };
  });

const NavigationButton = ({ ...rest }) => {
  const classes = useStyles(rest.rtl)();
  return (
    <IconButton className={`${classes.onFocus} ${classes.common} ${classes[rest.buttonName]}`} onClick={rest.callback}>
      <SVGIcon
        {...ICONS[rest.buttonName]}
        size="extra-large"
        buttonWidth={buttonWidth}
        viewBox="0 0 24 24"
        fill={() => (rest.isDisabled ? (rest.isDisabled() ? '#b0b0b0' : 'currentColor') : 'currentColor')}
      />
    </IconButton>
  );
};

export default function navigationPanel() {
  function getStyle({ rect }) {
    return {
      pointerEvents: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: `${padding}px`,
      left: `${padding}px`,
      width: `${rect.width - 2 * padding}px`,
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
      const { actions, isDisabled, rtl } = this.settings.settings;
      return (
        <div style={style}>
          <NavigationButton buttonName="UP" rtl={rtl} callback={actions.up} />
          <NavigationButton buttonName="LEFT" rtl={rtl} callback={actions.left} />
          <NavigationButton buttonName="HOME" rtl={rtl} callback={actions.home} isDisabled={isDisabled.home} />
          <NavigationButton buttonName="RIGHT" rtl={rtl} callback={actions.right} />
          <NavigationButton buttonName="DOWN" rtl={rtl} callback={actions.down} />
          <NavigationButton buttonName="ZOOM_IN" rtl={rtl} callback={actions.zoomIn} />
          <NavigationButton buttonName="ZOOM_OUT" rtl={rtl} callback={actions.zoomOut} />
        </div>
      );
    },
  };
}
