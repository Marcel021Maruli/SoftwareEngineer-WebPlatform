import { ALPHABET_AND_SPACE_MORE_THAN_THREE_LETTER } from "../constants/regex.constant";
import { uppercase } from "../utilities/uppercase.util";

export const pokemonNameValidator = (data, nickname) => {
  const uppercaseNickname = uppercase(nickname);
  const filteringMyPokemon = data.filter(
    (result) => result.nickname === uppercaseNickname,
  );
  const matchNickname =
    ALPHABET_AND_SPACE_MORE_THAN_THREE_LETTER.test(uppercaseNickname);
  return matchNickname && filteringMyPokemon.length === 0;
};
