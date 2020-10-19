let xhr = new XMLHttpRequest();

xhr.onload = () => {
    if(xhr.readyState === 4)
    if(xhr.readyState === 200){
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
}

xhr.open('GET', '')