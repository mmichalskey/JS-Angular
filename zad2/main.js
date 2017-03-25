class Auction {
    constructor(json) {
        this.name = json.name;
        this.price = json.price;
    };
    toTableRow () {
        return `<tr><td>${this.name}</td><td>${this.price}</td></tr>`;
    };
}
class ListOfAuctions {
    constructor(){
        this.auction = [];
    };

    addAuction (json) {
           this.auction.push(new Auction(json));
    };
    
    toTable () {
        let table = "<table><tr><th>Name</th><th>Price</th></tr>";
        this.auction.forEach(element => table += element.toTableRow()); 
        table += "</table>";
        return table;
    };
}

function processing() {
    let listOfAuctions = new ListOfAuctions();
    auctions.forEach(element => listOfAuctions.addAuction(element));
    let context = document.getElementById('table');
    context.innerHTML = listOfAuctions.toTable();
};
