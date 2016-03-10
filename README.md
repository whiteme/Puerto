# puerto

## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      bootstrap/        --> bootstrap files
        css/            --> default stylesheet
        font/
        js
      imgages/          --> image files
      javascripts/      --> javascript files
        lib/
      views/
      api.js            --> route for serving JSON
      index.js          --> route for serving HTML pages and partials
    routes/
      index.js          --> main page for app
      game.js           --> gameboard page for app
    lib/                --> server express global file    
      puertoSocket.js
      player.js
      gameServer.js
      game.js
      module/
        buildings/
        plantations/
        roles/  
        

