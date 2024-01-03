export const getDataFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key)) || [];

const conNumToBn = (num) => {
  const digitToBn = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };

  return String(num)
    .split("")
    .map((digit) => digitToBn[digit])
    .join("");
};

const date = new Date().getFullYear();

console.log(conNumToBn(date));
