exports.getEmployeeDetails = (request, response) => {
  let employeeData = [];
  db.doc(`/employees`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        employeeData = doc.data();
        return response.json(employeeData);
      }
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({ error: error.code });
    });
};
