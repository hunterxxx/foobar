// test data _ NOT NEEDED
var items = [
        { name: "Priyank Chopra's Wedding", place: "Mumbai, India", date: "15.09.2018", src: "components/img/weddingevent.PNG", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam erat, sed diam voluptua." },
        { name: "New Year Salsa Night @Munich", place: "Munich, Germany", date: "31.12.2018", src: "components/img/salsaevent.PNG", description: "Lorem ipsum dolor sit amet, consLorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." },
        { name: "InterCultural Food Festival 2018", place: "Berlin, Germany", date: "01.10.2018", src: "components/img/dininghallevent.PNG", description: "Lorem ipsum dolor sit asea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." },
        { name: "Bullet For My Valentine Live", place: "Zurich, Switzerland", date: "30.10.2018", src: "components/img/dininghallevent.PNG", description: "Lorem ipsum dolor sit asea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." },
        { name: "Test in Austria", place: "Salzburg, Austria", date: "01.10.2018", src: "components/img/dininghallevent.PNG", description: "Lorem ipsum dolor sit asea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." },
        { name: "Test in UK", place: "London, UK", date: "08.12.2018", src: "components/img/dininghallevent.PNG", description: "Lorem ipsum dolor sit asea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." },
        { name: "Test in Germany", place: "Berlin, Germany", date: "12.09.2018", src: "components/img/dininghallevent.PNG", description: "Lorem ipsum dolor sit asea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." }
]

// FROM HERE NEEDED
var value ="";
var key = "";
var arr;

// context = all Events
// searchIn = date, place, ...
// searchfor = searchterm; eg Salzburg

// function gives back an array that can be used for stuff
function eventfilter (data,searchIn,searchfor){ 
    
    value = searchfor;
    key = searchIn;
    arr = data;
    
    var arrById = arr.filter(filterByID);
    console.log(arrById);
}

function filterByID(arr1){
    console.log(key); //name
    console.log(value); //Germany

    if(arr1[key].indexOf(value)>=0){
        return true
    }
    return false
}

eventfilter(items, "name", "Test in Germany");