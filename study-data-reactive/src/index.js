import Dep from './Dep.js';
import observe from './observe.js';
import Watcher from './Watcher.js';

var obj = {
    a: {
        m: {
            n: 5
        }
    },
    b: 10,
    c: {
        d: {
            e: {
                f: 6666
            }
        }
    },
    g: [22, 33, 44, 55]
};


observe(obj);
new Watcher(obj, 'a.m.n', (val) => {
    console.log('★我是watcher，我在监控a.m.n', val);
});

new Watcher(obj, 'c.d.e.f', (val) => {
    console.log('★我是watcher，我在监控c.d.e.f', val);
});

obj.a.m.n =33
obj.c.d.e.f =33
// obj.g.push(66);
console.log(obj);