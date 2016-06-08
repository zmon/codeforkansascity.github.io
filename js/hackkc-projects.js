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

            if ( data[i]['Display'] != 'Y' ) continue;
            var row = '';

            row += '        <div class="col-sm-3 col-md-6">';
            row += '            <div class="card">';
            row += '                <div class="card-header">';
            row += '                    <a href="#"><span style="text-align: center;"';
            row += '                                                            class="card-title">' + data[i]['Title'] + '</span></a>';
            row += '                </div>';
            row += '                <div style="background-color: #fff; padding-top: 4px;" class="card-content">';
            row += '                    <p>' + converter.makeHtml(data[i]['Short Desciption']) + '</p>';
       //     row += '                    <p>Team: ' + converter.makeHtml(data[i]['Team']) + '</p>';
       //     row += '                    <p>Needs:' + converter.makeHtml(data[i]['Needs']) + '</p>';

            row += '                </div>';
            row += '';
            row += '';
            row += '                <div style="background-color: #fff" class="card-action">';
            row += '                    &nbsp;';
            row += '                </div>';
            row += '            </div>';
            row += '        </div>';


            $('#projects').append(row);


        }
    },
    orderby: 'Type of Entity',
    simpleSheet: true
});


