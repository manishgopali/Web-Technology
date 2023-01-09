setTimeout(()=>{
    document.title="Hello Title changed";
},2000);
let fName="Miyoko";
let lName="Gopali";
let fullName=`${fName} ${lName}`
function handleButtonClick(greetText,rollNo,isMale){
    //let time=new Date();  time vana variable with value delcared gareko
    let gender=isMale?"Male":"Female";
   //variable decalre garda let ko tham ma const use garyo vane paxi vlaue change 
    alert(greetText);
    alert(`Hi ${greetText}, your roll no is ${rollNo},your gender is ${gender}`);  //tidle le chai js altert vitra as a string using $ ani funcion
    alert(`Your Girlfriend Name is: ${fullName}`);
}
