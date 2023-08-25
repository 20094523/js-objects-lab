const aCar = {
    owner : "Joe Bloggs",
    type : {
      Make : 'Toyota',
      Model : 'Corolla',
      CC: '1.9',
    },
    registration : '201WD1058'
};

aCar.milage = 10000
aCar.color = {
  exterior: "red",
   interior: { texture: "leather", shade: "cream" }
}

console.log(  "It is a " + aCar.color.exterior + " car, " + aCar.milage + " milage, with " + aCar.color.interior.texture + " interior.")