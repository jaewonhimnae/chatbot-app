import {
    SAMPLE,
} from './types';

export function sample(dataToSubmit) {
   
    return {
        type: SAMPLE,
        payload: dataToSubmit
    }
}
