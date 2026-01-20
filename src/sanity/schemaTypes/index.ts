import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import contact from './contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, contact],
}