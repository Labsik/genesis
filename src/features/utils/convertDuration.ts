const padToTwoDigits = (num: number) => {
  return num.toString().padStart(2, "0");
};

export const convertDuration = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}`;
};
