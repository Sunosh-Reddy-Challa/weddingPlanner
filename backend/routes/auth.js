const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "";
const userdetails = require("../middleware/userdetails");
const Contactus = require("../models/Contactus");
const DeletedUser = require("../models/DeletedUser");
const Assignment = require("../models/Assignment");
const Earnings = require("../models/Earnings");

// {router.post(
//   "/createEmployee",
//   [
//     body("name", "Enter a Valid Name").isLength({ min: 5 }),
//     body("email", "Enter a Valid Email").isEmail(),
//     body("password").isLength({ min: 8 }),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       let user = await User.findOne({ email: req.body.email });
//       if (user) {
//         return res
//           .status(400)
//           .json({ error: "The Email is in use, please use a unique Email." });
//       }

//       const salt = await bcrypt.genSalt(10);
//       const hashPassword = await bcrypt.hash(req.body.password, salt);

//       user = await User.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: hashPassword,
//       });

//       const data = {
//         user: {
//           id: user.id
//         }
//       };

//       const authToken = jwt.sign(data, JWT_SECRET);
//       console.log(authToken);

//       res.json({ token: authToken });
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Server Error");
//     }
//   }
// );}

router.post(
  "/createEmployee",
  [
    body("firstname", "Enter a Valid First Name").isLength({ min: 3 }),
    body("lastname", "Enter a Valid Last Name").isLength({ min: 3 }),
    body("email", "Enter a Valid Email").isEmail(),
    body("password", "Password must be at least 8 characters").isLength({
      min: 5,
    }),
    body("address", "Enter a Valid Address").optional().isString(),
    body("salary", "Enter a Valid Salary").optional().isNumeric(),
    body("employeerole", "Enter a Valid Employee Role").optional().isString(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ success: success, message: errors.array() });
    }

    try {
      let user = await User.findOne({ Email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({
            success,
            message: "The Email is in use, please use a unique Email.",
          });
      }

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashPassword,
        address: req.body.address,
        salary: req.body.salary,
        employeerole: req.body.employeerole,
      });

      const data = {
        user: {
          id: user._id,
        },
      };
      success = true;
      const authToken = jwt.sign(data, JWT_SECRET);
      console.log(authToken);
      res.json({ success });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

