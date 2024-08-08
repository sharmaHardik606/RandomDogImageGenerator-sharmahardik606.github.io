const URL = "https://dog.ceo/api/breeds/image/random";
const dogImage = document.querySelector('#dog-image');
const button = document.querySelector('#button');

const getImage = async()=>{
    console.log("Getting data....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    console.log(data.message);
    dogImage.src = data.message;
}
button.addEventListener("click",getImage);
getImage();