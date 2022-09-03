
const table = [
  [
    { k: 'manner' },
    { k: 'front unrounded' },
    { k: 'front rounded' },
    { k: 'front central unrounded' },
    { k: 'front central rounded' },
    { k: 'central unrounded' },
    { k: 'central rounded' },
    { k: 'back central unrounded' },
    { k: 'back central rounded' },
    { k: 'back unrounded' },
    { k: 'back rounded' },
  ],
  [
    { k: 'close' },
    { k: 'i', v: 'i' },
    { k: 'y', v: 'i#' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: 'ɨ', v: 'i#' },
    { k: 'ʉ', v: 'u' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: 'ɯ', v: 'O' },
    { k: 'u', v: 'u' },
  ],
  [
    { k: 'near-close' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: 'ɪ', v: 'I' },
    { k: 'ʏ', v: 'i#' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: 'ʊ', v: 'O' },
    { k: '', v: '' },
    { k: '', v: '' },
  ],
  [
    { k: 'close-mid' },
    { k: 'e', v: 'e' },
    { k: 'ø', v: 'e#' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: 'ɘ', v: 'U' },
    { k: 'ɵ', v: 'U' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: 'ɤ', v: 'O' },
    { k: 'o', v: 'o' },
  ],
  [
    { k: 'mid' },
    { k: 'e̞', v: 'e' },
    { k: 'ø̞', v: 'e#' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: 'ə', v: 'U' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: 'ɤ̞', v: 'O' },
    { k: 'o̞', v: 'o' },
  ],
  [
    { k: 'open-mid' },
    { k: 'ɛ', v: 'E' },
    { k: 'œ', v: 'a#' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: 'ɜ', v: 'U' },
    { k: 'ɞ', v: 'U' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: 'ʌ', v: 'U' },
    { k: 'ɔ', v: 'o#' },
  ],
  [
    { k: 'near-open' },
    { k: 'æ', v: 'A' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: 'ɐ', v: 'a' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: '', v: '' },
  ],
  [
    { k: 'open' },
    { k: 'a', v: 'a' },
    { k: 'ɶ', v: 'a#' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: 'ä', v: 'a' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: '', v: '' },
    { k: 'ɑ', v: 'a' },
    { k: 'ɒ', v: 'a' },
  ]
]

let i = 1
while (i < table.length) {
  let row = table[i]
  let nasalRow = [{ k: row[0].k + ' nasal' }].concat(row.slice(1).map(({ k, v }) => ({
    k: `${k}\u0303`,
    v: `${v}&`
  })))
  table.splice(i + 1, 0, nasalRow)
  i += 2
}

export default table
