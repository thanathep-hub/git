function appendImageELem(keyword, index){
    const imgELem = document.createElement('img');
    //imgELem.src = 'https://source.unsplash.com/400x255/?' + keyword + '&sig=' + index;
    imgELem.src = `https://source.unsplash.com/400x255/?${keyword}&sig=${index}`;

    const galleryELem = document.querySelector('.gallery');
    galleryELem.appendChild(imgELem);
}
function removePhotos(){
    const galleryELem = document.querySelector('.gallery');
    galleryELem.innerHTML = '';
}

function searchPhotos(){
    const inputkey = event.target.value;

    if(event.key === 'Enter' && inputkey){
        removePhotos();

        for(let i=1; i <= 20; i++){
            appendImageELem(inputkey,i);  
        }
    }
}

function run(){
    const inputELem = document.querySelector('input');
    inputELem.addEventListener('keydown', searchPhotos);
}

run();






/*const name = 'Thanathep'; // ค่าคงที่ 
let height = 175; // เปลี่ยนค่าได้
let isMale = false;
let city = null;
let bigNumber = 10n;
console.log(name, height, isMale, city, bigNumber);
*/
/*
    Primitive Types             Reference Types
    - String                    - Object
    - Number                    - Array
    - Boolean                   - Function
    - Undefined
    - Null
    - Symbol
    - bigint(มาใน 2020)

    Method
    - Object or Array นำหน้า
    เช่น number.push(25)
*/
/*
const person = {
    name: 'Thanathep',
    height: 170,
    city: 'Sakon Nakhon'
}; //Object
const number = [5, 10, 15, 20];

number.push(25); //method add value ด้านหลัง
number.unshift(13); // add Value ด้านหน้า
number.pop(); // Delete Value หลังสุด
number.shift(); //ลบค่าด้านหน้า
*/
/*
    === เท่ากับ
    +== ไม่เท่ากับ
*/
/*const age = 25;
if(age > 15){
    console.log('Age is more then 15.');
} else{
    console.log('Age is less then or equal to 15.')
}

let password ='dddd';

if(password ===''){
    console.log('Password is Requied')
} else if(password.length >= 8 && password.length <=12 ){
    console.log('Password is vaild.');
} else{
    console.log('Password is invalid.');
}


/* Function *//*
function calculateVat(money, vat){
    return (money*vat)/100;
}

const totalVat = calculateVat(100, 7);
console.log(totalVat);*/

/* Loop */
/*for(let i=0; i<10 ;i++){ //การประกาศค่าตัวแปล; เงื่อนไข; เปลี่ยนแปลงค่า;
    if(i === 5){
        break; // หยุด loop ไม่ทำต่อ
        //continue; // continue เลื่อนไปทำด้านบน ไม่ทำด้านล่างต่อ ถ้าไม่ตรงตามเงื่อนไข
    }
    console.log(i);
}*/

/* Document */
// document.querySelector('input'); ดึง pop มาอ่านค่าได้
// document.getElementById('email'); ดึง Element ด้วย id
// document.createElement('div'); สร้าง Element ใหม่
// document.appendChild(element); ใส่ลูก Element
