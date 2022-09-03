
import iso3LangsBase from './iso3-lang.json'
import iso2Map from './iso2-lang.json'

const iso3Langs = iso3LangsBase
  .reduce((m: any, x: any) => {
    m[x.name] = {
      name: x.name,
      iso3: x.code
    }
    return m
  })

const iso2List = Object.keys(iso2Map)
  .map(key => {
    const d = (iso2Map as Record<string, any>)[key]
    const data = {
      slug: key,
      iso2: key,
      title: d.int[0],
      native_title: d.native[0],
    }
    return data
  })

module.exports = iso2List
