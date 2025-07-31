const is_hotdog = require('./index');

const test_string_1 = "hot-dog";
console.log (test_string_1 + " = " + is_hotdog (test_string_1));

const test_string_2 = "pizza";
console.log (test_string_2 + " = " + is_hotdog (test_string_2));

const test_string_3 = "hot doggie";
console.log (test_string_3 + " = " + is_hotdog (test_string_3));