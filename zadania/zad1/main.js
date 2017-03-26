var Auction = (function(json){

    function Auction(json) {
        this.name = json.name;
        this.price = json.price;
    }
    
    Auction.prototype.toTableRow = function(){
        return "<tr><td>"
        +this.name
        +"</td><td>"
        +this.price
        +"</td></tr>"
    }
    return Auction;
})();

var ListOfAuctions = (function(){

    function ListOfAuctions(){
        this.auction = [];
    }
    ListOfAuctions.prototype.addAuction = function(json) {
        this.auction.push(new Auction(json));
    }

    ListOfAuctions.prototype.toTable = function(){
        var table = "<table><tr><th>Name</th><th>Price</th></tr>";
        for(var i = 0; i < this.auction.length; i++){
            table += this.auction[i].toTableRow();
        }
        table += "</table>";
        return table;
    }
    return ListOfAuctions;
})();

function processing() {
    var listOfAuctions = new ListOfAuctions();
    for (var i=0; i<auctions.length; i++) {
        listOfAuctions.addAuction(auctions[i]);
    };
    var context = document.getElementById('table');
    context.innerHTML = listOfAuctions.toTable();
};
