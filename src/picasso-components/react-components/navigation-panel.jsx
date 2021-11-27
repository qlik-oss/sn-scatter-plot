import React from 'react';
import { IconButton } from '@material-ui/core'; // eslint-disable-line
import SVGIcon from './icons/SVGIcon';
import icons from './icons';

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
    <SVGIcon
      {...icons[rest.name]}
      size="large"
      viewBox="0 0 24 24"
      fill={() => (rest.isDisabled ? (rest.isDisabled() ? 'lightGray' : 'currentColor') : 'currentColor')}
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
      const { buttonList } = this.settings;
      return (
        <div style={style}>
          <NavigationButton
            top={1 * w}
            right={1 * w}
            name="home"
            callBack={buttonList.home.callBack}
            isDisabled={buttonList.home.isDisabled}
          />
          <NavigationButton top={1 * w} right={2 * w} name="left" callBack={buttonList.left.callBack} />
          <NavigationButton top={1 * w} right={0 * w} name="right" callBack={buttonList.right.callBack} />
          <NavigationButton top={0 * w} right={1 * w} name="up" callBack={buttonList.up.callBack} />
          <NavigationButton top={2 * w} right={1 * w} name="down" callBack={buttonList.down.callBack} />
          <NavigationButton top={3 * w} right={1 * w} name="zoomIn" callBack={buttonList.zoomIn.callBack} />
          <NavigationButton top={4 * w} right={1 * w} name="zoomOut" callBack={buttonList.zoomOut.callBack} />
        </div>
      );
    },
  };
}
