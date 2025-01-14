// **  Initial State
const initialState = {
    getBlogs: [],
    getAwards: [],
    getMedia: [],
    getAnnouncement: [],
    getHealthCare: [],
    getPrintMedia:[]
}

const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_BLOGS':
            return {
                ...state,
                getBlogs: action.data
            }
        case 'GET_ALL_AWARDS':
            return {
                ...state,
                getAwards: action.data
            }
        case 'GET_ALL_MEDIA':
            return {
                ...state,
                getMedia: action.data
            }
        case 'GET_ALL_PRINT_MEDIA':
            return {
                ...state,
                getPrintMedia: action.data
            }
        case 'GET_ALL_HEALTHCARE':
            return {
                ...state,
                getHealthCare: action.data
            }
        case 'GET_ALL_ANNOUNCMENT':
            return {
                ...state,
                getAnnouncement: action.data
            }
        default:
            return state
    }
}

export default blogsReducer
