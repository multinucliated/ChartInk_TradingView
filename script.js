// Get the tbody element where the rows are contained
var tbody = document.getElementById("DataTables_Table_0").tBodies[0];

// Loop through each row in the tbody
for (var i = 0; i < tbody.rows.length; i++) {
    var row = tbody.rows[i];

    // The second td contains the main stock link and symbol link
    var stockLink = row.cells[1].querySelector('a');
    var symbolLink = row.cells[2].querySelector('a');

    if (stockLink && symbolLink) {
        var stockSymbol = symbolLink.textContent.trim(); // Using the symbol for the URL

        // Update href for the stock name link
        stockLink.href = `https://www.tradingview.com/chart/?symbol=NSE:${stockSymbol}`;

        // Update href for the symbol link
        symbolLink.href = `https://www.tradingview.com/chart/?symbol=NSE:${stockSymbol}`;
    }

    // The fourth td contains multiple links; we only update the Point & Figure chart link
    var chartLink = row.cells[3].querySelector('a[title="Point & Figure charts"]');
    if (chartLink) {
        chartLink.href = `https://www.tradingview.com/chart/?symbol=NSE:${stockSymbol}`;
    }
}
