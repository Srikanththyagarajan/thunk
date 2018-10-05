import moment from 'moment'

const initialState = {
  posts: {},
  editingPost: {title: '', userId: 1, comments: 5, submitted: moment().format()},
  isLoading: false,
  currentPostIndex: 0,
}

export default (state = initialState, action) => {
  console.log(state, action); 
  switch (action.type) {
    case 'NEW_POST':
      return {...state, posts: ['chicken dinner']};
    case 'posts/SAVE_POST':
      return {...state, editingPost: initialState.editingPost}
    case 'posts/UPDATE_TITLE':
      return {...state, editingPost: {...state.editingPost, title: action.payload}}
    case 'posts/LOAD_POSTS_REQUEST':
      return {...state, isLoading: true}
    case 'posts/LOAD_POSTS_SUCCESS':
      return {...state, posts: action.payload, isLoading: false}
    default:
      return state
  }
}

