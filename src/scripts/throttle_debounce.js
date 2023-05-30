export function myThrottle (callback, time) {
    let able = true;
    return function (...args) {
        if (able) {
            callback(...args);
            able = false;
            setTimeout(()=> {
                able = true;
            }, time);
        }
    }
}

export function myDebounce (callback, time) {
    let able = 0;

    return function (...args) {
        able +=1;

        setTimeout(()=> {
            able -=1;

            if (able === 0) {
                callback(...args);
            }
        }, time);
    }
}