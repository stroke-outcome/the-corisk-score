import { expect } from 'chai';

import parseUrlQueryKeyValue from './parseUrlQueryKeyValue';

describe('parseUrlQueryKeyValue', () => {
  it('should parse a url query string', () => {
    // given
    const query = '?a=1&b=3&c=m2-m3-m4-m5';

    // when
    const result = parseUrlQueryKeyValue(query);

    // then
    expect(result).to.deep.equal({ a: '1', b: '3', c: 'm2-m3-m4-m5' });
  });
  
  it('should parse the co risk parameters', () => {
    // given
    const query = '?age=75&nihss=7&copeptin=11.6';

    // when
    const result = parseUrlQueryKeyValue(query);

    // then
    expect(result).to.deep.equal({ age: '75', nihss: '7', copeptin: '11.6' });
  });

});
