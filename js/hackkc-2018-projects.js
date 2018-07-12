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
    key: '1NM12fWrilw6nN8fGmupNW3J0ZsHIdvvwfG_JVq10lFI', //   '1GuEBBrZ3r79XR8QA36e1NDqZYcRGVQE9njCAgfnwapM',
    callback: function (data, tabletop) {

        var converter = new showdown.Converter();
        for (var i in data) {
            if ( data[i]['Display'] != 'Y' ) continue;
            var row = '';

            row += '            <div class="collapsible-panel">';
            row += '                <h3 class="header">' + data[i]["Title"] + ' <span class="toggler">&#9660;</span></h3>';
            row += '                <div class="collapsible-panel-inner">';
            row += '                    <div class="collapsible-panel-content">';
            row += '                        <p>' + converter.makeHtml(data[i]['Desciption']) + '</p>';
            if ( data[i]['Languages']) {
                row += '<p>Languages: ' + data[i]['Languages'] + '<br>';
            }
            row += '                    </div>';
            row += '';
            row += '';
            row += '                <div class="collapsible-panel-footer">';

            if ( data[i]['Site']) {
                row += '<a href="' + data[i]['Site']+ '" target="_blank">' + 'Site' + '</a>';
            }

            row += '                    <div class="project-communication-links">';
            if ( data[i]['GitHub']) {
                row += '<a href="' + data[i]['GitHub']+ '" target="_blank">' + '<img width="16" height="16" src="../images/github.png"/>' + '</a>';
            }
            if ( data[i]['Slack ID']) {
                row += '<a href="https://codeforkc.slack.com/messages/' + data[i]['Slack ID'] + '" target="_blank"><img width="16" src="../images/slack.png"/></a>';
            }
            

            row += '                    &nbsp;';
            row += '                    </div>';
            row += '                </div>';
            row += '             </div>';
            row += '        </div>';


            $('#projects').append(row);
        }
    },
    orderby: 'Type of Entity',
    simpleSheet: true
});


