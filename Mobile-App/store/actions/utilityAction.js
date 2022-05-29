export const getScrollYData = (payload) => {
  return {
    type: 'GET_SCROLLY_DATA',
    payload,
  };
};

export const getPageStatus = (payload) => {
  return {
    type: 'GET_PAGE_STATUS',
    payload,
  };
};