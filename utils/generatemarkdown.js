function generateMarkdown(data) {
    const avatar = `https://github.com/${data.username}.png?size=50`;
    const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;
    const licenseIcon = `http://img.shields.io/badge/license-${data.license}-brightgreen.svg`;
  
    return `
  ## ${data.title} 
  \n![${data.license}](${licenseIcon}) 
  ### Description
   *${data.description}*
    
  ### Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributors](#contributors)
  - [Details](#details)
  ### Installation
  Packages required to run this program are: ${data.installation}
  ### Usage
  Examples of how to use this program: ${data.usage}
  ### License
  ${data.license}
  ### Tests
  To test, run the following command: ${data.tests}
  ### Contributors
  ${data.Contribution}
  ### Contact
  \n![Badge](${gitHub}) 
  \nView the project in GitHub at: ${data.url}
  \nIf you have any questions, contact the author directly at ${data.email}.`
  
  }
  
  module.exports = generateMarkdown;