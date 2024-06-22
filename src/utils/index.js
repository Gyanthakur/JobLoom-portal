import { lazy } from "react";

export const recruiterOnboardFormControls = [
	{
		label: "Name",
		name: "Name",
		placeholder: "Enter your name",
		componentType: "input",
	},
	{
		label: "Company Name",
		name: "CompanyName",
		placeholder: "Enter your Company name",
		componentType: "input",
	},
	{
		label: "Company Role",
		name: "CompanyRole",
		placeholder: "Enter your Company Role",
		componentType: "input",
	},
];

export const initialRecruiterFormData = {
	name: "",
	companyName: "",
	companyRole: "",
	isPremiumUser: false,
};

export const candidateOnboardFormControls = [
	{
		label: "Resume",
		name: "resume",
		componentType: "file",
	},
	{
		label: "Cover Letter",
		name: "CoverLetter",
		placeholder: "Drop your Cover Letter",
		componentType: "file",
	},
	{
		label: "Name",
		name: "Name",
		placeholder: "Enter your name",
		componentType: "input",
	},
	{
		label: "Email",
		name: "Email",
		placeholder: "Enter your Email",
		componentType: "input",
	},
	{
		label: "Phone",
		name: "Phone",
		placeholder: "Enter your Phone",
		componentType: "input",
	},
	{
		label: "Current Job Location",
		name: "CurrentJobLocation",
		placeholder: "Enter your Current Job Location",
		componentType: "input",
	},
	{
		label: "Current Salary",
		name: "CurrentSalary",
		placeholder: "Enter your Current Salary",
		componentType: "input",
	},
	{
		label: "Years of Experience",
		name: "YearsOfExperience",
		placeholder: "Enter your Years of Experience",
		componentType: "input",
	},
	{
		label: "Expected Salary",
		name: "ExpectedSalary",
		placeholder: "Enter your Expected Salary",
		componentType: "input",
	},
	{
		label: "Notice Period",
		name: "NoticePeriod",
		placeholder: "Enter your Notice Period",
		componentType: "input",
	},
	{
		label: "skills",
		name: "Skills",
		placeholder: "Enter your Skills",
		componentType: "input",
	},
	{
		label: "Previous Company",
		name: "PreviousCompany",
		placeholder: "Enter your Previous Company",
		componentType: "input",
	},
	{
		label: "Previous Job Location",
		name: "PreviousJobLocation",
		placeholder: "Enter your Previous Job Location",
		componentType: "input",
	},
	{
		label: "college Name",
		name: "CollegeName",
		placeholder: "Enter your College Name",
		componentType: "input",
	},
	{
		label: "Degree",
		name: "Degree",
		placeholder: "Enter your Degree",
		componentType: "input",
	},
	{
		lable: "College Location",
		name: "CollegeLocation",
		placeholder: "Enter your College Location",
		componentType: "input",
	},
	{
		label: "Graduated Year",
		name: "GraduatedYear",
		placeholder: "Enter your Graduated Year",
		componentType: "input",
	},
	{
		lable: "Linkedin Profile",
		name: "LinkedinProfile",
		placeholder: "Enter your Linkedin Profile",
		componentType: "input",
	},
	{
		label: "Github Profile",
		name: "GithubProfile",
		placeholder: "Enter your Github Profile",
		componentType: "input",
	},
];
export const initialCandidateFormData = {
	resume: "",
	name: "",
	email: "",
	phone: "",
	currentJobLocation: "",
	currentSalary: "",
	yearsOfExperience: "",
	expectedSalary: "",
	noticePeriod: "",
	skills: "",
	previousCompany: "",
	previousJobLocation: "",
	collegeName: "",
	degree: "",
	collegeLocation: "",
	graduatedYear: "",
	linkedinProfile: "",
	githubProfile: "",
	isPremiumUser: false,
};


export const haclkathonOnboardFormControls = [
    {
        label: "Name",
        name: "Name",
        placeholder: "Enter your name",
        componentType: "input"
    },
    {
        label: "Hackathon Name",
        name: "HackathonName",
        placeholder: "Enter your Hackathon name",
        componentType: "input"
    },
    {
        label: "Date and Time",
        name: "DateTime",
        placeholder: "Select the start and end date and time",
        componentType: "datetime"
    },
    {
        label: "Venue",
        name: "Venue",
        placeholder: "Enter the location or online platform details",
        componentType: "input"
    },
    {
        label: "Organizers",
        name: "Organizers",
        placeholder: "Enter the names and affiliations of the organizers",
        componentType: "textarea"
    },
    {
        label: "Registration Link",
        name: "RegistrationLink",
        placeholder: "Enter the registration link",
        componentType: "input"
    },
    {
        label: "Eligibility Criteria",
        name: "EligibilityCriteria",
        placeholder: "Enter the eligibility criteria",
        componentType: "textarea"
    },
    {
        label: "Team Formation",
        name: "TeamFormation",
        placeholder: "Describe the team formation rules",
        componentType: "textarea"
    },
    {
        label: "Themes and Challenges",
        name: "ThemesChallenges",
        placeholder: "Describe the themes and challenges",
        componentType: "textarea"
    },
    {
        label: "Event Schedule",
        name: "EventSchedule",
        placeholder: "Enter the detailed event schedule",
        componentType: "textarea"
    },
    {
        label: "Tools and Technologies",
        name: "ToolsTechnologies",
        placeholder: "List the recommended or required tools and technologies",
        componentType: "textarea"
    },
    {
        label: "Code of Conduct",
        name: "CodeConduct",
        placeholder: "Describe the code of conduct",
        componentType: "textarea"
    },
    {
        label: "Submission Requirements",
        name: "SubmissionRequirements",
        placeholder: "Describe the submission requirements",
        componentType: "textarea"
    },
    {
        label: "Judging Criteria",
        name: "JudgingCriteria",
        placeholder: "Describe the judging criteria",
        componentType: "textarea"
    },
    {
        label: "Prizes",
        name: "Prizes",
        placeholder: "Describe the prizes for winners and other categories",
        componentType: "textarea"
    },
    {
        label: "Mentorship",
        name: "Mentorship",
        placeholder: "Describe the availability of mentors",
        componentType: "textarea"
    },
    {
        label: "Workshops",
        name: "Workshops",
        placeholder: "Describe any workshops during the event",
        componentType: "textarea"
    },
    {
        label: "Resources",
        name: "Resources",
        placeholder: "List the resources available to participants",
        componentType: "textarea"
    },
    {
        label: "Contact Information",
        name: "ContactInformation",
        placeholder: "Enter contact information for inquiries",
        componentType: "input"
    },
    {
        label: "FAQs",
        name: "FAQs",
        placeholder: "Provide answers to common questions",
        componentType: "textarea"
    },
    {
        label: "Social Media and Community Links",
        name: "SocialMediaLinks",
        placeholder: "Provide links to social media and community channels",
        componentType: "textarea"
    },
    {
        label: "Intellectual Property Guidelines",
        name: "IntellectualProperty",
        placeholder: "Describe the intellectual property guidelines",
        componentType: "textarea"
    },
    {
        label: "Privacy Policy",
        name: "PrivacyPolicy",
        placeholder: "Describe the privacy policy",
        componentType: "textarea"
    }
]


export const initialHackathonFormData = {
	name : '',
	hackathonName : '',
	date : '',


}