import Person from './models/Person';
import Education from './models/Education';
import DataModel from './models/types';
import Period from './models/Period';
import Company from './models/Company';
import Skill from './models/Skill';
import Capability from './models/Capability';
import Project from './models/Project';

const madison = new Person({
    firstName: 'Madison(Zusheng)',
    lastName: 'Ma',
    birthDay: new Date('1989-10-25T00:00:00Z'),
    email: 'madison.sss.ma@gmail.com',
    cellphone: '+8618510163161',
    country: 'China',
    gender: 'MALE',
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
        'I have 7 years working experience in IT with solid technical background, proficient in modern JavaScript/TypeScript programming frameworks, tools, and libraries. ',
        'I Have rich development experience both in Front-End and Back-End, including Admin Portal and Customer Portal in E-commerce\n' +
            'System, Web Finance(Invoice) System, Supporting System, SPA, etc.',
        'I am both a good team leader and team member. ' +
            'I am passionate about life, friendly to people, willing to share, and wish to work with colleagues whom want to make the world to be a better place.'
    ]
});

const masterEducation = new Education({
    major: 'Land Utilization and Information Technology',
    college: 'China Agricultural University',
    degree: DataModel.Degree.Master,
    start: new Date('2012-09-01T00:00:00Z'),
    end: new Date('2015-07-01T00:00:00Z')
});
const bachelorEducation = new Education({
    major: 'Resources and Environment',
    college: 'China Agricultural University',
    degree: DataModel.Degree.Bachelor,
    start: new Date('2008-09-01T00:00:00Z'),
    end: new Date('2012-07-01T00:00:00Z')
});

madison.addEducations([bachelorEducation, masterEducation]);

