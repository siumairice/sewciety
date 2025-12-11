import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

/**
 * Hero Section schema object for the SEWCIETY landing page hero.
 * Learn more: https://www.sanity.io/docs/object-type
 */

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading (e.g., "JOIN THE CLUB")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description text below the heading',
    }),
    defineField({
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the call-to-action button',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Button Link',
      type: 'link',
      description: 'Link for the call-to-action button',
    }),
    defineField({
      name: 'illustration',
      title: 'Illustration',
      type: 'image',
      description: 'Duck illustration or hero image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'artCredits',
      title: 'Art Credits',
      type: 'string',
      description: 'Credit for the illustration (e.g., "art credits: yujin bae")',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'illustration',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled Hero Section',
        subtitle: 'Hero Section',
      }
    },
  },
})

