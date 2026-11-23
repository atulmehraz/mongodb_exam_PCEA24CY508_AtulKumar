OUTPUT
1. insertOne()



{ acknowledged: true, insertedId: ObjectId('...') }
2. insertMany()



{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('...'),
    '1': ObjectId('...'),
    '2': ObjectId('...'),
    '3': ObjectId('...')
  }
}
3. find() – All students


{rollNo: 101, name: "Arun", dept: "CSE", marks: 78, city: "Chennai"}
{rollNo: 102, name: "Ravi", dept: "ECE", marks: 75, city: "Delhi"}
{rollNo: 103, name: "Karthik", dept: "CSE", marks: 62, city: "Chennai"}
{rollNo: 104, name: "Priya", dept: "ECE", marks: 85, city: "Mumbai"}
{rollNo: 105, name: "Suresh", dept: "CSE", marks: 91, city: "Trichy"}
4. find() – CSE students



{rollNo: 101, name: "Arun", dept: "CSE", marks: 78}
{rollNo: 103, name: "Karthik", dept: "CSE", marks: 62}
{rollNo: 105, name: "Suresh", dept: "CSE", marks: 91}
5. updateOne()



{acknowledged: true, matchedCount: 1, modifiedCount: 1, upsertedCount: 0}
6. updateMany()


{acknowledged: true, matchedCount: 3, modifiedCount: 3, upsertedCount: 0}
7. deleteOne()



{acknowledged: true, deletedCount: 1}
8. countDocuments()


4
