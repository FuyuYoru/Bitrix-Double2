const xhr = new XMLHttpRequest()

xhr.open('GET', 'http://192.168.91.89/GetUpdStatus', true)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200){
        const xmlDoc = xhr.responseXML;
        console.log(xmlDoc)
    }
}