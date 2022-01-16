module.exports = (team) => {
    return `
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="team-area col-12 d-flex justify-content-center">
                  ${team.map(teamMember => {
        if (teamMember.officeNumber != null) {
            return `
                          <div class="card" style="width: 18rem;">
                            <div class="card-body">
                            <h5>${teamMember.name}</h5>
                                <h5 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h5>
                                <p class="card-text">(${teamMember.id}, ${teamMember.officeNumber}, <a href="mailto:${teamMember.email}">${teamMember.email}</a>)</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            </div>
                          `
        } if (teamMember.github != null) {
            return `<div class="card" style="width: 18rem;">
                          <div class="card-body">
                          <h5>${teamMember.name}</h5>
                            <h5 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h5>
                            <p class="card-text">(${teamMember.id}, <a href="https://github.com/${teamMember.github}" target="_blank" rel="noopener noreferrer">${teamMember.github}</a>,<a href="mailto:${teamMember.email}">${teamMember.email}</a>)</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>
                          `
        } if (teamMember.school != null) {
            return `<div class="card" style="width: 18rem;">
                          <div class="card-body">
                          <h5>${teamMember.name}</h5>
                            <h5 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h5>
                            <p class="card-text">(${teamMember.id}, ${teamMember.school}, <a href="mailto:${teamMember.email}">${teamMember.email}</a>)</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>
                          `
        }
    })}
              </div>
          </div>
      </div>
  </body>
  </html>
      `;
};
