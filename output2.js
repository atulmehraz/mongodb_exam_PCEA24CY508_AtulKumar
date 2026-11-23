OUTPUT
1. insertMany()



{acknowledged: true, insertedIds: {
  '0': ObjectId('...'),
  '1': ObjectId('...'),
  '2': ObjectId('...'),
  '3': ObjectId('...'),
  '4': ObjectId('...'),
  '5': ObjectId('...'),
  '6': ObjectId('...'),
  '7': ObjectId('...')
}}
2. $gt – Salary greater than 60000



Bala    65000
Elan    72000
Gopal   61000
3. $gte and $lte – Salary between 45000 and 60000


Charan  58000
Deepa   50000
Farah   45000
4. $in – IT or Finance



Bala    IT
Charan  IT
Deepa   Finance
Elan    IT
Gopal   Finance
5. $and – Chennai and salary greater than 50000


Charan  58000
Elan    72000
Gopal   61000
6. $or – HR or salary greater than 70000



Anita   42000
Elan    72000
Farah   45000
7. $nin – Not Chennai or Bengaluru



Deepa   Mumbai
Farah   Delhi
Hema    Hyderabad
8. $regex – Names starting with A, B or C



Anita
Bala
Charan
9. sort(), skip(), limit()



{name: "Gopal", salary: 61000}
{name: "Charan", salary: 58000}
{name: "Deepa", salary: 50000}