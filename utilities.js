
function filterFunction(value, index, array) {
    return !isNaN(value) && (array[index] !== "");  
}

function mapFunction(value) {
    return parseInt(value)
}

function sortAscendingFunction(firstValue, secondValue){
    return firstValue - secondValue;
}

function clearContent(divID){
    let content = document.getElementById(divID);
    while (content.firstChild){
        content.removeChild(content.firstChild);
    }
}

function createTable(array, rowNumbers, columnNumbers){
    clearContent("resultContainer");
    clearContent("emptyMessageParagraph");
    let myTable = document.createElement("table");
    let index = 0;
    let row = myTable.insertRow();
    for(let number of array){
        let cell = row.insertCell();
        cell.innerHTML = number;
        index++;
        if(index%columnNumbers === 0){
            row = myTable.insertRow();
        }
    }
    if(index % 5 !== 0){
        let emptyCells = index % 5;
        while (emptyCells%5!==0){
            row.insertCell();
            emptyCells += 1;
        }
    }
    let headerMessage = document.createElement("p");
    headerMessage.innerHTML = "Sort Result";
    document.getElementById("resultContainer").appendChild(headerMessage);
    document.getElementById("resultContainer").appendChild(myTable);
}

function sortButtonClicked() {
        let content = document.getElementById("arrayTextArea").value;
        let array = content.split(" ");
        array = array.filter(filterFunction).map(mapFunction).sort(sortAscendingFunction);
        if(Object.keys(array).length === 0){
            let message = "Make sure that you have at least one number!";
            document.getElementById("emptyMessageParagraph").innerHTML = message;
            return;
        }
        createTable(array, Object.keys(array).length / 5, 5);
}