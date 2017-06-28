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
      const result = calculateCoRiskScore(undefined, 1, 1);

      // then
      expect(result).to.equal(-1);
    });

    it('should return -1 when invalid nihss points provided', () => {
      // when
      const result = calculateCoRiskScore(1, undefined, 1);

      // then
      expect(result).to.equal(-1);
    });

    it('should return -1 when invalid copeptin level provided', () => {
      // when
      const result = calculateCoRiskScore(1, 1, undefined);

      // then
      expect(result).to.equal(-1);
    });

    it('should correctly calculate the coRisk score', () => {
      // when
      const result1 = calculateCoRiskScore(75, 7, 11.6);
      const result2 = calculateCoRiskScore(75, 7, 116);
      // then
      expect(result1).to.equal(31);
      expect(result2).to.equal(60);
    });


  });

});
