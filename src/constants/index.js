import { FaMusic, FaGamepad, FaPlane, FaCookie } from "react-icons/fa";

export const INFO = {
	BIRTHDAY: "10-05-1995",
	EMAIL: "phamyqb@gmail.com",
	SKYPE: "phamyqb",
	PHONE: "0337785816",
	FREELANCER: true,
	ADDRESS: "Da Nang, Viet Nam",
};

export const EDUCATION = [
	{
		title: "Da Nang College of Technology - PN Vietnam",
		time: "Jul 2014 – Nov 2016",
		description: "Bachelor of Engineering",
	},
];

export const SKILLS = {
	"HTML/CSS": 4,
	JQuery: 4,
	React: 4,
	Angular: 4,
	"React Native": 4,
	Flutter: 3,
	"C#, ASP.NET, .NET Core": 4,
	Python: 3,
	"MS SQL Server, MySQL": 4,
	Teamwork: 5,
	Git: 5,
};

export const LANGUAGES = {
	Vietnamese: 5,
	English: 4,
};

export const INTERESTS = [
	{
		label: "Music",
		icon: <FaMusic />,
	},
	{
		label: "Game",
		icon: <FaGamepad />,
	},
	{
		label: "Travel",
		icon: <FaPlane />,
	},
	{
		label: "Cooking",
		icon: <FaCookie />,
	},
];

export const EXPERIENCES = [
	{
		title: "SkoolNet (Singapore) - Orient Software",
		date: "Dec 2020 - Present",
		description:
			"This is a system of Singapore client, They had a existed their system that built for 5 years ago, using React and React Native. " +
			"Belong to the education majo and allows their customers config by individual school. School can manage the posts, announcement and parents, children of the parents that studied in" +
			"the school. " +
			"Currently I'm working for new features and updating their system." +
			"",
		techs: [
			"React",
			"React Native",
			"Redux",
			"GraphQL",
			"S3 Bucket",
			"Golang",
			"MySQL",
		],
		responsibility: "Team Leader",
	},
	{
		title: "Enici (Samurai Security - Japan) - Orient Software",
		date: "Jun 2020 - Nov 2020",
		description:
			"Coming from a company of Japan, they want to develop the internal communication channel during the Covid-19 pandemic. " +
			"This application allows users to send the message with frames and give receive award point to exchange gif from their store." +
			"The system was built on both website and mobile application using Firebase.",
		techs: ["React", "React Native", "Firebase", "Google Cloud", "Redux"],
		responsibility: "Team Leader",
	},
	{
		title: "Holtel Service (Vingroup) - Orient Software",
		date: "May 2019 - Jun 2020",
		description:
			"Coming from Vingroup company, they want to build a part the internal service to finding hotel for comparing the price and services. " +
			"Provide for their customer a service to search the holtels and booking. " +
			"The system was built on web app using Angular 8.",
		techs: ["Angular", "Azure DevOps", ".NET Core", "Kafka", "MySQL"],
		responsibility: "Software Engineer",
	},
	{
		title: "Airmine (Australia) - Orient Software",
		date: "Jan 2019 - May 2019",
		description:
			"Airmine Project is the responsive for both web and mobile application using .NET core and React Native to manage healthcare information and display the weather using current location. " +
			"Mobile application allows users to send the current location with temparature to the system, tracking and manage the data to report. " +
			"The web app is an admin site for the administrator to get the detailed, and overview of the data.",
		techs: ["React", "React Native", ".NET Core", "SQL Server"],
		responsibility: "Software Engineer",
	},
	{
		title: "Dryer (Japan) - Orient Software",
		date: "Aug 2018 - Dec 2018",
		description:
			"Dryer Project is the responsive web application development for display and operator of 10 sensors and manage them. Start, Stop, Pause, and export data, " +
			"display as real time. The website allows to drag & drop the components on layout, turn on and turn off the sensor.",
		techs: ["React", "Redux Saga", "Python", "PostgreSQL", "Google Cloud"],
		responsibility: "Software Engineer",
	},
	{
		title: "Inital Image Search (Japan) - Orient Software",
		date: "May 2018 - Aug 2018",
		description:
			"This is the responsive web application development for image searching model, " +
			"display result finding by AI. The website allows to drag & drop the components on layout, turn on AI for image search." +
			"Using the image as input and process to search the same original image as output",
		techs: ["React", "Redux Saga", "Python", "PostgreSQL", "Google Cloud"],
		responsibility: "Software Engineer",
	},
	{
		title: "STAR - Survey Tracking (Malaysia) - FPT Software",
		date: "Jan 2018 - May 2018",
		description:
			"The purpose of the STAR System is to automate and improve the Contractor Performance Evaluation (CPE), and replace the existing SRM Module for CPE. " +
			"The cumbersome processes lead to incomplete vendor reviews and inaccurate vendor performance ratings. Ratings were not used systematically in formal feedback reviews. " +
			"Ratings, reviews and vendor feedback were not analyzed for prescriptive measures.",
		techs: ["Angular", "KendoUI", ".NET", "Sql Server", "Sencha Touch (Mobile App)"],
		responsibility: "Software Engineer",
	},
	{
		title: "Hotel Booking (Australia) - Success Software Service (HCM)",
		date: "Jun 2017 - Dec 2017",
		description:
			"The objective of the project is to implement a web application to manage multiple sites which provide services to booking hotel, booking restaurant, air plan, etc..., " +
			"User can create new site by using this application and using template that application provided or create new template for the site of the user.",
		techs: ["Angular", "JQuery", ".NET", "Sql Server"],
		responsibility: "Software Engineer",
	},
	{
		title: "Investor (Australia) - Success Software Service (HCM)",
		date: "Jan 2017 - Jun 2017",
		description:
			"The objective of the project is to make solution and develop a web application to help the company manage their investors, " +
			"investment contracts as well as profit. Implement enhancements and fixing remaining defects which hosts multiple payment forms that integrate with external payment process Point and Pay. " +
			"It’s has many roles for user (such as: Administrator, investors…) and authenticated by the role of user logged in. " +
			"Each role of user has different permission on this system (View by fields, page and data type…)." +
			"Administrator can export csv and pdf file to report by using this system..",
		techs: [".NET", "JQuery", "Sql Server"],
		responsibility: "Software Engineer",
	},
	{
		title: "House Provider (USA) - Success Software Service (HCM)",
		date: "Sep 2016 - Jan 2017",
		description:
			"The objective of the project is to make solution and develop a web system provides the services for customer to find (address, counties, hotel…) in America. " +
			"And offer user find services easier. This application accepts user login by location or IP address.",
		techs: [".NET MVC", "JQuery", "Sql Server"],
		responsibility: "Software Engineer",
	},
];
