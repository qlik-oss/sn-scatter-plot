// import * as KEYS from '../../../constants/keys';
// import * as getD3Scale from '../scale';
// import * as getTicks from '../ticks';
// import createTickModel from '..';

// describe('getCount', () => {
//   let size;
//   let spacing;
//   const get = () => scale.getCount(size, spacing);
//   beforeEach(() => {
//     size = 748;
//   });

//   it('should return correct count with spacing = 0.5', () => {
//     spacing = 0.5;

//     // round(748/50) == 15
//     expect(get()).to.equal(15);
//   });

//   it('should return correct count with spacing = 1', () => {
//     spacing = 1;

//     // round(748/100) == 7
//     expect(get()).to.equal(7);
//   });

//   it('should return correct count with spacing = 2', () => {
//     spacing = 2;

//     // round(748/200) == 4
//     expect(get()).to.equal(4);
//   });

//   it('should return correct count with spacing = 3', () => {
//     spacing = 3;

//     // round(748/100) == 7
//     expect(get()).to.equal(7);
//   });

//   it('should fall back to 1 when size/distance is below 1', () => {
//     size = 100;
//     spacing = 2;

//     // max(1, round(100/200)) == 1
//     expect(get()).to.equal(1);
//   });
// });

// describe('getD3Scale', () => {
//   let sandbox;

//   beforeEach(() => {
//     sandbox = sinon.createSandbox();
//     sandbox.stub();
//   });

//   afterEach(() => {
//     sandbox.restore();
//   });

//   it('should ', () => {});
// });

// describe('createTickModel', () => {
//   let sandbox;
//   let resolveTicks;
//   let resolveMinMax;
//   let layoutModel;
//   let extremumModel;
//   let dockModel;
//   let create;
//   let ticks;
//   let d3Scale;

//   beforeEach(() => {
//     sandbox = sinon.createSandbox();
//     resolveTicks = sandbox.stub();
//     resolveTicks.returns('called');
//     resolveMinMax = sandbox.stub();
//     layoutModel = { getLayoutValue: sandbox.stub() };
//     layoutModel.getLayoutValue.withArgs('xAxis.spacing', 1).returns(0.5);
//     layoutModel.getLayoutValue.withArgs('yAxis.spacing', 1).returns(2);
//     dockModel = { chartSize: { width: 500, height: 1000 } };
//     extremumModel = { query: { getExtrema: sandbox.stub() } };
//     sandbox.stub(KEYS, 'default').value({ SCALE: { X: 'x', Y: 'y' } });
//     sandbox.stub(getD3Scale, 'default');
//     d3Scale = { scale: 'correct scale', getDomain: sandbox.stub() };
//     sandbox.stub(getTicks, 'default').withArgs('correct scale').returns('correct ticks');
//     create = () => createTickModel(layoutModel, dockModel, extremumModel);
//   });

//   afterEach(() => {
//     sandbox.restore();
//   });

//   it('should expose correct composition', () => {
//     expect(create()).to.have.all.keys(['query']);
//   });

//   describe('query', () => {
//     it('should expose correct methods', () => {
//       expect(create().query).to.have.all.keys(['getXTicks', 'getYTicks', 'getXMinMax', 'getYMinMax']);
//     });

//     describe('getXTicks', () => {
//       it('should return correct X ticks when both min and max are explicit', () => {
//         extremumModel.query.getExtrema.returns({
//           xAxisMin: 0,
//           xAxisMax: 600,
//           xExplicitType: 'minMax',
//         });
//         getD3Scale.default.withArgs(500, 0, 600, 0.5).returns(d3Scale.scale);
//         ticks = create().query.getXTicks();
//         expect(ticks).to.deep.equal('correct ticks');
//       });

//       it('should return correct X ticks when only min is explicit', () => {
//         extremumModel.query.getExtrema.returns({
//           xAxisMin: 0,
//           xAxisMax: 600,
//           xExplicitType: 'min',
//         });
//         getD3Scale.default.withArgs(500, 0, 660, 0.5).returns(d3Scale.scale);
//         ticks = create().query.getXTicks();
//         expect(ticks).to.deep.equal('correct ticks');
//       });

//       it('should return correct X ticks when only max is explicit', () => {
//         extremumModel.query.getExtrema.returns({
//           xAxisMin: 0,
//           xAxisMax: 600,
//           xExplicitType: 'max',
//         });
//         getD3Scale.default.withArgs(500, -60, 600, 0.5).returns(d3Scale.scale);
//         ticks = create().query.getXTicks();
//         expect(ticks).to.deep.equal('correct ticks');
//       });

//       it('should return correct X ticks when both min and max are not explicit', () => {
//         extremumModel.query.getExtrema.returns({
//           xAxisMin: 0,
//           xAxisMax: 600,
//           xExplicitType: 'none',
//         });
//         getD3Scale.default.withArgs(500, -60, 660, 0.5).returns(d3Scale.scale);
//         ticks = create().query.getXTicks();
//         expect(ticks).to.deep.equal('correct ticks');
//       });
//     });

//     describe('getYTicks', () => {
//       it('should return correct Y ticks when both min and max are explicit', () => {
//         extremumModel.query.getExtrema.returns({
//           yAxisMin: -100,
//           yAxisMax: 500,
//           yExplicitType: 'minMax',
//         });
//         getD3Scale.default.withArgs(1000, -100, 500, 2).returns(d3Scale.scale);
//         ticks = create().query.getYTicks();
//         expect(ticks).to.deep.equal('correct ticks');
//       });

