const { db } = require('../util/admin');

exports.getEmployeeDetails = (request, response) => {
  let employeeData = [];
  db.collection(`employees`)
    .orderBy('createdAt', 'asc')
    .get()
    .then((data) => {
      data.forEach((doc) => {
        employeeData.push({
          employeeId: doc.id,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          role: doc.data().role,
          imageUrl: doc.data().imageUrl,
          contactEmail: doc.data().contactEmail,
          contactPhoneNumber: doc.data().contactPhoneNumber,
        });
      });
      response.json(employeeData);
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({ error: error.code });
    });
};
