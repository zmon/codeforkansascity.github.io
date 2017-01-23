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

//-    key: '1Dvb4LRZuFkghcQl50R_fSCjkFPoJSLVe8NXiyJyIy40',
//+    key: '1xmdxVbzT0XJMyvQbP4mIr01pwL5SRiR9L-RRY5L90W0',

Tabletop.init({                                             // Requires js/tabletop.js
    key: '1xmdxVbzT0XJMyvQbP4mIr01pwL5SRiR9L-RRY5L90W0',
    callback: function (data, tabletop) {

        var converter = new showdown.Converter();
        for (var i in data) {

            if ( data[i]['Display'] != 'Y' ) continue;
            var row = '';

            row += '<div class="col-md-12">';
            row += '<h2 style="font-size: 42pt">' + data[i]['Title'] + '</h2>';
            row += '                    <h3 style="font-size: 34pt">' + converter.makeHtml(data[i]['Short Desciption']) + '</h3>';

            row += '                    <h3 style="font-szie: 28pt">Lead: ' + data[i]['Lead'] + '</h3>';
            row += '</div>';
            row += '<div class="col-md-6">';
            row += '                    <h3 style="font-szie: 28pt">Team: ' + converter.makeHtml(data[i]['Team']) + '</h3>';
            row += '</div>';
            row += '<div class="col-md-6">';
            row += '                    <h3 style="font-szie: 28pt">Needs: ' + converter.makeHtml(data[i]['Needs']) + '</h3>';
            row += '</div>';
            row += '<div class="col-md-12">';
            row += '                    <h3 style="font-szie: 28pt">Slack: ' + data[i]['Slack'] + '</h3>';
            row += '                    <h3 style="font-szie: 28pt">Code: ' + data[i]['GitHub'] + '</h3>';
            row += '                    <h3 style="font-szie: 28pt">Site: ' + data[i]['Site'] + '</h3>';

            row += '<br><br><br><br>';
            row += '</div>';


            $('#projects').append(row);


        }
    },
    orderby: 'Type of Entity',
    simpleSheet: true
});


