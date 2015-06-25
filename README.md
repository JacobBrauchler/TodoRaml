# TodoRaml
- This is documentation for a simple Todo app with RAML-Parser and raml2html. raml2html is to modify your raml file to be an html file that has your documentation in a pretty viewing form in browser.

# Installing Raml-Parser & raml2html
- npm install raml-parser

# Creating Documentation 
- Create a document called project_name.raml (This is the file you will be editing.) 
- example documentation:
```yaml
#%RAML 0.8
title:  Todo List API
version: 0.1
baseUri: https://localhost:3000
mediaType:  application/json
/tasks:
  get:
    description: Get a list of all Tasks.
    responses:
      200:
        body:
          application/x-www-form-urlencoded:
            example: |
              {
                "tasks": [
                  {
                    "_id": "556f927e265f627993000012",
                    "description": "Make dinner",
                    "name": "task1",
                    "date_created": "2015-06-03T23:49:18.059Z"
                  },
                  {
                    "_id": "55705da20f014efb93000009",
                    "description": "Watch your sister",
                    "name": "task2",
                    "date_created": "2015-06-04T14:16:02.087Z"
                  }
                ]
              }
  post:
    description: Add a new Task.
    queryParameters:
      task_name:
        description: Unique task name
        example: task1
        required: true
        type: string
      task_description:
        description: Description of the Task.
        example: Mow the Lawn
        required: true
        type: string
    responses:
       200:
         body:
           application/x-www-form-urlencoded:
             example: |
               {
                 "message":"Task created with task_name: task1"
               } 
  put:
    description: Update a Task.
    queryParameters:
      task_id:
        description: Unique task id
        example: 556f927e265f627993000012
        required: true
        type: number
      task_name:
        description: Unique task name
        example: task1
        required: true
        type: string
      task_description:
        description: Description of the Task.
        example: Mow the Lawn
        required: true
        type: string
    responses:
       200:
         body:
           application/x-www-form-urlencoded:
             example: |
               {
                 "message":"Task updated"
               }
  delete:
    description: remove a Task.
    queryParameters:
      task_id:
        description: Unique task id
        example: 556f927e265f627993000012
        required: true
        type: number
    responses:
       200:
         body:
           application/x-www-form-urlencoded:
             example: |
               {
                 "message":"Task removed"
               }
  
  /{task_id}:
    get:
      description: Get a Task by task_id.
      responses:
         200:
           body:
             application/x-www-form-urlencoded:
               example: |
                 {
                   "_id": "556f927e265f627993000012",
                   "description": "Make dinner",
                   "name": "task1",
                   "date_created": "2015-06-03T23:49:18.059Z"
                 }
```

# Generating Documentation
- run the command "node app.js", (provided that is what your app runs out of.) to make sure you don't have any issues with syntax. Then run "raml2html project_name.raml > project_name.html".
- Open your new html file and you will see your documentation.

# Generating Documentation and Enabling sample requests
- Download api-console from https://github.com/mulesoft/api-console
- Open the dist folder in the api-console brance and then open the index.html file. From there load in your raml/yaml file and it shows your document in an even nicer format than the regular raml2html creator. 
- I do not have this working perfectly yet but am still in the process.

# Information on Raml-parser & raml2html
- http://raml.org/index.html
- https://www.npmjs.com/package/raml-parser
- https://www.npmjs.com/package/raml2html


