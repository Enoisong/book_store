const ACTIVE = 'redux/categories/ACTIVE';
const NOT_ACTIVE = 'redux/categories/NOT_ACTIVE';

const createActionForCategory = () => ({ type: NOT_ACTIVE });

const reducerForCategory = (state = [], action) => {
  switch (action.type) {
    case ACTIVE:
      return 'Under Construction';
    default:
      return state;
  }
};

export default reducerForCategory;
export { createActionForCategory };
