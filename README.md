# 🔺 Pyramid Generator

A lightweight JavaScript utility that generates text-based pyramids in the terminal. Supports any character, any height, and both upright and inverted orientations.

---

## ✨ Features

- **Custom character** — use any character or symbol to build the pyramid
- **Custom height** — specify the number of rows
- **Inverted mode** — flip the pyramid so the vertex points downward
- **Zero dependencies** — pure JavaScript, no packages required

---

## 🚀 Usage

```js
function pyramid(character, rowCount, inverted) {
  const rows = [];
  for (let i = 1; i <= rowCount; i++) {
    const row = " ".repeat(rowCount - i) + character.repeat(2 * i - 1);
    rows.push(row);
  }
  if (inverted) rows.reverse();
  return "\n" + rows.join("\n") + "\n";
}
```

### Parameters

| Parameter   | Type      | Description                                      |
|-------------|-----------|--------------------------------------------------|
| `character` | `string`  | The character used to build the pyramid          |
| `rowCount`  | `number`  | Number of rows (height of the pyramid)           |
| `inverted`  | `boolean` | If `true`, the pyramid is flipped upside down    |

### Returns

A `string` containing the pyramid, padded with a leading and trailing newline.

---

## 📦 Examples

```js
console.log(pyramid("#", 5, false)); // Upright
console.log(pyramid("*", 3, true));  // Inverted
console.log(pyramid("o", 4, false));
```

**Upright** — `pyramid("#", 5, false)`

```
    #
   ###
  #####
 #######
#########
```

**Inverted** — `pyramid("*", 3, true)`

```
*****
 ***
  *
```

**Custom character** — `pyramid("o", 4, false)`

```
   o
  ooo
 ooooo
ooooooo
```

---

## 🛠️ Getting Started

No installation needed. Just copy the function into any `.js` file and call it.

```bash
node your-file.js
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a pull request or submit an issue.
