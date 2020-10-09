var iFrameContent = document.querySelector('iframe');

var settings = {
    mode: 'cors',
    credentials: 'include',
    cache: 'default',
    headers: {
        'Access-Control-Allow-Origin':'*'
    }
};

fetch(iFrameContent.src, settings)
    .then(response =>  response.text())                      //bringt HTML ins Log und auf die Seite
    .then(function (data) {
        var myDiv = document.createElement('div');
        myDiv.innerHTML = data;

        document.querySelector('.render-wrapper').appendChild(myDiv);
    })

