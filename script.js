function indexOfIgnoreCase(s1, s2) {
  // Handle null inputs
  if (s1 === null || s2 === null) return -1;

  // Convert both strings to lowercase
  const str = s1.toLowerCase();
  const subStr = s2.toLowerCase();

  // Handle empty substring
  if (subStr === "") return 0;

  // Use indexOf
  return str.indexOf(subStr);
}

// Please do not change below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
