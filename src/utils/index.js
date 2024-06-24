import { lazy } from "react";

export const recruiterOnboardFormControls = [
	{
		label: "Name",
		name: "name",
		placeholder: "Enter your name",
		componentType: "input",
	},
	{
		label: "Company Name",
		name: "companyName",
		placeholder: "Enter your company name",
		componentType: "input",
	},
	{
		label: "Company Role",
		name: "companyRole",
		placeholder: "Enter your company role",
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
		name: "coverLetter",
		placeholder: "Drop your Cover Letter",
		componentType: "file",
	},
	{
		label: "Name",
		name: "name",
		placeholder: "Enter your name",
		componentType: "input",
	},
	{
		label: "Email",
		name: "email",
		placeholder: "Enter your Email",
		componentType: "input",
	},
	{
		label: "Phone",
		name: "phone",
		placeholder: "Enter your Phone",
		componentType: "input",
	},
	{
		label: "Current Job Location",
		name: "currentJobLocation",
		placeholder: "Enter your Current Job Location",
		componentType: "input",
	},
	{
		label: "Current Salary",
		name: "currentSalary",
		placeholder: "Enter your Current Salary",
		componentType: "input",
	},
	{
		label: "Years of Experience",
		name: "yearsOfExperience",
		placeholder: "Enter your Years of Experience",
		componentType: "input",
	},
	{
		label: "Expected Salary",
		name: "expectedSalary",
		placeholder: "Enter your Expected Salary",
		componentType: "input",
	},
	{
		label: "Notice Period",
		name: "noticePeriod",
		placeholder: "Enter your Notice Period",
		componentType: "input",
	},
	{
		label: "skills",
		name: "skills",
		placeholder: "Enter your Skills",
		componentType: "input",
	},
	{
		label: "Previous Company",
		name: "previousCompany",
		placeholder: "Enter your Previous Company",
		componentType: "input",
	},
	{
		label: "Previous Job Location",
		name: "previousJobLocation",
		placeholder: "Enter your Previous Job Location",
		componentType: "input",
	},
	{
		label: "college Name",
		name: "collegeName",
		placeholder: "Enter your College Name",
		componentType: "input",
	},
	{
		label: "Degree",
		name: "degree",
		placeholder: "Enter your Degree",
		componentType: "input",
	},
	{
		lable: "College Location",
		name: "collegeLocation",
		placeholder: "Enter your College Location",
		componentType: "input",
	},
	{
		label: "Graduated Year",
		name: "graduatedYear",
		placeholder: "Enter your Graduated Year",
		componentType: "input",
	},
	{
		lable: "Linkedin Profile",
		name: "linkedinProfile",
		placeholder: "Enter your Linkedin Profile",
		componentType: "input",
	},
	{
		label: "Github Profile",
		name: "githubProfile",
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
		name: "name",
		placeholder: "Enter your name",
		componentType: "input",
	},
	{
		label: "Hackathon Name",
		name: "hackathonName",
		placeholder: "Enter your Hackathon name",
		componentType: "input",
	},
	{
		label: "Date and Time",
		name: "dateTime",
		placeholder: "Select the start and end date and time",
		componentType: "datetime",
	},
	{
		label: "Venue",
		name: "venue",
		placeholder: "Enter the location or online platform details",
		componentType: "input",
	},
	{
		label: "Organizers",
		name: "organizers",
		placeholder: "Enter the names and affiliations of the organizers",
		componentType: "textarea",
	},
	{
		label: "Registration Link",
		name: "registrationLink",
		placeholder: "Enter the registration link",
		componentType: "input",
	},
	{
		label: "Eligibility Criteria",
		name: "eligibilityCriteria",
		placeholder: "Enter the eligibility criteria",
		componentType: "textarea",
	},
	{
		label: "Team Formation",
		name: "teamFormation",
		placeholder: "Describe the team formation rules",
		componentType: "textarea",
	},
	{
		label: "Themes and Challenges",
		name: "themesChallenges",
		placeholder: "Describe the themes and challenges",
		componentType: "textarea",
	},
	{
		label: "Event Schedule",
		name: "eventSchedule",
		placeholder: "Enter the detailed event schedule",
		componentType: "textarea",
	},
	{
		label: "Tools and Technologies",
		name: "eoolsTechnologies",
		placeholder: "List the recommended or required tools and technologies",
		componentType: "textarea",
	},
	{
		label: "Code of Conduct",
		name: "codeConduct",
		placeholder: "Describe the code of conduct",
		componentType: "textarea",
	},
	{
		label: "Submission Requirements",
		name: "submissionRequirements",
		placeholder: "Describe the submission requirements",
		componentType: "textarea",
	},
	{
		label: "Judging Criteria",
		name: "judgingCriteria",
		placeholder: "Describe the judging criteria",
		componentType: "textarea",
	},
	{
		label: "Prizes",
		name: "prizes",
		placeholder: "Describe the prizes for winners and other categories",
		componentType: "textarea",
	},
	{
		label: "Mentorship",
		name: "mentorship",
		placeholder: "Describe the availability of mentors",
		componentType: "textarea",
	},
	{
		label: "Workshops",
		name: "workshops",
		placeholder: "Describe any workshops during the event",
		componentType: "textarea",
	},
	{
		label: "Resources",
		name: "resources",
		placeholder: "List the resources available to participants",
		componentType: "textarea",
	},
	{
		label: "Contact Information",
		name: "contactInformation",
		placeholder: "Enter contact information for inquiries",
		componentType: "input",
	},
	{
		label: "FAQs",
		name: "fAQs",
		placeholder: "Provide answers to common questions",
		componentType: "textarea",
	},
	{
		label: "Social Media and Community Links",
		name: "socialMediaLinks",
		placeholder: "Provide links to social media and community channels",
		componentType: "textarea",
	},
	{
		label: "Intellectual Property Guidelines",
		name: "intellectualProperty",
		placeholder: "Describe the intellectual property guidelines",
		componentType: "textarea",
	},
	{
		label: "Privacy Policy",
		name: "privacyPolicy",
		placeholder: "Describe the privacy policy",
		componentType: "textarea",
	},
];

export const initialHackathonFormData = {
	name: "",
	hackathonName: "",
	date: "",
};

export const othersOnboardFormControls = [
	{
		label: "Name",
		name: "name",
		placeholder: "Enter your name",
		componentType: "input",
	},
	{
		label: "Title",
		name: "title",
		placeholder: "Enter the title",
		componentType: "input",
	},
	{
		label: "Description",
		name: "description",
		placeholder: "Enter the description",
		componentType: "textarea",
	},
	{
		label: "Link",
		name: "link",
		placeholder: "Enter the link",
		componentType: "input",
	},
];

export const initialOthersFormData = {
	name: "",
	title: "",
	description: "",
	link: "",
};
