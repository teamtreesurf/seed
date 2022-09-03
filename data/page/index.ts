
export type PageMetadataType = {
  tab: string | ((props: any) => string)
  note?: string | ((props: any) => string)
  tags?: Array<string> | ((props: any) => Array<string>)
}

const PAGE: Record<string, PageMetadataType> = {
  '/': {
    tab: `Tree Surf`,
    note: `Key cliff notes about the universe.`
  },
  '/human/:id': {
    tab: ({ name }) => `${name} @ Tree Surf`,
    note: ({ name }) => `Key facts about ${name}`
  },
  '/human/of/:place': {
    tab: ({ place }) => `People from ${place} @ Tree Surf`,
    note: ({ place }) => `Key facts about people from ${place}`
  },
  '/organism/:id': {
    tab: ({ name }) => `${name} @ Tree Surf`,
    note: ({ name }) => `Key facts about ${name}`
  },
  '/atom/:id': {
    tab: ({ name }) => `${name} @ Tree Surf`,
    note: ({ name }) => `Key facts about ${name}`
  }
}

export default PAGE
