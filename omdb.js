let timer;


getData = async (name) =>{
    try{
        let res = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=d31fda52&`);
        let data = await res.json();
        // console.log(data);
        return data;

    }
    catch(err){
        console.log("err", err);
    }
}

appendMovies = (data) => {

    // data.forEach(({Title}) =>{
    let {Title} = data;
    let {Plot} = data;
    let {Rating} = data;
    let {Genre} = data;
    let {Released} = data;
    let {Runtime} = data;
    let {Poster} = data;
    let {Country} = data;

    let title_append = document.createElement("p");
    title_append.innerHTML = Title;

    let plot = document.createElement("p");
    plot.innerHTML = Plot;

    let poster = document.createElement("img");
    poster.src = Poster;

    let genre = document.createElement("p");
    genre.innerHTML = Genre;

    let released = document.createElement("p");
    released.innerHTML = Released;

    let runtime = document.createElement("p");
    runtime.innerHTML = Runtime;

    let country = document.createElement("p");
    country.innerHTML = Country;

    let box1 = document.createElement("div");
    let box2 = document.createElement("div");
    let box3 = document.createElement("div");

    box1.append(poster);
    box1.setAttribute("id", "poster");
    box2.append(title_append, plot, genre, released, runtime, country);
    box2.setAttribute("id", "movieDetail");
    box3.append(title_append);
    box3.setAttribute("id", "topTitle");

    document.getElementById("individual").append(box1, box2);

}
main = async () =>{ 
    try{
        let movieName = document.getElementById("movieName").value;
        let res = await getData(movieName);

        let data = await res;
        appendMovies(data);
    }
    catch(err){
        console.log("err", err);
    }
}

// debouncing

debounce = (fn, delay) =>{
    if (timer){
        clearTimeout(timer);
    }
    timer = setTimeout(() => fn(), delay);
}