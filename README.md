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


