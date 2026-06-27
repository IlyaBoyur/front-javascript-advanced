'use strict';
/* 
Сделать приложение, которое в браузере выводит таймер реального времени,
который показывает сколько осталось до нового года в формате:

10 месяцев, 5 дней, 10 часов, 6 минут, 5 секунд
*/
const page = {
    header: document.querySelector('.header'),
    main: document.querySelector('.main')
}
const NEXT_YEAR_DATE = new Date((new Date()).getFullYear() + 1,0,1,0,0,0,0);
const NEXT_YEAR = NEXT_YEAR_DATE.getFullYear();


/* utils */
function getDuration(unixTimestamp) {
  const date = new Date(unixTimestamp);
  return {
    months: date.getMonth(),
    days: date.getDate() - 1,
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  };
}


function showUntilNewYear() {
    const diff = NEXT_YEAR_DATE.getTime() - (new Date()).getTime();
    const duration = getDuration(diff);
    const formatter = new Intl.DurationFormat('ru-RU', { style: 'long' });
    const result = formatter.format(duration);
    page.main.textContent = result;
}


/* renders */
function render() {
    page.header.textContent = `До Нового ${NEXT_YEAR} Года осталось:`
}



/* main */
(function() {
    render();
    setInterval(showUntilNewYear, 1000);
})();