# Dashboard Implementation
## Table of Contents
- [Overview](#overview)
- [Installation](#installation)
- [Approach](#Approach)
- [Challanges](#Challanges)
- [Assumptions](#Assumptions)
- [Screenshots](#Screenshots)

## Overview
This project focuses on developing a responsive dashboard using React. The dashboard is designed to lead users through a sequence of steps (Preliminary, Your Details, KYC, Parties, Claim, Review, and Payment), featuring a progress bar to display the completion status for each stage.



## Installation

This guide will take you through the steps needed to set up and run the website on your local machine. No prior knowledge of React.js and Tailwind.css.

## Step By Step Installation
### Step 1: Clone the Repository
First, you need to clone the repository from GitHub to your local machine. Open the terminal (Command Prompt on Windows) and run the following command:

    git clone https://github.com/Laxminarayan-Birle/Rise11Task.git

### Step 2: Navigate to the Project Directory
Change your directory to the project folder that you just cloned. In the terminal, run:

    cd Rise11/client

### Step 3: Install Node.js Dependencies
Your project uses Node.js packages, which are listed in the package.json file. You need to install these packages using npm, which is included with Node.js. Run the following command in the terminal:

    npm i

### Step 4: Run the Project
Use the following command to run the project.

### `npm start`

- Runs the app in the development mode.
- Open [localhost](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode. See the section about running tests for more information.

### `npm run build`

- Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

- The build is minified and the filenames include the hashes.
---
### Your app is ready !!!
---
## Approach
1. **Component-Based Architecture**: 
   - Divided the dashboard into reusable components such as Header, Cards, Cardcomponent and individual task components (ProgessBar, Sidebar).
   - Ensured each component has a clear responsibility and can be independently maintained.

2. **State Management**:
   - Used React's useState hook to manage the state of task completion.
   - Created a activeStep state array to keep track of which tasks have been completed.
   - Updated the state through the setActiveStep function, which progresses the task completion status and renders the corresponding task component dynamically.

3. **Responsive Design**:
   - Utilized CSS flexbox for flexible and responsive layouts.
   - Use tailwind CSS to  adjust styles for different screen sizes, ensuring the dashboard adapts seamlessly across desktop, tablet, and mobile views.
   - Tested the application on various devices to ensure consistent user experience.

4. **Dynamic Task Progression**:
   - Developed a system to conditionally render task components based on their completion status.
   - Updated the ProgressBar component to reflect the current progress visually.
   - Ensured that once a task is marked as completed, the next task becomes available for interaction.

## Challenges


1. **Responsive Design**:
   - **Challenge**: Ensuring the dashboard is visually appealing and functional across different screen sizes.
   - **Solution**: Implemented CSS flexbox for flexible layouts and media queries to handle various screen widths. Tested the application on multiple devices to ensure responsiveness.

4. **Task Completion Flow**:
   - **Challenge**: Ensuring that tasks must be completed in a linear sequence.
   - **Solution**: Managed task progression through state updates, ensuring each task is completed before the next one becomes available.

## Assumptions
1. **Icons are similar**:
   - Assumed that icons in the image and i am used in these project are similar.
1. **Linear Task Completion**:
   - Assumed that tasks need to be completed sequentially, and the next task becomes available only after the previous one is completed.

2. **Design Reference**:
   - Followed the provided screenshot as the primary design reference, interpreting the layout and styling details to ensure visual accuracy.

## Screenshots

### Desktop View 
![Desktop View](/images/DesktopView.png)

### Tablet View
![Project Screenshot](/images/TabletView.png)

### Mobile View
![Project Screenshot](/images/MobileView.png)