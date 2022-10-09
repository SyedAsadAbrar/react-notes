export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) ) + min;

export const getCurrentDateAndTime =() => new Date().toLocaleDateString('en-pk', {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
});
