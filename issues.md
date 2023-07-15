# Broken App Issues
1. Used var when defining the express app, changed to const

2. developers is undefined (TypeError) when working with axios data.

3. Missing app.use(express.json()); - caused devleopers to be undefined

3. return res.send(JSON.stringify(out)); (not sure if I'm right) it seems returning res.json would be better. 

4. Name is undefined because developers is undefined. \

5. Didd not pass err into catch()







side note: I'm terrible at express and am short on time for the course, I will avoid express if I can on the job
I dislike the syntax and it doesn't click with me, next is confusing and middleware is confusing, I vastly prefer Python for backend, Would prefer during my next mentor call to go over the steps I would have needed to take in order to fix the bugs. In the meanwhile I will document the issues I have noticed on the code. I can't even get the data from the axios request to log anywhere. 
