import Hero from '~/components/Hero.vue'

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
]
