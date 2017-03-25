function Auction(json){
    var self = this;
    self.name = json.name;
    self.price = json.price;

    self.toTableRow = function(){
        return "<tr><td>"
        +self.name
        +"</td><td>"
        +self.price
        +"</td></tr>"
    }
}

function ListOfAuctions(){
    var auction = [];
    var self = this;

    self.addAuction = function(json) {
        auction.push(new Auction(json));
    }

    self.toTable = function(){
        var table = "<table><tr><th>Name</th><th>Price</th></tr>";
        for(var i = 0; i < auction.length; i++){
            table += auction[i].toTableRow();
        }
        table += "</table>";
        return table;
    }
}

function processing() {
    var listOfAuctions = new ListOfAuctions();
    for (var i=0; i<auctions.length; i++) {
        listOfAuctions.addAuction(auctions[i]);
    };
    var context = document.getElementById('table');
    context.innerHTML = listOfAuctions.toTable();
};
