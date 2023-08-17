import Person from './models/Person';

const defaultPerson = new Person({
    firstName: 'First Name',
    lastName: 'Last Name',
    email: '@gmail.com',
    cellphone: '+64 000 000 000',
    location: '',
    searchingFor: 'Front End',
    links: [
        {
            name: 'Github',
            value: 'https://github.com/madison890000'
        },
        {
            name: 'LinkedIn',
            value: 'https://www.linkedin.com/in/madison-ma-800657237/'
        }
    ],
    descriptions: [
        '这是你展示自己的基本情况的地方，尽力说明你的职业发展情况，你的想法，以及你的一些需要对方注意的信息，例如Visa的状态',
    ],
    educations: [
        {
            major: 'major',
            college: 'college',
            degree: 'BACHELOR',
            start: '2018-09-01T00:00:00Z',
            end: '2022-07-01T00:00:00Z'
        }
    ],
    skills: [
        {name: 'React', ages: 6, importance: 0},
        {name: 'TypeScript', ages: 4, importance: 0},
    ],
    periods: [
        {
            start: '2021-01-01T00:00:00Z',
            end: '2022-01-01T00:00:00Z',
            company: '公司名称',
            keywords: ['公司的关键词', '行业', '规模'],
            jobPosition: '岗位名称',
            jobSummaries: [
                '具体职责1',
                '具体职责2',
                '具体职责3'
            ],
            projects: [{
                name: 'Customer Portal',
                start: '2022-05-23T00:00:00Z',
                keywords: ['React', 'Mobile Web', 'Survey'],
                achievements: [
                    {
                        text: '你在项目中做出的值得骄傲的成就，或者该项目的非技术方案的成就，让对方更清楚的了解这个项目',
                        categories: ['性能优化']
                    },
                    {
                        text: 'optimized the Front-End code',
                        categories: ['Performance']
                    }
                ],
                descriptions:
                    "This is Tesla's client-side web application for potential and existing customers in China. It mainly includes questionnaires, surveys, article recommendations, and account management. The project has been running for about 2 years before I joined, during which some known and unresolved issues have been identified."
                ,
                challengeAndSolutions: [
                    {
                        challenge:
                            '在项目的中你遇到的困难.',
                        solution:
                            '你们的解决方案是什么，你担任了什么样的角色.'
                    }
                ]
            }],
            achievements: [],
            descriptions:
                "尽力精炼的说明你的岗位职责和具体负责的事情."
        },
    ]
});
export default defaultPerson;
