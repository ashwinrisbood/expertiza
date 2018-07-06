export const initialState = {

};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASKSNOTSTARTED:
          return { ...state, tasksNotYetStarted: [...state.tasksNotYetStarted, action.payload] };
        default:
          return state;
    }
};