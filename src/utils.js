import dayjs from 'dayjs';

const DateFormat = {
  ISO_DATE: 'YYYY-MM-DD',
  SHORT_DATE: 'MMM DD',
  ISO_DATETIME: 'YYYY-MM-DDTHH:mm',
  TIME: 'HH:mm'
};

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const dateFormatters = {
  toISODate: (date) => dayjs(date).format(DateFormat.ISO_DATE),
  toShortDate: (date) => dayjs(date).format(DateFormat.SHORT_DATE),
  toISODateTime: (date) => dayjs(date).format(DateFormat.ISO_DATETIME),
  toTime: (date) => dayjs(date).format(DateFormat.TIME)
};

export {getRandomArrayElement, dateFormatters};
