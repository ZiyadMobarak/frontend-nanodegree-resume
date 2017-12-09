/*
  Ziyad M. AlGhamdi
  Here will be the resume content (objects)
*/

var lastTimeCVUpdated = "10/Dec/2017";

var bio = {
  "name": "Ziyad M. AlGhamdi",
  "role": "Software Engineer",

  "contacts": {
    "mobile": "+966547777844",
    "email": "ZiyadMobarak@Gmail.com",
    "github": "ZiyadMobarak",
    "twitter": "@ZiyadMobarak",
    "blog": "ziyadmobarak.github.io",
    "location": "Dhahran, Saudi Arabia"
  },

  "welcomeMessage": "Welcome to my resume :) (UPDATED AT: " + lastTimeCVUpdated + ")",

  "skills": [
    "programming",
    "Teamwork",
    "Team Leadership",
    "Project Planning",
    "Research"
  ],

  "biopic": "images/myPic.jpg",

  display: function() {
    //Display name and my role
    var HTMLheaderNameFormatted = HTMLheaderName.replace("%data%", bio.name);
    var HTMLheaderRoleFormatted = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(HTMLheaderRoleFormatted);
    $("#header").prepend(HTMLheaderNameFormatted);

    //Display all available contact information
    var formattedContact = "";
    Object.keys(bio.contacts).forEach(function(key, index) {
      formattedContact = HTMLcontactGeneric.replace("%contact%", key);
      formattedContact = formattedContact.replace("%data%", bio.contacts[key]);
      $("#topContacts").append(formattedContact);
    });

    //Display my picture and the welcoming message
    var HTMLbioPicFormatted = HTMLbioPic.replace("%data%", bio.biopic);
    var HTMLwelcomeMsgFormatted = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(HTMLbioPicFormatted);
    $("#header").append(HTMLwelcomeMsgFormatted);

    //Display the sckills
    var HTMLskillsStartFormatted = HTMLskillsStart;
    var HTMLskillsListFormatted = $(HTMLskillsStartFormatted);
    var formattedSkill = "";
    Object.keys(bio.skills).forEach(function(key, index) {
      formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
      HTMLskillsListFormatted.last().append(formattedSkill);
    });
    $("#header").append(HTMLskillsListFormatted);
  }
}

var education = {
  "schools": [{
    "name": "King Abdullah University of Science and Technology (KAUST)",
    "location": "Thuwal, Saudi Arabia",
    "degree": "Master's Degree",
    "majors": [
      "Computer Science"
    ],
    "dates": "Aug,2015 - Dec,2016",
    "url": "www.kaust.edu.sa"
  }, {
    "name": "King Fahd University of Petroleum and Minerals (KFUPM)",
    "location": "Dhahran, Saudi Arabia",
    "degree": "Bachelor's Degree",
    "majors": [
      "Software Engineering"
    ],
    "dates": "Sep,2010 - Aug,2015",
    "url": "www.kfupm.edu.sa"
  }],

  "onlineCourses": [{
    "title": "Front-End Web Developer Nanodegree",
    "school": "Udacity",
    "dates": "Nov,2016 - Feb,2017",
    "url": "https://www.udacity.com"
  }],

  display: function() {

    //From here we'll append the schools I've attended
    var HTMLschoolStartFormatted = "";
    var HTMLschoolEntry = "";
    var HTMLschoolNameFormatted = "";
    var HTMLschoolDegreeFormatted = "";
    var HTMLschoolNameDegree = "";
    var HTMLschoolDatesFormatted = "";
    var HTMLschoolLocationFormatted = "";
    var HTMLschoolMajorFormatted = "";
    Object.keys(education.schools).forEach(function(key, index) {
      HTMLschoolStartFormatted = HTMLschoolStart;
      HTMLschoolEntry = $(HTMLschoolStartFormatted);

      HTMLschoolNameFormatted = HTMLschoolName.replace("%data%", education.schools[index].name);
      HTMLschoolDegreeFormatted = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
      HTMLschoolNameDegree = HTMLschoolNameFormatted + HTMLschoolDegreeFormatted;
      HTMLschoolDatesFormatted = HTMLschoolDates.replace("%data%", education.schools[index].dates);
      HTMLschoolLocationFormatted = HTMLschoolLocation.replace("%data%", education.schools[index].location);
      Object.keys(education.schools[index].majors).forEach(function(majorKey, majorIndex) {
        HTMLschoolMajorFormatted = HTMLschoolMajor.replace("%data%", education.schools[index].majors[majorIndex]);
      });

      HTMLschoolEntry.append(HTMLschoolNameDegree);
      HTMLschoolEntry.append(HTMLschoolDatesFormatted);
      HTMLschoolEntry.append(HTMLschoolLocationFormatted);
      HTMLschoolEntry.append(HTMLschoolMajorFormatted);
      $("#education").append(HTMLschoolEntry);
    });

    //From here will start appending the online courses
    var HTMLonlineClassesFormatted = HTMLonlineClasses;
    $("#education").append(HTMLonlineClassesFormatted);
    var HTMLonlineTitleFormatted = "";
    var HTMLonlineSchoolFormatted = "";
    var HTMLschoolTitleFormatted = "";
    var HTMLonlineDatesFormatted = "";
    var HTMLonlineURLFormatted = "";
    Object.keys(education.onlineCourses).forEach(function(key, index) {
      HTMLonlineTitleFormatted = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);
      HTMLonlineSchoolFormatted = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
      HTMLschoolTitleFormatted = HTMLonlineTitleFormatted + HTMLonlineSchoolFormatted;
      HTMLonlineDatesFormatted = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
      HTMLonlineURLFormatted = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);

      HTMLschoolEntry = $(HTMLschoolStartFormatted);
      HTMLschoolEntry.append(HTMLschoolTitleFormatted);
      HTMLschoolEntry.append(HTMLonlineDatesFormatted);
      HTMLschoolEntry.append(HTMLonlineURLFormatted);
      $("#education").append(HTMLschoolEntry);
    });
  }
}

