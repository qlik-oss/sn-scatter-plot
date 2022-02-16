const isEqual = (object1, object2) => {
  if (object1 === undefined || object2 === undefined) {
    return false;
  }
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

const objectHelper = {
  isEqual,
};

export default objectHelper;
