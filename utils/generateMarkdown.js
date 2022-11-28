// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if(license !== 'None' ){
      return `![##License](https://img.shields.io/badge/license-${license}-blue.svg)`;
      
  }
  return '';
}
//  Create a function that returns the license link
// If there is no license, return an empty string


function renderLicenseLink(license) {
  if(license!== 'None'){
      return `\n* [License](#license)\n`;
  }
  return '';

}
//  Create a function that returns the license section of README
// If there is no license, return an empty string


function renderLicenseSection(license) {
  if(license!== 'None'){
      return `##License

  This project is licensed under ${license} license`
  }
}

//  Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [license](#license)
* [Test](#Test)
* [Question](#Question)

## Description
${data.description}

## Installation   
${data.Installation}

## Usage
${data.usage} 

## Contributions
${data.Contribution}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Test
${data.test}

## Question
If you have any questions contact me at [GitHub](https://github.com/${data.github})
or email me at ${data.email}
`;

}
module.exports = generateMarkdown;



