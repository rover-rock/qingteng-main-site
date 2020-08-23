const { time } = require("console");

const delay = (fn,time) => {
    let timerId
    return function(...args){
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            fn.apply(null,args)
        }, time);
    }
    
};

const fn = () => {
    console.log(1);
}

const fn2 = delay(fn,1000)

fn2()
fn2()
fn2()
setTimeout(() => {
    fn2()
}, 500);