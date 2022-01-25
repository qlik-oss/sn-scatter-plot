import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import SVGIcon from './icons/SVGIcon';
import NUMBERS from '../../constants/numbers';
import ICONS from './icons';

const width = NUMBERS.NAVIGATION_PANEL.GRID_WIDTH;
const padding = NUMBERS.NAVIGATION_PANEL.PADDING;

const NavigationButton = ({ ...rest }) => {
  const useStyles = (rtl, onlyHome) =>
    makeStyles(() => {
      const horizontalDistance = rtl ? 'left' : 'right';
      return {
        common: {
          position: 'absolute',
          borderRadius: '2px',
          padding: '0',
          width: `${width}px`,
          height: `${width}px`,
          '&:focus': {
            color: '#111111',
          },
        },
        UP: { top: '0px', [horizontalDistance]: `${width}px` },
        LEFT: { top: `${width}px`, [horizontalDistance]: `${rtl ? 0 : 2 * width}px` },
        HOME: onlyHome
          ? { top: '0px', [horizontalDistance]: '0px' }
          : { top: `${width}px`, [horizontalDistance]: `${width}px` },
        RIGHT: { top: `${width}px`, [horizontalDistance]: `${rtl ? 2 * width : 0}px` },
        DOWN: { top: `${2 * width}px`, [horizontalDistance]: `${width}px` },
        ZOOM_IN: { top: `${3 * width}px`, [horizontalDistance]: `${width}px` },
        ZOOM_OUT: { top: `${4 * width}px`, [horizontalDistance]: `${width}px` },
      };
    });
  const classes = useStyles(rest.rtl, rest.onlyHome)();
  return (
    <IconButton
      className={`${classes.common} ${classes[rest.name]}`}
      onClick={rest.callback}
      onTouchEnd={rest.callback}
      title={rest.title}
      aria-label={rest.title}
      disabled={rest.isDisabled()}
    >
      <SVGIcon
        {...ICONS[rest.name]}
        size="extra-large"
        width={width}
        viewBox="0 0 24 24"
        fill={() => (rest.isDisabled() ? '#ebebeb' : 'currentColor')}
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
      const { actions, disabled, show, rtl, translator, element } = this.settings.settings;
      if (!show.panZoom() && !show.home()) {
        return null;
      }
      const showOnlyHomeButton =
        !show.panZoom() ||
        element.clientWidth < NUMBERS.LAYOUT_MODES.MEDIUM_NAV.width ||
        element.clientHeight < NUMBERS.LAYOUT_MODES.MEDIUM_NAV.height;
      return showOnlyHomeButton ? (
        <div style={style}>
          <NavigationButton
            name="HOME"
            rtl={rtl}
            callback={actions.home}
            title={translator.get('Object.Navigation.ResetZoom')}
            isDisabled={disabled.home}
            onlyHome={showOnlyHomeButton}
          />
        </div>
      ) : (
        <div style={style}>
          <NavigationButton
            name="UP"
            rtl={rtl}
            callback={actions.up}
            title={translator.get('Object.Navigation.PanUp')}
            isDisabled={disabled.panZoom}
          />
          <NavigationButton
            name="LEFT"
            rtl={rtl}
            callback={actions.left}
            title={translator.get('Object.Navigation.PanLeft')}
            isDisabled={disabled.panZoom}
          />
          <NavigationButton
            name="HOME"
            rtl={rtl}
            callback={actions.home}
            title={translator.get('Object.Navigation.ResetZoom')}
            isDisabled={disabled.home}
          />
          <NavigationButton
            name="RIGHT"
            rtl={rtl}
            callback={actions.right}
            title={translator.get('Object.Navigation.PanRight')}
            isDisabled={disabled.panZoom}
          />
          <NavigationButton
            name="DOWN"
            rtl={rtl}
            callback={actions.down}
            title={translator.get('Object.Navigation.PanDown')}
            isDisabled={disabled.panZoom}
          />
          <NavigationButton
            name="ZOOM_IN"
            rtl={rtl}
            callback={actions.zoomIn}
            title={translator.get('Object.Navigation.ZoomIn')}
            isDisabled={disabled.panZoom}
          />
          <NavigationButton
            name="ZOOM_OUT"
            rtl={rtl}
            callback={actions.zoomOut}
            title={translator.get('Object.Navigation.ZoomOut')}
            isDisabled={disabled.panZoom}
          />
        </div>
      );
    },
  };
}