router.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({
            success: success,
            message: "Please login with correct credentials",
          });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);

      if (!passwordCompare) {
        return res
          .status(400)
          .json({
            success: success,
            message: "Please login with correct credentials",
          });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(payload, JWT_SECRET);
      console.log(authtoken);
      success = true;
      res.json({ success: success, authtoken: authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.get("/userdetails", userdetails, async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/getEmployee/:email", async (req, res) => {
  try {
    const { email } = req.params;

    const employee = await User.findOne({ email });

    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    res.json(employee);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// {router.put("/updateEmployee/:id", userdetails, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { firstname, lastname, address, salary, employeerole } = req.body;

//     const updateFields = {};
//     if (firstname) updateFields.firstname = firstname;
//     if (lastname) updateFields.lastname = lastname;
//     if (address) updateFields.address = address;
//     if (salary) updateFields.salary = salary;
//     if (employeerole) updateFields.employeerole = employeerole;

//     const updatedEmployee = await Employee.findByIdAndUpdate(
//       id,
//       updateFields,
//       { new: true }
//     );

//     if (!updatedEmployee) {
//       return res.status(404).json({ error: "Employee not found" });
//     }

//     res.json({ message: "Employee updated successfully", employee: updatedEmployee });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });}

router.put(
  "/updateEmployee/:email",
  [
    body("firstname").isString(),
    body("lastname").isString(),
    body("address").optional().isString(),
    body("salary").optional().isNumeric(),
    body("employeerole").optional().isString(),
  ],
  userdetails,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email } = req.params;
      const { firstname, lastname, address, salary, employeerole } = req.body;

      const updateFields = {};
      if (firstname) updateFields.firstname = firstname;
      if (lastname) updateFields.lastname = lastname;
      if (address) updateFields.address = address;
      if (salary) updateFields.salary = salary;
      if (employeerole) updateFields.employeerole = employeerole;

      const updatedEmployee = await User.findOneAndUpdate(
        { email: email },
        updateFields,
        { new: true }
      );

      if (!updatedEmployee) {
        return res.status(404).json({ error: "Employee not found" });
      }

      res.json({
        message: "Employee updated successfully",
        employee: updatedEmployee,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.delete("/deleteEmployee/:email", userdetails, async (req, res) => {
  try {
    const { email } = req.params;
    const deletedUser = await User.findOne({ email });

    if (!deletedUser) {
      return res.status(404).json({ error: "Employee not found" });
    }
    const deletedUserRecord = new DeletedUser({
      ...deletedUser.toObject(),
      reason: req.body.reason,
    });
    await deletedUserRecord.save();

    await User.deleteOne({ email });

    res.json({
      success: true,
      message: "Employee deleted successfully",
      employee: deletedUser,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// {router.post(
//   "/Contactus",
//   [
//     body("name", "Enter a Valid Name").isLength({ min: 1}),
//     body("email", "Enter a Valid Email").isEmail(),
//     body("number","Enter a valid Number").isLength({min: 10, max: 10})
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       let contactus = await Contactus.findOne({ email: req.body.email }) || await Contactus.findOne({ number: req.body.number });
//       if (contactus) {
//         return res
//           .status(400)
//           .json({ error: "You Have already contacted us, our team will contact you soon" });
//       }

//       contactus = await Contactus.create({
//         name: req.body.name,
//         email: req.body.email,
//         number: req.body.number,
//         address: req.body.address,
//         message: req.body.message
//       });
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Server Error");
//     }
//   }
// );}
router.post(
  "/Contactus",
  [
    body("name", "Enter a Valid Name").isLength({ min: 1 }),
    body("email", "Enter a Valid Email").isEmail(),
    body("number", "Enter a valid Number").isLength({ min: 10, max: 10 }),
    body("message", "Enter a message").isLength({ min: 1 }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let contactus = await Contactus.findOne({
        $or: [{ email: req.body.email }, { number: req.body.number }],
      });

      if (contactus) {
        return res
          .status(400)
          .json({
            success: success,
            message:
              "You have already contacted us. Our team will contact you soon.",
          });
      }
      success = true;
      contactus = new Contactus({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        address: req.body.address,
        message: req.body.message,
      });
      await contactus.save();
      res.json({ success: success, message: "Form submitted successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

router.get("/contactusdetails", userdetails, async (req, res) => {
  try {
    const contacts = await Contactus.find();
    res.json({ contacts }); // Update this line
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/assignments", userdetails, async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.json({ assignments });
  } catch (error) {
    console.error("Error fetching assignments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/postassignments", userdetails, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const assignment = new Assignment({
      employeename: req.body.employeename,
      employeeemail: req.body.employeeemail,
      clientname: req.body.clientname,
      clientemail: req.body.clientemail,
      clientnumber: req.body.clientnumber,
      message: req.body.message,
    });
    await assignment.save();
    res.json({ success: true, assignment });
  } catch (error) {
    console.error("Error creating assignment:", error);
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
});

router.delete("/deletecontactus/:id", userdetails, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contactus.findByIdAndDelete(id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json({ success: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/assignments", async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.json({ assignments });
  } catch (error) {
    console.error("Error fetching assignments:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Update assignment status
router.put("/updatestatus/:id", userdetails, async (req, res) => {
  try {
    const assignmentId = req.params.id;
    const newStatus = req.body.status;
    const updatedAssignment = await Assignment.findByIdAndUpdate(
      assignmentId,
      { $set: { status: newStatus } },
      { new: true }
    );

    if (!updatedAssignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }

    res.json(updatedAssignment);
  } catch (error) {
    console.error("Error updating assignment status:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/deleteassignment/:id", userdetails, async (req, res) => {
  try {
    const assignmentId = req.params.id;
    const deletedAssignment = await Assignment.findByIdAndDelete(assignmentId);

    if (!deletedAssignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }

    res.json({ success: true, message: "Assignment deleted successfully" });
  } catch (error) {
    console.error("Error deleting assignment:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

// {router.get('/earning', userdetails,async (req, res) => {
//   try {
//     const { year } = req.query;
//     const startOfYear = new Date(`${year}-01-01`);
//     const endOfYear = new Date(`${year}-12-31`);

//     const earnings = await Earnings.find({
//       date: {
//         $gte: startOfYear,
//         $lt: endOfYear,
//       },
//     });

//     res.json(earnings);
//   } catch (error) {
//     console.error('Error fetching earnings:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });}

router.get("/earning", userdetails, async (req, res) => {
  try {
    const { year } = req.query;
    console.log("Year received from the frontend:", year);
    const parsedYear = parseInt(year, 10);
    if (isNaN(parsedYear)) {
      throw new Error("Invalid year format");
    }
    console.log("Year received from the frontend:", parsedYear);

    const startOfYear = new Date(`${parsedYear}-01-01T00:00:00.000Z`);
    const endOfYear = new Date(`${parsedYear}-12-31T23:59:59.999Z`);

    const earnings = await Earnings.find({
      date: {
        $gte: startOfYear,
        $lt: endOfYear,
      },
    });

    console.log("Earnings fetched from the database:", earnings);
    res.json({ earnings });
  } catch (error) {
    console.error("Error fetching earnings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/total-earning", async (req, res) => {
  try {
    const earnings = await Earnings.find();
    const totalEarning = earnings.reduce(
      (acc, record) => acc + record.amount,
      0
    );
    res.json({ totalEarning: totalEarning.toFixed(2) });
  } catch (error) {
    console.error("Error fetching total earnings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// {router.post('/writeEarning',userdetails, async (req, res) => {
//   try {
//     const newEarning = new Earnings({
//       amount: req.body.amount,
//       paymentmode: req.body.paymentmode,
//     });
//     await newEarning.save();
//     res.json({ success: true, message: 'Earning details saved successfully' });
//   } catch (error) {
//     console.error('Error writing earning details:', error);
//     res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// });}

router.post("/writeEarning", userdetails, async (req, res) => {
  try {
    const newEarning = new Earnings({
      amount: req.body.amount,
      paymentmode: req.body.paymentmode,
      date: req.body.date, // Add date
    });
    await newEarning.save();
    res.json({ success: true, message: "Earning details saved successfully" });
  } catch (error) {
    console.error("Error writing earning details:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
