const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case 'SET_DATA':
      return action.payload;
    // case 'SET_SITE':
    //   return action.payload;
    // case 'SET_CHINHSACH':
    //   return action.payload;
    // case 'SET_DANHMUC':
    //   return action.payload;
    // case 'SET_SALE':
    //   return action.payload;
    // case 'SET_TOP':
    //   return action.payload;
    // case 'SET_BANNER':
    //   return action.payload;
    // case 'SET_NEWBAKERY':
    //   return action.payload;
    // case 'SET_BANNER2':
    //   return action.payload;
    // case 'SET_ALLBAKERY':
    //   return action.payload;
    // case 'SET_ABOUT':
    //   return action.payload;
    // case 'SET_TINTUC':
    //   return action.payload;
    // case 'SET_DANHGIA':
    //   return action.payload;
    // case 'SET_IG':
    //   return action.payload;
    // case 'SET_MAILCHIMP':
    //   return action.payload;
    default:
      return state;
  }
};

export default dataReducer;