type Person = {
  name: string,
};

type Email = {
  email: string,
};

type Phone = {
  phone: string,
};

type Contactable = Person & Email & Phone;

function contact(details: Contactable) {
  console.log(`Dear ${details.name}. 
  I hope you received our email at ${details.email}.
  We will call you at ${details.phone} shortly.
  `);
}

contact({
  name: 'John',
  email: 'howdy@example.com',
  phone: '1337',
});




































// type Square = {
//   type: 'square',
//   size: number,
// };

// type Rectangle = {
//   type: 'rectangle',
//   width: number,
//   height: number,
// };

// type Shape =
//   | Square
//   | Rectangle;

// function area(shape: Shape) {
//   if (shape.type === 'square') {
//     return shape.size ** 2;
//   }
//   if (shape.type === 'rectangle') {
//     return shape.height * shape.width;
//   }

// }