// schemas/project.ts
const projectSchema = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Vector Illustration', value: 'vector' },
          { title: 'Social Media Poster', value: 'poster' },
          { title: 'Logo & Branding', value: 'branding' },
          { title: 'UI/UX Design', value: 'uiux' },
          { title: 'Packaging Design', value: 'packaging' },
          { title: 'Thumbnail Design', value: 'thumbnail' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}

export default projectSchema;