import { pipe, map, values, filter, is } from 'ramda';

const omitSuccess = object => {
  if (is(Boolean, object) && object === true) {
    return false;
  } else if (
    is(Object, object) &&
    map(values(object), filter(omitSuccess)) === []
  ) {
    return false;
  }
  return true;
};

export default pipe(filter(omitSuccess));
