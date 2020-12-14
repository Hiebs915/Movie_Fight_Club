const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'e05dbd4',
            s: 'avengers'
        }
    });
    console.log(response.data);
}

fetchData();
