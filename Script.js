let preResult = $('#preResult')
    result = $('#result');
let operationSelected;

const clearBoth = () => {
    preResult.text('');
    result.text('0');
}

const operations = {
    plus: () => Number(preResult.text().slice(0, -1)) + Number(result.text()),
    minus: () => Number(preResult.text().slice(0, -1)) - Number(result.text()),
    divide: () => Number(preResult.text().slice(0, -1)) / Number(result.text()),
    times: () => Number(preResult.text().slice(0, -1)) * Number(result.text())
}

$('#resultButton').on('click', () => {
    result.text(preResult.text() ? operations[operationSelected]() : result.text())
    
    preResult.text('');
});

$('#clearButton').on('click', () => clearBoth());

$('#deleteButton').on('click', () => result.text(result.text().length <= 1 ? '0' : result.text().slice(0, -1)));

$('.operation').on('click', function () {
    preResult.text(preResult.text() ? operations[operationSelected]() + $(this).text()
        : result.text() + $(this).text());

    result.text('0');
    operationSelected = $(this).val();
});

$('.numberButton').on('click', function () {
    let thisNumber = $(this).val();

    if (thisNumber != '.') {
        if (thisNumber == '0' && result.text() == '0')
            result.text('0');
        else if (result.text() == '0')
            result.text(thisNumber);
        else
            result.text(result.text() + thisNumber);
    } else
        if (!result.text().includes('.'))
            result.text(result.text() + thisNumber);
});