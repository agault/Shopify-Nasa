// LOAD IMAGE OF DAY USING WINDOW.ONLOAD
window.onload = async function sendApiRequest(){
    let API_KEY = "sc8Hq15wiwenc91shRaQVeciQEyOXK2C0bijv6Fw";
    let response = await fetch(`https://api.nasa.gov/planetary/apod/?api_key=${API_KEY}`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    useApiData(data)//send obj response to other function to be turned into HTML
}
//USE API DATA FOR PIC OF DAY
function useApiData(data){
    // Check if video
    if(data.media_type == "video"){
        document.getElementById('image').innerHTML = `<a href="${dataD.url}">`;
        document.getElementById('title').innerHTML += data.title;
        document.getElementById('date').innerHTML += data.date;
        document.getElementById('description').innerHTML = data.explanation;
    }else{
        document.getElementById('description').innerHTML = data.explanation;
        document.getElementById('image').innerHTML +=`<img class="image" src="${data.url}">`;
        document.getElementById('title').innerHTML += data.title;
        document.getElementById('date').innerHTML += data.date;
    }

}

//SEARCH BY DATE
var inputButton=document.getElementById('getDateValue');
inputButton.onclick=sendApiRequestForDate;
//FETCH DATA BASED ON date
async function sendApiRequestForDate(){
    var inputDate =document.getElementById('searchDate').value;
    let API_KEY = "sc8Hq15wiwenc91shRaQVeciQEyOXK2C0bijv6Fw";
    //check date, make sure no null value entered
    if(inputDate == undefined||inputDate==null||inputDate==''){
        var errorMessage = document.getElementById('errMsg');
        errorMessage.innerHTML ="Please Provide a valid date";
        errorMessage.style.color = "red";
        return false;
    }
    else{
        var errorMessage = document.getElementById('errMsg');
        errorMessage.style.display = "none";let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${inputDate}`);
        let dataD = await response.json();
        useApiDataDate(dataD)
    }
}
//USE API DATA BY DATE ANDf unction 
function useApiDataDate(dataD){
console.log(dataD);
console.log(dataD.media_type);
var mediaType=dataD.media_type;
    if(mediaType == "video"){
        document.getElementById('descriptionDate').innerHTML = dataD.explanation;
        document.getElementById('titleDate').innerHTML += dataD.title;
        document.getElementById('imageDate').innerHTML = `<a href="${dataD.url}">View Video Here</a>`;
        document.getElementById('dateDate').innerHTML += dataD.date;
    }else{
        document.getElementById('descriptionDate').innerHTML = dataD.explanation;
        document.getElementById('titleDate').innerHTML += dataD.title;
        console.log(dataD.explanation);
        document.getElementById('imageDate').innerHTML +=`<img class="marsIMG" src="${dataD.url}">`;
        document.getElementById('dateDate').innerHTML += dataD.date;
    }
}

// If mars rover API selected:
//simple for loop to loop through all photos 

// function useApiDataD2(dataD2){
//     for (var photos in dataD2) {
//         var list = "";
//         if (Object.prototype.hasOwnProperty.call(dataD2, photos)) {
//             var photo=dataD2[photos];
//             console.log(photo[2])
//             for(i=0; i<=photo.length; i++){
//                 list = photo[i];
//                 console.log(list)
//                 document.getElementById('imageDate').innerHTML +=`<img class="marsIMG" src="${list.img_src}">`;
//             }
//         } 
//     }
// }