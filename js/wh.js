/* From http://www.nczonline.net/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/ */

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}


// Get Google Spreadsheet data

// https://docs.google.com/spreadsheets/d/1IFbDEk5cRKP3WuQX7gMl6XDxLYuVZ4eeq0XRluxqmEQ/edit#gid=669009687
//                                        \________________________  _______________/
//                                                                 \/
//                                                                key passed to tabletop
//                                                                to identify the spread sheet
//  NOTE:  You have to publish the spread sheet from
//         the File menu of the spread sheet.

// Please note that the column names in this spread sheet were defined by the Google Form that inserts data into it.


Tabletop.init({                                             // Requires js/tabletop.js
    key: '1GuEBBrZ3r79XR8QA36e1NDqZYcRGVQE9njCAgfnwapM',
    callback: function (data, tabletop) {

        var converter = new showdown.Converter();
        for (var i in data) {

            if ( data[i]['One Sentence Description'] == '' ) continue;
            var row = '';

            row += '        <div class="col-sm-3 col-md-6">';
            row += '                Title:' + data[i]['Title'] + '<br>';
            row += '                Members:' + data[i]['Lead'] + ', ' + data[i]['Final Team'] + '<br>';
            row += '                One Sentence Description:' + data[i]['One Sentence Description'] + '<br>';
            row += '                Screen Shot: Please email me one<br>';
            row += '                Lead:' + data[i]['Lead'] + '<br>';
            row += '                Email:' + data[i]['Lead Email'] + '<br>';
            row += '        </div>';


            $('#projects').append(row);


        }
    },
    orderby: 'Title',
    simpleSheet: true
});


