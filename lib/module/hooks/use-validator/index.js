import { useMemo } from 'react';
import invariant from 'invariant';
const useValidator = _ref => {
  let {
    initialMountedContent
  } = _ref;
  useMemo(() => {
    invariant(typeof initialMountedContent === 'boolean', `'initialMountedContent' was provided but with wrong type ! expected type is a boolean.`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default useValidator;
//# sourceMappingURL=index.js.map