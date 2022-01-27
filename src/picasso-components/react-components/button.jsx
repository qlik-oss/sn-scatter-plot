import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import SVGIcon from './icons/SVGIcon';
import ICONS from './icons';

const Button = ({ ...rest }) => {
  const useStyles = () =>
    makeStyles(() => {
      const { rtl, vertical, horizontal, width } = rest.presentation;
      const horizontalStartSide = rtl ? 'left' : 'right';
      return {
        button: {
          position: 'absolute',
          borderRadius: '2px',
          width: `${width}px`,
          height: `${width}px`,
          top: `${vertical}px`,
          [horizontalStartSide]: `${horizontal}px`,
          pointerEvents: 'auto',
          '&:focus': {
            color: '#1A1A1A',
          },
        },
      };
    });
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
        fill={() => (rest.disabled() ? '#E6E6E6' : 'currentColor')}
      />
    </IconButton>
  );
};

export default function createButton() {
  return {
    renderer: 'react',
    disableTriggers: true,
    render() {
      const { callback, disabled, presentation, title, show } = this.settings.settings;
      if (show && !show()) {
        return false;
      }
      return <Button callback={callback} title={title} disabled={disabled} presentation={presentation} />;
    },
  };
}
