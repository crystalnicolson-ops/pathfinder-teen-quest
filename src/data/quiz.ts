import { Question, PersonalityResult } from '@/types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    text: "What type of project gets you most excited?",
    options: [
      { text: "Designing something new and unique", personality: "Creative Innovator" },
      { text: "Solving complex puzzles or problems", personality: "Analytical Problem Solver" },
      { text: "Helping others achieve their goals", personality: "People-Focused Helper" },
      { text: "Leading a team to success", personality: "Leadership Organizer" },
      { text: "Organizing and perfecting details", personality: "Detail-Oriented Planner" },
      { text: "Building or fixing things with my hands", personality: "Hands-On Builder" }
    ]
  },
  {
    id: 2,
    text: "In group work, you naturally tend to:",
    options: [
      { text: "Come up with creative ideas", personality: "Creative Innovator" },
      { text: "Research and analyze information", personality: "Analytical Problem Solver" },
      { text: "Make sure everyone feels included", personality: "People-Focused Helper" },
      { text: "Take charge and delegate tasks", personality: "Leadership Organizer" },
      { text: "Keep everyone on schedule", personality: "Detail-Oriented Planner" },
      { text: "Handle the technical/practical work", personality: "Hands-On Builder" }
    ]
  },
  {
    id: 3,
    text: "Your ideal work environment would be:",
    options: [
      { text: "A colorful studio or creative space", personality: "Creative Innovator" },
      { text: "A quiet office with multiple monitors", personality: "Analytical Problem Solver" },
      { text: "An open space where I can interact with people", personality: "People-Focused Helper" },
      { text: "A professional meeting room", personality: "Leadership Organizer" },
      { text: "An organized, systematic workspace", personality: "Detail-Oriented Planner" },
      { text: "A workshop or lab with tools", personality: "Hands-On Builder" }
    ]
  },
  {
    id: 4,
    text: "What motivates you most?",
    options: [
      { text: "Creating something that inspires others", personality: "Creative Innovator" },
      { text: "Discovering how things work", personality: "Analytical Problem Solver" },
      { text: "Making a positive impact on people's lives", personality: "People-Focused Helper" },
      { text: "Achieving ambitious goals", personality: "Leadership Organizer" },
      { text: "Getting things done efficiently", personality: "Detail-Oriented Planner" },
      { text: "Seeing tangible results from my work", personality: "Hands-On Builder" }
    ]
  },
  {
    id: 5,
    text: "When facing a challenge, you prefer to:",
    options: [
      { text: "Think outside the box for creative solutions", personality: "Creative Innovator" },
      { text: "Research and analyze all options", personality: "Analytical Problem Solver" },
      { text: "Ask others for their input and collaborate", personality: "People-Focused Helper" },
      { text: "Create a strategic plan and execute it", personality: "Leadership Organizer" },
      { text: "Break it down into manageable steps", personality: "Detail-Oriented Planner" },
      { text: "Jump in and start experimenting", personality: "Hands-On Builder" }
    ]
  }
];

