let h2 = document.getElementById('display');

function counter(){
    let count = localStorage.getItem("count");
    count = parseInt(count) || 0;
    count++;
    h2.innerHTML = `This button has been clicked ${count} times`;
    localStorage.setItem('count', count);
    

}