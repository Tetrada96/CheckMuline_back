const db = require("../models");
const User = db.users;
const Color = db.colors;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.login) {
    res.status(400).send({
      message: "Login can not be empty!"
    });
    return;
  }

  // Create a user
  const user = {
    login: req.body.login,
    password: req.body.password + '11234',
  };

  // Save user in the database
  User.create(user)
    .then(data => {
      res.send(data);
      this.addColor(data.id, 1, 0)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const login = req.query.login;
  var condition = login ? { login: { [Op.like]: `%${login}%` } } : null;
  

  User.findAll({include: Color})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Users were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all users."
      });
    });
};

exports.addColor = (id, count) => {
  console.log(User)
  return User.findByPk(id)
    .then((user) => {
      if (!user) {
        console.log("User not found!");
        return null;
      }
      return Color.findAll().then(data =>  {
        for (var item of data.map(i => i.dataValues.id))
        Color.findByPk(item).then((color) => {
            if (!color) {
              console.log("Color not found!");
              return null;
            }
            user.addColor(color, count);
            return color;
          });
      })
    })
    .catch((err) => {
      console.log(">> Error while adding Color to User: ", err);
    });
};
