
import fs from 'fs'
import YAML from 'yaml'
import { components } from '../../types/schema'

const LIST: Array<components['schemas']['flow']> =
  YAML.parse(fs.readFileSync(`${__dirname}/en.yaml`, 'utf-8'))

const COMPILED_LIST = LIST.map(flow => ({ ...flow, language: { slug: 'en' } }))

function t(text: string, script?: string) {
  return { text }
}

export default COMPILED_LIST
