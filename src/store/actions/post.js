import {LOAD_POSTS} from '../types';
import {DATA} from '../types';

export const LoadPosts = () => {
    return {
        type: LOAD_POSTS,
        payload: DATA
    }
}