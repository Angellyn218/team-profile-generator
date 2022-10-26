function renderEmployees(team) {
    let employees = ``;
    for (let i = 0; i < team.length; i++) {
        let third = ``;
        if (team[i].getRole() == "Manager") {
            third = `Office Number: ${team[i].officeNumber}`;
        } else if (team[i].getRole() == "Engineer") {
            third = `Github: <a href="${team[i].getGithub()}" class="card-link" target="_blank">${team[i].github}</a>`;
        } else {
            third = `School: ${team[i].school}`
        }
        const str = `           <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">${team[i].getName()}</h5>
                        <h6 class="card-subtitle">${team[i].getRole()}</h6>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${team[i].getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}" class="card-link" target="_blank">${team[i].getEmail()}</a></li>
                            <li class="list-group-item">${third}</li>
                        </ul>
                    </div>
                </div>`
        employees += str;
        employees += `\n\t`
    }
    return employees;
}

function renderTeamSection(team) {
    const employeesEl = renderEmployees(team);
    return `<div class="row align-items-center justify-content-evenly team">
    ${employeesEl}
            </div>`
}

function generateHTML(team) {
    const teamSectEl = renderTeamSection(team);
    return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <header class="jumbotron my-team">
            <h1 class="text-center py-20">My Team</h1>
        </header>
        <div class="container">
            <!-- Content here -->
            ${teamSectEl}
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
      </body>
    </html>`
}

module.exports = generateHTML