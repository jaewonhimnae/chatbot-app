import {
    SAMPLE,
} from '../_actions/types';

export default function (state = {messages:[]}, action) {
    switch (action.type) {
        case SAMPLE:
            return {
                ...state,
                messages: state
            }
        default:
            return state;
    }
}