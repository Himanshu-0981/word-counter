let textBox = document.getElementById('textbox');

textBox.addEventListener('input',function(){
    let userText = this.value;
    let char = userText.length;
    document.getElementById('char').innerHTML = char;

    userText = userText.trim();
    let words = userText.split(" ");
    let cleanList = words.filter(function(elm){
        return elm != "";
    })
   document.getElementById('word').innerHTML = cleanList.length;
})


