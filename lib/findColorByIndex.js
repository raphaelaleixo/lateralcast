export const findColorByIndex = (index) => {
  let finalColor;
  switch (index % 5) {
    case 0:
      finalColor = "bg-emerald-100";
      break;
    case 1:
      finalColor = "bg-orange-100";
      break;
    case 2:
      finalColor = "bg-yellow-100";
      break;
    case 3:
      finalColor = "bg-pink-100";
      break;
    case 4:
      finalColor = "bg-purple-100";
      break;
  }
  return finalColor;
};
