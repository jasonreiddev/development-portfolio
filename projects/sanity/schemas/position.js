import { MdWork as icon } from 'react-icons/md'
import SalaryInput from '../components/SalaryInput'

export default{
    name: 'position',
    title: 'Position',
    type: 'document',
    icon,
    fields: [
        {
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string',
            description: 'What is the Job Title?',
        },
        {
            name: 'organisation',
            title: 'Organisation',
            type: 'reference',
            to: [{type:'organisation'}],
            description: 'What is the Organisation Name?',
        },
        {
            name: 'currentJob',
            title: 'Current Job',
            type: 'boolean',
            description: 'Are you currently employed by this organisation?',
            options: {
                layout: 'checkbox',
            }
        },
        {
            name: 'hideOnEmployment',
            title: 'Hide on Employment',
            type: 'boolean',
            description: 'Hide in the employmernt page of gatsby site',
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
                source: 'jobTitle',
                maxLength: 100,
            },
        },
        {
            name: 'salary',
            title: 'Salary',
            type: 'number',
            description: 'Salary (max during time employed)',
            inputComponent: SalaryInput,
        },
        {
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            options: {
              dateFormat: 'YYYY-MM',
              calendarTodayLabel: 'Today',
            }
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            options: {
              dateFormat: 'YYYY-MM',
              calendarTodayLabel: 'Today',
            }
        },
        {
            name: 'details',
            title: 'Details',
            type: 'text',
            description: 'Details about the position',
        },
    ],
    preview: {
        select: {
            jobTitle: 'jobTitle',
            currentJob: 'currentJob',
            organisation: 'organisation.organisation',
        },
        prepare: fields => ({
            title: `${fields.currentJob ? '⭐':''} ${fields.jobTitle} - ${fields.organisation}`
        })
    }
}