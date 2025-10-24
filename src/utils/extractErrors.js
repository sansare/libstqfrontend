import {
  pipe, map, values, filter, is, isEmpty,
} from 'ramda';

const omitSuccess = object => {
  if (is(Boolean, object) && object === true) {
    return false;
  } if (
    is(Object, object)
    && isEmpty(map(values(object), filter(omitSuccess)))
  ) {
    return false;
  }
  return true;
};

export default pipe(filter(omitSuccess));