export const personalityResults: Record<string, PersonalityResult> = {
  "Creative Innovator": {
    type: "Creative Innovator",
    description: "You're imaginative, artistic, and love bringing new ideas to life. You thrive in environments that value creativity and original thinking.",
    careers: [
      {
        title: "UX/UI Designer",
        description: "Design user-friendly digital experiences for apps and websites",
        averageSalary: "$75,000 - $120,000",
        jobGrowth: "13% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=UX+UI+designer"
      },
      {
        title: "Marketing Creative Director",
        description: "Lead creative campaigns and brand strategies for companies",
        averageSalary: "$85,000 - $150,000",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=creative+director+marketing"
      }
    ],
    colleges: [
      {
        name: "Rhode Island School of Design",
        location: "Providence, RI",
        programs: ["Graphic Design", "Digital Media", "Industrial Design"],
        ranking: "#1 in Art & Design",
        website: "https://www.risd.edu/"
      },
      {
        name: "Parsons School of Design",
        location: "New York, NY",
        programs: ["Communication Design", "Product Design", "Fashion Design"],
        ranking: "#3 in Art & Design",
        website: "https://www.newschool.edu/parsons/"
      },
      {
        name: "California Institute of the Arts",
        location: "Valencia, CA",
        programs: ["Graphic Design", "Animation", "Fine Arts"],
        ranking: "#6 in Art & Design",
        website: "https://calarts.edu/"
      }
    ]
  },
  "Analytical Problem Solver": {
    type: "Analytical Problem Solver",
    description: "You excel at logical thinking, data analysis, and systematic problem-solving. You love diving deep into complex challenges.",
    careers: [
      {
        title: "Data Scientist",
        description: "Analyze complex data to help companies make informed decisions",
        averageSalary: "$95,000 - $165,000",
        jobGrowth: "35% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=data+scientist"
      },
      {
        title: "Software Engineer",
        description: "Design and develop software applications and systems",
        averageSalary: "$85,000 - $150,000",
        jobGrowth: "25% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=software+engineer"
      }
    ],
    colleges: [
      {
        name: "Massachusetts Institute of Technology",
        location: "Cambridge, MA",
        programs: ["Computer Science", "Data Science", "Engineering"],
        ranking: "#2 overall",
        website: "https://www.mit.edu/"
      },
      {
        name: "Stanford University",
        location: "Stanford, CA",
        programs: ["Computer Science", "Statistics", "Mathematics"],
        ranking: "#6 overall",
        website: "https://www.stanford.edu/"
      },
      {
        name: "Carnegie Mellon University",
        location: "Pittsburgh, PA",
        programs: ["Computer Science", "Information Systems", "Statistics"],
        ranking: "#25 overall",
        website: "https://www.cmu.edu/"
      }
    ]
  },
  "People-Focused Helper": {
    type: "People-Focused Helper",
    description: "You're empathetic, communicative, and passionate about helping others succeed and feel supported.",
    careers: [
      {
        title: "School Counselor",
        description: "Guide students through academic and personal challenges",
        averageSalary: "$48,000 - $75,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=school+counselor"
      },
      {
        title: "Human Resources Specialist",
        description: "Support employees and help companies build positive workplace cultures",
        averageSalary: "$55,000 - $85,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=human+resources+specialist"
      }
    ],
    colleges: [
      {
        name: "University of Pennsylvania",
        location: "Philadelphia, PA",
        programs: ["Psychology", "Social Work", "Education"],
        ranking: "#8 overall",
        website: "https://www.upenn.edu/"
      },
      {
        name: "Vanderbilt University",
        location: "Nashville, TN",
        programs: ["Human Development", "Psychology", "Education"],
        ranking: "#13 overall",
        website: "https://www.vanderbilt.edu/"
      },
      {
        name: "University of Michigan",
        location: "Ann Arbor, MI",
        programs: ["Psychology", "Social Work", "Public Policy"],
        ranking: "#21 overall",
        website: "https://umich.edu/"
      }
    ]
  },
  "Leadership Organizer": {
    type: "Leadership Organizer",
    description: "You're a natural leader who excels at planning, organizing, and motivating teams to achieve ambitious goals.",
    careers: [
      {
        title: "Project Manager",
        description: "Lead teams and coordinate resources to complete complex projects",
        averageSalary: "$75,000 - $125,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=project+manager"
      },
      {
        title: "Business Analyst",
        description: "Help organizations improve efficiency and solve business problems",
        averageSalary: "$70,000 - $110,000",
        jobGrowth: "14% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=business+analyst"
      }
    ],
    colleges: [
      {
        name: "University of Pennsylvania (Wharton)",
        location: "Philadelphia, PA",
        programs: ["Business Administration", "Management", "Economics"],
        ranking: "#1 in Business",
        website: "https://www.wharton.upenn.edu/"
      },
      {
        name: "Northwestern University (Kellogg)",
        location: "Evanston, IL",
        programs: ["Business", "Industrial Engineering", "Economics"],
        ranking: "#3 in Business",
        website: "https://www.northwestern.edu/"
      },
      {
        name: "University of Virginia",
        location: "Charlottesville, VA",
        programs: ["Business", "Systems Engineering", "Commerce"],
        ranking: "#4 in Business",
        website: "https://www.virginia.edu/"
      }
    ]
  },
  "Detail-Oriented Planner": {
    type: "Detail-Oriented Planner",
    description: "You excel at organization, attention to detail, and systematic approaches. You ensure nothing falls through the cracks.",
    careers: [
      {
        title: "Financial Analyst",
        description: "Analyze financial data and help organizations make sound financial decisions",
        averageSalary: "$65,000 - $100,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=financial+analyst"
      },
      {
        title: "Operations Manager",
        description: "Oversee daily operations and ensure efficient business processes",
        averageSalary: "$70,000 - $115,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=operations+manager"
      }
    ],
    colleges: [
      {
        name: "University of Chicago",
        location: "Chicago, IL",
        programs: ["Economics", "Business", "Mathematics"],
        ranking: "#6 overall",
        website: "https://www.uchicago.edu/"
      },
      {
        name: "New York University (Stern)",
        location: "New York, NY",
        programs: ["Finance", "Business", "Economics"],
        ranking: "#30 overall",
        website: "https://www.nyu.edu/"
      },
      {
        name: "University of Texas at Austin",
        location: "Austin, TX",
        programs: ["Business", "Accounting", "Finance"],
        ranking: "#38 overall",
        website: "https://www.utexas.edu/"
      }
    ]
  },
  "Hands-On Builder": {
    type: "Hands-On Builder",
    description: "You love working with your hands, building things, and seeing tangible results from your efforts. You're practical and resourceful.",
    careers: [
      {
        title: "Civil Engineer",
        description: "Design and oversee construction of infrastructure projects",
        averageSalary: "$70,000 - $110,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=civil+engineer"
      },
      {
        title: "Mechanical Engineer",
        description: "Design and develop mechanical systems and devices",
        averageSalary: "$75,000 - $120,000",
        jobGrowth: "7% (as fast as average)",
        indeedLink: "https://www.indeed.com/jobs?q=mechanical+engineer"
      }
    ],
    colleges: [
      {
        name: "Georgia Institute of Technology",
        location: "Atlanta, GA",
        programs: ["Mechanical Engineering", "Civil Engineering", "Industrial Design"],
        ranking: "#38 overall",
        website: "https://www.gatech.edu/"
      },
      {
        name: "Purdue University",
        location: "West Lafayette, IN",
        programs: ["Engineering", "Construction Management", "Technology"],
        ranking: "#49 overall",
        website: "https://www.purdue.edu/"
      },
      {
        name: "Virginia Tech",
        location: "Blacksburg, VA",
        programs: ["Engineering", "Architecture", "Construction"],
        ranking: "#75 overall",
        website: "https://www.vt.edu/"
      }
    ]
  }
};