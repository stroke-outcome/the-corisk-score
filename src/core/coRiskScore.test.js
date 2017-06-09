import { expect } from 'chai';

import {validateAge} from './coRiskScore';

describe('validateAge', () => {
  it('should validate an age as string', () => {
    // given
    const ageStr = '42';

    // when
    const result = validateAge(ageStr);

    // then
    expect(result).to.deep.equal({ value: 42, reason: '', isValid: true });
  });
  
  it('should validate 0 age', () => {
    // given
    const ageStr = '0';

    // when
    const result = validateAge(ageStr);

    // then
    expect(result).to.deep.equal({ value: 0, reason: '', isValid: true });
    
  });
  
  it('should validate empty age', () => {
    // given
    const ageStr = '';

    // when
    const result = validateAge(ageStr);

    // then
    expect(result).to.deep.equal({ value: null, reason: 'Age is required', isValid: false });
    
  });

});
