// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import * as mui from '../mui';
import r from '../react-renderer';

describe('r', () => {
  let sandbox;
  let dom;
  let renderer;
  let opts;
  let createElement;
  let element;
  let root;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    createElement = sandbox.stub();
    createElement.withArgs('div').returns({ id: 'div-1', style: {} });
    global.document.createElement.bind = sandbox.stub().returns(createElement);
    element = {};
    element.appendChild = sandbox.stub();
    opts = {};
    root = {
      render: sandbox.stub(),
      unmount: sandbox.stub(),
    };
    sandbox.stub(ReactDOM, 'createRoot').returns(root);
    sandbox.stub(mui, 'Mui').returns('mui output');
    renderer = r();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('dom', () => {
    beforeEach(() => {
      dom = renderer(opts);
    });
    it('should have correct attributes', () => {
      expect(dom).to.have.all.keys([
        'element',
        'root',
        'appendTo',
        'render',
        'itemsAt',
        'findShapes',
        'clear',
        'destroy',
        'size',
      ]);
    });

    describe('appendTo', () => {
      it('should append element correctly, case 1: el is undefined', () => {
        dom.appendTo(element);
        expect(
          element.appendChild.withArgs({
            id: 'div-1',
            style: {
              position: 'absolute',
              '-webkit-font-smoothing': 'antialiased',
              '-moz-osx-font-smoothing': 'antialiased',
              pointerEvents: 'none',
            },
          })
        ).to.have.been.calledOnce;
      });

      it('should append element correctly, case 2: el is defined', () => {
        dom.appendTo(element);
        dom.appendTo(element);
        expect(createElement).to.have.been.calledOnce;
      });
    });

    describe('element', () => {
      it('should return el', () => {
        dom.appendTo(element);
        expect(dom.element()).to.deep.equal({
          id: 'div-1',
          style: {
            position: 'absolute',
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'antialiased',
            pointerEvents: 'none',
          },
        });
      });
    });

    describe('root', () => {
      it('should return el', () => {
        dom.appendTo(element);
        expect(dom.root()).to.deep.equal({
          id: 'div-1',
          style: {
            position: 'absolute',
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'antialiased',
            pointerEvents: 'none',
          },
        });
      });
    });

    describe('render', () => {
      it('should return false if el is not defined', () => {
        expect(dom.render()).to.equal(false);
      });

      it('should return true if el is defined', () => {
        dom.appendTo(element);
        expect(dom.render('nodes')).to.equal(true);
        expect(
          ReactDOM.createRoot.withArgs({
            id: 'div-1',
            style: {
              position: 'absolute',
              '-webkit-font-smoothing': 'antialiased',
              '-moz-osx-font-smoothing': 'antialiased',
              pointerEvents: 'none',
              left: '0px',
              top: '0px',
              width: '0px',
              height: '0px',
              transform: 'scale(1, 1)',
              transformOrigin: 'top left',
            },
          })
        ).to.have.been.calledOnce;
        expect(root.render.withArgs('mui output')).to.have.been.calledOnce;
      });
    });

    describe('itemsAt', () => {
      it('should returns empty array', () => {
        expect(dom.itemsAt()).to.deep.equal([]);
      });
    });

    describe('findShapes', () => {
      it('should returns empty array, case 1: opts is specified (default)', () => {
        expect(dom.findShapes()).to.deep.equal([]);
      });

      it('should returns empty array, case 2: opts is not specified', () => {
        dom = renderer();
        expect(dom.findShapes()).to.deep.equal([]);
      });
    });

    describe('clear', () => {
      it('should not unmount component, case 1: render has not been triggered', () => {
        dom.appendTo(element);
        dom.clear();
        expect(root.unmount).not.to.have.been.called;
      });

      it('should not unmount component, case 2: el is not defined', () => {
        dom.clear();
        expect(root.unmount).not.to.have.been.called;
      });
    });

    describe('destroy', () => {
      it('should destroy el correctly, case 1: el has been appended to and render has been called', () => {
        dom.appendTo(element);
        dom.render('nodes');

        dom.destroy();
        expect(root.unmount).to.have.been.calledOnce;
      });

      it('should destroy el correctly, case 2: el has not been appended to', () => {
        dom.destroy();
        expect(root.unmount).not.to.have.been.called;
      });
    });

    describe('size', () => {
      it('should return correct rect, case 1: inner is not defined', () => {
        const rect = dom.size();
        expect(rect).to.deep.equal({
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          scaleRatio: {
            x: 1,
            y: 1,
          },
          margin: {
            left: 0,
            top: 0,
          },
        });
      });

      it('should return correct rect, case 2: inner is defined', () => {
        const rect = dom.size({
          x: 1,
          y: 2,
          width: 3,
          height: 4,
          scaleRatio: { x: 5, y: 6 },
          margin: { left: 7, top: 8 },
        });
        expect(rect).to.deep.equal({
          x: 1,
          y: 2,
          width: 3,
          height: 4,
          scaleRatio: {
            x: 5,
            y: 6,
          },
          margin: {
            left: 7,
            top: 8,
          },
        });
      });

      it('should return correct rect, case 3: inner is defined partially', () => {
        const rect = dom.size({
          x: 1,
          y: 2,
          width: 3,
          height: 4,
          scaleRatio: { x: '5', y: NaN },
          margin: { left: 's' },
        });
        expect(rect).to.deep.equal({
          x: 1,
          y: 2,
          width: 3,
          height: 4,
          scaleRatio: {
            x: 1,
            y: 1,
          },
          margin: {
            left: 0,
            top: 0,
          },
        });
      });
    });
  });
});
