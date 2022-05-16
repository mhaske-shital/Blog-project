import {createStore,combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension"
import { userLoginReducer } from "./reducers/auth-reducers"
import { userRegisterReducer } from "./reducers/register_reducer"

import thunk from "redux-thunk"
import { DeleteBlogReducer, getAllBlogReducer, getSingleBlogReducer, UpdateBlogReducer } from './reducers/blog-reducer';
const rootReducer=combineReducers({
    blog:getAllBlogReducer,
    BlogDetails:getSingleBlogReducer,
    deleteBlog:DeleteBlogReducer,
    updateBlog:UpdateBlogReducer,
    user: userLoginReducer,
    registed: userRegisterReducer,
});
const store =createStore (
    rootReducer,
    {}, 
    composeWithDevTools(applyMiddleware(thunk))
    );

export default store;