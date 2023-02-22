# Financial Tracking App
This is a financial tracking app built using React, npm, chart.js, and chakra ui. The app allows users to keep track of their income and expenses, with visual aids provided by chart.js and an appealing user interface thanks to chakra ui.
<br></br>

## Table of Contents

* [Deployed Page](#deployed-page)
* [Getting Started](#getting-started)
* [Usage](#usage)
* [Technologies](#technologies)
* [Process](#process)
* [Git Branching](#git-branching)
* [Credits](#credits)
* [License](#license)


## Deployed Page

* [Deployed Page Link](https://chic-swan-b48b65.netlify.app/)

    ![Deployed Page View showing welcome, signup button, and forms for income and expenses](/financial-tracking/src/images/Page%20overview%201.png)

    ![Continued Deployed Page View showing visuals using chart.js including donut breakdown of savings and line graph](/financial-tracking/src/images/Page%20Overview%202.png)

    

* [Git Page Link](https://github.com/LiliBear1/Financial-Tracking-App) 

## Getting Started

To get started, clone the repository and run npm install to install all necessary dependencies. Once that is complete, you can run the app locally by running npm start. The app will be available at http://localhost:3000.
<br></br>

## Usage 

The financial tracking app includes the following features:

* Add, edit, and delete income and expenses
* View all income and expenses in a table format
* Visual representation of income and expenses through chart.js

![Demo GIF of page](/financial-tracking/src/images/Demo%20Gif.gif)
<br></br>

### Income
The Income Form component allows users to add or edit their income. Users can input the source of their income and the amount. Once the form is submitted, the new income will be added to the table below.

![Income Form](/financial-tracking/src/images/Income%20Form.png)
<br></br>

### Income Table
The Income Table component displays a table of all the user's income, including the source and amount. Users can delete any income entry by clicking on the respective icon in the table.

![Income Table](/financial-tracking/src/images/Income%20Table.png)

Future enhancement options will include having a date stamp and edit option.
<br></br>

### Expenses
The Expense Form component allows users to add their expenses. Users can input the expense category and the amount. Once the form is submitted, the new expense will be added to the table below.

![Expenses Form](/financial-tracking/src/images/Expenses%20Form.png)
<br></br>

### Expense Table
The Expense Table component displays a table of all the user's expenses, including the category and amount. Users can delete any expense entry by clicking on the respective icon in the table.

![Expenses Table](/financial-tracking/src/images/Expenses%20Table.png)

Future enhancement options will include having a date stamp and edit option.
<br></br>

### Donut Chart
The Chart component displays a visual representation of the user's income and expenses. The chart is created using chart.js and displays the user's income and expenses as a donut chart as well as a corresponding line graph below, this will adjust once the user has entered data over a period of time.

![Donuts...mmmm Donuts](/financial-tracking/src/images/Donuts.png)
<br></br>


### Sign Up
The Sign Up option at the top of the page allows users to create a new account. Users will need to input their email address and a password, and confirm their password to create an account. 

![Signup Button under welcome and instructions](/financial-tracking/src/images/Signup%20with%20instructions.png)

![Signup form](/financial-tracking/src/images/Signup%20Form.png)

<br></br>

### Dark Mode
We have included an additional Dark Mode feature for those who prefer to live life on the dark side.

![Dark Mode Page Gif](/financial-tracking/src/images/Dark%20Mode.gif)
<br></br>

### Navigation Bar
The Navigation Bar allows users to individually select the income and expense form as well as view the savings, this may be helpful for users who don't like seeing too much on one screen or find it distracting.

![Nav Bar](/financial-tracking/src/images/NavBar.png)
<br></br>

## Technologies

 The app utilizes the following technologies and libraries:
 
 * React
 * npm
 * Chart.js
 * Chakra ui
 * Bootstrap
 * Netlify and Netlify Forms
 <br></br>


## Process

This project follows an agile dvelopment process, we broke down the project into smaller, more manageable pieces and each piece was worked on idividually to help ensure the project was developed in a systematic and efficient way.
<br></br>

### Roadmaps, Wireframes, Standups and the MVP
At the very start of the project our aim was to have an MVP in place by a set date. In order to do this, we made sure we had a roadmap to follow and developed a wireframe for our project.  This kept us on track and allowed us to work quickly and efficiently as well as towards a goal of developing the MVP. 

We kept notes on what had been achieved in the previous day so that we could look back at this as well as the Roadmap to measure our progress and we discussed these in our standups including outlining any bugs or issues we may be facing. 

The wireframe helped us plan out our builds better as we had an idea of how we wanted the page to look.

![Roadmap](/financial-tracking/src/images/FinTrack_Roadmap.png)

![Wireframe](/financial-tracking/src/images/Wireframe.png)

![Standup Notes Example](/financial-tracking/src/images/Standup.png)
<br></br>

### Github Projects

We used Github Projects to allow us to create cards for each feature or issue to give us an overview of the projects process and help us manage our workflow.

![PSnippet of Github Projects, used to follow Kanban and Agile working](/financial-tracking/src/images/Kanban.png)
<br></br>

### Git Branching

All collaborators used git branching to work on features and issues seperately and we collectively reviewed and merged to ensure our codebase was always stable and easily rolled back if necessary.
<br></br>


## Credits

Team:

* [Lili Begum](https://github.com/LiliBear1) 

* [Shannon Yap](https://github.com/damnsemicolon) 

* [Najma Alibhai](https://github.com/Najma53) 

* [Yu Chen](https://github.com/cherryyeer) 
<br></br>

2022 Trilogy Education Services, LLC

A massive thank you to our course instructor, Philip Howley as well as our TAs - Nic Catania, Brooke Love, Diego Marrs and Jaytee Padilla for helping with all the troubleshooting as well as building out our skillset.
<br></br>

## License
An [MIT license](https://choosealicense.com/licenses/mit/) was used.
