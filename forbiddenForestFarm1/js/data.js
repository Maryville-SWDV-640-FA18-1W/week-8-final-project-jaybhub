$(document).ready(function(){
    var template = $("#spring").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        item: [
            {
                name: "Asparagus",
                description: "Worth the smell!",
                image: "images/asparagus.jpg"
            },
            {
                name: "Carrots",
                description: "What's up, Doc?",
                image: "images/carrots.jpg"
            },
            {
                name: "Garlic",
                description: "Vampires welcome!",
                image: "images/garlic.jpg"
            },
            {
                name: "Spinach",
                description: "Not just for Popeye!",
                image: "images/spinach.jpg"
            }
        ],
    })
    $("#spring-target").html(rendered);
});

$(document).ready(function(){
    var template = $("#summer").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        item: [
            {
                name: "Blueberries",
                description: "Great in pies!",
                image: "images/blueberries.jpg"
            },
            {
                name: "Green Beans",
                description: "Not great in pies!",
                image: "images/green_beans.jpg"
            },
            {
                name: "Peaches",
                description: "Just like the song!",
                image: "images/peaches.jpg"
            },
            {
                name: "Tomatoes",
                description: "Call for special green tomato orders!",
                image: "images/tomatoes.jpg"
            }
        ],
    })
    $("#summer-target").html(rendered);
});

$(document).ready(function(){
    var template = $("#fall").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        item: [
            {
                name: "Apples",
                description: "Get 'em before the deer!",
                image: "images/apples.jpg"
            },
            {
                name: "Hazelnuts",
                description: "They're nutty!",
                image: "images/hazelnuts.jpg"
            },
            {
                name: "Pears",
                description: "The best fruit ever!",
                image: "images/pears.jpg"
            },
            {
                name: "Radishes",
                description: "You have to try at least one!",
                image: "images/radishes.jpg"
            }
        ],
    })
    $("#fall-target").html(rendered);
});

$(document).ready(function(){
    var template = $("#winter").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        item: [
            {
                name: "Turnips",
                description: "Turnip the flavor!",
                image: "images/turnips.jpg"
            },
            {
                name: "Winter Squash",
                description: "It feels sqashy out here!",
                image: "images/squash.jpg"
            },
            {
                name: "Apparel",
                description: "Check out our store!",
                image: "images/apparel.jpg"
            }
        ],
    })
    $("#winter-target").html(rendered);
});

$(document).ready(function(){
    var template = $("#aboutUs-script").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        about: [
            {
                name: "Alicia & Jay",
                address: "1500 State Street Road",
                city: "Belleville",
                state: "IL",
                zip: "62220",
                phone: "618-xxx-xxxx",
                image: "images/us.jpg"
            }
        ],
    })
    $("#aboutUs-target").html(rendered);
});

$(document).ready(function(){
    var template = $("#us-picture-script").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        about: [
            {
                image: "images/us.jpg"
            }
        ],
    })
    $("#us-picture-target").html(rendered);
});