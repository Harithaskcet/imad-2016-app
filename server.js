var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne={
    title: 'Article one | Haritha Kumar ',
    heading: 'Article one',
    date: 'september 24,2016',
    content: ` <p>
                    THIS IS MY ARTICLE ONE WEB PAGE.THIS IS MY ARTICLE ONE WEB PAGE.THIS IS MY ARTICLE ONE WEB PAGE
                    THIS IS MY CONTENT.THIS IS MY ARTICLE ONE WEB PAGE.THIS IS MY ARTICLE ONE WEB PAGE.THIS IS MY ARTICLE ONE WEB PAGE
                    THIS IS MY CONTENT.THIS IS MY ARTICLE ONE WEB PAGE
                    THIS IS MY CONTENT
                    THIS IS MY CONTENT.THIS IS MY ARTICLE ONE WEB PAGE.THIS IS MY ARTICLE ONE WEB PAGE
                    THIS IS MY CONTENT
                    THIS IS MY CONTENT
                    THIS IS MY CONTENT.THIS IS MY ARTICLE ONE WEB PAGE
                    THIS IS MY CONTENT.THIS IS MY ARTICLE ONE WEB PAGE
                    THIS IS MY CONTENT.THIS IS MY ARTICLE ONE WEB PAGE
                    THIS IS MY CONTENT
                   
                </p> `
    
};

function createTemplate(data){
    var title= data.title;
    var heading= data.heading;
    var date= data.date;
    var content= data.content;
    var htmlTemplate=`
            <html>
        <head>
            <title>
                ${title};
            </title>
            <meta name="viewport" contents="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
             <style>
            
        </style>
        </head>
       
        <body>
            <div class="container">
                <div>
                    <a href='/'>Home</a>
                </div>
                <hr/>
                <h2>
                    ${heading};
                </h2>
                <div>
                    ${date};
                    
                </div>
                <div>
                    ${content};
                </div>
            </div>
        </body>
    </html>
    
    `;
    return htmlTemplate;
}    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleone',function (req, res){
   res.send(createTemplate(articleOne));
});

app.get('/articletwo',function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
});

app.get('/articlethree',function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'articlethree.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
