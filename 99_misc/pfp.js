let pfp = "ereh emoc uoy did yhw";

youllNeverGetIt = (str) => {
  str = str.split("").reverse().join("");
  return str;
};

console.log(youllNeverGetIt(pfp));
