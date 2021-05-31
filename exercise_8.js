let random = new Map();
random.set(false, "value1");
random.set(8, "value2");
random.set("some", 777);

for(let pair of random) {
    console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`);
}