# **Personal Notes REST APIs**

### **Dependencies**
- node
- mongoose
- mongodb
- body-parser
- express

### **How to run**
- clone this github repo
- install npm packages
```
npm install
```

- start mongodb server. If you haven't install mongoDB please refer this [link](https://www.youtube.com/watch?v=FwMwO8pXfq0&t). Check `config.js` file to change the configurations if needed.
- start node server
```
node index.js
```
- test whether the server is working fine by using below URL. 
```
http://localhost:3000/health
```
# **APIs**
### **Add new note**
- API
```
http://localhost:3000/api/v1/notes/add
```
- sample body
```
{
	"userId": "nimal",
	"content": "my note"
}
```
- sample response
```
{
    "note": "note added successfully",
    "id": "5ff8339b4209e178444c91fb"
}
```

### **update a note**
- API
```
http://localhost:3000/api/v1/notes/update
```
- sample body
```
{
	"userId": "haritha",
	"content": "this is modified note",
    "id": "5ff8339b4209e178444c91fb"
}
```
- sample response
```
{
    "note": "Note updated!",
    "id": "5ff8339b4209e178444c91fb"
}
```

### **delete a note**
- API
```
http://localhost:3000/api/v1/notes/delete
```
- sample body
```
{
	"userId": "haritha",
    "id": "5ff81c7e293edb78c4df8cb2"
}
```
- sample response
```
{
    "note": "Note Deleted!",
    "id": "5ff81c7e293edb78c4df8cb2"
}
```

### **archive a note**
- API
```
http://localhost:3000/api/v1/notes/archive
```
- sample body
```
{
	"userId":"haritha",
	"id":"5ff8115d5eba846a44f42920"
}
```
- sample response
```
{
    "note": "Note Archived!",
    "id": "5ff8115d5eba846a44f42920"
}
```

### **un-archive a note**
- API
```
http://localhost:3000/api/v1/notes/unarchive
```
- sample body
```
{
	"userId":"haritha",
	"id":"5ff7f5e7667a8aa41e0679"
}
```
- sample response
```
{
    "note": "Note unarchived",
    "id": "5ff7f5e7667a8aa41e0679"
}
```

### **all un-archived notes of a user**
- API
```
http://localhost:3000/api/v1/notes/notArchived/haritha
```

- sample response
```
[
    {
        "_id": "5ff811575eba846a44f4291f",
        "content": "this is my second note",
        "userId": "haritha",
        "archived": false,
        "__v": 0
    },
    {
        "_id": "5ff8115d5eba846a44f42920",
        "content": "this is my third note",
        "userId": "haritha",
        "archived": false,
        "__v": 0
    },
    {
        "_id": "5ff811645eba846a44f42921",
        "content": "this is my forth note",
        "userId": "haritha",
        "archived": false,
        "__v": 0
    },
    {
        "_id": "5ff8116a5eba846a44f42922",
        "content": "this is my fifth note",
        "userId": "haritha",
        "archived": false,
        "__v": 0
    }
]
```
### **all archived notes of a user**
- API
```
http://localhost:3000/api/v1/notes/archived/haritha
```

- sample response
```
[
    {
        "_id": "5ff8115d5eba846a44f42920",
        "content": "this is my third note",
        "userId": "haritha",
        "archived": true,
        "__v": 0
    }
]
```

### **all notes of a user**
- API
```
http://localhost:3000/api/v1/notes/:userId
```

- sample response
```
[
    {
        "archived": false,
        "_id": "5ff8339b4209e178444c91fb",
        "content": "this is modified note",
        "userId": "haritha",
        "__v": 0
    },
    {
        "archived": true,
        "_id": "5ff8386f879454868c7e7a3b",
        "content": "this is my second note",
        "userId": "haritha",
        "__v": 0
    }
]
```

# **Technologies used**

- **NodeJS:** can easily create an API endpoint. Have the freedom to use any third party library to enhance the efficiency and performance of the application. Easy to work with objects since this is using javascript.
- **mongoose:** this is the easiest way to connect to mongodb. This acts as a middleware. 
- **mongodb:** For this requirement we need only one table and simple queries. Therefore monngodb is the best choise.  

# **Further work**
- We can add authentication featuer to verify users before using an API.
- Adding load balancing techniques would be helpful when there are many users accessing the server concurrently. 
- Can add AI deep learning engine to findout users behavior based on the notes they are creating. Then it could suggest users about the future notes/plans. 