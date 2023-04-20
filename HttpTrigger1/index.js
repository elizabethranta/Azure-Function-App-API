module.exports = async function (context, req) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."; 

        //httpGet("https://official-joke-api.appspot.com/random_joke")

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: httpGet("https://official-joke-api.appspot.com/random_joke")
    };

    function httpGet(theUrl)
    {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
    }
}
