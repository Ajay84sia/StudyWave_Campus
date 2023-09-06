## 🏷️ About StudyWave Campus

> Study Wave Campus is a comprehensive Learning Management System that provides secure authentication and efficient administration. This project aimed to develop a platform that facilitates seamless learning and management processes, meeting the demands of modern educational environments.
---

<br/>

## **Frontend Deployed URL** 👉 (https://study-wave-campus.netlify.app/)

## **Backend Deployed URL** 👉 (https://study-wave-backend.vercel.app/)

## 🏷️ Tech Stack Used:-

### Frontend

| Angular                                                                                                                                                                                                                                                                                                                                                      | TypeScript                                                                                                                    | Tailwind CSS                                                                                                                  | Auth0                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| <img width="75px" src="https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-png-transparent.png">  | <img width="75px" src="https://img.icons8.com/fluency/452/typescript--v2.png">  | <img width="70px" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png"> | <img width="70px" src="https://cdn.icon-icons.com/icons2/2699/PNG/128/auth_logo_icon_169534.png"> |


### Backend & Database

| Python                                                                                                                                                                                                                                                                                                                                                      | Django                                                                                                                            | MongoDB                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| <img width="75px" src="https://th.bing.com/th/id/R.a81ec894994b107448ec84f07feb0b6f?rik=AGEVK6UyAjUuPQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fpython-logo-transparent%2fpython-logo-transparent-9.png&ehk=CDexlAZjyQXRqtsTUdrBS2HDF%2fTK%2fcsRifoPtWrK2Es%3d&risl=&pid=ImgRaw&r=0">  | <img width="75px" src="https://juststickers.in/wp-content/uploads/2019/07/django-shapecut.png"> | <img width="75px" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/256/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"> |

---
## Frontend Screenshots 📷
---

# Home Page
![image](https://github.com/Ajay84sia/StudyWave_Campus/assets/98752820/181cade7-0f2e-431f-9da7-715c0ac6773c)

# Login Page
![image](https://github.com/Ajay84sia/StudyWave_Campus/assets/98752820/f77dc2ac-d747-48ea-9cbe-ea422733bfff)

# Students Listing Page
![image](https://github.com/Ajay84sia/StudyWave_Campus/assets/98752820/31e2f958-df25-4049-bd0e-b46d4cf56d0d)

## **API Endpoints**

### **Authentication**

- **`Auth0`** - Authentication is done using Auth0.

### **Students**

- **`GET /api/students/`** - Retrieve all students.
- **`GET /api/student/:id/`** - Retrieve single student details.
- **`POST /api/add_student/`** - Insert new student details.
- **`PATCH /api/students/update/:id`** - Update student details.
- **`DELETE /api/students/:id`** -Delete student details.

### **Instructors**

- **`GET /api/instructors/`** - Retrieve all instructors.
- **`GET /api/instructor/:id/`** - Retrieve single instructor details.
- **`POST /api/add_instructor/`** - Insert new instructor details.
- **`PATCH /api/instructors/update/:id`** - Update instructor details.
- **`DELETE /api/instructors/:id`** -Delete instructor details.

### **Courses**

- **`GET /api/courses/`** - Retrieve all courses.
- **`GET /api/course/:id/`** - Retrieve single course details.
- **`POST /api/add_course/`** - Insert new course details.
- **`PATCH /api/courses/update/:id`** - Update course details.
- **`DELETE /api/courses/:id`** -Delete course details.

### **Enrollments**

- **`GET /api/enrollments/`** - Retrieve all enrollments.
- **`GET /api/enrollment/:id/`** - Retrieve single enrollment details.
- **`POST /api/add_enrollment/`** - Insert new enrollment details.
- **`PATCH /api/enrollments/update/:id`** - Update enrollment details.
- **`DELETE /api/enrollments/:id`** -Delete enrollment details.

### **Assignments**

- **`GET /api/assignments/`** - Retrieve all assignments.
- **`GET /api/assignment/:id/`** - Retrieve single assignment details.
- **`POST /api/add_assignment/`** - Insert new assignment details.
- **`PATCH /api/assignments/update/:id`** - Update assignment details.
- **`DELETE /api/assignments/:id`** -Delete assignment details.

### **Submissions**

- **`GET /api/submissions/`** - Retrieve all submissions.
- **`GET /api/submission/:id/`** - Retrieve single submission details.
- **`POST /api/add_submission/`** - Insert new submission details.
- **`PATCH /api/submissions/update/:id`** - Update submission details.
- **`DELETE /api/submissions/:id`** -Delete submission details.

### **Departments**

- **`GET /api/departments/`** - Retrieve all departments.
- **`GET /api/department/:id/`** - Retrieve single department details.
- **`POST /api/add_department/`** - Insert new department details.
- **`PATCH /api/departments/update/:id`** - Update department details.
- **`DELETE /api/departments/:id`** -Delete department details.

### **Announcements**

- **`GET /api/announcements/`** - Retrieve all announcements.
- **`GET /api/announcement/:id/`** - Retrieve single announcement details.
- **`POST /api/add_announcement/`** - Insert new announcement details.
- **`PATCH /api/announcements/update/:id`** - Update announcement details.
- **`DELETE /api/announcements/:id`** -Delete announcement details.
