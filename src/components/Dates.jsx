const Dates = (prop)=>{
    const kolkataDate = new Date(prop.name);
    const kolkataOptions = { timeZone: "Asia/Kolkata" };
    var kolkataTimeString = kolkataDate.toLocaleString("en-IN", kolkataOptions);
    const current = new Date();
    if(current>kolkataDate)
        kolkataTimeString='-'
    return kolkataTimeString
}
export default Dates