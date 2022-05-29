const initialState = {
  scrollY: 0,
  pageStatus: 'home'
}

function utilityReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_SCROLLY_DATA':
      return {
        ...state,
        scrollY: action.payload
      }
    case 'GET_PAGE_STATUS':
      return {
        ...state,
        pageStatus: action.payload
      }
    default:
      return state
  }
}

export default utilityReducer