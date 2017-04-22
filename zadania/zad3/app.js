var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');
keyups.throttleTime(500).map(function(x) {
        return q.val();
    })
    .switchMap(function(x) {
        return searchWikipedia(x)
    })
    .do(function(x) {
        console.log(x);
    })
    .subscribe(function(x) {
        $('#results').empty();
        for(var i=0; i<x[1].length; i++) 
        {
                $('#results').append(`<h3 style="color: #4f90b5; font-weight: bold">${x[1][i]}</h3><p>${x[2][i]}</p><a href="${x[3][i]}" target="_blank">${x[3][i]}</a><hr style="width: 100%; color: black; height: 1px; background-color:#4f90b5" />`);
        }
    });

function searchWikipedia(term) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}