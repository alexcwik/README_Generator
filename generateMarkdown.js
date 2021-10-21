// function to generate markdown for README

function generateMarkdown(data) {
    return `# ${data.title}


    ## Table of Contents:
  1. [GitHub](#Github) 
  2. [Title](#Title)
  3. [Description](#UDescription)  
  4. [Usage](#Usage)
  5. [Contributing](#Contributing)
  6. [Tests](#Tests)
  7. [License](#License)
  8. [E-mail](#E-mail)



  ## GitHub
${data.github} 

  ## Title
${data.title}

  ## Description
${data.description}

  ## Usage
${data.usage}

  ## Contributing
${data.contributing}

  ## Tests
${licenseBadge(data)}

  ## License
${data.license}

  ## E-mail
${data.email}`
}
  module.exports = generateMarkdown;