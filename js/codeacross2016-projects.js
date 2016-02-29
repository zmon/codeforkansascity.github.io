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
    key: '1TaOFP1iQee6hIQ9A0bjZ6pVI937UK-5SMjVfIbuz2oc',
    callback: function (data, tabletop) {
        console.dir(data);
        for (var i in data) {
            var row = '';
            row += '<tr>';
            row += '<td>' + data[i]['Type'] + '</td>';
            row += '<td>' + data[i]['Project Name'] + '</td>';
            row += '<td>' + data[i]['Description'] + '</td>';
            row += '<td>' + data[i]['Primary Contact'] + '</td>';
            row += '</tr>';

            $('#projects > tbody:last').append(row);


        }
    },
    orderby: 'Type of Entity',
    simpleSheet: true
});


