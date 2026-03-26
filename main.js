function pyramid(character, rowCount, inverted) {
  const rows = [];

  for (let i = 1; i <= rowCount; i++) {
    // No trailing spaces — only leading spaces + characters
    const row = " ".repeat(rowCount - i) + character.repeat(2 * i - 1);
    rows.push(row);
  }

  // Reverse after building if inverted (vertex points down)
  if (inverted) rows.reverse();

  // Wrap with leading and trailing newline (requirement 9)
  return "\n" + rows.join("\n") + "\n";
}

// Usage examples
console.log(pyramid("#", 5, false)); // Upright
console.log(pyramid("*", 3, true));  // Inverted
console.log(pyramid("o", 4, false));
