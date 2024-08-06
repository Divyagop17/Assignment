
var array1 = [3, 4, 6, 4, 2, 3, 4, 5, 6, 7, 4, 6, 4];

var f = 1;
var m = 0;
var nm;

for (var i = 0; i < array1.length; i++) {
    
    for (var j = i; j < array1.length; j++) {
        if (array1[i] == array1[j])
            m++;
        if (f < m) {
            f = m;
            nm = array1[i];
        }
    }
    m = 0;
}

console.log('Most frequent number of an array is ' + nm );