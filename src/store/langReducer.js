const initialState = {
    selectedLanguage: 'en',
};

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LANG':
            return {
                ...state,
                selectedLanguage: action.payload,
            };
        default:
            return state;
    }
};

export default languageReducer;

export const setLanguage = (language) => ({
    type: 'SET_LANG',
    payload: language,
});