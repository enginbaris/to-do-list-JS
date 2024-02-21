const inputBox=document.getElementById('input-box')
const listContainer=document.getElementById('list-container')


function AddTask() {
    if(inputBox.value===''){
        alert('you must write something!')
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li)

        // şimdi ise listeye eklenene to do ların sonuna X çarpı ikonu koyup silme butonu yapalım
        let carpi_ikonu=document.createElement("span")
        carpi_ikonu.innerHTML="\u00d7"  // çarpı işaretinin kodu
        li.appendChild(carpi_ikonu)
          }
        inputBox.value=""; // text box a yazılan eklendikten sonra text box un temizlenmesi  
        saveData() 
   }

   // liste elemanına tıklayınca tamamlandı anlamına gelen, üzerinde çizgi belirmesi
   listContainer.addEventListener("click",function (e) { // click gerçekleşirse, function(e) yi çalıştır.
        if (e.target.tagName === "LI") { // tıklanan şey liste elemanıysa,
            e.target.classList.toggle("checked"); /*o elemanı checked class ına taşı. 
            o class da css dosyasında üstü çizili hale geliyor. toggle = sınıfa geçiş yapar */
            // The classList property returns the CSS classnames of an element.
            saveData()
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData() //asdasdas
        }
   },false)
   /*NOT:   
                        document.body.parentNode; // Returns the <html> element
                        document.body.parentElement; // Returns the <html> element

                        document.documentElement.parentNode; // Returns the Document node
                        document.documentElement.parentElement; // Returns null (<html> does not have a parent ELEMENT node)       */


/*Tarayıcı kapansa bile verilerin kaybolmaması için local storage */ 
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML) //local de tutmak istediğimiz veri listContainer in içindekiler
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data"); // local de tutulan verilerin ekrana verilmesi
}
showTask()

