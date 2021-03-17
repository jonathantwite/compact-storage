import { get, save } from '../dist/index.js';

const data1 = {name: "Jack", gender: 'm', dob: '1983-08-01'};
const data2 = [
    {name: 'Jack', gender: 'm', dob: '1983-08-01'},
    {name: 'John', gender: 'm', dob: '1983-08-02'},
    {name: 'Peter', gender: 'm', dob: '1983-08-03'},
    {name: 'Paul', gender: 'm', dob: '1983-08-04'}];

save('data1', data1);
save('data2', data2);

const data1Out = {name: '', gender: '', dob: ''};
const data2Out = [
    {name: '', gender: '', dob: ''},
    {name: '', gender: '', dob: ''},
    {name: '', gender: '', dob: ''},
    {name: '', gender: '', dob: ''}];

get('data1', data1Out);
get('data2', data2Out);


console.log(data1);
console.log(data1Out);

console.log(data2);
console.log(data2Out);


const resDom = document.getElementById('results');

const res1 = document.createElement('p');
res1.textContent = 'data1: ' + (compareObjs(data1, data1Out) ? 'Pass' : 'Fail');

const res2 = document.createElement('p');
res2.textContent = 'data2: ' + (compareObjs(data2, data2Out) ? 'Pass' : 'Fail');

resDom.appendChild(res1);
resDom.appendChild(res2);


function compareObjs(a,b) {
    if(Object.keys(a).length!== Object.keys(b).length) {
        return false;
    }

    for(const key in a) {
        if(a[key]!==b[key]) {
            return false;
        }
    }
    return true;
}