//       it('should return correct Y ticks when only min is explicit', () => {
//         extremumModel.query.getExtrema.returns({
//           yAxisMin: -100,
//           yAxisMax: 500,
//           yExplicitType: 'min',
//         });
//         getD3Scale.default.withArgs(1000, -100, 560, 2).returns(d3Scale.scale);
//         ticks = create().query.getYTicks();
//         expect(ticks).to.deep.equal('correct ticks');
//       });

//       it('should return correct Y ticks when only max is explicit', () => {
//         extremumModel.query.getExtrema.returns({
//           yAxisMin: -100,
//           yAxisMax: 500,
//           yExplicitType: 'max',
//         });
//         getD3Scale.default.withArgs(1000, -160, 500, 2).returns(d3Scale.scale);
//         ticks = create().query.getYTicks();
//         expect(ticks).to.deep.equal('correct ticks');
//       });

//       it('should return correct Y ticks when both min and max are not explicit', () => {
//         extremumModel.query.getExtrema.returns({
//           yAxisMin: -100,
//           yAxisMax: 500,
//           yExplicitType: 'none',
//         });
//         getD3Scale.default.withArgs(1000, -160, 560, 2).returns(d3Scale.scale);
//         ticks = create().query.getYTicks();
//         expect(ticks).to.deep.equal('correct ticks');
//       });
//     });

//     describe('getXMinMax', () => {
//       it('should return correct X min/max when both min and max are explicit', () => {
//         extremumModel.query.getExtrema.returns({
//           xAxisMin: 1,
//           xAxisMax: 599,
//           xExplicitType: 'minMax',
//         });
//         getD3Scale.default.returns(d3Scale);
//         d3Scale.getDomain.returns([0, 600]);
//         const minMax = create().query.getXMinMax();
//         expect(minMax).to.deep.equal([1, 599]);
//       });

//       it('should return correct X min/max when only min is explicit', () => {
//         extremumModel.query.getExtrema.returns({
//           xAxisMin: 1,
//           xAxisMax: 599,
//           xExplicitType: 'min',
//         });
//         getD3Scale.default.returns(d3Scale);
//         d3Scale.getDomain.returns([0, 600]);
//         const minMax = create().query.getXMinMax();
//         expect(minMax).to.deep.equal([1, 600]);
//       });

//       it('should return correct X min/max when only max is explicit', () => {
//         extremumModel.query.getExtrema.returns({
//           xAxisMin: 1,
//           xAxisMax: 599,
//           xExplicitType: 'max',
//         });
//         getD3Scale.default.returns(d3Scale);
//         d3Scale.getDomain.returns([0, 600]);
//         const minMax = create().query.getXMinMax();
//         expect(minMax).to.deep.equal([0, 599]);
//       });

//       it('should return correct X min/max when both min and max are not explicit', () => {
//         extremumModel.query.getExtrema.returns({
//           xAxisMin: 1,
//           xAxisMax: 599,
//           xExplicitType: 'none',
//         });
//         getD3Scale.default.returns(d3Scale);
//         d3Scale.getDomain.returns([0, 600]);
//         const minMax = create().query.getXMinMax();
//         expect(minMax).to.deep.equal([0, 600]);
//       });
//     });

//     describe('getYMinMax', () => {
//       it('should return correct Y min/max when both min and max are explicit', () => {
//         extremumModel.query.getExtrema.returns({
//           yAxisMin: -99,
//           yAxisMax: 499,
//           yExplicitType: 'minMax',
//         });
//         getD3Scale.default.returns(d3Scale);
//         d3Scale.getDomain.returns([-100, 500]);
//         const minMax = create().query.getYMinMax();
//         expect(minMax).to.deep.equal([-99, 499]);
//       });

//       it('should return correct Y min/max when only min is explicit', () => {
//         extremumModel.query.getExtrema.returns({
//           yAxisMin: -99,
//           yAxisMax: 499,
//           yExplicitType: 'min',
//         });
//         getD3Scale.default.returns(d3Scale);
//         d3Scale.getDomain.returns([-100, 500]);
//         const minMax = create().query.getYMinMax();
//         expect(minMax).to.deep.equal([-99, 500]);
//       });

//       it('should return correct Y min/max when only max is explicit', () => {
//         extremumModel.query.getExtrema.returns({
//           yAxisMin: -99,
//           yAxisMax: 499,
//           yExplicitType: 'max',
//         });
//         getD3Scale.default.returns(d3Scale);
//         d3Scale.getDomain.returns([-100, 500]);
//         const minMax = create().query.getYMinMax();
//         expect(minMax).to.deep.equal([-100, 499]);
//       });

//       it('should return correct Y min/max when both min and max are not explicit', () => {
//         extremumModel.query.getExtrema.returns({
//           yAxisMin: -99,
//           yAxisMax: 499,
//           yExplicitType: 'none',
//         });
//         getD3Scale.default.returns(d3Scale);
//         d3Scale.getDomain.returns([-100, 500]);
//         const minMax = create().query.getYMinMax();
//         expect(minMax).to.deep.equal([-100, 500]);
//       });
//     });
//   });
// });
