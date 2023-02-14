let yearStr = prompt('Введите год');
let year = Number(yearStr);

function leapYear() {
    if ((year % 4 === 0 && year % 100 === 0 && year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        alert(`${year} год - високосный (366 дней).`);
    } else {
        alert(`${year} год - не високосный (у него 365 дней).`);
    }
}
leapYear();