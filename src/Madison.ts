import Person from './models/Person';

const madison = new Person({
    firstName: 'Madison(Zusheng)',
    lastName: 'Ma',
    email: 'madison.sss.ma@gmail.com',
    cellphone: '+64 027 229 1141',
    location: 'Auckland City, New Zealand',
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
        'I have accumulated 8 years of experience working in the IT industry, building a strong technical foundation. I possess extensive knowledge and skill in modern JavaScript and TypeScript programming frameworks, tools, and libraries.',
        'I have a wealth of experience in both front-end and back-end development. Specifically, I have worked on projects involving the development of admin portals and customer portals in an e-commerce system, web-based finance systems (such as invoicing systems), supporting systems, single-page applications (SPAs), and more.',
        'I have expertise in both team leadership and working collaboratively as a team member, allowing me to excel in both roles.' +
        'I am passionate about life and approachable, fostering friendly and positive relationships with people. I am always willing to share my knowledge and experiences with others, and I strive to work with colleagues who share a common goal of making the world a better place.'
    ],
    educations: [
        {
            major: 'Resources and Environment',
            college: 'China Agricultural University',
            degree: 'BACHELOR',
            start: '2008-09-01T00:00:00Z',
            end: '2012-07-01T00:00:00Z'
        }, {
            major: 'Land Utilization and Information Technology',
            college: 'China Agricultural University',
            degree: "MASTER",
            start: '2012-09-01T00:00:00Z',
            end: '2015-07-01T00:00:00Z'
        }
    ],
    skills: [
        {name: 'React', ages: 6, importance: 0},
        {name: 'TypeScript', ages: 4, importance: 0},
        {name: 'JavaScript', ages: 8, importance: 0},
        {name: 'Redux/MobX', ages: 4, importance: 0},
        {name: 'HTML & CSS', ages: 8, importance: 0},
        {name: 'GIT', ages: 8, importance: 0},
        {name: 'Jest', ages: 4, importance: 0},
        {name: 'Node', ages: 2, importance: 1},
        {name: 'Java', ages: 3, importance: 1},
        {name: 'Vue', ages: 1.5, importance: 1},
        {name: 'Database/SQL', ages: 1.5, importance: 1},
        {name: 'Electron', ages: 1, importance: 1},
        {name: 'Docker', ages: 0.5, importance: 1},
        {name: 'C#', ages: 0.5, importance: 1},
    ],
    periods: [
        {
            start: '2022-05-23T00:00:00Z',
            end: '2023-06-26T00:00:00Z',
            company: 'Tesla',
            keywords: ['Motor', 'Agile', 'JIRA'],
            jobPosition: 'Front-End Engineer',
            jobSummaries: [
                'Core developer in Front-End team',
                'Improve the code quality and performance',
                'Provide training and guidance on technical'
            ],
            projects: [{
                name: 'Customer Portal',
                start: '2022-05-23T00:00:00Z',
                keywords: ['React', 'Mobile Web', 'Survey'],
                achievements: [
                    {
                        text: 'optimized the Front-End code',
                        categories: ['Performance']
                    },
                    {
                        text: 'completed the design and development of common utils and Hooks in React project',
                        categories: ['Engineering']
                    },
                    {
                        text: 'improved test code coverage',
                        categories: ['Unit tests']
                    }
                ],
                descriptions:
                    "This is Tesla's client-side web application for potential and existing customers in China. It mainly includes questionnaires, surveys, article recommendations, and account management. The project has been running for about 2 years before I joined, during which some known and unresolved issues have been identified."
                ,
                challengeAndSolutions: [
                    {
                        challenge:
                            'The UI and form library versions used in this project are outdated, which means they contain unfixed bugs. It is necessary to upgrade them, but we are concerned about the possibility of introducing new bugs to the live system during the process.',
                        solution:
                            'We spent a week unifying the import methods for the UI and form libraries (from various sources to one file). We also manually resolved compatibility issues with the upgraded version, functioning as an adapter, in order to minimize the occurrence of destructive bugs.'
                    },
                    {
                        challenge:
                            'In the early days of the project, we used a full-featured (but heavy) front-end architecture. However, it proved to be restrictive and lacking in scalability. As a result, we faced challenges in upgrading versions of react, react router, and other dependencies.',
                        solution:
                            'We rewrote the webpack configuration file, completely abandoning the original front-end framework within 2 weeks. We identified alternatives for inapplicable modules and successfully upgraded react 18 and react router v6. Now, we have full control over the entire configuration.'
                    },
                    {
                        challenge:
                            'The code quality of the project is difficult to assess, and there is currently no automated inspection process in place. As a consequence, many of our online bugs depend on user feedback and are not discovered in a timely and proactive manner.',
                        solution:
                            "I integrated Sentry and SonarQube into the project's stage environment. Sentry helps us identify known errors in the project before users and QA colleagues encounter them. SonarQube helps us identify potential oversights and code irregularities prior to merging the code."
                    }
                ]
            }, {
                name: 'Admin Portal',
                start: '2022-05-23T00:00:00Z',
                keywords: ['React'],
                achievements: [],
                descriptions:
                    'This is the administrative management portal corresponding to the customer portal. ' +
                    "It is a system built for Tesla's operators to manage related forms, articles, and push notifications on a daily basis." +
                    'I joined the project after it had been running for about 2 years, during which some known and unresolved issues have been identified.'
                ,
                challengeAndSolutions: [
                    {
                        challenge:
                            'Most of the data on the admin side has a strong structure type. Although we use typescript to help us correct the wrong type during development, it still cannot guarantee the standardization of the back-end data.',
                        solution:
                            'We created and improved the definition of data models, and performed default assignment and type checking during initialization to ensure that the data in the entire life cycle conforms to the type definition from the source of the data, reducing abnormal problems caused by data.'
                    },
                    {
                        challenge:
                            'The current questionnaire editing function has performance problems when the data length is too large.',
                        solution:
                            'I spent 2 weeks refactoring the entire survey editing module, improving the way data is updated, optimizing the update range of React Context, and using react memo to reduce unnecessary rendering as much as possible.'
                    }
                ]
            }],
            achievements: [],
            descriptions:
                "At Tesla, my main responsibility is to ensure the smooth and continuous development of two web projects. This entails upgrading the existing architecture and incorporating special business components into Tesla's UI specifically for the Chinese market."
        },
        {
            start: '2019-09-01T00:00:00Z',
            end: '2022-05-01T00:00:00Z',
            company: 'PCCW GLOBAL',
            keywords: ['Telecommunications', 'Agile', 'JIRA'],
            jobPosition: 'Front-End Engineer',
            jobSummaries: [
                'Conduct functional research and validation based on business requirements, evaluate the feasibility of implementing the requirements, and propose solutions.',
                'Responsible for assigning tasks and explaining project requirements to five external team members.'
            ],
            projects: [{
                name: 'Customer Portal',
                start: '2019-09-01T00:00:00Z',
                end: '2022-05-01T00:00:00Z',
                keywords: ['React', 'NextJs', 'TDD', 'Invoice'],
                achievements: [
                    {
                        text: 'defined the Best practices in FE project with React and Typescript.',
                        categories: ['Architecture']
                    },
                    {
                        text: 'setup the Front-End CI/CD with system Engineers, including the Docker building and the jest process',
                        categories: ['CI/CD', 'Engineering']
                    }
                ],
                descriptions:
                    "This is a portal for PCCW Global's partner companies and regular users. You can purchase ports, connections, data centers, and VMs on this portal. It allows you to view details and check invoices." +
                    'Furthermore, this system also supports partners to upload and develop their own SDKs, thereby presenting us with new challenges.'
                ,
                challengeAndSolutions: [
                    {
                        challenge:
                            'The front-end architecture we chose in the early days did not support runtime environment variables, which caused a lot of trouble in our project.',
                        solution:
                            "Based on our company's environment configuration strategies, we have updated the build progress of the production environment and created an internal npm script to perform rebuild operations related to variables when the environment variables in the production environment are updated. We have implemented runtime environment variables in our own way."
                    },
                    {
                        challenge:
                            'As we support customized SDK, we need to provide a code editor in this portal that allows customers to edit and modify code themselves, while also implementing version control.',
                        solution:
                            'After researching popular open source WebIDEs, we finally chose a project that is most suitable for us, and added some extended functions for better usability.'
                    }
                ]
            }, {
                name: 'Admin Portal',
                start: '2019-09-01T00:00:00Z',
                end: '2022-05-01T00:00:00Z',
                keywords: ['React', 'Port', 'Connection', 'Data Center'],
                achievements: [
                    {
                        text: "Designed and developed low-code form modules to improve the company's efficiency in custom dynamic form releases",
                        categories: ['low-code']
                    },
                    {
                        text: 'used Micro Front-End Service to split code and improve the performance in FE',
                        categories: ['Performance', 'Engineering']
                    },
                    {
                        text: "designed and developed the company's Front-End UI component library",
                        categories: ['UI']
                    },
                    {
                        text: 'setup the utils library in FE',
                        categories: ['Engineering']
                    }
                ],
                descriptions:
                    "This is a front-end portal built from scratch. Its main purpose is to replace the company's original portal. Over the past 3 years, we have undertaken a significant migration effort, involving code refactoring based on existing business logic and the addition of numerous new functions not supported by the old portal. Naturally, we encountered various challenges throughout this process."
                ,
                challengeAndSolutions: [
                    {
                        challenge:
                            'To expedite the building of CRUD operations in the early stages of the project, and to facilitate swift testing of the data connection capabilities of the new portal, we need to determine the most efficient method.',
                        solution:
                            'We chose a highly efficient front-end scaffolding framework, which saved us a substantial amount of unnecessary development costs during the initial phase. Additionally, we developed a front-end CRUD template, enabling us to significantly reduce redundant code.'
                    },
                    {
                        challenge:
                            "There are numerous functionalities that need to be integrated into the project, and multiple vendor teams are working in parallel. How can we ensure that the code quality of the project doesn't deteriorate and that subsequent continuous development isn't affected after the team handover?",
                        solution:
                            'After an unsatisfactory project handover, we conducted an investigation into micro front-end service technology and ultimately implemented it in the project. By leveraging this technology, we are able to divide the code into separate code repositories based on modules and utilize different front-end technologies in various locations. This approach allows for independent updates to be made at any time without impacting other modules.'
                    },
                    {
                        challenge:
                            'We need to integrate online products from various providers and display them on our own portal. However, their interfaces lack standardization. How can we utilize a module to easily integrate all services, ensuring that products are displayed and orders can be placed normally?',
                        solution:
                            'We use a self-developed dynamic form module to efficiently and conveniently define basic and advanced form types. This module includes the API address and data type of the drop-down options. The final online form is generated through front-end drag-and-drop configuration, making it incredibly easy to operate and modify. Users do not need to have any coding knowledge.'
                    }
                ]
            }],
            achievements: [],
            descriptions: 'My main job at PCCW Global is to build two web applications: the admin portal and the customer portal. I also integrate some MVP features into these portals and hand them over to the market for verification.'
        },
        {
            start: '2018-04-01T00:00:00Z',
            end: '2019-06-01T00:00:00Z',
            company: 'Citic Baixin Bank Co. Ltd',
            keywords: ['Bank', 'Waterfall'],
            jobPosition: 'Front-End Engineer',
            projects: [{
                name: 'Customer Portal',
                start: '2018-04-01T00:00:00Z',
                end: '2019-06-01T00:00:00Z',
                keywords: ['Vue', 'Web Component', 'Mobile'],
                achievements: [],
                descriptions:
                    'This mobile web application caters to potential and existing customers of the company. It primarily focuses on advertising campaigns and facilitates tasks such as account opening and personal loan applications for users.'
                ,
                challengeAndSolutions: [
                    {
                        challenge:
                            "Our front-end components are required to run in various environments simultaneously, including our company's website and our partner's website. Therefore, we need to support different front-end technology stacks.",
                        solution:
                            'At that time, we utilized the innovative web component 3.0 to build our foundational components and address the challenge of cross-technology stacks.'
                    }
                ]
            }, {
                name: 'Admin Portal',
                start: '2019-02-01T00:00:00Z',
                end: '2019-06-01T00:00:00Z',
                keywords: ['Vue', 'EChart'],
                achievements: [],
                descriptions:
                    "This is an internal web page used by the company's operations, which can display real-time and historical data in graphs."
                ,
                challengeAndSolutions: [
                    {
                        challenge: 'How can we ensure timely data updates?',
                        solution: 'We utilize WebSocket technology for real-time data push'
                    }
                ]
            }],
            jobSummaries: [
                'responsible for task assignment and project requirement explanation to 5 team members',
                'provide training and guidance on technical to junior engineer'
            ],
            achievements: [],
            descriptions:
                'My main responsibility at Citic Baixin Bank is to collaborate with my colleagues in the development of several front-end projects, utilizing different technology stacks such as Vue and React.'

        },
        {
            start: '2016-07-01T00:00:00Z',
            end: '2018-03-01T00:00:00Z',
            company: 'Yinyuan Asia-pacific Technology Co. Ltd ',
            keywords: ['e-commerce', 'Waterfall'],
            jobPosition: 'Software Engineer',
            jobSummaries: [
                'participate in the design and development of all projects ',
                'responsible for the release quality of all system',
                "responsible for team's recruitment, technical training(ES6), etc",
                'take charge of annual feature planning and appraise performance of each team member'
            ],
            projects: [{
                name: 'Customer Portal',
                start: '2016-07-01T00:00:00Z',
                end: '2018-03-01T00:00:00Z',
                keywords: ['Java', 'jQuery', 'Mobile'],
                achievements: [
                    {
                        text: "completed the design and development of the company's Front-End UI component library",
                        categories: ['UI']
                    }
                ],
                descriptions:
                    'This is an online shopping website that offers common functionalities such as product browsing, adding items to the shopping cart, and online payment processing.'
                ,
                challengeAndSolutions: [
                    {
                        challenge: 'There are several similar CRUD codes that need to be implemented in the backend interface.',
                        solution:
                            'I used shell scripts to enhance the development efficiency of CRUD (Create, Read, Update, Delete) classes.'
                    },
                    {
                        challenge:
                            'In the front-end, the concept of components is not present. As a result, the HTML code often includes a lot of duplication, as it is structured based on the logic of each individual page.',
                        solution:
                            'Our plugin technology, based on jQuery, effectively combines various commonly used form libraries. This approach significantly minimizes the need for repetitive code.'
                    }
                ]
            },
                {
                    name: 'Mobile App',
                    start: '2017-08-01T00:00:00Z',
                    end: '2018-03-01T00:00:00Z',
                    keywords: ['React Native', 'Mobile'],
                    achievements: [],
                    descriptions:
                        'This mobile app is designed to assist teachers and parents with various functions. It is capable of providing online course selection support, managing class appointments, and facilitating homework uploads, among other features.'
                    ,
                    challengeAndSolutions: [
                        {
                            challenge: 'React native has performance issues when rendering large lists of data.',
                            solution: 'We utilize virtual list technology to address the challenge of handling large volumes of data.'
                        }
                    ]
                }],
            achievements: [],
            descriptions:
                'I am responsible for developing API interfaces, creating front-end pages, and building Apps as part of my main role in the company.'

        },
        {
            start: '2015-07-01T00:00:00Z',
            end: '2016-07-01T00:00:00Z',
            company: 'Taiji Computer Corporation. Ltd',
            keywords: ['IT', 'Waterfall'],
            jobPosition: 'Software Engineer',
            jobSummaries: [
                'Using Java to develop a system according to the planned schedule.',
                'I have participated in the design and development of an economic data report project.'
            ],
            achievements: [
                {
                    text: 'used Spring-boot and Kendo-UI to build the the basic configuration of common project',
                    categories: ['Java']
                },
                {
                    text: 'abstracted 10+ components to unify UI style, including table, form input, file upload, etc',
                    categories: ['UI']
                }
            ],
            descriptions:
                'I primarily work on developing the backend interface using Java, and I use jQuery for front-end page development.'

        }
    ]
});
export default madison;
