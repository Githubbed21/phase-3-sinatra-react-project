# React / Sinatra Project Build

### Overview

    Landscaping app where a client (user) can sign in, have access to enter new jobs (customer name,address, job description and plan the work around a weather API) then they can see jobs as (all jobs, jobs scheduled for the day, and jobs completed) be able to mark the job as completed / paid.

### Features

- home page
- user login / sign up
- create new job
  -customer name, address, description of job / repeating frequency, price
- update job
  -delete job
  -job list (all)
  -job list (todo)
  -job reordering
  -job list (completed)
  -review job (leave comments about job for workers / boss)

### Order of work

- home page
- user login
- job list (all)
- job list (todo)
- job list (completed)
- job comment
- job search or create
- job delete
- job update

### Stretch Goals

-Change price rate
-add extra cost for other things done besides what was scheduled for completion
-editing existing client profile to add or remove job for next scheduled date
-cancel job

### Models

User

---

email
first_name
last_name
has_many jobs

UserJobs

---

scheduled / next on list : boolean
completed : boolean (drag and drop)
rescheduled : drag and drop

belongs_to user
belongs_to job

Job

---

customer name
address / location : integer
description of job
price of job : integer
scheduled by date job (around weather permitted)
