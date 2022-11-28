const aCar = {
    owner : "Joe Bloggs",
    registration :{
       year : "201",
       countycode : "WD",
       number : "1058",
      },

    type : {
       make : "Toyota",
       model : "Corolla",
       CC : "1.8",
    }
  };
  
  console.log(aCar.owner + ' drives a ' + aCar.type.make);
  console.log('Reg. = ' + aCar.registration.year + '-' + aCar.registration.countycode + '-' + aCar.registration.number)