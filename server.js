let express = require('express');
let app = express();

app.use(express.static(__dirname+'/dist/covid-19-tracker'));

app.get('/*',(req, resp) => {
    resp.sendFile(__dirname+'/dist/covid-19-tracker/index/html');
});

app.listen(process.env.PORT || 8080);