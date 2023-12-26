$(document).ready(function () {
    const xhr = new XMLHttpRequest()
    console.log('Грузимся');
    xhr.open('GET', 'https://192.168.91.89/GetUpdStatus', true)
    xhr.onerror = function () {
        console.log('Не грузимся..')
    }
    xhr.onreadystatechange = function () {
        console.log('Стадия загрузки', xhr.readyState);
        if (xhr.readyState === 4 && xhr.status === 200) {
            const xmlDoc = xhr.responseXML;
        }
    }
    xhr.send()
})