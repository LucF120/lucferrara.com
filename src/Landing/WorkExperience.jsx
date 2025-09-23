import JobInfo from "./JobInfo";

const DESCRIPTION_GOLINKS = [
    "Built and optimized full-stack features for GoSearch, GoLinks’ AI-powered enterprise search platform.",
    "Contributed across PHP backend APIs, React/JavaScript frontend, MySQL/Redis queries, and AWS infrastructure to improve scalability and user experience.",
    "Developed core features including a new UX for data connector management, Slack and Microsoft Teams integrations, and enhanced AI functionality.",
    "Designed, presented, and deployed an internship project: an AI Agent integration with the GoSearch Slackbot, now used in production.",
    "Collaborated in Agile workflows, including code reviews, sprint planning, daily standups, backlog grooming, and sprint demos.",
    "Diagnosed and resolved customer-facing issues, improving platform reliability and user satisfaction."
];
const DESCRIPTION_INTELETRAVEL_2 = [
    "Developed a full-stack Laravel application, using PHP, HTML/CSS, and JavaScript, and integrated it with multiple REST APIs and a SQL Server database.",
    "Designed and maintained 8 SQL Server tables to store company data.",
    "Created comprehensive documentation and test scripts and assisted with project planning in Jira.",
    "Deployed Laravel projects via Forge, conducted QA testing, and utilized Systems Manager, RDS, EC2, and S3 within AWS for various tasks.",
    "Attended the company tech summit, and contributed to discussions about infrastructure, cybersecurity, cloud computing, and database and codebase redesign."
];

const DESCRIPTION_MMS = [
    "Collaborated with a small, agile team on the NEJM Healer project, an interactive application utilized by medical students across multiple colleges and universities.",
    "Conducted regression and smoke testing on the Healer UI and API.",
    "Developed over 50 automated tests using Java, JavaScript, jQuery, and Cucumber frameworks, leveraging Selenium, Serenity, JUnit, and Maven.",
    "Executed hundreds of tests over several months, contributing to the successful launch of Healer 3.0.",
    "Appointed to lead the Healer QA team for an extended period and continued to support the project for an additional month during the lead tester's absence.",
];

const DESCRIPTION_INTELETRAVEL_1 = [
    "Designed a project plan through Plan.io for developing a system to upload and store company event data, and use the data to analyze the effectiveness of education events.",
    "Designed a CSV upload program to import event attendee spreadsheets into the education database table, allowing the company to compare education to sales productivity.",
    "Attended cybersecurity meetings and learned about disaster recovery, infrastructure, and fraud prevention.",
    "Researched travel websites and presented to company executives ways to enhance their website/products."
];

const DESCRIPTION_KHOURY = [
    "Serving as Head Teaching Assistant for Matthias Felleisen's CS4400: Principles of Programming Languages.",
    "Maintaining and extending an automated testing and grading system in Racket.",
    "Organizing and managing the course GitHub organization",
    "Providing student support through office hours, lectures, and one-on-one guidance."
];

export default function WorkExperience() {
    return (
        <div className="d-flex flex-column align-items-center pt-2">
            <h3>Experience</h3>
            <div className="d-flex flex-column align-items-start ps-5 ms-5">
                <JobInfo logo="golinks_logo.jpg" 
                        company="GoLinks" 
                        title="Full-Stack Engineer" 
                        startDate="May 2025" 
                        endDate="Present"
                        description={DESCRIPTION_GOLINKS} />
                <JobInfo logo="khoury_college_logo.jpg " 
                        company="Khoury College of Computer Sciences - Northeastern" 
                        title="Head Teaching Assistant" 
                        startDate="September 2025" 
                        endDate="Present" 
                        description={DESCRIPTION_KHOURY} />
                <JobInfo logo="inteletravel_com_logo.jpg " 
                        company="InteleTravel" 
                        title="Software Application Engineer" 
                        startDate="January 2024" 
                        endDate="July 2024"
                        description={DESCRIPTION_INTELETRAVEL_2} />
                <JobInfo logo="massachusetts_medical_society_logo.jpg " 
                        company="Massachusetts Medical Society - New England Journal of Medicine" 
                        title="Quality Assurance Tester and Analyst" 
                        startDate="January 2023" 
                        endDate="July 2023"
                        description={DESCRIPTION_MMS}  />
                <JobInfo logo="inteletravel_com_logo.jpg " 
                        company="InteleTravel" 
                        title="Information Technology Intern" 
                        startDate="May 2022" 
                        endDate="August 2022"
                        description={DESCRIPTION_INTELETRAVEL_1}  />
            </div>
        </div>
    );
}
