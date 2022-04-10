import { FIRST_LETTER } from "modules/constants/regex.constant";

export const capitalizeWord = (word) => {
  return word.replace(FIRST_LETTER, (letter) => letter.toUpperCase());
};

