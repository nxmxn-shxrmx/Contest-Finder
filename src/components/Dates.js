const Dates = (prop)=>{
    const date = new Date(prop.name)
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    var dateString = y+'-'+ (m <= 9 ? '0' + m : m)+'-'+(d <= 9 ? '0' + d : d) +' '+ date.toTimeString().slice(0,8);
    const current = new Date();
    if(current>date)
        dateString ='-'
    return dateString
}
export default Dates