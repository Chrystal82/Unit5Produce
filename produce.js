//*********************************************************
//****Assignment 5 Section 1
//*********************************************************

var produceList = [];
var producePrices = [];

produceList.push("bananas 0.59");
produceList.push("grapes 2.99");
produceList.push("apples 1.49");
produceList.push("pears 1.39");
produceList.push("lettuce 0.99");
produceList.push("onions 0.79");
produceList.push("potatoes 0.59");
produceList.push("peaches 1.59");

var fileName = 'ProducePrice.txt';
var myRecord = produceList.join('\n');

// Use GET to fetch file content
fetch(fileName, {
    method: 'GET',
})
    .then(response => response.text())
    .then(data => {
        console.log("Section 1:");
        console.log("There are " + FileLineCount(data) + " products in the file.");
        console.log();

        // Modify content and use POST to save back
        return fetch(fileName, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: myRecord,
        });
    })
    .then(() => {
        console.log("Section 2:");
        console.log("There are " + FileLineCount(myRecord) + " products in the file.\n");

        // Continue to Section 3 after Section 2 completes
        return fetch(fileName);
    })
    .then(response => response.text())
    .then(data => {
        producePrices = data.split('\n');
        var lineCounter = 0;
        console.log("Section 3:");
        while (lineCounter < producePrices.length) {
            console.log(producePrices[lineCounter]);
            lineCounter++;
        }
        console.log("There are " + producePrices.length + " products in the producePrices list.");
    });

function FileLineCount(data) {
    var tempList = data.split('\n');
    return tempList.length;
}
