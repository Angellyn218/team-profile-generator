
function renderTeamSection(team) {
    const employeesEl = renderEmployees();
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