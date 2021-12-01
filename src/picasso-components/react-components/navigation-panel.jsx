import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import SVGIcon from './icons/SVGIcon';
import ICONS from './icons';

const useStyles = makeStyles(() => ({
  onFocus: {
    '&:focus': {
      background: '#dddddd',
    },
  },
}));

const NavigationButton = ({ ...rest }) => (
  <IconButton
    style={{
      position: 'absolute',
      top: `${rest.top}px`,
      right: `${rest.right}px`,
      padding: '0',
    }}
    className={useStyles().onFocus}
    onClick={rest.callback}
  >
    <SVGIcon
      {...ICONS[rest.name]}
      size="large"
      viewBox="0 0 24 24"
      fill={() => (rest.isDisabled ? (rest.isDisabled() ? '#b0b0b0' : 'currentColor') : 'currentColor')}
      arialLabel={`navigation-button-${rest.name}`}
    />
  </IconButton>
);

export default function navigationPanel() {
  function getStyle({ rect, padding }) {
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
    preferredSize: function preferredSize() {
      return 40;
    },
    render() {
      const { gridWidth: w, padding } = this.settings.style;
      const style = getStyle({ rect: this.rect, padding });
      const { actions, isDisabled } = this.settings.settings;
      return (
        <div style={style}>
          <NavigationButton top={0 * w} right={1 * w} name="UP" callback={actions.up} />
          <NavigationButton top={1 * w} right={2 * w} name="LEFT" callback={actions.left} />
          <NavigationButton
            top={1 * w}
            right={1 * w}
            name="HOME"
            callback={actions.home}
            isDisabled={isDisabled.home}
          />
          <NavigationButton top={1 * w} right={0 * w} name="RIGHT" callback={actions.right} />
          <NavigationButton top={2 * w} right={1 * w} name="DOWN" callback={actions.down} />
          <NavigationButton top={3 * w} right={1 * w} name="ZOOM_IN" callback={actions.zoomIn} />
          <NavigationButton top={4 * w} right={1 * w} name="ZOOM_OUT" callback={actions.zoomOut} />
        </div>
      );
    },
  };
}
