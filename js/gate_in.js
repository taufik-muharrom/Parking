
// generate code
function genCode() {
    return parseInt(Date.now() + Math.random()*Math.pow(2,4));
}

//////////////////////////////////////LOGIN1///////////////////////////////////////////
let total_car1 = 1;
let total_motorcycle1 = 1;

login1 =()=>{

    // gateIn1();
    let license_plate = document.getElementById("parking_1").value;
    let localStorageData1 = localStorage.getItem('data_parking1');
    let getDataParking1 = JSON.parse(localStorageData1);

    console.log(getDataParking1[1].license_plate);

    let checkData = getDataParking1.some((item)=>{
        return license_plate == item.license_plate;
    })

    // console.log(checkData);

    if (getDataParking1 == null && license_plate !=null){
        gateIn1();
    }
    if (getDataParking1 != null && license_plate !=null){
        if (checkData){
            alert("License Plate is Exis!");
            document.getElementById("parking_1").value = '';
        }
        else{
            gateIn1();
        }
    }
    

    // checks whether an element is even
    // const even = (element) => element % 2 === 0;

    // console.log(array.some(even)); // true

    // var operatives = [
    //     { id: 12, name: 'Baze Malbus', pilot: false },
    //     { id: 44, name: 'Bodhi Rook', pilot: true },
    //     { id: 59, name: 'Chirrut Îmwe', pilot: false },
    //     { id: 122, name: 'Jyn Erso', pilot: false }
    //   ];

    // var listHasPilots = false;
    // operatives.forEach(function (operative) {
    // if (operative.pilot) {
    // listHasPilots = true;
    // console.log(this.operative);
    // }
    // });

    // var listHasPilots = operatives.some(function (operative) {
    //     return operative.pilot;
    //   });
    //   console.log(listHasPilots);





    // cek duplikat data

//    let license_plate = document.getElementById("parking_1").value;

//    let localStorageData1 = localStorage.getItem('data_parking1');
//    let getDataParking1 = JSON.parse(localStorageData1);

//     if (license_plate !== null){
//         if (getDataParking1 == null){
//             gateIn1();
//         }
//         if(getDataParking1 !== null){
//             getDataParking1.forEach((item)=>{
//                 if (item.license_plate === license_plate){
//                     alert("Lisense Plate is Already Exis!");
//                     document.getElementById("parking_1").value = '';
//                 }
//                 else{
//                     gateIn1();
//                 }
//             })
//         }
//     }


    // if (getDataParking1 == null && license_plate != null){
    //     gateIn1();
    // }
    // if (getDataParking1 !=null && license_plate != null){
    //     getDataParking1.forEach((item)=>{
    //     if (item.license_plate == license_plate){
    //         alert("Lisense Plate is Already Exis!");
    //         document.getElementById("parking_1").value = '';
    //         break;
    //         }
    //     else{
    //          gateIn1();
    //         }
    //     })    
    // }
    // else{
    //     return;
    // }
 
}


function gateIn1 (){
   let license_plate = document.getElementById("parking_1").value;
   let vehicle1 = document.getElementById('vehicle1').value;

   if (vehicle1 == "car"){
    localStorage.setItem("total_car_p1", JSON.stringify(total_car1++))
   }
   else if(vehicle1 == "motorcycle"){
    localStorage.setItem("total_motorcycle_p1",JSON.stringify(total_motorcycle1++))
   }


   let today = new Date();
   let currentDate1 = `${today.getDate()} - ${today.getDay()} - ${today.getFullYear()}`
   let currentTime1 = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   console.log(currentTime1);
   let totalTime = (today.getHours()*3600)+(today.getMinutes()*60)+today.getSeconds();
   console.log(totalTime);

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

let total_car2 = 1;
let total_motorcycle2 = 1;

login2 =()=>{

    let license_plate = document.getElementById("parking_2").value;

    let localStorageData1 = localStorage.getItem('data_parking1');
    let getDataParking1 = JSON.parse(localStorageData1);
 
    //  getDataParking1.forEach((item)=>{
    //    console.log(item.license_plate);
    //    if (item.license_plate == license_plate){
    //        alert("Lisense Plate is Already Exis!")
    //    }
    //  })

    // let localStorageData2 = localStorage.getItem('data_parking2');
    // let getDataParking2 = JSON.parse(localStorageData2);
 
    //  getDataParking2.forEach((item)=>{
    //    console.log(item.license_plate);
    //    if (item.license_plate == license_plate){
    //        alert("Lisense Plate is Already Exis!")
    //    }
    //  })


     let vehicle2 = document.getElementById('vehicle2').value;
     if (vehicle2 == "car"){
      localStorage.setItem("total_car_p2", JSON.stringify(total_car2++))
     }
     else if(vehicle2 == "motorcycle"){
      localStorage.setItem("total_motorcycle_p2",JSON.stringify(total_motorcycle2++))
     }

   let today = new Date();
   let currentDate2 = `${today.getDate()} - ${today.getDay()} - ${today.getFullYear()}`
   let currentTime2 = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   console.log(currentTime2);
   let totalTime = (today.getHours()*3600)+(today.getMinutes()*60)+today.getSeconds();
   console.log(totalTime);


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

