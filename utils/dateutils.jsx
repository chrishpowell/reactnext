//---------------------------------
//        DATE UTILS
//---------------------------------
//
// - Get name of month
Date.prototype.getMonthName = function(lang) {
  // Default language is English
  lang = lang || "en-GB";
  return this.toLocaleString(lang, { month: "long" });
};

//
// - Month into two numbers
export const separateNumberIntoUnits = n => {
  if (n === 0) return [0];

  var arr = [];
  var i = 1;

  while (n > 0) {
    arr.unshift((n % 10) * i);
    n = Math.floor(n / 10);
  }

  return arr;
};

//
// - DMY
export const getDateObj = lang => {
  let newDate = new Date();
  let dateObj = {
    day: newDate.getDate(),
    month: newDate.getMonthName(lang),
    year: newDate.getFullYear()
  };

  return dateObj;
};
