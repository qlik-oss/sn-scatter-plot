import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import SVGIcon from './icons/SVGIcon';
import ICONS from './icons';

const Button = ({ ...rest }) => {
  const useStyles = () =>
    makeStyles(() => ({
      button: {
        position: 'absolute',
        borderRadius: '2px',
        width: `${rest.presentation.width}px`,
        height: `${rest.presentation.width}px`,
        '&:focus': {
          color: '#111111',
        },
      },
    }));
  const classes = useStyles(rest.rtl)();
  return (
    <IconButton
      className={`${classes.button}`}
      onClick={rest.callback}
      onTouchEnd={rest.callback}
      title={rest.title}
      aria-label={rest.title}
      disabled={rest.disabled()}
    >
      <SVGIcon
        {...ICONS[rest.presentation.icon]}
        size="extra-large"
        width={rest.presentation.width}
        viewBox="0 0 24 24"
        fill={() => (rest.disabled() ? '#ebebeb' : 'currentColor')}
      />
    </IconButton>
  );
};

export default function createButton() {
  function getStyle({ presentation }) {
    const { rtl, vertical, horizontal, width } = presentation;
    const horizontalStart = rtl ? 'left' : 'right';
    return {
      pointerEvents: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: `${vertical}px`,
      [horizontalStart]: `${horizontal}px`,
      width: `${width}px`,
      height: `${width}px`,
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
      const { callback, disabled, presentation, title, show } = this.settings.settings;
      if (show && !show()) return null;
      const style = getStyle({ presentation });
      return (
        <div style={style}>
          <Button callback={callback} title={title} disabled={disabled} presentation={presentation} />
        </div>
      );
    },
  };
}
