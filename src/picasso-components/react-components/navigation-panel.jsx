import React from 'react';
import { IconButton } from '@material-ui/core'; // eslint-disable-line
import SVGIcon from './icons/SVGIcon';
import { home, left, right, up, down, zoomIn, zoomOut } from './icons';

const NavigationButton = (
  { children, ...rest } // eslint-disable-line
) => (
  <IconButton
    style={{
      position: 'absolute',
      top: `${rest.top}px`,
      right: `${rest.right}px`,
      padding: '0',
    }}
    onClick={rest.callBack}
  >
    <SVGIcon {...rest.icon} size="large" />
  </IconButton>
);

export default function navigationPanel() {
  function getStyle(rect) {
    return {
      pointerEvents: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      color: '#595959',
      fontStyle: 'normal',
      fontSize: '1.2em',
      textAlign: 'center',
    };
  }

  return {
    renderer: 'react',
    disableTriggers: true,
    preferredSize: function preferredSize() {
      return 40;
    },
    render() {
      const style = getStyle(this.rect);
      const { gridWidth: w } = this.settings.settings;
      const { buttonList } = this.settings;
      return (
        <div style={style}>
          <NavigationButton top={1 * w} right={1 * w} icon={home} callBack={buttonList.home.callBack} />
          <NavigationButton top={1 * w} right={2 * w} icon={left} callBack={buttonList.left.callBack} />
          <NavigationButton top={1 * w} right={0 * w} icon={right} callBack={buttonList.right.callBack} />
          <NavigationButton top={0 * w} right={1 * w} icon={up} callBack={buttonList.up.callBack} />
          <NavigationButton top={2 * w} right={1 * w} icon={down} callBack={buttonList.down.callBack} />
          <NavigationButton top={3 * w} right={1 * w} icon={zoomIn} callBack={buttonList.zoomIn.callBack} />
          <NavigationButton top={4 * w} right={1 * w} icon={zoomOut} callBack={buttonList.zoomOut.callBack} />
        </div>
      );
    },
  };
}
