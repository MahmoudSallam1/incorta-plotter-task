# INCORTA | Data Plotter App

## Introduction

The Incorta Data Visualization App is a frontend application that enables users to analyze their data through interactive line charts. Users can drag and drop dimension and measure columns into designated boxes to create customized line charts. The app ensures that each dimension box contains only one column, while the measures box can accommodate multiple columns. Once both boxes are filled, a line chart is automatically generated, with the X-axis representing dimension data values and the Y-axis representing measure data values corresponding to the dimension values.

## Features

- Drag and drop dimension columns into the "Dimension" box.
- Drag and drop measure columns into the "Measures" box.
- Limit of one column per dimension box and multiple columns per measures box.
- Clear functionality to reset both the "Dimension" and "Measures" boxes.
- Automatic generation of a line chart when both boxes are filled.

## Technologies Used

- **Frontend**: React.js for building the user interface
- **Build Tool**: Vite for fast and efficient development
- **Data Visualization**: Recharts generating the line chart
- **Drag and Drop**: react-beautiful-dnd for handling drag and drop functionality
- **Styling**: Tailwind CSS for styling the user interface

## Deployment
https://incorta-plotter-task.vercel.app/

## Installation

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm or yarn

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository:

```bash
git clone https://github.com/MahmoudSallam1/incorta-plotter-task.git
cd incorta-plotter-task

npm install
# or
yarn install

npm run dev
# or
yarn dev

```
### Contact Me

For inquiries or support, please contact our team at hi@msallam.me

