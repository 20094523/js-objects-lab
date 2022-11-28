const aCar = {
    owner : "Joe Bloggs",
    address : "3 Walkers Lane",
    previous_owners: [
      {name : "Pat Smith", address : "1 Main Street"},
      {name : "Sheila Dwyer", address : "2 Main Street"}
      
    ],
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
  console.log('Reg. = ' + aCar.registration.year + '-' + aCar.registration.countycode + '-' + aCar.registration.number);

  aCar.mileage = "10000";
  aCar.colour = {
    exterior: "red",
    interior: {
        texture : "leather",
        shade : "cream",
    }
  }

  console.log("It is a " + aCar.colour.exterior + " car, " + aCar.mileage + " mileage, with " + aCar.colour.interior.texture + " interior.");
  console.log("First owner: " + aCar.previous_owners[0].name)

