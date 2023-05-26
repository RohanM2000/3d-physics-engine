3D PHYSICS ENGINE

With this engine, users will be able to traverse gravity bound terrain with free camera movement.
Some objects will be interactable with, while other objects will be bound in place as terrain.
Users will be able to add objects as they please, and watch the behaviour as they appear and fall due to gravity.
Configurations of objects or scenes that the user has created can be stored in localstorage, and retrieved from local storage as well.
There will be an emphasis on making sure that this engine is exportable and other creators can use it to implement 3d applications.

This project will solely rely on 2d canvas at the moment, but may include other libraries to help with processing speed or graphics rendering. Natively javascript is not efficient as a langauage, and other creators have made rust/c++ code that is compileable with webassembly modules and able to be interacted with in javascript at a fraction of the runtime. Self made WASM may be included in future iterations of this project.

https://wireframe.cc/PWX8hP

TIMELINE:

Friday/Saturday: Implement a moveable camera with inefficient multiplication and transformation methods. If time permits research into quaternions to make the transformations efficient.

Monday: Implent a physics engine with simple gravity and object collision handling. If time permits research into more efficient ways to handle collision handling other than 2 nested for loops iterating through every possible pair.

Tuesday: Implement more objects and allow users to freely drag and drop objects into the scene, along with saving scenes into localstorage and importing scenes from it.

Wednesday: Implement quality of life to rendering such as clipping and z-index rendering as opposed to painters method.