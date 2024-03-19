class Cambio {
    constructor({
        code = "",
        codein = "",
        name = "",
        high = "",
        low = "",
        varBid = "",
        pctChange = "",
        bid = "",
        ask = "",
        timestamp = "",
        create_date = "",
    }) {
        this.code = code;
        this.codein = codein;
        this.name = name;
        this.high = high;
        this.low = low;
        this.varBid = varBid;
        this.pctChange = pctChange;
        this.bid = bid;
        this.ask = ask;
        this.timestamp = timestamp;
        this.create_date = create_date;
    }
}
export default Cambio;