var work = {
  "jobs": [{
    "employer": "Saudi Aramco",
    "title": "IT Systems Analyst",
    "location": "Dhahran, Saudi Arabia",
    "dates": "Jul,2017 - Present",
    "description": "Responsible for establishing and maintaining corporate data repository designed to facilitate access, definition, security and integrity of structured data across the Upstream business."
  }, {
    "employer": "King Abdullah University of Science and Technology (KAUST)",
    "title": "Residential Assistant",
    "location": "Thuwal, Saudi Arabia",
    "dates": "Jul,2016 - Oct,2016",
    "description": "Responsible for solving urgent issues that arise in the residential zone, organizing activities, conducting inspections and write incident reports while upholding KAUST’s administrative and housing policies."
  }, {
    "employer": "Saudi Aramco",
    "title": "Internship Program",
    "location": "Dhahran, Saudi Arabia",
    "dates": "Jun,2014 - Aug,2014",
    "description": "Designed and implemented a feedback automation system to distribute and collect comments from all system proponents when necessary updates occur."
  }, {
    "employer": "King Fahd University of Petroleum and Minerals (KFUPM)",
    "title": "Teacher Assistant",
    "location": "Dhahran, Saudi Arabia",
    "dates": "Sep,2013 - May,2014",
    "description": "Graded homework assignments and exams, helped the students with their projects and discussed their performance during the course."
  }, {
    "employer": "Panda",
    "title": "Cashier",
    "location": "Dhahran, Saudi Arabia",
    "dates": "Jun,2011 - Sep,2011",
    "description": "Processed customers’ payments, processed exchange and refunds from customers and performed duties of customers service representative when needed."
  }, {
    "employer": "Dhahran Palace Hotel",
    "title": "Hotel Receptionist",
    "location": "Dhahran, Saudi Arabia",
    "dates": "Jun,2010 - Sep,2010",
    "description": "Maintained reservations records, and make sure that files are up to date."
  }],

  display: function() {
    var HTMLworkStartFormatted = HTMLworkStart;
    var HTMLworkEntry = $(HTMLworkStartFormatted);

    var HTMLworkEmployerFormatted = "";
    var HTMLworkTitleFormatted = "";
    var HTMLemployerTitleForammted = "";
    var HTMLworkDatesFormatted = "";
    var HTMLworkLocationFormatted = "";
    var HTMLworkDescriptionFormatted = "";
    Object.keys(work.jobs).forEach(function(key, index) {
      HTMLworkEmployerFormatted = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
      HTMLworkTitleFormatted = HTMLworkTitle.replace("%data%", work.jobs[index].title);
      HTMLemployerTitleForammted = HTMLworkEmployerFormatted + HTMLworkTitleFormatted;
      HTMLworkDatesFormatted = HTMLworkDates.replace("%data%", work.jobs[index].dates);
      HTMLworkLocationFormatted = HTMLworkLocation.replace("%data%", work.jobs[index].location);
      HTMLworkDescriptionFormatted = HTMLworkDescription.replace("%data%", work.jobs[index].description);
      HTMLworkEntry.append(HTMLemployerTitleForammted);
      HTMLworkEntry.append(HTMLworkDatesFormatted);
      HTMLworkEntry.append(HTMLworkLocationFormatted);
      HTMLworkEntry.append(HTMLworkDescriptionFormatted);
      $("#workExperience").append(HTMLworkEntry);
    });
  }
}

