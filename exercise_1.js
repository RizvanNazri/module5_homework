let n = prompt('Введите число');
let num = +n;

if (typeof num == 'number' && !isNaN(num)) {
    console.log(typeof num);
    if(num === 0) {
        console.log('Zero')
    }
    else if(num % 2 === 0) {
        console.log('Чётное')
    } else  {
        console.log('Нечётное')
    }
} else {
    console.log('Упс, кажется Вы ошиблись');
}