import { expect } from 'chai';

import calculateCoRiskScore, { validateAge, validateNihssPoints, validateCopeptinLevel } from './coRiskScore';

describe('coRiskScore', () => {
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

    it('should validate max age', () => {
      // given
      const ageStr = '121';

      // when
      const result = validateAge(ageStr);

      // then
      expect(result).to.deep.equal({ value: null, reason: 'Age must be between 0 and 120', isValid: false });
    });

  });

  describe('validateNihssPoints', () => {
    it('should validate nihss points as string', () => {
      // given
      const nihssStr = '42';

      // when
      const result = validateNihssPoints(nihssStr);

      // then
      expect(result).to.deep.equal({ value: 42, reason: '', isValid: true });
    });

    it('should validate 0 nihss points', () => {
      // given
      const nihssStr = '0';

      // when
      const result = validateNihssPoints(nihssStr);

      // then
      expect(result).to.deep.equal({ value: 0, reason: '', isValid: true });

    });

    it('should validate empty nihss points', () => {
      // given
      const nihssStr = '';

      // when
      const result = validateNihssPoints(nihssStr);

      // then
      expect(result).to.deep.equal({ value: null, reason: 'Nihss points is required', isValid: false });

    });

    it('should validate max nihss points', () => {
      // given
      const nihssStr = '43';

      // when
      const result = validateNihssPoints(nihssStr);

      // then
      expect(result).to.deep.equal({ value: null, reason: 'Nihss points must be between 0 and 42 inclusive', isValid: false });

    });

  });

  describe('validateCopeptinLevel', () => {
    it('should validate copeptin level as string', () => {
      // given
      const copeptinStr = '42';

      // when
      const result = validateCopeptinLevel(copeptinStr);

      // then
      expect(result).to.deep.equal({ value: 42.0, reason: '', isValid: true });
    });

    it('should validate 0 copeptin level', () => {
      // given
      const copeptinStr = '0';

      // when
      const result = validateCopeptinLevel(copeptinStr);

      // then
      expect(result).to.deep.equal({ value: 0, reason: '', isValid: true });

    });

    it('should validate empty copeptin level', () => {
      // given
      const copeptinStr = '';

      // when
      const result = validateCopeptinLevel(copeptinStr);

      // then
      expect(result).to.deep.equal({ value: null, reason: 'Copeptin level is required', isValid: false });

    });

    it('should validate max copeptin level', () => {
      // given
      const copeptinStr = '999.1';

      // when
      const result = validateCopeptinLevel(copeptinStr);

      // then
      expect(result).to.deep.equal({ value: null, reason: 'Copeptin level must be below 999', isValid: false });

    });

  });

  describe('calculateCoRiskScore', () => {
    it('should return -1 when invalid age provided', () => {
      // when
      const result = calculateCoRiskScore({ age: undefined, nihss: 1, copeptin: 1 });

      // then
      expect(result).to.equal(-1);
    });

    it('should return -1 when invalid nihss points provided', () => {
      // when
      const result = calculateCoRiskScore({ age: 1, nihss: undefined, copeptin: 1 });

      // then
      expect(result).to.equal(-1);
    });

    it('should return -1 when invalid copeptin level provided', () => {
      // when
      const result = calculateCoRiskScore({ age: 1, nihss: 1, copeptin: undefined });

      // then
      expect(result).to.equal(-1);
    });

    it('should correctly calculate the coRisk score', () => {
      // when
      const result1 = calculateCoRiskScore({ age: 75, nihss: 7, copeptin: 11.6 });
      const result2 = calculateCoRiskScore({ age: 75, nihss: 7, copeptin: 116 });
      const result3 = calculateCoRiskScore({ age: 75, nihss: 7, copeptin: 11.6, thrombolysis: 1 });
      const result4 = calculateCoRiskScore({ age: 75, nihss: 7, copeptin: 116, thrombolysis: 1 });
      const result5 = calculateCoRiskScore({ age: 23, nihss: 23, copeptin: 23, thrombolysis: 1 });
      const result6 = calculateCoRiskScore({ age: 23, nihss: 23, copeptin: 23, thrombolysis: 0 });

      // then
      expect(result1).to.equal(46);
      expect(result2).to.equal(74);
      expect(result3).to.equal(10);
      expect(result4).to.equal(27);
      expect(result5).to.equal(21);
      expect(result6).to.equal(68);
    });


  });

});
