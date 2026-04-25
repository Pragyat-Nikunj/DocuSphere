export const templates = [
    {
      id: "blank", 
      label: "Blank Document", 
      imageUrl: "/blank-document.svg",
      initialContent: "",
    },
    {
      id: "software-proposal", 
      label: "Software Development Proposal", 
      imageUrl: "/software-proposal.svg",
      initialContent: `
       <h1>Software Development Proposal</h1>
       <h2>Project Overview</h2>
       <p>Briefly describe the project, its goals, and the problem it aims to solve.</p>

       <h2>Scope of Work</h2>
       <p>Outline the specific tasks and deliverables that will be provided as part of the software development project.</p>
       
       <h2>Timeline</h2>
        <p>Provide an estimated timeline for the completion of the project, including key milestones and deadlines.</p>

       <h2>Budget</h2>
        <p>Detail the estimated costs for the project, including development, testing, deployment, and any ongoing maintenance.</p>
      `,
    },
    {
      id: "project-proposal", 
      label: "Project Proposal", 
      imageUrl: "/project-proposal.svg",
      initialContent: `
      <h1>Project Proposal</h1>

      <h2>Introduction</h2>
      <p>Provide a brief introduction to the project, including its purpose and background context.</p>

      <h2>Objectives</h2>
      <p>Clearly define the main goals and objectives that the project aims to achieve.</p>

      <h2>Problem Statement</h2>
      <p>Explain the problem or need that this project is intended to address.</p>

      <h2>Proposed Solution</h2>
      <p>Describe the proposed approach or solution to solve the identified problem.</p>

      <h2>Scope</h2>
      <p>Outline what is included and excluded in the project to set clear expectations.</p>

      <h2>Methodology</h2>
      <p>Explain the methods, tools, and technologies that will be used to execute the project.</p>

      <h2>Timeline</h2>
      <p>Provide a schedule with key phases, milestones, and deadlines.</p>

      <h2>Resources Required</h2>
      <p>List the human resources, tools, technologies, and materials needed.</p>

      <h2>Budget</h2>
      <p>Estimate the total cost required to complete the project.</p>

      <h2>Expected Outcomes</h2>
      <p>Describe the expected results, deliverables, and impact of the project.</p>

      <h2>Conclusion</h2>
      <p>Summarize the proposal and reinforce the value of the project.</p>
    `,
    },
    {
      id: "business-letter", 
      label: "Business letter", 
      imageUrl: "/business-letter.svg",
      initialContent: `
      <h1>Business Letter</h1>

      <p><strong>Sender's Address</strong><br/>
      [Your Address]</p>

      <p><strong>Date</strong><br/>
      [DD Month YYYY]</p>

      <p><strong>Recipient's Address</strong><br/>
      [Recipient Name]<br/>
      [Company Name]<br/>
      [Address]</p>

      <p><strong>Subject:</strong> [Brief Subject of the Letter]</p>

      <p>Dear [Recipient Name],</p>

      <p>
      Introduce yourself and state the purpose of the letter clearly and concisely.
      </p>

      <p>
      Provide the main details, explanation, or request. Keep the content formal, structured, and to the point.
      </p>

      <p>
      Mention any required actions, expectations, or deadlines if applicable.
      </p>

      <p>
      Thank the recipient and express willingness for further communication.
      </p>

      <p>Sincerely,<br/>
      [Your Name]<br/>
      [Your Position, if applicable]<br/>
      [Contact Information]</p>
    `,
    },
    {
      id: "resume", 
      label: "Resume", 
      imageUrl: "/resume.svg",
      initialContent: `
      <h1>[Your Full Name]</h1>
      <p>[Phone Number] | [Email Address] | [LinkedIn] | [GitHub/Portfolio]</p>

      <h2>Summary</h2>
      <p>
      Brief 2–3 line summary highlighting your skills, experience, and career goals.
      </p>

      <h2>Education</h2>
      <p>
      <strong>[Degree]</strong> – [College/University Name]<br/>
      [Year of Graduation] | [CGPA/Percentage]
      </p>

      <h2>Skills</h2>
      <p>
      <strong>Languages:</strong> [e.g., JavaScript, Java, Python]<br/>
      <strong>Technologies:</strong> [e.g., React, Node.js, MongoDB]<br/>
      <strong>Tools:</strong> [e.g., Git, Docker, VS Code]
      </p>

      <h2>Projects</h2>
      <p>
      <strong>[Project Name]</strong><br/>
      Brief description of the project, your role, and technologies used.<br/>
      [GitHub/Live Link]
      </p>

      <p>
      <strong>[Project Name]</strong><br/>
      Brief description of the project, your role, and technologies used.<br/>
      [GitHub/Live Link]
      </p>

      <h2>Experience</h2>
      <p>
      <strong>[Role]</strong> – [Company Name]<br/>
      [Duration]<br/>
      - Key responsibility or achievement<br/>
      - Key responsibility or achievement
      </p>

      <h2>Certifications</h2>
      <p>
      - [Certification Name]<br/>
      - [Certification Name]
      </p>

      <h2>Achievements</h2>
      <p>
      - [Achievement or award]<br/>
      - [Achievement or award]
      </p>

      <h2>Extracurricular Activities</h2>
      <p>
      - [Activity or role]<br/>
      - [Activity or role]
      </p>
    `,
    },
    {
      id: "cover-letter", 
      label: "Cover letter", 
      imageUrl: "/cover-letter.svg",
      initialContent: `
      <h1>Cover Letter</h1>

      <p>[Your Name]<br/>
      [Your Address]<br/>
      [Email Address] | [Phone Number]</p>

      <p>[Date]</p>

      <p>[Hiring Manager Name]<br/>
      [Company Name]<br/>
      [Company Address]</p>

      <p><strong>Subject:</strong> Application for [Job Role]</p>

      <p>Dear [Hiring Manager Name],</p>

      <p>
      I am writing to express my interest in the [Job Role] position at [Company Name]. I am currently [your status, e.g., a final-year IT student], and I am excited about the opportunity to contribute to your team.
      </p>

      <p>
      I have experience with [key skills/technologies], and I have worked on projects such as [project name or type], where I [mention impact or achievement briefly].
      </p>

      <p>
      I am particularly interested in this role because [reason related to company or role]. I believe my skills in [relevant skills] make me a strong candidate for this position.
      </p>

      <p>
      I would welcome the opportunity to discuss how I can contribute to your team. Thank you for your time and consideration.
      </p>

      <p>Sincerely,<br/>
      [Your Name]</p>
    `,
    },
    {
      id: "letter", 
      label: "Letter", 
      imageUrl: "/letter.svg",
      initialContent: `
      <h1>Letter</h1>

      <p>[Your Name]<br/>
      [Your Address]<br/>
      [City, State, ZIP Code]<br/>
      [Email Address] | [Phone Number]</p>

      <p>[Date]</p>

      <p>[Recipient Name]<br/>
      [Recipient Address]<br/>
      [City, State, ZIP Code]</p>

      <p><strong>Subject:</strong> [Purpose of the Letter]</p>

      <p>Dear [Recipient Name],</p>

      <p>
      I hope this message finds you well. I am writing to inform/request/discuss [mention the purpose clearly].
      </p>

      <p>
      Provide the main details of your message. Explain the situation, request, or information in a clear and structured manner.
      </p>

      <p>
      Mention any required actions, deadlines, or next steps if applicable.
      </p>

      <p>
      Thank you for your time and consideration. I look forward to your response.
      </p>

      <p>Sincerely,<br/>
      [Your Name]</p>
    `,
    },
]
