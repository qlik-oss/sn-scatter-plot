import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

global.jestExpect = global.expect;
global.expect = chai.expect;
global.chai = chai;
global.sinon = sinon;

chai.use(sinonChai);
