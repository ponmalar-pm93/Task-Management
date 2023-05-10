const { Task } = require('../sequelize')

module.exports = app => {
  app.put('/taskStatus', async (req, res) => {
    const { _id, status,user_id } = req.body;
    
    try {
      const task = await Task.findByPk(_id);
      
      if (!task) {
        return res.status(404).send({ message: 'Task not found' });
      }
      
      if (!['ToDo', 'In Progress', 'Completed', 'Closed'].includes(status)) {
        return res.status(400).send({ message: 'Invalid status value' });
      }
      
      await task.update({ status,user_id });
      console.log("status:", status);
      console.log('Task status updated in db');
      res.status(200).send({ message: 'Task status updated' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Server error' });
    }
  });
}





















// // const {Task} =require('../sequelize')
// // module.exports = app => {
// // app.put('/taskStatus', async(req, res) => {
    
// //     const _id = req.query._id;
// //   const status = req.body.status;
// //   const foundTask = await Task.findOne({
// //     _id: _id
// //   });
// //   console.log(foundTask.status);
// //   if (foundTask.status == "ToDo" && status == "In Progress") {

// //     Task.update({
// //       status: status
// //     }, function (err, updatedTask) {
// //       if (err) {
// //         res.send(err);
// //       } else {
// //         res.send(updatedTask);
// //       }
// //     });

// //   } else if (foundTask == "In Progress" && status == "ToDo" || "Completed") {

// //     Task.update({
// //       status: status
// //     }, function (err, updatedTask) {
// //       if (err) {
// //         res.send(err);
// //       } else {
// //         res.send(updatedTask);
// //       }
// //     });
// //   } else if (foundTask == "Completed" && status == "In Progress" || "Closed") {

// //     Task.update({
// //       status: status
// //     }, function (err, updatedTask) {
// //       if (err) {
// //         res.send(err);
// //       } else {
// //         res.send(updatedTask);
// //       }
// //     });

// //   } else if (foundTask == "Closed" && status == "ToDo") {

// //     Task.update({
// //       status: status
// //     }, function (err, updatedTask) {
// //       if (err) {
// //         res.send(err);
// //       } else {
// //         res.send(updatedTask);
// //       }
// //     });
// //   } else {
// //     error = {
// //       "message": "Error in change status",
// //     }
// //     res.send(error);
// //   }
// // });

// // }
// const { Task } = require('../sequelize')

// module.exports = app => {
//   app.put('/taskStatus', async (req, res) => 
    
//     {
//     const _id = req.body._id;
//       const status = req.body.status;
  
//      Task.findByPk(_id)
//        .then(task => {
//          if (task == null) {
//            res.json('Task not found');
//          } else {
//            task.update({
//               status: status
//             })
//             .then(() => {
//               console.log('Task status updated in db');
//               res.status(200).send({ message: 'Task status updated' });
//             });
//           }
//         });
//    });
// }


//     // const _id = req.params._id;
//     // const resultStatus = req.body.status;
//     // const foundTask = await Task.findOne({
//     //     where:{
//     //   _id: req.query._id
//     //     }
//     // });
//     // console.log(foundTask.status);
//     // if (foundTask.status == "ToDo" && resultStatus == "In Progress") {
  
//     //   Task.update({
//     //     status: resultStatus},
//     //     {
//     //         where:
//     //         {_id:_id}
//     //     }
//     //   , function (err, updatedTask) {
//     //     if (err) {
//     //       res.send(err);
//     //     } else {
//     //       res.send(updatedTask);
//     //     }
//     //   });
  
  
//     // } else if (foundTask == "In Progress" && resultStatus == "ToDo" || "Completed") {
  
//     //   Task.update({
//     //     status: resultStatus},
//     //     {
//     //         where:
//     //         {_id:_id}
//     //     }
//     //   , function (err, updatedTask) {
//     //     if (err) {
//     //       res.send(err);
//     //     } else {
//     //       res.send(updatedTask);
//     //     }
//     //   });
//     // } else if (foundTask == "Completed" && resultStatus == "In Progress" || "Closed") {
  
//     //   Task.update({
//     //     status: resultStatus},
//     //     {
//     //         where:
//     //        { _id:_id}
//     //     }
//     //   , function (err, updatedTask) {
//     //     if (err) {
//     //       res.send(err);
//     //     } else {
//     //       res.send(updatedTask);
//     //     }
//     //   });
  
//     // } else if (foundTask == "Closed" && resultStatus == "ToDo") {
  
//     //   Task.update({
//     //     status: resultStatus},
//     //     {
//     //        where:
//     //         {_id:_id}
//     //     }
//     //   , function (err, updatedTask) {
//     //     if (err) {
//     //       res.send(err);
//     //     } else {
//     //       res.send(updatedTask);
//     //     }
//     //   });
//     // } else {
//     //   error = {
//     //     "message": "Error in change status",
//     //   }
//     //   res.send(error);
// //     }
// //   });


// // }















// //     const _id = req.query._id;
// //     const status = req.body.status;

// //     // Find the task by ID
// //     const foundTask = await Task.findOne({
// //       where: {
// //         _id: _id
// //       }
// //     });

// //     // Check if the task was found and its status can be updated
// //     if (foundTask) {
// //       const currentStatus = foundTask.status;
// // console.log("currentStatus:", currentStatus);
// //       if (currentStatus === 'ToDo' && status === 'In Progress') {
// //         // Update task status to 'In Progress' from 'ToDo'
// //         await Task.update(
// //           { status: status },
// //           { where: { _id: _id } }
// //         );
// //         console.log("currentStatus:",currentStatus);
// //         res.send({ message: 'Task status updated successfully!' });
// //       } else if (currentStatus === 'In Progress' && (status === 'ToDo' || status === 'Completed')) {
// //         // Update task status to 'ToDo' or 'Completed' from 'In Progress'
// //         await Task.update(
// //           { status: status },
// //           { where: { _id: _id } }
// //         );
// //         res.send({ message: 'Task status updated successfully!' });
// //       } else if (currentStatus === 'Completed' && (status === 'In Progress' || status === 'Closed')) {
// //         // Update task status to 'In Progress' or 'Closed' from 'Completed'
// //         await Task.update(
// //           { status: status },
// //           { where: { _id: _id } }
// //         );
// //         res.send({ message: 'Task status updated successfully!' });
// //       } else if (currentStatus === 'Closed' && status === 'ToDo') {
// //         // Update task status to 'ToDo' from 'Closed'
// //         await Task.update(
// //           { status: status },
// //           { where: { _id: _id } }
// //         );
// //         res.send({ message: 'Task status updated successfully!' });
// //       } else {
// //         const error = {
// //           message: 'Invalid task status transition'
// //         }
// //         res.status(400).send(error);
// //       }
// //     } else {
// //       const error = {
// //         message: 'Task not found'
// //       }
// //       res.status(404).send(error);
// //     }
// //   });
// // };
