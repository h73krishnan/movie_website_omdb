function searchMovie(){
    let movieName = document.getElementById("movieName").value;
    // console.log(movieName);

    const url = `https://www.omdbapi.com/?apikey=d31fda52&s=${movieName}`
    // console.log(url);

    async function getData(){
        try{
            let res = await fetch(url);
            let data = await res.json();
            append(data);
            // console.log(data);
            // console.log(data.Search[4]);
        }
        catch (err){
            // console.log(err);
            setTimeout(() =>{
                let image = document.createElement('img');
                image.src = "https://media2.giphy.com/media/5QJd1IC6yBLumMhmtu/200w.webp?cid=ecf05e47qx69qvsrfonwgyikfw383ds9vdvx80wicp5801y3&rid=200w.webp&ct=g"
                document.getElementById("movieDisplay").innerHTML = "";
                document.getElementById("movieDisplay").append(image);

            })
        }
    
    }
    getData();
}

function append(data){
    document.getElementById("movieDisplay").innerHTML = "";
    // console.log(data.Search);
    let dataArr = data.Search;
    dataArr.map((elem) =>{
        // console.log(elem.Title);
        let box = document.createElement("div");

        let title = document.createElement("p");
        title.innerHTML = elem.Title;

        let year = document.createElement("p");
        year.innerHTML = elem.Year;

        let poster = document.createElement("img");
        poster.src = elem.Poster;

        let imdbId = elem.imdbID;
        console.log("id", imdbId);
        
        getId();

        async function getId(){
            try{
                let res = await fetch(imdbId);
                let rate = await res.json()

                console.log(rate);
            }
            catch(err){
                console.log(err);
            }
        }

        box.append(title, year, poster)
        // document.getElementById("movieDisplay").append(box)

    })
}