const taijiCompany = new Company({
    name: 'Taiji Computer Corporation. Ltd',
    type: DataModel.CompanyType.Enterprise,
    location: 'Beijing, China',
    industry: 'IT'
});
const periodOne = new Period({
    start: new Date('2015-07-01T00:00:00Z'),
    end: new Date('2016-07-01T00:00:00Z'),
    company: taijiCompany,
    keywords: ['Waterfall'],
    jobPosition: 'Software Engineer',
    jobPositionLevel: DataModel.JobPositionLevel.Middle,
    jobType: DataModel.JobType.FullTime,
    jobSummaries: [
        'use Java to develop system on schedule',
        'participate in the design and development of one economic-data-report project.'
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
    descriptions: [
        'My main job is to use java to develop the back-end interface, and use jQuery to develop the front-end page.'
    ]
});
const yinyuanCompany = new Company({
    name: 'Yinyuan Asia-pacific Technology Co. Ltd ',
    type: DataModel.CompanyType.Startup,
    location: 'Beijing, China',
    industry: 'e-commerce'
});
const h5PortalProjectInYinyuan = new Project({
    name: 'Customer Portal',
    start: new Date('2016-07-01T00:00:00Z'),
    end: new Date('2018-03-01T00:00:00Z'),
    keywords: ['Java', 'jQuery', 'Mobile'],
    company: yinyuanCompany,
    achievements: [
        {
            text: "completed the design and development of the company's Front-End UI component library",
            categories: ['UI']
        }
    ],
    descriptions: [
        'This is an online shopping website that provides functions including viewing products, adding to cart, and online payment.'
    ],
    challengeAndSolutions: [
        {
            challenge: 'There is very similar CRUD code that needs to be created in the backend interface.',
            solution: 'Used shell scripts to improve the development efficiency of CRUD classes.'
        },
        {
            challenge:
                'The front-end does not have the concept of components, and is based on the development of each page and the introduction of a third-party jQuery library.',
            solution:
                'Our jQuery-based plug-in technology combines many commonly used form functions to reduce repetitive code.'
        }
    ]
});
const appPortalProjectInYinyuan = new Project({
    name: 'Mobile App',
    start: new Date('2017-08-01T00:00:00Z'),
    end: new Date('2018-03-01T00:00:00Z'),
    keywords: ['React Native', 'Mobile'],
    company: yinyuanCompany,
    achievements: [],
    descriptions: [
        'This is a mobile app to help teachers and parents. It can support online course selection, appointment of teachers and uploading homework and other functions.'
    ],
    challengeAndSolutions: [
        {
            challenge: 'React native has performance issues when rendering large lists of data.',
            solution: 'We use virtual list technology to solve the problem of too large data.'
        }
    ]
});

const periodTwo = new Period({
    start: new Date('2016-07-01T00:00:00Z'),
    end: new Date('2018-03-01T00:00:00Z'),
    company: yinyuanCompany,
    keywords: ['Waterfall'],
    jobPosition: 'Software Engineer',
    jobPositionLevel: DataModel.JobPositionLevel.Middle,
    jobSummaries: [
        'participate in the design and development of all projects ',
        'responsible for the release quality of all system',
        "responsible for team's recruitment, technical training(ES6), etc",
        'take charge of annual feature planning and appraise performance of each team member'
    ],
    projects: [h5PortalProjectInYinyuan, appPortalProjectInYinyuan],
    jobType: DataModel.JobType.FullTime,
    achievements: [],
    descriptions: ['My main job in the company is to develop API interfaces, develop front-end pages and Apps.']
});
const baixinCompany = new Company({
    name: 'Citic Baixin Bank Co. Ltd',
    type: DataModel.CompanyType.Enterprise,
    location: 'Beijing, China',
    industry: 'bank'
});
const h5PortalProjectInBaixin = new Project({
    name: 'Customer Portal',
    start: new Date('2018-04-01T00:00:00Z'),
    end: new Date('2019-06-01T00:00:00Z'),
    keywords: ['Vue', 'Web Component', 'Mobile'],
    company: baixinCompany,
    achievements: [],
    descriptions: [
        'This is a mobile web system for potential and existing customers of the company, mainly including event promotion, helping users to open accounts and apply for personal loans and other financial services.'
    ],
    challengeAndSolutions: [
        {
            challenge:
                "Our front-end components need to run in different environments at the same time, including the company's own website and the partner's website, so we need to support different front-end technology stacks.",
            solution:
                'We used the relatively innovative web component 3.0 technology at that time to build our basic components and solve the problem of cross-technology stacks.'
        }
    ]
});
const h5ChartPortalProjectInBaixin = new Project({
    name: 'Admin Portal',
    start: new Date('2019-02-01T00:00:00Z'),
    end: new Date('2019-06-01T00:00:00Z'),
    keywords: ['Vue', 'EChart'],
    company: baixinCompany,
    achievements: [],
    descriptions: [
        "This is an internal system used by the company's operations personnel, which can display various data in time and history in graphs."
    ],
    challengeAndSolutions: [
        {
            challenge: 'How to ensure the data update in-timely?',
            solution: 'We use websocket technology for real-time communication.'
        }
    ]
});

const periodThree = new Period({
    start: new Date('2018-04-01T00:00:00Z'),
    end: new Date('2019-06-01T00:00:00Z'),
    company: baixinCompany,
    keywords: ['Waterfall'],
    jobPosition: 'Front-End Engineer',
    projects: [h5PortalProjectInBaixin, h5ChartPortalProjectInBaixin],
    jobPositionLevel: DataModel.JobPositionLevel.Middle,
    jobSummaries: [
        'responsible for task assignment and project requirement explanation to 5 team members',
        'provide training and guidance on technical to junior engineer'
    ],
    jobType: DataModel.JobType.FullTime,
    achievements: [],
    descriptions: [
        'My main job at Citic Baixin Bank is to complete several front-end projects with my colleagues, which include different front-end technology stacks.'
    ]
});
const pccwCompany = new Company({
    name: 'PCCW GLOBAL',
    type: DataModel.CompanyType.Enterprise,
    location: 'Beijing, China',
    industry: 'telecommunications'
});
const adminPortalProjectInPCCW = new Project({
    name: 'Admin Portal',
    start: new Date('2019-09-01T00:00:00Z'),
    end: new Date('2022-05-01T00:00:00Z'),
    keywords: ['React', 'Invoice', 'Port', 'Cloud', 'Date Center'],
    company: pccwCompany,
    achievements: [
        {
            text: 'defined the Best practices in FE project with React and Typescript.',
            categories: ['Architecture']
        },
        {
            text: 'used Micro Front-End Service to split code and improve the performance in FE',
            categories: ['Performance', 'Engineering']
        },
        {
            text: "designed and developed the company's Front-End UI component library",
            categories: ['UI']
        }
    ],
    descriptions: [
        "This is a front-end admin portal built from zero, the main purpose is to replace the company's original admin portal. In the past 3 years, we have done a lot of migration work, and at the same time refactored the code based on the existing business logic, and added many new functions that the old system did not support.",
        'Of course we faced many challenges.'
    ],
    challengeAndSolutions: [
        {
            challenge:
                'Challenge 1, how to quickly build CRUD operation functions based on the original business in the early stage of the project, so that we can quickly test the data connection capabilities of the new system ？',
            solution:
                'We chose a very powerful front-end scaffolding, which helped us reduce a lot of unnecessary development costs in the early stage. We also wrote a front-end CRUD template to help us reduce a lot of repetitive code about CRUD.'
        },
        {
            challenge:
                'Challenge 2. There are many functions that need to be integrated in the project, and several vandor teams are developing in parallel. How to ensure that the code quality of the project does not decline and the subsequent continuous development is not affected by team handover.',
            solution:
                'After an unhappy project handover, we investigated the technology of front-end microservices and finally enabled it in the project. Using this technology, we can divide the code into different code repos by module, and use different front-end technologies in different modules, so that it can be updated at any time, and other modules will not be affected.'
        },
        {
            challenge:
                'Challenge 3, we need to integrate online products of various service providers, and integrate configuration and display in our own system. However, their interfaces are not standardized. How can we use a module to quickly integrate all services and display and place orders normally?',
            solution:
                'We use a self-developed dynamic form module to efficiently and conveniently define basic and responsible form types, including the api address and data type of the drop-down options. The final online form is generated by front-end drag-and-drop configuration, which is very easy to operate and modify, and does not require users to have any code foundation.'
        }
    ]
});

const customerPortalProjectInPCCW = new Project({
    name: 'Customer Portal',
    start: new Date('2019-09-01T00:00:00Z'),
    end: new Date('2022-05-01T00:00:00Z'),
    keywords: ['React', 'NextJs', 'TDD', 'Invoice'],
    company: pccwCompany,
    achievements: [
        {
            text: "Designed and developed low-code form modules to improve the company's efficiency in custom dynamic form releases",
            categories: ['low-code']
        },
        {
            text: 'setup the Front-End CI/CD with system Engineers, including the Docker building and the jest process',
            categories: ['CI/CD', 'Engineering']
        },
        {
            text: 'setup the utils library in FE',
            categories: ['Engineering']
        }
    ],
    descriptions: [
        "This is a portal for PCCW Global's partner companies and ordinary users. You can purchase port, connection, datacenter, and VM cloud on this portal, and view and check invoice.",
        'This system also supports partners to upload and develop their own SDKs, so we encountered some new challenges.'
    ],
    challengeAndSolutions: [
        {
            challenge:
                'The front-end architecture we chose in the early days did not support runtime environment variables, which brought a lot of troubles in our project.',
            solution:
                "Based on the company's environment configuration specifications, we updated the build method of the production environment and created an npm cli script used internally by the company. Its function is to execute variable-related rebuild operations when the environment variables in the production environment are updated. Implemented runtime environment variables."
        },
        {
            challenge:
                'Because we provided the functions of the last SDK, we need to provide a code editor in the portal that can be edited and modified by customers, and include version management tools.',
            solution:
                'After researching the mainstream webide open source tools in the market, we chose a project that is most suitable for us, and added some extended functions for the convenience of customers.'
        }
    ]
});

const periodFour = new Period({
    start: new Date('2019-09-01T00:00:00Z'),
    end: new Date('2022-05-01T00:00:00Z'),
    company: pccwCompany,
    keywords: ['Agile', 'JIRA'],
    jobPosition: 'Front-End Engineer',
    jobPositionLevel: DataModel.JobPositionLevel.Senior,
    jobSummaries: [
        'conduct functional research and validation based on business requirements, evaluate requirements implementation feasibility and propose solutions.',
        'responsible for task assignment and project requirement explanation to 5 external team members'
    ],
    jobType: DataModel.JobType.FullTime,
    projects: [customerPortalProjectInPCCW, adminPortalProjectInPCCW],
    achievements: [],
    descriptions: [
        'My main job at PCCW Global is to build two web systems, admin portal and customer portal, and integrate some MVP features into the two portals, and hand them over to the market for verification.'
    ]
});
const teslaCompany = new Company({
    name: 'Tesla',
    type: DataModel.CompanyType.Enterprise,
    location: 'Beijing, China',
    industry: 'Motor'
});
const adminPortalProjectInTesla = new Project({
    name: 'Admin Portal',
    start: new Date('2022-05-23T00:00:00Z'),
    keywords: ['Admin'],
    company: teslaCompany,
    achievements: [],
    descriptions: [
        "This is the admin management portal corresponding to the customer portal. It is a system built for Tesla's operators to manage related forms, articles, and push notifications on a daily basis.",
        'The project has been running for about 2 years when I joined, and there are many known issues that have not been resolved'
    ],
    challengeAndSolutions: [
        {
            challenge:
                'The current questionnaire editing function has performance problems when the amount of data is too large, and it is very inconvenient to use',
            solution:
                'I spent 2 weeks refactoring the entire survey editing module, improving the way data is updated, optimizing the update range of React Context, and using react memo to reduce unnecessary rendering as much as possible.'
        },
        {
            challenge:
                'Most of the data on the admin side has a strong structure type. Although we use typescript to help us correct the wrong type during development, it still cannot guarantee the standardization of the back-end data.',
            solution:
                'We created and improved the definition of data models, and performed default assignment and type checking during initialization to ensure that the data in the entire life cycle conforms to the type definition from the source of the data, reducing abnormal problems caused by data.'
        }
    ]
});
const customerPortalProjectInTesla = new Project({
    name: 'Customer Portal',
    start: new Date('2022-05-23T00:00:00Z'),
    keywords: ['Mobile Web', 'Survey'],
    company: teslaCompany,
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
    descriptions: [
        "This is Tesla's client-side web system for potential customers and existing customers in China. It mainly includes questionnaire and form survey functions, Tesla-related article recommendation function and personal center and other functions.",
        'The project has been running for about 2 years when I joined, and there are many known issues that have not been resolved.'
    ],
    challengeAndSolutions: [
        {
            challenge:
                'The ui and form library versions used in the project are too low, and there are some unfixed bugs. It is urgent to upgrade to the latest version, but we don’t want to cause too many online bugs',
            solution:
                'We spent a week unifying the ui and form import methods that need to be upgraded in the project (from everywhere to one file), and manually handled the compatibility of the upgraded version to avoid destructive bugs as much as possible.'
        },
        {
            challenge:
                'In the early days of the project, a full-featured and heavy-duty front-end architecture was used, but it was very restrictive and insufficient in scalability, which hindered us from upgrading the versions of react and react router.',
            solution:
                'We rewrote the webpack configuration file, completely abandoned the original front-end framework within 2 weeks, found alternatives for inapplicable modules, and finally completed the upgrade of react 18 and react router v6. Now the entire configuration is completely defined and controlled by ourselves.'
        },
        {
            challenge:
                'The code quality of the project is very average, and there is no automated inspection process. As a result, many of our online bugs rely on user feedback and cannot be found in time and in advance.',
            solution:
                'I integrated sentry and sonar qube in the stage environment of the project. Sentry helps us discover known errors in the project in the stage environment ahead of users and QA colleagues. Sonar qube helps us discover possible negligence and code irregularities in the code PR.'
        }
    ]
});
const periodFive = new Period({
    start: new Date('2022-05-23T00:00:00Z'),
    company: teslaCompany,
    keywords: ['Agile', 'JIRA'],
    jobPosition: 'Front-End Engineer',
    jobPositionLevel: DataModel.JobPositionLevel.Senior,
    jobType: DataModel.JobType.FullTime,
    jobSummaries: [
        'become the core developer in Front-End team',
        'improve the code quality and performance',
        'provide training and guidance on technical'
    ],
    projects: [customerPortalProjectInTesla, adminPortalProjectInTesla],
    achievements: [],
    descriptions: [
        "My main job at Tesla is to ensure the steady iterative development of two web projects, upgrade the old architecture, and add special components of Tesla's UI in China."
    ]
});
madison.addPeriods([periodOne, periodTwo, periodThree, periodFour, periodFive]);

const skills = [
    new Skill('React', DataModel.SkillLevel.proficient, 5, DataModel.Importance.Essential),
    new Skill('TypeScript', DataModel.SkillLevel.proficient, 3, DataModel.Importance.Essential),
    new Skill('JavaScript', DataModel.SkillLevel.proficient, 7, DataModel.Importance.Essential),
    new Skill('Redux/MobX', DataModel.SkillLevel.proficient, 3, DataModel.Importance.Essential),
    new Skill('HTML & CSS', DataModel.SkillLevel.proficient, 6, DataModel.Importance.Essential),
    new Skill('GIT', DataModel.SkillLevel.proficient, 6, DataModel.Importance.Essential),
    new Skill('Jest', DataModel.SkillLevel.familiar, 3, DataModel.Importance.Essential),
    new Skill('Node', DataModel.SkillLevel.familiar, 2, DataModel.Importance.Advanced),
    new Skill('Java', DataModel.SkillLevel.familiar, 3, DataModel.Importance.Advanced),
    new Skill('Vue', DataModel.SkillLevel.proficient, 1.5, DataModel.Importance.Advanced),
    new Skill('Database/SQL', DataModel.SkillLevel.familiar, 2, DataModel.Importance.Advanced),
    new Skill('Electron', DataModel.SkillLevel.familiar, 1, DataModel.Importance.Advanced),
    new Skill('Docker', DataModel.SkillLevel.understand, 0.5, DataModel.Importance.Advanced),
    new Skill('C#', DataModel.SkillLevel.understand, 0.5, DataModel.Importance.Advanced)
];
madison.addSkills(skills);

const capabilities = new Capability({
    problemSolving: 8.8,
    dataStructure: 9,
    algorithm: 8,
    communicate: 9.5,
    engineer: 8,
    passion: 9
});
madison.addCapability(capabilities);
export default madison;
