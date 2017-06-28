const getValidResult = (value) => {
  return {
    reason: '',
    value: value,
    isValid: true
  };
}

const getInvalidResult = (reason = '') => {
  return {
    reason: reason,
    value: null,
    isValid: false
  };
}

export const validateAge = (ageStr) => {

  if (ageStr === '') {
    return getInvalidResult('Age is required');
  }

  const age = parseInt(ageStr, 10);

  if (isNaN(age)) {
    return getInvalidResult('Age must be a number');
  }

  if (age < 0 || age > 120) {
    return getInvalidResult('Age must be between 0 and 120');
  }

  return getValidResult(age);
};

export const validateNihssPoints = (nihssStr) => {

  if (nihssStr === '') {
    return getInvalidResult('Nihss points is required');
  }

  const nihss = parseInt(nihssStr, 10);

  if (isNaN(nihss)) {
    return getInvalidResult('Nihss points must be a number');
  }

  if (nihss < 0 || nihss > 42) {
    return getInvalidResult('Nihss points must be between 0 and 42 inclusive');
  }

  return getValidResult(nihss);
};

export const validateCopeptinLevel = (copeptinStr) => {

  if (copeptinStr === '') {
    return getInvalidResult('Copeptin level is required');
  }

  const copeptin = parseFloat(copeptinStr)

  if (isNaN(copeptin)) {
    return getInvalidResult('Copeptin level must be a number');
  }

  if (copeptin > 999) {
    return getInvalidResult('Copeptin level must be below 999');
  }
  
  return getValidResult(copeptin);
};

const calculateCoRiskScore = (age, nihss, copeptin) => {
  if (!validateAge(age).isValid || !validateNihssPoints(nihss).isValid || !validateCopeptinLevel(copeptin).isValid) {
    return -1;
  }
  
  const value = 1 / (1 + Math.exp(7.661 - (0.060 * age) - (0.157 * nihss) - (1.2 * Math.log10(copeptin))));

  return parseInt(value * 100, 10);
};

export default calculateCoRiskScore;
