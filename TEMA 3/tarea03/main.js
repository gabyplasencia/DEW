function openSecondPage() {
    let url = "http://127.0.0.1:5500/TEMA%203/tarea03/second.html";
    //el spec resize solo funciona en IE
    let features = "resize=no, height=900, width=700"
        
        window.open(url, "_blank", features);
}