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
              <div class="col-12 jumbotron bg-danger text-white mb-3 team-heading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container ">
      <div class="flex-row">
              <div class="team-area col-12 d-flex justify-content-center">
                  ${team.map(teamMember => {
        if (teamMember.officeNumber != null) {
            return `
                    <div class="card" style="width: 18rem;">
                        <div class="card-body text-center">
                        <h3 class="bg-primary text-white">${teamMember.name}</h3>
                        <h5 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h5>
                        <p class="card-text"><h5>ID:</h5>${teamMember.id} <h5>Office Number:</h5>${teamMember.officeNumber} <h5>Email:</h5><a href="mailto:${teamMember.email}">${teamMember.email}</a></p>
                        </div>
                    </div>
                          `
        } if (teamMember.github != null) {
            return `<div class="card" style="width: 18rem;">
                          <div class="card-body text-center">
                          <h3 class="bg-primary text-white">${teamMember.name}</h3>
                            <h5 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h5>
                            <p class="card-text"><h5>ID:</h5>${teamMember.id} <h5>Github:</h5><a href="https://github.com/${teamMember.github}" target="_blank" rel="noopener noreferrer">${teamMember.github}</a> <h5>Email:</h5><a href="mailto:${teamMember.email}">${teamMember.email}</a></p>
                          </div>
                        </div>
                          `
        } if (teamMember.school != null) {
            return `<div class="card" style="width: 18rem;">
                          <div class="card-body text-center">
                          <h3 class="bg-primary text-white">${teamMember.name}</h3>
                            <h5 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h5>
                            <p class="card-text"><h5>ID:</h5>${teamMember.id} <h5>University:</h5>${teamMember.school} <h5>Email:</h5><a href="mailto:${teamMember.email}">${teamMember.email}</a></p>
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
