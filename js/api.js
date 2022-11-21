const options = {
	method: 'GET',
	headers: {
        'X-RapidAPI-Key': '981ffffa74mshfed9f07f9edb519p12a2f1jsnf7afc17035b6',
		'X-RapidAPI-Host': 'countries-states-cities-dataset.p.rapidapi.com'
		
	}
};
let URL = 'https://countries-states-cities-dataset.p.rapidapi.com/list-countries-states-cities'
fetch( URL, options)
	.then(response => response.json())
	.then(data => {
        data.data.result.data.map(item => {
            console.log(item.name);
            $('#pais').append('<option>'+item.name+'</option>')
        });
    })
let URL2 = 'https://countries-states-cities-dataset.p.rapidapi.com/list-cities'
fetch( URL2, options)
	.then(response => response.json())
	.then(data => {
        data.data.result.data.map(item => {
            console.log(item.name);
            $('#ciudad').append('<option>'+item.name+'</option>')
        });
    })
	.catch(err => console.error(err));