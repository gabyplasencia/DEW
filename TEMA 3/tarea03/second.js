const page = window.location.href;

const url = document.getElementById('url');
const protocol = document.getElementById('protocol');
const codeSiteName = document.getElementById('code-site-name');
const java = document.getElementById('java');

const setInfo = () => {
    const urlSite = new URL(page);
    const wholeUrl = urlSite.href;
    const protocolSite = urlSite.protocol;
    const codeName = urlSite.hostname;

    url.innerHTML = wholeUrl;
    protocol.innerHTML = protocolSite;
    codeSiteName.innerHTML = codeName;

    let javaEnable = navigator.javaEnable;

    if (javaEnable) {
    java.innerHTML = "JAVA esta disponible en esta ventana"
    } else {
    java.innerHTML = "JAVA NO esta disponible en esta ventana"
    }
}

setInfo();
