var url = new URL('https://api.nytimes.com/svc/books/v3/lists/overview.json');
    var user_param = {
                     'published_date' : "2011-05-19", 
                     'api-key': "616db80ea28941bf9ebe50fb3963ee62"
                    };
    url.search = new URLSearchParams(user_param); //URL is constructed taking into account the request parametrs
    fetch(url, {method:"GET"})
    .then((request) => request.json())
    .then((data) => data.results.lists.map(function(element){
        return (element.display_name + ' --- ' + element.books.length);
    }))
    .then(array => array.forEach(value => console.log(value)));