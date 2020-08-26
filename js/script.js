
// generate code
function genCode() {
    return parseInt(Date.now() + Math.random()*Math.pow(2,4));
}

//////////////////////////////////////LOGIN1///////////////////////////////////////////

login1 =()=>{

   let today = new Date();
   let currentDate1 = `${today.getDate()} - ${today.getDay()} - ${today.getFullYear()}`
   let currentTime1 = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   console.log(currentTime1);
   let totalTime = (today.getHours()*3600)+(today.getMinutes()*60)+today.getSeconds();
   console.log(totalTime);

   let license_plate = document.getElementById("parking_1").value;
   let vehicle1 = document.getElementById('vehicle1').value;
  

   let parking_1 = {};
   parking_1.gen_code = genCode();
   parking_1.vehicle = vehicle1;
   parking_1.license_plate = license_plate;
   parking_1.date_entry = currentDate1;
   parking_1.time_of_entry = currentTime1;
   parking_1.total_time = totalTime;
   let dataLocalStorage = localStorage.getItem("data_parking1");
   
   if(dataLocalStorage == null){
      arrayParking = [];
   }
   else{
      arrayParking = JSON.parse(dataLocalStorage);
   }
   arrayParking.push(parking_1);
   localStorage.setItem("data_parking1", JSON.stringify(arrayParking));
   document.getElementById("parking_1").value = '';

}


//////////////////////////////////////LOGIN2///////////////////////////////////////////

login2 =()=>{

   let today = new Date();
   let currentDate2 = `${today.getDate()} - ${today.getDay()} - ${today.getFullYear()}`
   let currentTime2 = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   console.log(currentTime2);
   let totalTime = (today.getHours()*3600)+(today.getMinutes()*60)+today.getSeconds();
   console.log(totalTime);

   let license_plate = document.getElementById("parking_2").value;
   let vehicle2 = document.getElementById('vehicle2').value;

   let parking_2 = {};
   parking_2.gen_code = genCode();
   parking_2.vehicle = vehicle2;
   parking_2.license_plate = license_plate;
   parking_2.date_entry = currentDate2;
   parking_2.time_of_entry = currentTime2;
   parking_2.total_time = totalTime;

   let dataLocalStorage = localStorage.getItem("data_parking2");
   
   if(dataLocalStorage == null){
      arrayParking = [];
   }
   else{
      arrayParking = JSON.parse(dataLocalStorage);
   }
   arrayParking.push(parking_2);
   localStorage.setItem("data_parking2", JSON.stringify(arrayParking));
   document.getElementById("parking_2").value = '';

}

