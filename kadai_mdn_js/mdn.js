const today = new Date();
const[year,month,day] = [today.getFullYear(), today.getUTCMonth(), today.getDate()]

console.log(year + '年' + (month + 1) + '月' + day + '日');