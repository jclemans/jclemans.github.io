var intro = new Vue({
  el: '#intro',
  data: {
    title: 'Hi, my name is Jeremy Clemans',
    intro: "I live in Portland, Oregon, and am a software engineer who enjoys working with Ruby on Rails and JavaScript. This site is built using Vue.js!",
    bio: "My first computer was an Apple II clone in the mid eighties. It had 64k of memory and a monochrome screen. My brother and I would write weird programs in BASIC and I learned to navigate and use DOS. After college I worked for Alaska Airlines doing web tech support, at Microsoft coordinating usability studies, and eventually landed at my first internet startup company (Wetpaint) in 2006. I started going deeper into programming from there; initially learning how to query user data from a SQL database, and write simple scripts to automate repetitive work. I dove full time into coding in 2013/2014, fell in love with the Ruby on Rails ecosystem and have been working as a sofware engineer since then.",
  }
})

var work = new Vue({
  el: '#work',
  data: {
    technologies: ['Ruby', 'Rails', 'JavaScript', 'JQuery', 'AngularJS', 'EmberJS', 'PostgreSQL', 'Git', 'Node.JS', 'Vagrant', 'HTML5', 'CSS3'],
    companies: [
    	{ name: 'FocusVision', years: '2016-2017', title: 'Software Engineer', description: 'Front end engineering focus, building media rich features (audio, video, and images) on top of the Decipher survey engine with Javascript, JQuery, Ember, and Angular for desktop and mobile web apps.' },
    	{ name: 'Notch8', years: '2014-2016', title: 'Software Engineer', description: 'Full stack web and mobile application development building consumer facing products, internal tools, mobile apps, and backend APIs. I worked with clients in technology, healthcare, education, finance, and more.' },
    	{ name: 'Solavei', years: '2012-2013', title: 'Customer Support Manager', description: 'I led a small team in supporting members of the Solavei online community via real-time feeds, forums, and CRM tools like Jive, Right Now, and Salesforce. I developed key productivity tracking metrics, did customer sentiment analysis, and led our support site redesign project.' },
    	{ name: 'Wetpaint', years: '2006-2012', title: 'Web Support Engineer / Program Manager', description: 'As a program manager I wrote user stories and managed product backlog for in house content management system. I provided technical support and advocacy for our in house publishing team, and worked with the CX product team to build features to improve user experience, drive traffic, and more Facebook fans to our content. For product support I built and moderated a wiki knowledge-base that supported a 2 million user community. I designed and implemented community support strategy, policies, and processes; handled legal issues related to the CDA, DMCA, COPPA, and Terms of Service violations; helped our online communities fight spammers, hackers, and cyber bullies.' },
    	{ name: 'Microsoft', years: '2005-2006', title: 'Usability Coordinator', description: 'I recruited and coordinated with IT Professionals and Software Developers for MS usability studies, using MySQL database tools to query and update participant records, and worked directly with Engineers and Project Managers to fulfill project requirements.' },
    	{ name: 'Alaska Airlines', years: '2002-2005', title: 'Web Support Agent', description: 'I provided web technical support for hundreds of alaskaair.com users per week, QA tested new website features and functionality, and documented and reported usability issues to the web development team.' }
    ]
  }
})

var personal = new Vue({
  el: '#personal',
  data: {
    interests: [
    	{ text: 'biking' }, 
    	{ text: 'travel' },
    	{ text: 'craft beer' },
    	{ text: 'gaming' },
    	{ text: 'hiking' },
    	{ text: 'bitcoin, ethereum, etc.' },
    ],
    countries: ['Spain', 'Myanmar', 'France', 'Belgium', 'Nicaragua', 'Guatemala', 'Mexico', 'Canada']
  }
})

