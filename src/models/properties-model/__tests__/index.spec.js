import createPropertiesModel from '..';

describe('properties model', () => {
  let sandbox;
  let model;
  let layoutService;
  let create;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    model = {
      getEffectiveProperties: () => Promise.resolve({ key: 'properties' }),
    };
    layoutService = {
      getLayout: sandbox.stub().returns({ key: 'layout' }),
    };
    create = () => createPropertiesModel({ model, layoutService });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should expose correct composition', () => {
    expect(create()).to.have.all.keys(['query', 'command']);
  });

  describe('query', () => {
    it('should expose correct methods', () => {
      expect(create().query).to.have.all.keys(['getProperties']);
    });

    it('getProperties should return correct properties', () => {
      expect(create().query.getProperties()).to.equal(undefined);
    });
  });

  describe('command', () => {
    it('should expose correct methods', () => {
      expect(create().command).to.have.all.keys(['initialize']);
    });

    it('initialize should return correct properties', async () => {
      const createProerties = create();
      await createProerties.command.initialize();
      expect(createProerties.query.getProperties()).to.deep.equal({ key: 'properties' });
    });

    it('initialize should return correct properties when is snapshot', async () => {
      layoutService.getLayout.returns({ snapshotData: 'snapshotData' });
      const createProerties = create();
      await createProerties.command.initialize();
      expect(createProerties.query.getProperties()).to.equal(undefined);
    });
  });
});
