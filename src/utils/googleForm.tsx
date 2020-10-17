export function sendNetworkLog(payload: any) {
  const { uid, timestamp, eventname, target, info } = payload;
  const formid = 'e/1FAIpQLSeU2vA7dhi0UKX1AHdyA2Wxxlqeh9PFqAGw-fbMxopdNX-JWg';
  const data = {
    'entry.1442720934': uid,
    'entry.1886377799': timestamp,
    'entry.552602046': eventname,
    'entry.493289674': target,
    'entry.707519246': info,
  };
  const params: Array<string> = [];
  Object.keys(data).forEach(key => {
    params.push(key + '=' + encodeURIComponent(data[key]));
  });

  // Submit the form using an image to avoid CORS warnings; warning may still happen, but log will be sent. Go check result in Google Form
  new Image().src =
    'https://docs.google.com/forms/d/' +
    formid +
    '/formResponse?' +
    params.join('&');
}
