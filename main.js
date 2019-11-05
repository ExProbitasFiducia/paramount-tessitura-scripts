const fetch = require('node-fetch');


(async () => {

    const response = await fetch("https://tessituranetwork.com/");
    console.log(await response.text());

})();
