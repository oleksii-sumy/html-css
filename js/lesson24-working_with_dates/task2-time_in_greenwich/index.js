const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC', // час по грінвічу
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

export const getGreenwichTime = date => 
 formatter.format(date);

