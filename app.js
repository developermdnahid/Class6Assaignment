/**
 * - Create a Student Array Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30.  now create a console data table with
 */


const studentsData = [
    ['MD Nazrul Islam Nahid', 1, 10, 'Three', 'Male', 'Nabinagar', 1600],
    ['Iffat Masfika', 2, 26, 'Four', 'Female', 'BrahmanBaira', 1500],
    ['S A Asha', 3, 12, 'Five', 'Female', 'Dhaka', 1500],
    ['Tithi Paul', 4, 13, 'Three', 'Female', 'Chattogram', 1500],
    ['Ripa Paul', 5, 20, 'Four', 'Female', 'Nabinagar', 1700],
    ['Arman Rafi', 6, 22, 'Five', 'Male', 'Dhaka', 1500],
    ['Priya Islam', 7, 21, 'Three', 'Female', 'BrahmanBaira', 1900],
    ['Biplob Hossain', 8, 20, 'Four', 'Male', 'Chattogram', 1500],
    ['Sima Akter', 9, 23, 'Five', 'Female', 'Nabinagar', 1500],
    ['Ritu Bormon', 10, 26, 'Three', 'Female', 'Dhaka', 1600],
    ['Mahid Hossain', 11, 20, 'Four', 'Male', 'BrahmanBaira', 1500],
    ['Shawn khan', 12, 27, 'Five', 'Male', 'Nabinagar', 1500],
    ['Rabbi Islam', 13, 21, 'Five', 'Female', 'Sylhet', 2000],
    ['Nahid khan', 14, 17, 'Three', 'Male', 'Dhaka', 1600],
    ['Limon Khan', 15, 29, 'Four', 'Male', 'Chattogram', 1500],
    ['Akash Paul', 16, 21, 'Four', 'Male', 'Nabinagar', 1700],
    ['Redwan Hossain', 17, 30, 'Five', 'Male', 'BrahmanBaira', 1500],
    ['Tabassum Akter', 18, 21, 'Three', 'Female', 'Dhaka', 1500],
    ['Nourin  Akter', 19, 28, 'Four', 'Female', 'Nabinagar', 1500],
    ['Zakariya Hossin', 20, 10, 'Five', 'Male', 'Dhaka', 1800],
    ['Tania Tasmin', 21, 18, 'Five', 'Female', 'BrahmanBaira', 1500],
    ['Nafiul Islam', 22, 25, 'Three', 'Male', 'Chattogram', 1500],
    ['Riya Islam', 23, 30, 'Four', 'Female', 'Dhaka', 1500],
    ['Rony Babu', 24, 20, 'Five', 'Male', 'BrahmanBaira', 1500],
    ['Sohag Candra', 25, 14, 'Three', 'Male', 'Sylhet', 1500],
    ['Tusha Chawdhory', 26, 22, 'Four', 'Female', 'Nabinagar', 1500],
    ['Ripon Mohonto', 27, 19, 'Five', 'Male', 'BrahmanBaira', 1600],
    ['Israt Jahan', 28, 20, 'Three', 'Female', 'Dhaka', 1800],
    ['Fatema Akter', 29, 27, 'Four', 'Female', 'Chattogram', 1500],
    ['Jannat', 30, 20, 'Five', 'Female', 'Sylhet', 1500]
];





//                      - Total Admnission fees 

/**
 * 
let total_add_fee = 0;

studentsData.sort().map( ( data , i ) => {
    total_add_fee += +data[6];
});


studentsData.sort().forEach( ( data , index ) => {
    console.log(`
        Serial ID       : ${index + 1}
        Name            : ${data[0]}
        Roll Number     : ${data[1]}
        Age             : ${data[2]}
        Class           : ${data[3]}
        Gender          : ${data[4]}
        Address         : ${data[5]}
        Addmission Fee  : ${data[6]}
    `);
} );

console.log(`
------------------------------------------------------------->
Total Admission Fee     => ${total_add_fee}
`);
 */






