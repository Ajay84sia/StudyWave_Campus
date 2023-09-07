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
![Screenshot 2023-09-06 161613](https://github.com/Ajay84sia/StudyWave_Campus/assets/98752820/78853c9a-7301-4299-8463-be350b8e9fcc)


# Login Page
![Screenshot 2023-09-06 161658](https://github.com/Ajay84sia/StudyWave_Campus/assets/98752820/632d2363-0a83-4a31-8760-4ccb11c04c23)


# Dashboard
![Screenshot 2023-09-06 161757](https://github.com/Ajay84sia/StudyWave_Campus/assets/98752820/d9d5e7ef-9c3c-445d-8c3c-2b94d52bcd31)


# Students Listing Page
![Screenshot 2023-09-06 161825](https://github.com/Ajay84sia/StudyWave_Campus/assets/98752820/af4a5146-b4e0-4b7d-9a21-35c96df22365)


# Student Registration Page
![Screenshot 2023-09-06 161857](https://github.com/Ajay84sia/StudyWave_Campus/assets/98752820/bb2527f8-f097-4549-9262-29c9af825880)


# Instructors Listing Page
![Screenshot 2023-09-06 161950](https://github.com/Ajay84sia/StudyWave_Campus/assets/98752820/8a61df14-e7cb-4728-8222-a24d6dc367a4)


# Instructor Registration Page
![Screenshot 2023-09-06 162039](https://github.com/Ajay84sia/StudyWave_Campus/assets/98752820/26245726-6c1c-40ba-a0a0-b17e5474fd85)


# Courses Listing Page
![Screenshot 2023-09-06 162157](https://github.com/Ajay84sia/StudyWave_Campus/assets/98752820/b798d6e8-53ca-49ab-95ce-11499b0f5c8a)


# Course Form Page
![Screenshot 2023-09-06 162217](https://github.com/Ajay84sia/StudyWave_Campus/assets/98752820/1918009f-0397-4f22-8e9b-b155cd8f217e)


# Enrollment Listing Page
![Screenshot 2023-09-06 162239](https://github.com/Ajay84sia/StudyWave_Campus/assets/98752820/f0bbf514-beec-4e2e-ab5a-f5a56fea15b6)


# Assignment Listing Page
![Screenshot 2023-09-06 162335](https://github.com/Ajay84sia/StudyWave_Campus/assets/98752820/df90a754-4b04-42b5-8422-e91fbc8321f1)


# Add New Assignment Page
![Screenshot 2023-09-06 162420](https://github.com/Ajay84sia/StudyWave_Campus/assets/98752820/247a249d-df79-4282-af16-f7edfe61cc58)


# Submission Listing Page
![Screenshot 2023-09-06 162441](https://github.com/Ajay84sia/StudyWave_Campus/assets/98752820/7884593c-c158-4589-a2ac-18c8459f78db)


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
