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

  if (age < 0 || age > 200) {
    return getInvalidResult('Age must be between 0 and 200');
  }

  return getValidResult(age);
};
