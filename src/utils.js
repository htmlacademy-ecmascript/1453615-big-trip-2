import dayjs from 'dayjs';

const DateFormat = {
  ISO_DATE: 'YYYY-MM-DD',
  SHORT_DATE: 'MMM DD',
  ISO_DATETIME: 'YYYY-MM-DDTHH:mm',
  TIME: 'HH:mm',
  COMPACT_DATETIME: 'YY/MM/DD HH:mm'
};

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const dateFormatters = {
  toISODate: (date) => dayjs(date).format(DateFormat.ISO_DATE),
  toShortDate: (date) => dayjs(date).format(DateFormat.SHORT_DATE),
  toISODateTime: (date) => dayjs(date).format(DateFormat.ISO_DATETIME),
  toTime: (date) => dayjs(date).format(DateFormat.TIME),
  toCompactDateTime: (date) => dayjs(date).format(DateFormat.COMPACT_DATETIME)
};

function formatTimeDuration(start, end) {
  const dateFrom = dayjs(start);
  const dateTo = dayjs(end);

  const diffMs = dateTo.diff(dateFrom);
  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const totalHours = Math.floor(totalMinutes / 60);

  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;

  const formatUnit = (value, unit) => value.toString().padStart(2, '0') + unit;

  if (days > 0) {
    return `${formatUnit(days, 'D')} ${formatUnit(hours, 'H')} ${formatUnit(minutes, 'M')}`;
  } else if (totalHours > 0) {
    return `${formatUnit(hours, 'H')} ${formatUnit(minutes, 'M')}`;
  } else {
    return `${formatUnit(minutes, 'M')}`;
  }
}


export {getRandomArrayElement, dateFormatters, formatTimeDuration};
