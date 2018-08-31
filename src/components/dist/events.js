const context = {
    items: [
        { name: "Priyank Chopra's Wedding", place: "Mumbai, India",
         date: "15.09.2018", src: "images/weddingevent.PNG", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." },
        { name: "New Year Salsa Night @Munich", place: "Munich, Germany", date: "31.12.2018", src: "images/salsaevent.PNG", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." },
        { name: "InterCultural Food Festival 2018", place: "Berlin, Germany", date: "01.10.2018", src: "images/dininghallevent.PNG", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." }
    ]
};

Handlebars.registerHelper('getImage', function () {
    var sourceImage = Handlebars.escapeExpression(this.src);
    return new Handlebars.SafeString(
        sourceImage
    );
});
Handlebars.registerHelper('getLocation', function () {
    var place = Handlebars.escapeExpression(this.place);
    return new Handlebars.SafeString(
        place
    );
});
Handlebars.registerHelper('getDate', function () {
    var date = Handlebars.escapeExpression(this.date);
    return new Handlebars.SafeString(
        date
    );
});
Handlebars.registerHelper('getDescription', function () {
    var description = Handlebars.escapeExpression(this.description);
    return new Handlebars.SafeString(
        description
    );
});

Handlebars.registerHelper('eventTitle', function () {
    var eventName = Handlebars.escapeExpression(this.name),
        placeName = Handlebars.escapeExpression(this.place);
    return new Handlebars.SafeString(
        "<span style='bold'>" + eventName + " @" + placeName + "</span>"
    );
});

// const setData = (id,content,data) => {
//     document.getElementById(id).innerHTML = content(data);    
// } 

const eventHeadline = document.getElementById('event-template').innerHTML;

const headline = Handlebars.compile(eventHeadline);

//setData('event', headline, {content: "Hello Headline",level: 2});

document.getElementById('event').innerHTML = headline(context);