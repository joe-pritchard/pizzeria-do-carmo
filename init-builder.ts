import Hero from '~/components/Hero.vue'
import Testimonials from '~/components/Testimonials.vue'
import ContactSection from '~/components/ContactSection.vue'

export const registeredComponents = [
    {
        component: Hero,
        name: 'Hero',
        inputs: [
            {
                name: 'image',
                type: 'file',
                allowedFileTypes: ['jpeg', 'png'],
            },
            {
                name: 'headline',
                type: 'string',
            },
            {
                name: 'subheadline',
                type: 'string',
            },
        ],
    },
    {
        component: Testimonials,
        name: 'testimonials',
        inputs: [
            {
                type: 'list',
                name: 'testimonials',
                subFields: [
                    {
                        name: 'rating',
                        type: 'number',
                        enum: [1, 2, 3, 4, 5],
                        helperText: 'A star rating for the review',
                    },
                    {
                        name: 'quote',
                        type: 'longText',
                    },
                    {
                        name: 'name',
                        type: 'string',
                        helperText: 'The name of the person who gave the review',
                    },
                    {
                        name: 'location',
                        type: 'string',
                        helperText: "The reviewer's location or any other subtitle shown below their name",
                    },
                ],
            },
        ],
    },
    {
        component: ContactSection,
        name: 'Contact section',
        inputs: [
            {
                name: 'content',
                type: 'longText',
                helpText: 'The blurb for the contact form',
            },
            {
                name: 'address',
                type: 'richText',
            },
            {
                name: 'phoneNumber',
                type: 'text',
            },
            {
                name: 'email',
                type: 'email',
            },
        ],
    },
]
