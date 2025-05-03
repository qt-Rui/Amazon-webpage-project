import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

const today = dayjs();

let daysLater = today.add(5, 'days');
const daysFormat = daysLater.format('MMMM D');

console.log(daysFormat);

const monthLater = today.add(1, 'months').format('MMMM D');
console.log(monthLater);

const monthBefore = today.subtract(1, 'months').format('MMMM D');
console.log(monthBefore);

const dayOfWeek = today.format('dddd');
console.log(dayOfWeek);

function isWeekend(date) {
    const dayOfWeek = date.format('dddd');

    return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

let date = dayjs().add(1, 'day');

console.log(date.format('dddd'));
console.log(isWeekend(date));