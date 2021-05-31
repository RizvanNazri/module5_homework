const arr = [false, "false"];

for(let i = 0; i < arr.length - 1; i++){
    if (arr[i] !== arr[i + 1]) {
        console.log(false);
    }
    else {
        console.log(true);
    }
}