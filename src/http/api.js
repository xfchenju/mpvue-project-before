import { post, get } from './config.js';

export const getUserInfo = params => get('http://mock.eolinker.com/sVlFbUk460109c8f8292c61c6c2641e3f6f74f646c7d0e0?uri=1', params);
