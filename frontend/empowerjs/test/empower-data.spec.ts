import {
  FileBuilder,
  PlasticCreditBuilder
} from '../src/plastic-credit-utils/empower-data-creator';

describe('Empower Data Creator', () => {
  it('should create a new data', () => {
    const plasticCreditBuilder = new PlasticCreditBuilder();
    const fileBuilder = new FileBuilder();
    const files = fileBuilder.addFile('file1', 'url1').build();
  });
});
