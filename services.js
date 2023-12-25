const xhr = new XMLHttpRequest()
console.log('грузимся');
xhr.open('GET', 'http://192.168.91.89/GetUpdStatus', true)
console.log('грузимся');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200){
        const xmlDoc = xhr.responseXML;
        console.log(xmlDoc)
    }
}
xhr.send();