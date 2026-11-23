
use college

db.students.insertOne({
  rollNo: 101,
  name: "Arun",
  dept: "CSE",
  marks: 78,
  city: "Chennai"
})

db.students.insertMany([
  {rollNo: 102, name: "Ravi", dept: "ECE", marks: 75, city: "Delhi"},
  {rollNo: 103, name: "Karthik", dept: "CSE", marks: 62, city: "Chennai"},
  {rollNo: 104, name: "Priya", dept: "ECE", marks: 85, city: "Mumbai"},
  {rollNo: 105, name: "Suresh", dept: "CSE", marks: 91, city: "Trichy"}
])

db.students.find()

db.students.find({dept: "CSE"})

db.students.updateOne(
  {rollNo: 103},
  {$set: {marks: 68}}
)

db.students.updateMany(
  {dept: "CSE"},
  {$set: {semester: 3}}
)

db.students.deleteOne({rollNo: 104})

db.students.countDocuments()



