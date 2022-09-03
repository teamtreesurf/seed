
import TABLE from './consonants'

const map = {}

TABLE.forEach(row => {
  row.forEach(({ k, v }) => {
    map[k] = v
  })
})

export default map
