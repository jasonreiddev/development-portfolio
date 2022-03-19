import { MdBusiness as icon } from 'react-icons/md'

export default{
    name: 'organisation',
    title: 'Organisation',
    type: 'document',
    icon,
    fields: [
        {
            name: 'organisation',
            title: 'Organisation',
            type: 'string',
            description: 'What is the Organisation Name?',
        },
        {
            name: 'currentEmployer',
            title: 'Current Employer',
            type: 'boolean',
            description: 'Are you currently employed by this organisation?',
            options: {
                layout: 'checkbox',
            }
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            description: 'Slug to navigate to this page',
            options: {
                source: 'organisation',
                maxLength: 100,
            },
        },
    ],
    preview: {
        select: {
            organisation: 'organisation',
            currentEmployer: 'currentEmployer',
        },
        prepare: fields => ({
            title: `${fields.currentEmployer ? '⭐':''} ${fields.organisation}`
        })
    }
}