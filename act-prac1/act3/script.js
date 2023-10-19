const image = document.getElementById('myFPImage');

const cambiaPic = () => {
    
    if (image.src.match("green")) {
    image.src = "http://myfpschool.com/wp-content/uploads/2016/06/myblack.jpeg";
    } else {
    image.src = "http://myfpschool.com/wp-content/uploads/2016/06/mygreen.jpeg";
    }
}