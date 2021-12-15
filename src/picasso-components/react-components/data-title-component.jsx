/* eslint-disable react/destructuring-assignment */
import { getValue } from 'qlik-chart-modules';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Popover, List, ListItemIcon, ListItem, ListItemText } from '@material-ui/core'; // eslint-disable-line
import rtlUtils from '../../utils/rtl-utils';
import SVGIcon from './icons/SVGIcon';
import ICONS from './icons/index';
import { getMeasurePopoverData, getMeasureTitleData } from '../../utils/data-title-utils';

const dockOrigins = {
  bottom: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
  },
  top: {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    },
  },
  left: {
    anchorOrigin: {
      vertical: 'center',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'center',
      horizontal: 'right',
    },
  },
  right: {
    anchorOrigin: {
      vertical: 'center',
      horizontal: 'right',
    },
    transformOrigin: {
      vertical: 'center',
      horizontal: 'left',
    },
  },
};

const FadeButton = (
  { children, ...rest } // eslint-disable-line
) => (
  <Button size="small" disableRipple disableTouchRipple {...rest}>
    {children}
  </Button>
);

export default function createDataTitileComp() {
  function HyperDataItem({ title, selected, onClick }) {
    const localDir = rtlUtils.detectTextDirection(title);
    return (
      <ListItem button onClick={onClick} style={{ textAlign: 'start' }}>
        <ListItemIcon style={{ minWidth: 32 }}>
          <SVGIcon d={selected ? ICONS.TICK.d : ''} />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ dir: localDir }}>{title}</ListItemText>
      </ListItem>
    );
  }
  HyperDataItem.propTypes = {
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
  };
  HyperDataItem.defaultProps = {
    selected: false,
  };

  function AlternativesPopover({ alignTo, changeTo, current, dir, dock, list, onClose, show }) {
    const items = list.map((l, i) => <HyperDataItem key={l.id} title={l.title} onClick={() => changeTo(i)} />);
    return (
      <Popover
        anchorEl={alignTo}
        open={show}
        onClose={onClose}
        {...dockOrigins[dock]}
        PaperProps={{
          style: { minWidth: '250px', maxHeight: '300px' },
        }}
      >
        <List dense dir={dir} component="nav">
          <HyperDataItem title={current} selected onClick={onClose} />
          {items}
        </List>
      </Popover>
    );
  }
  AlternativesPopover.propTypes = {
    alignTo: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    changeTo: PropTypes.func.isRequired,
    current: PropTypes.string.isRequired,
    dir: PropTypes.string.isRequired,
    dock: PropTypes.string.isRequired,
    list: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
  };
  AlternativesPopover.defaultProps = {
    list: [],
    alignTo: null,
  };

  class TitleComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
        inSelection: props.selections && props.selections.isActive(),
      };
      this.openPopover = this.openPopover.bind(this);
      this.closePopover = this.closePopover.bind(this);
      this.changeTo = this.changeTo.bind(this);
      this.alignToRef = React.createRef();
    }

    componentDidMount() {
      const { selections } = this.props;
      if (selections) {
        this.onSelectionsActivated = () => this.setState({ inSelection: true });
        this.onSelectionsDeactivated = () => this.setState({ inSelection: false });
        selections.addListener('activated', this.onSelectionsActivated);
        selections.addListener('deactivated', this.onSelectionsDeactivated);
        selections.addListener('canceled', this.onSelectionsDeactivated);
      }
    }

    componentWillUnmount() {
      const { selections } = this.props;
      if (selections) {
        selections.removeListener('activated', this.onSelectionsActivated);
        selections.removeListener('deactivated', this.onSelectionsDeactivated);
        selections.removeListener('canceled', this.onSelectionsDeactivated);
      }
    }

    changeTo(altIndex) {
      this.props.popover.changeTo(this.props.titleData.index, altIndex);
      this.closePopover();
    }

    openPopover() {
      // catch when closing using the button on touch devices
      // when I measured I get an extra openPopover within 10ms after closePopover with touch support on
      // and I can not get a real click faster then 100ms
      if (this.state.closeTime && Date.now() - this.state.closeTime < 20) {
        return;
      }
      this.props.popover.getAlternatives().then((list) => {
        this.setState({
          open: true,
          alternatives: list,
        });
      });
    }

    closePopover() {
      this.setState({
        open: false,
        closeTime: Date.now(),
      });
    }

    render() {
      const { titleData, popover, translator, disabled, isDimension, padding, minWidth, hasAlternative } = this.props;
      const textStyle = {
        flex: '1 1 auto',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontWeight: 'normal',
        ...this.props.style,
      };

      const breadcrumbsCount = titleData.breadcrumbs.length;
      const breadcrumbsDisabled = disabled || this.state.inSelection;
      const breadcrumbs = titleData.breadcrumbs.map((b, i) => (
        <FadeButton
          style={{
            display: 'flex',
            alignItems: 'center',
            color: breadcrumbsDisabled && 'rgba(89, 89, 89, 0.8)',
            pointerEvents: breadcrumbsDisabled ? 'none' : 'auto',
          }}
          key={i} // eslint-disable-line react/no-array-index-key
          onClick={() => (breadcrumbsDisabled ? undefined : titleData.drillUp(breadcrumbsCount - i))}
          title={b}
        >
          <span style={textStyle}>{b}</span>
          <SVGIcon {...ICONS.TRIANGLE_RIGHT} size="small" style={{ margin: '0 8px' }} />
        </FadeButton>
      ));

      const onClick = popover && !this.state.open ? this.openPopover : this.closePopover;
      const disabledLabel = !popover || disabled || this.state.inSelection;
      const style = {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        color: disabledLabel && 'rgba(89, 89, 89, 0.8)', // override disabled styling
        height: !isDimension && disabledLabel && '20px',
        lineHeight: !isDimension && disabledLabel && '20px',
        border: !isDimension && disabledLabel && 'none',
      };
      if (padding) {
        style.padding = padding;
      }
      if (minWidth) {
        style.minWidth = minWidth;
      }
      const dir = rtlUtils.detectTextDirection(titleData.text);
      const label = (
        <FadeButton style={style} onClick={disabledLabel ? undefined : onClick} title={titleData.text} tabIndex="-1">
          {titleData.locked && (
            <SVGIcon {...ICONS.LOCK} size="small" title={translator.get('Tooltip.selections.locked')} />
          )}
          <span style={textStyle} dir={dir}>
            {titleData.text}
          </span>
          {popover && <SVGIcon {...ICONS.TRIANGLE_DOWN} size="small" style={{ margin: '0 8px' }} />}
        </FadeButton>
      );

      return (
        <>
          {titleData.drilldown && (
            <SVGIcon
              {...ICONS.DRILL_DOWN}
              size="small"
              title={translator.get('Tooltip.dimensions.drilldown')}
              style={{ margin: '0 4px 0 0' }}
            />
          )}
          {breadcrumbs}
          <div
            ref={this.alignToRef}
            style={{
              overflow: 'hidden',
              pointerEvents: hasAlternative ? 'auto' : 'none',
            }}
          >
            {label}
          </div>
          {popover && (
            <AlternativesPopover
              dock={popover.dock}
              dir={popover.dir}
              current={titleData.popoverText}
              alignTo={this.alignToRef.current}
              show={this.state.open}
              list={this.state.alternatives}
              onClose={this.closePopover}
              changeTo={this.changeTo}
            />
          )}
        </>
      );
    }
  }
  TitleComponent.propTypes = {
    disabled: PropTypes.bool.isRequired,
    padding: PropTypes.string,
    minWidth: PropTypes.string,
    titleData: PropTypes.shape({
      breadcrumbs: PropTypes.arrayOf(PropTypes.string).isRequired,
      drilldown: PropTypes.bool.isRequired,
      index: PropTypes.number.isRequired,
      locked: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      popoverText: PropTypes.string.isRequired,
      drillUp: PropTypes.func,
    }).isRequired,
    popover: PropTypes.shape({
      dir: PropTypes.string.isRequired,
      dock: PropTypes.string.isRequired,
      changeTo: PropTypes.func.isRequired,
      getAlternatives: PropTypes.func.isRequired,
    }),
    translator: PropTypes.shape({
      get: PropTypes.func.isRequired,
    }).isRequired,
    selections: PropTypes.shape({
      isActive: PropTypes.func,
      addListener: PropTypes.func,
      removeListener: PropTypes.func,
    }),
    style: PropTypes.shape({
      fontSize: PropTypes.string,
      color: PropTypes.string,
      fontFamily: PropTypes.string,
    }).isRequired,
    isDimension: PropTypes.bool.isRequired,
    hasAlternative: PropTypes.bool.isRequired,
  };
  TitleComponent.defaultProps = {
    popover: null,
    selections: null,
    padding: '',
    minWidth: '',
  };

  function getStyle(dock, rect) {
    const style = {
      pointerEvents: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
    if (dock === 'left') {
      style.width = `${rect.height}px`;
      style.transform = `rotate(-90deg) translate(-${rect.height}px, 0)`;
      style.transformOrigin = 'top left';
    } else if (dock === 'right') {
      style.width = `${rect.height}px`;
      style.transform = `rotate(90deg) translate(0, -${rect.width}px)`;
      style.transformOrigin = 'top left';
    }
    return style;
  }

  function opposite(dock) {
    const map = {
      top: 'bottom',
      bottom: 'top',
      left: 'right',
      right: 'left',
    };
    return map[dock];
  }

  function isAlternativeMeasure(settings) {
    return (
      !settings.isDimension && getValue(settings, 'hyperCubeDef.qLayoutExclude.qHyperCubeDef.qMeasures.length') > 0
    );
  }

  return {
    renderer: 'react',
    disableTriggers: true,
    preferredSize: function preferredSize() {
      // TODO Return size based on the height of the title text.
      if (!this.settings.settings.isDimension && !isAlternativeMeasure(this.settings.settings)) {
        return 20;
      }
      return 28;
    },
    render() {
      /* eslint-disable react/no-this-in-sfc */
      const {
        settings: {
          app,
          disabled,
          explicitItemInfos,
          hyperCube,
          hyperCubeDef,
          isDimension,
          minWidth,
          model,
          onChangeToAlternative,
          padding,
          rtl,
          selections,
          skipAttributeExpressions,
          translator,
        },
        layout: { dock },
      } = this.settings;

      const dir = (dock === 'top' || dock === 'bottom') && rtl ? 'rtl' : 'ltr';
      const style = getStyle(dock, this.rect);

      const layoutExcludeCube =
        hyperCubeDef && hyperCubeDef.qLayoutExclude && hyperCubeDef.qLayoutExclude.qHyperCubeDef;
      const altList = (layoutExcludeCube && layoutExcludeCube.qMeasures) || [];
      const itemInfos = explicitItemInfos || hyperCube.qMeasureInfo;
      const allowChangeOfAlternatives = model && model.colorSupport && model.modifiers;
      const popover =
        allowChangeOfAlternatives &&
        getMeasurePopoverData({
          altList,
          app,
          dir: rtl ? 'rtl' : 'ltr',
          dock: opposite(dock),
          model,
          onChange: onChangeToAlternative,
          skipAttributeExpressions,
          translator,
        });

      // Fix QB-903
      const hasAlternative = isAlternativeMeasure(this.settings.settings);

      const titles = itemInfos.map((info, index) => {
        const column = typeof info.explicitColumn === 'number' ? info.explicitColumn : index;
        const title = getMeasureTitleData(info, column, model);
        const last = index === itemInfos.length - 1;
        return (
          <React.Fragment key={info.cId}>
            <TitleComponent
              popover={popover}
              titleData={title}
              model={model}
              translator={translator}
              selections={selections}
              disabled={disabled()}
              style={this.style}
              isDimension={isDimension}
              padding={padding}
              minWidth={minWidth}
              hasAlternative={hasAlternative}
            />
            {!last && <span>,&nbsp;</span>}
          </React.Fragment>
        );
      });

      return (
        <div style={style} dir={dir}>
          {titles}
        </div>
      );
      /* eslint-enable react/no-this-in-sfc */
    },
  };
}