//                      - Find All Female Students






/**
 * 
let totalFStudent = 0 ;

studentsData.sort().map( ( data , i ) => {
});

studentsData.sort().map( ( data , i ) => {
    if(data[4] === 'Female'){
        console.log(`
        Serial ID       : ${i + 1}
        Name            : ${data[0]}
        Roll Number     : ${data[1]}
        Age             : ${data[2]}
        Class           : ${data[3]}
        Gender          : ${data[4]}
        Address         : ${data[5]}
        Addmission Fee  : ${data[6]}
    `);
    totalFStudent++
    }
});

console.log(`
------------------------------------------------------------->
Female Students         : ${totalFStudent}

`);
 */





//                      Find class wise student result







/**
 * 

let totalCls3Student = 0 ;

studentsData.sort().map( ( data , i ) => {
});

studentsData.sort().map( ( data , i ) => {
    if(data[3] === 'Three'){
        console.log(`
        Serial ID       : ${i + 1}
        Name            : ${data[0]}
        Roll Number     : ${data[1]}
        Age             : ${data[2]}
        Class           : ${data[3]}
        Gender          : ${data[4]}
        Address         : ${data[5]}
        Addmission Fee  : ${data[6]}
    `);
    totalCls3Student++
    }
});

let totalCls4Student = 0 ;

studentsData.sort().map( ( data , i ) => {
});

studentsData.sort().map( ( data , i ) => {
    if(data[3] === 'Four'){
        console.log(`
        Serial ID       : ${i + 1}
        Name            : ${data[0]}
        Roll Number     : ${data[1]}
        Age             : ${data[2]}
        Class           : ${data[3]}
        Gender          : ${data[4]}
        Address         : ${data[5]}
        Addmission Fee  : ${data[6]}
    `);
    totalCls4Student++
    }
});


let totalCls5Student = 0 ;

studentsData.sort().map( ( data , i ) => {
});

studentsData.sort().map( ( data , i ) => {
    if(data[3] === 'Five'){
        console.log(`
        Serial ID       : ${i + 1}
        Name            : ${data[0]}
        Roll Number     : ${data[1]}
        Age             : ${data[2]}
        Class           : ${data[3]}
        Gender          : ${data[4]}
        Address         : ${data[5]}
        Addmission Fee  : ${data[6]}
    `);
    totalCls5Student++
    }
});

console.log(`
------------------------------------------------------------->
Class Three Students    : ${totalCls3Student}
Class Four Students     : ${totalCls4Student}
Class Five Students     : ${totalCls5Student}

----------------------------------------------
Total                   : ${ totalCls3Student + totalCls4Student + totalCls5Student }

`);
 */





//                         - Location wise student result






/**
 * 
studentsData.sort().map( ( data , i ) => {
    if( data[5] === 'Nabinagar' || data[5] === 'BrahmanBaria' || data[5] === 'Dhaka' || data[5] === 'Chattogram' || data[5] === 'Sylhet' ){
        console.log(`
        Serial ID       : ${i + 1}
        Name            : ${data[0]}
        Roll Number     : ${data[1]}
        Age             : ${data[2]}
        Class           : ${data[3]}
        Gender          : ${data[4]}
        Address         : ${data[5]}
        Addmission Fee  : ${data[6]}
    `);
    }
});

 */






//                      - find student between 10 - 25 age








/**
 * 

studentsData.map( ( data, i ) => {
    
    if( data[2] >= 10 && data[2] <= 25 ){
        console.log(`
        Serial ID       : ${i + 1}
        Name            : ${data[0]}
        Roll Number     : ${data[1]}
        Age             : ${data[2]}
        Class           : ${data[3]}
        Gender          : ${data[4]}
        Address         : ${data[5]}
        Addmission Fee  : ${data[6]}
    `);
    }
} );
 */



