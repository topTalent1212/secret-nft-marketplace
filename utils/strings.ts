function toFixed(num: Number, fixed: number) {
  if (!num) {
    return null;
  }
  const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
  return (<any>num).toString().match(re)[0];
}

export function validateEmail(mail: string){
  const mailRegEx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
  return mail.match(mailRegEx)
}

export function validateTwitter(twitterName: string){
  const twitterNameRegEx = /^@[a-zA-Z0-9_]/
  return twitterName.match(twitterNameRegEx)
}

export function validateUrl(url: string){
  const urlRegEx = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
  return url.match(urlRegEx)
}

export function computeValue(n: number) {
  if (typeof n !== 'number') {
    return (<any>n).toString();
  }
  if (n < 1e4) {
    return n.toString();
  }
  if (n < 1e5) {
    n = n / 1000;
    return (Math.trunc(n * 10) / 10).toString() + 'k';
  }
  if (n < 1e6) {
    n = n / 1000;
    return Math.floor(n).toString() + 'k';
  }
  if (n < 1e8) {
    n = n / 1000000;
    return (Math.trunc(n * 10) / 10).toString() + 'M';
  }
  if (n < 1e9) {
    n = n / 1000000;
    return Math.floor(n).toString() + 'M';
  }
}

export function computeCaps(n: number, decimals: number = 4) {
  if (typeof n !== 'number') {
    return (<any>n).toString();
  }
  n = n / 1000000000000000000;
  if (n < 1e4) {
    return Number(toFixed(n, decimals)).toString();
  }
  if (n < 1e6) {
    return Number(toFixed(n / 1e3, decimals)).toString() + 'k';
  }
  if (n < 1e9) {
    return Number(toFixed(n / 1e6, decimals)).toString() + 'M';
  }
  if (n < 1e12) {
    return Number(toFixed(n / 1e9, decimals)).toString() + 'B';
  }
  if (n < 1e15) {
    return Number(toFixed(n / 1e12, decimals)).toString() + 'T';
  }
  if (n < 1e18) {
    return Number(toFixed(n / 1e15, decimals)).toString() + 'P';
  }
  if (n < 1e21) {
    return Number(toFixed(n / 1e18, decimals)).toString() + 'E';
  }
  return Number(n).toString();
}

export function computeTiime(n: number, decimals: number = 4) {
  if (typeof n !== 'number') {
    return (<any>n).toString();
  }
  n = n / 1000000000000000000;
  if (n < 1e4) {
    return Number(toFixed(n, decimals)).toString();
  }
  if (n < 1e6) {
    return Number(toFixed(n / 1e3, decimals)).toString() + 'k';
  }
  if (n < 1e9) {
    return Number(toFixed(n / 1e6, decimals)).toString() + 'M';
  }
  if (n < 1e12) {
    return Number(toFixed(n / 1e9, decimals)).toString() + 'B';
  }
  if (n < 1e15) {
    return Number(toFixed(n / 1e12, decimals)).toString() + 'T';
  }
  if (n < 1e18) {
    return Number(toFixed(n / 1e15, decimals)).toString() + 'P';
  }
  if (n < 1e21) {
    return Number(toFixed(n / 1e18, decimals)).toString() + 'E';
  }
  return Number(n).toString();
}

export function middleEllipsis(s: string, n: number = 10): string {
  if (s.length < n) return s;
  const start = s.slice(0, n / 2 - 1);
  const end = s.slice(-(n / 2 - 2));
  return start + '...' + end;
}

export const removeURLSlash = (url: string) => {
  if (url.length === 0) return url
  const lastChar = url.charAt(url.length -1)
  if (lastChar === "/"){
      return url.slice(0, -1)
  }else{
      return url
  }
}

export const formatDate = (d: Date) => {
  //eg 06/08/2021, 13:21
  const day = d.getDate()
  const month = d.getMonth() + 1
  const year = d.getFullYear()
  const hours = d.getHours()
  const minutes = d.getMinutes()
  const formatVal = (val: number) => val < 10 ? `0${val}` : val
  return `${formatVal(day)}/${formatVal(month)}/${formatVal(year)}, ${formatVal(hours)}:${formatVal(minutes)}`
}

export const formatPrice = (n: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(n);
}