var projects = {
  "projects": [{
    "title": "BeBeCA: A Benchmark for Betweenness Centrality Approximation Algorithms on Large Graphs",
    "dates": "Aug,2016 - Mar,2017",
    //The description is too long so I had to break it into multiple lines
    "description": "Betweenness centrality quantifies the importance of graph nodes in a variety of applications including social, biological and communication networks. Its computation is very costly for large graphs; therefore, many approximate methods have been proposed. Given the lack of a golden standard, the accuracy of most approximate methods is evaluated on tiny graphs and is not guaranteed to be representative of realistic datasets that are orders of magnitude larger. In this paper, we develop BeBeCA, " +
      "a benchmark for betweenness centrality approximation methods on large graphs. Specifically: (i) We generate a golden standard by deploying a parallel implementation of Brandes algorithm using 96,000 CPU cores on a supercomputer to compute exact betweenness centrality values for several large graphs with up to 126M edges. (ii) We propose an evaluation methodology to assess various aspects of approximation accuracy, such as average error and quality of node ranking. (iii) We survey a large number of existing approximation methods and compare their performance and accuracy using our benchmark. (iv) We publicly share our benchmark, which includes the golden standard exact betweenness centrality values together with the scripts that implement our evaluation methodology; for researchers to compare their own algorithms and practitioners to select the appropriate algorithm for their application and data.",
    "images": [
      "images/BeBeCA_paper.png",
      "images/Betweenness.png"
    ]
  }],

  display: function() {
    var HTMLprojectStartFormatted = HTMLprojectStart;

    var HTMLprojectEntry = $(HTMLprojectStartFormatted);
    var HTMLprojectTitleFormatted = "";
    var HTMLprojectDatesFormatted = "";
    var HTMLprojectDescriptionFormatted = "";
    var HTMLprojectImageFormatted = "";
    Object.keys(projects.projects).forEach(function(key, index) {
      HTMLprojectEntry = $(HTMLprojectStartFormatted);

      HTMLprojectTitleFormatted = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
      HTMLprojectDatesFormatted = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
      HTMLprojectDescriptionFormatted = HTMLprojectDescription.replace("%data%", projects.projects[index].description);

      HTMLprojectEntry.append(HTMLprojectTitleFormatted);
      HTMLprojectEntry.append(HTMLprojectDatesFormatted);
      HTMLprojectEntry.append(HTMLprojectDescriptionFormatted);

      Object.keys(projects.projects[index].images).forEach(function(imageKey, imageIndex) {
        HTMLprojectImageFormatted = HTMLprojectImage.replace("%data%", projects.projects[index].images[imageIndex]);
        HTMLprojectEntry.append(HTMLprojectImageFormatted);
      });

      $("#projects").append(HTMLprojectEntry);
    });

  }
}


/*
  Here we will start building our resume
*/

//Take the required HTML element, format it with the required data and append it to the right DOM
bio.display(); // Call the function that will display the bio details
work.display(); //Call the function that will display the work details
projects.display(); //Call the function that will display the project sectinos
education.display(); //Cal the function that will display the education section

//The google map part
$("#mapDiv").append(googleMap);