

// Individual movies
let timer;

getData = async (name) =>{
    try{
        let res = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=d31fda52&`);
        let data = await res.json();
        console.log("single movie",data);
        return data;

    }
    catch(err){
        console.log("err", err);
    }
}

appendMovies = (data) => {

    document.getElementById("individual").innerHTML = null;
    let {Title} = data;
    let {Plot} = data;
    let {Genre} = data;
    let {Released} = data;
    let {Runtime} = data;
    let {Poster} = data;
    let {Country} = data;

    let title_append = document.createElement("p");
    title_append.innerHTML = `Title: ${Title}`;

    let plot = document.createElement("p");
    plot.innerHTML = `Plot: ${Plot}`;

    let poster = document.createElement("img");
    poster.src = Poster;
    poster.setAttribute("class", "img-fluid camera-img");
    // image.style.width = "350"
    poster.style.boxshadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";


    let genre = document.createElement("p");
    genre.innerHTML = `Genre: ${Genre}`;

    let released = document.createElement("p");
    released.innerHTML = `Release date: ${Released}`;

    let runtime = document.createElement("p");
    runtime.innerHTML = `Runtime: ${Runtime}`;

    let country = document.createElement("p");
    country.innerHTML = `Country: ${Country}`;

    let box1 = document.createElement("div");
    let box2 = document.createElement("div");
    let box3 = document.createElement("div");
   

    box1.append(poster);
    box1.setAttribute("class", "col-lg-5 text-center");
    box2.append(title_append, plot, genre, released, runtime, country);
    box2.setAttribute("class", "col-lg-7 text-white text-lg-left text-center mission-text");
    // box2.setAttribute("id", "movieDetail");
    box3.setAttribute("class", "row align-items-center");
    box3.append(poster, box2);
   

    document.getElementById("individual").append(box3);

}


// Multiple movies
getData2 = async (name) =>{
    try{
        console.log("getData2");
        let res = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=d31fda52&`);
        let data2 = await res.json();
        console.log("recommended movies",data2);
        return data2;
    }
    catch(err){
        console.log("err", err);
    }
}

appendMovies2 = (data) => {
    let dataSearched = data.Search;
    document.getElementById("gridRecommended").innerHTML = null;

    dataSearched.map(({Title, Poster}) =>{
        let title_append = document.createElement("p");
        title_append.innerHTML = `Title: ${Title}`;
        let poster = document.createElement("img");
        poster.src = Poster;
        poster.style.boxshadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";

        let box1 = document.createElement("div");

        box1.setAttribute("id", "gridIndividual");
        box1.append(poster, title_append);

        document.getElementById("gridRecommended").append(box1);

    })
}

main = async () =>{ 
    try{
        let movieName = document.getElementById("movieName").value;
        let res = await getData(movieName);

        let data = await res;
        appendMovies(data);

        let res2 = await getData2(movieName);
        let data2 = await res2;

        appendMovies2(data2);
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
// main2 = async () =>{ 
//     try{
//         let movieName = document.getElementById("movieName").value;
//         let res = await getData2(movieName);

//         let data = await res;
//         appendMovies2(data);
//     }
//     catch(err){
//         console.log("err", err);
//     }
// }

// // debouncing

// debounce2 = (fn, delay) =>{
//     console.log("debounce");
//     if (timer){
//         clearTimeout(timer);
//     }
//     timer = setTimeout(() => fn(), delay);
// }


