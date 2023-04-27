// ANAKAGRAMS
// GIVEN TWO STRINGS, CHECK WHETHER THE VALUES IN STR1 IS IN STR2
function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    if (lookup[letter] > 1) {
      lookup[letter]++;
    } else {
      lookup[letter] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
        // lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter]--;
    }
  }

  return true;
}

console.log(anagram("samuel", "muleas"));
