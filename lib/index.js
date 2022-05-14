"use strict";
function contact(details) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWNBLFNBQVMsT0FBTyxDQUFDLE9BQW9CO0lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxPQUFPLENBQUMsSUFBSTtxQ0FDRyxPQUFPLENBQUMsS0FBSzt3QkFDMUIsT0FBTyxDQUFDLEtBQUs7R0FDbEMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELE9BQU8sQ0FBQztJQUNOLElBQUksRUFBRSxNQUFNO0lBQ1osS0FBSyxFQUFFLG1CQUFtQjtJQUMxQixLQUFLLEVBQUUsTUFBTTtDQUNkLENBQUMsQ0FBQztBQXFDSCxrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixLQUFLO0FBRUwscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsb0JBQW9CO0FBQ3BCLEtBQUs7QUFFTCxlQUFlO0FBQ2YsYUFBYTtBQUNiLGlCQUFpQjtBQUVqQixnQ0FBZ0M7QUFDaEMsbUNBQW1DO0FBQ25DLDhCQUE4QjtBQUM5QixNQUFNO0FBQ04sc0NBQXNDO0FBQ3RDLHlDQUF5QztBQUN6QyxNQUFNO0FBRU4sSUFBSSJ9