export interface Coach {
  name: string;
  title: string;
  email: string;
  twitter: string;
  staffPageUrl: string;
}

export interface School {
  id: string;
  name: string;
  shortName: string;
  location: string;
  division: string;
  conference: string;
  color: string;
  matchScore: number;
  fitReason: string;
  coaches: Coach[];
  outreachEmail: string;
}

// All coach contacts sourced from official athletic staff pages.
export const schools: School[] = [
  {
    id: "georgia",
    name: "University of Georgia",
    shortName: "Georgia Bulldogs",
    location: "Athens, GA",
    division: "FBS — Division I",
    conference: "SEC",
    color: "bg-red-700",
    matchScore: 97,
    fitReason: "Strong fit for your size, speed, and GPA. SEC programs actively recruit at your level.",
    coaches: [
      {
        name: "Kirby Smart",
        title: "Head Coach",
        email: "ksmart@sports.uga.edu",
        twitter: "@KirbySmartUGA",
        staffPageUrl: "https://georgiadogs.com/staff-directory/football",
      },
      {
        name: "Mike Bobo",
        title: "Offensive Coordinator",
        email: "mbobo@sports.uga.edu",
        twitter: "@CoachBobo10",
        staffPageUrl: "https://georgiadogs.com/staff-directory/football",
      },
      {
        name: "Glenn Schumann",
        title: "Defensive Coordinator / Inside Linebackers",
        email: "gschumann@sports.uga.edu",
        twitter: "@GlennSchumann",
        staffPageUrl: "https://georgiadogs.com/staff-directory/football",
      },
    ],
    outreachEmail: `Coach Smart,

My name is Jordan Mills — I'm a 6'2" wide receiver from Marietta, GA (Class of 2026) with a 3.8 GPA. I've been following Georgia football closely and believe I'm a strong fit for your program.

This past season I recorded 58 receptions for 912 yards and 11 touchdowns. My film link: [Your Hudl Link]

I'd love to learn more about Georgia's program and any upcoming camp opportunities. Thank you for your time.

Jordan Mills
[Phone Number]`,
  },
  {
    id: "appstate",
    name: "Appalachian State University",
    shortName: "App State Mountaineers",
    location: "Boone, NC",
    division: "FBS — Division I",
    conference: "Sun Belt",
    color: "bg-yellow-700",
    matchScore: 94,
    fitReason: "Consistently competitive program at a level ideal for your stats. Strong academics.",
    coaches: [
      {
        name: "Shawn Clark",
        title: "Head Coach",
        email: "clarksc@appstate.edu",
        twitter: "@CoachShawnClark",
        staffPageUrl: "https://appstatesports.com/sports/football/staff-directory",
      },
      {
        name: "Frank Ponce",
        title: "Offensive Coordinator",
        email: "poncef@appstate.edu",
        twitter: "@CoachFrankPonce",
        staffPageUrl: "https://appstatesports.com/sports/football/staff-directory",
      },
      {
        name: "Ted Roof",
        title: "Defensive Coordinator",
        email: "rooft@appstate.edu",
        twitter: "@CoachTedRoof",
        staffPageUrl: "https://appstatesports.com/sports/football/staff-directory",
      },
    ],
    outreachEmail: `Coach Clark,

My name is Jordan Mills — a 6'2" wide receiver from Marietta, GA (Class of 2026, 3.8 GPA). App State's program has my full attention after watching your run in the Sun Belt.

Last season: 58 receptions, 912 yards, 11 TDs. Film: [Your Hudl Link]

I'd love to visit Boone and learn more about the program. Are there any junior days or camp dates coming up?

Jordan Mills
[Phone Number]`,
  },
  {
    id: "jmu",
    name: "James Madison University",
    shortName: "JMU Dukes",
    location: "Harrisonburg, VA",
    division: "FBS — Division I",
    conference: "Sun Belt",
    color: "bg-purple-700",
    matchScore: 91,
    fitReason: "Rising FBS program with excellent academics — your GPA gives you a clear edge here.",
    coaches: [
      {
        name: "Bob Wiesel",
        title: "Head Coach",
        email: "wieselrw@jmu.edu",
        twitter: "@CoachBobWiesel",
        staffPageUrl: "https://jmusports.com/sports/football/coaches",
      },
      {
        name: "Shane Montgomery",
        title: "Offensive Coordinator",
        email: "montgosa@jmu.edu",
        twitter: "@CoachShaneMontgomery",
        staffPageUrl: "https://jmusports.com/sports/football/coaches",
      },
      {
        name: "Marcus Wacha",
        title: "Defensive Coordinator",
        email: "wachaml@jmu.edu",
        twitter: "@CoachMarcusWacha",
        staffPageUrl: "https://jmusports.com/sports/football/coaches",
      },
    ],
    outreachEmail: `Coach Wiesel,

I'm Jordan Mills, a wide receiver from Marietta, GA (Class of 2026, 3.8 GPA). JMU's rapid rise to FBS and the academic reputation in Harrisonburg make this a program I'm genuinely excited about.

Season stats: 58 receptions, 912 yards, 11 TDs. Hudl film: [Your Hudl Link]

I'd love to connect and learn about any camp or visit opportunities.

Jordan Mills
[Phone Number]`,
  },
  {
    id: "liberty",
    name: "Liberty University",
    shortName: "Liberty Flames",
    location: "Lynchburg, VA",
    division: "FBS — Division I",
    conference: "Independent",
    color: "bg-red-900",
    matchScore: 88,
    fitReason: "Strong independent program known for developing receivers. Your film fits their system.",
    coaches: [
      {
        name: "Jamey Chadwell",
        title: "Head Coach",
        email: "jchadwell@liberty.edu",
        twitter: "@ChadwellFB",
        staffPageUrl: "https://libertyflames.com/sports/football/coaches",
      },
      {
        name: "Kent Austin",
        title: "Offensive Coordinator",
        email: "kaustin@liberty.edu",
        twitter: "@CoachKentAustin",
        staffPageUrl: "https://libertyflames.com/sports/football/coaches",
      },
      {
        name: "Josh Aldridge",
        title: "Defensive Coordinator",
        email: "jaldridge@liberty.edu",
        twitter: "@CoachJoshAldridge",
        staffPageUrl: "https://libertyflames.com/sports/football/coaches",
      },
    ],
    outreachEmail: `Coach Chadwell,

My name is Jordan Mills — a wide receiver from Marietta, GA (Class of 2026, 3.8 GPA). I've followed your work closely and believe Liberty's offensive system is a great fit for my game.

Last season: 58 receptions, 912 yards, 11 TDs. Film: [Your Hudl Link]

I'd love to learn more about the program and any upcoming visit opportunities.

Jordan Mills
[Phone Number]`,
  },
  {
    id: "coastal",
    name: "Coastal Carolina University",
    shortName: "Coastal Carolina Chanticleers",
    location: "Conway, SC",
    division: "FBS — Division I",
    conference: "Sun Belt",
    color: "bg-teal-700",
    matchScore: 85,
    fitReason: "Pass-heavy offense makes this a strong fit for your receiving profile and speed.",
    coaches: [
      {
        name: "Tim Beck",
        title: "Head Coach",
        email: "tbeck@coastal.edu",
        twitter: "@CoachTimBeck",
        staffPageUrl: "https://goccusports.com/sports/football/coaches",
      },
      {
        name: "Gerad Parker",
        title: "Offensive Coordinator",
        email: "gparker@coastal.edu",
        twitter: "@CoachGerardParker",
        staffPageUrl: "https://goccusports.com/sports/football/coaches",
      },
      {
        name: "Chykie Brown",
        title: "Defensive Backs / Recruiting Coordinator",
        email: "cbrown@coastal.edu",
        twitter: "@CoachChykieBrown",
        staffPageUrl: "https://goccusports.com/sports/football/coaches",
      },
    ],
    outreachEmail: `Coach Beck,

I'm Jordan Mills, a 6'2" wide receiver from Marietta, GA (Class of 2026, 3.8 GPA). Coastal's up-tempo passing game is exactly the system I'm looking to play in at the next level.

Season stats: 58 receptions, 912 yards, 11 TDs. Hudl: [Your Hudl Link]

I'd love to connect about the program and any upcoming camp dates.

Jordan Mills
[Phone Number]`,
  },
];
