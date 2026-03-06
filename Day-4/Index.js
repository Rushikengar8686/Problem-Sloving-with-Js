const employeeDetails = [
  {
    empName: "Rushi",
    empEmail: "rushi@gmail.com",
    empPhoneNo: 9945738392,
    permanentAddress: {
      city: "Akluj",
      pincode: 413101,
      state: "MAH"
    },
    currentAddress: {
      city: "Pune",
      pincode: 411033,
      state: "MAH"
    },
    empSalary: 35000,
    empCurrentRole: "MERN Stack Developer",
    empSkills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    empName: "Amit",
    empEmail: "amit@gmail.com",
    empPhoneNo: 9876543210,
    permanentAddress: {
      city: "Solapur",
      pincode: 413001,
      state: "MAH"
    },
    currentAddress: {
      city: "Pune",
      pincode: 411001,
      state: "MAH"
    },
    empSalary: 40000,
    empCurrentRole: "Frontend Developer",
    empSkills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    empName: "Priya",
    empEmail: "priya@gmail.com",
    empPhoneNo: 9123456780,
    permanentAddress: {
      city: "Kolhapur",
      pincode: 416003,
      state: "MAH"
    },
    currentAddress: {
      city: "Mumbai",
      pincode: 400001,
      state: "MAH"
    },
    empSalary: 45000,
    empCurrentRole: "Backend Developer",
    empSkills: ["NodeJS", "Express", "MongoDB"]
  },
  {
    empName: "Rahul",
    empEmail: "rahul@gmail.com",
    empPhoneNo: 9012345678,
    permanentAddress: {
      city: "Satara",
      pincode: 415001,
      state: "MAH"
    },
    currentAddress: {
      city: "Pune",
      pincode: 411028,
      state: "MAH"
    },
    empSalary: 38000,
    empCurrentRole: "Full Stack Developer",
    empSkills: ["HTML", "CSS", "React", "NodeJS"]
  },
  {
    empName: "Sneha",
    empEmail: "sneha@gmail.com",
    empPhoneNo: 9988776655,
    permanentAddress: {
      city: "Nashik",
      pincode: 422001,
      state: "MAH"
    },
    currentAddress: {
      city: "Pune",
      pincode: 411045,
      state: "MAH"
    },
    empSalary: 42000,
    empCurrentRole: "UI Developer",
    empSkills: ["HTML", "CSS", "Bootstrap", "JavaScript"]
  },
  {
    empName: "Vikas",
    empEmail: "vikas@gmail.com",
    empPhoneNo: 9871234560,
    permanentAddress: {
      city: "Latur",
      pincode: 413512,
      state: "MAH"
    },
    currentAddress: {
      city: "Hyderabad",
      pincode: 500001,
      state: "TEL"
    },
    empSalary: 47000,
    empCurrentRole: "React Developer",
    empSkills: ["React", "Redux", "JavaScript"]
  },
  {
    empName: "Neha",
    empEmail: "neha@gmail.com",
    empPhoneNo: 9765432109,
    permanentAddress: {
      city: "Nagpur",
      pincode: 440001,
      state: "MAH"
    },
    currentAddress: {
      city: "Pune",
      pincode: 411052,
      state: "MAH"
    },
    empSalary: 39000,
    empCurrentRole: "QA Engineer",
    empSkills: ["Testing", "Selenium", "Java"]
  },
  {
    empName: "Kiran",
    empEmail: "kiran@gmail.com",
    empPhoneNo: 9345678120,
    permanentAddress: {
      city: "Aurangabad",
      pincode: 431001,
      state: "MAH"
    },
    currentAddress: {
      city: "Pune",
      pincode: 411057,
      state: "MAH"
    },
    empSalary: 41000,
    empCurrentRole: "NodeJS Developer",
    empSkills: ["NodeJS", "Express", "MongoDB"]
  },
  {
    empName: "Pooja",
    empEmail: "pooja@gmail.com",
    empPhoneNo: 9898989898,
    permanentAddress: {
      city: "Sangli",
      pincode: 416416,
      state: "MAH"
    },
    currentAddress: {
      city: "Mumbai",
      pincode: 400002,
      state: "MAH"
    },
    empSalary: 36000,
    empCurrentRole: "Frontend Developer",
    empSkills: ["HTML", "CSS", "JavaScript"]
  },
  {
    empName: "Ankit",
    empEmail: "ankit@gmail.com",
    empPhoneNo: 9876501234,
    permanentAddress: {
      city: "Ahmednagar",
      pincode: 414001,
      state: "MAH"
    },
    currentAddress: {
      city: "Pune",
      pincode: 411061,
      state: "MAH"
    },
    empSalary: 50000,
    empCurrentRole: "Full Stack Developer",
    empSkills: ["React", "NodeJS", "MongoDB", "JavaScript"]
  }
];
console.log("Print all employee names::")
const showEmpName = employeeDetails.map((m)=> m.empName)
console.log(showEmpName)
console.log("Find employees whose salary is greater than 40000")
const MaxSalary = employeeDetails.filter((m)=>m.empSalary > 40000).map((emp)=>`${emp.empName} - ${emp.empSalary}`)
console.log(MaxSalary)
console.log("Find employees who live in Pune")
const empLiveInPune = employeeDetails.filter((m)=> m.currentAddress.city == "Pune").map((item)=> item.empName)
console.log(empLiveInPune)
console.log("Print all employee skills")
const printAllEmpSkills = employeeDetails.map((skills)=> `${skills.empName}- ${skills.empSkills}`)
console.log(printAllEmpSkills)
console.log("Find employees who know React")
const knowReact = employeeDetails.filter((react)=> react.empSkills.includes("MongoDB")).map((name)=> name.empName)
console.log(knowReact)
console.log("Find employees whose permanent city is in Maharashtra (MAH)");
const permanentCity = employeeDetails.filter((city)=> city.permanentAddress.state == "MAH").map((name)=> name.empName)
console.log(permanentCity)

