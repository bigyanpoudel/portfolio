export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'project',
      title: 'Project',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'website',
      title: 'Website',
      type: 'string',
    },
    {
      name: 'github',
      title: 'Github',
      type: 'string',
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
