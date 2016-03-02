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
    key: '1kTdTYPWcwc6AluueuaqdZdebI-eyAU7NqWBWBo4gcRs',
    callback: function (data, tabletop) {
        console.dir(data);
        data.sort(function (a, b) {
            console.log(a);
            if (a['Curator of Dataset'] == b['Curator of Dataset']) {
                if (a['Title of Dataset'] < b['Title of Dataset']) {
                    return -1;
                } else {
                    if (a['Title of Dataset'] > b['Title of Dataset']) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            } else {
                if (a['Curator of Dataset'] < b['Curator of Dataset']) {
                    return -1;
                } else {
                    return 1;
                }
            }
        });
        for (var i in data) {
            if (data[i]['Display'] != 'Yes') continue;
            var row = '';
            row += '<tr>';
            row += '<td><a href="' + data[i]['Curator of Dataset URL'] + '">' + data[i]['Curator of Dataset'] + '<a/></td>';
            row += '<td><p class="project-list-norm"><a href="' + data[i]['URL of Dataset'] + '"><b>' + data[i]['Title of Dataset'] + '</b></a>:</p> ';
            row += marked(data[i]['Description of Dataset']) ;

            if ( data[i]['Format of Data'] != '' ) {
                row += '<div style="padding-left: 20px"><b>Format of Data:</b><br>' + marked(data[i]['Format of Data']) + '</div>';
            }

            if ( data[i]['Notes'] != '' ) {
                row += '<div style="padding-left: 20px"><b>Notes:</b><br>' + marked(data[i]['Notes']) + '</div>';
            }

            row += '</td>';

            row += '</tr>';

            $('#projects > tbody:last').append(row);


        }
    },
    orderby: 'Type ',
    simpleSheet: true
});


