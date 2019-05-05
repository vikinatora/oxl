# oxl
## Introduction
### Oxl SPA web app is a project as a mandatory exam requirement for the course "Angular Fundamentals March 2019" by SoftUni.
## Description
Oxl is a simple trading Single-page application written in **Angular** and **Node.js** where users can post items that they no longer need and other users can contact them if they want to purchase their item. There are 2 main user roles - **normal user** and **one admin** that is created when the server is started. **Signed in users** can access the page with all the offers and create their own. They can **view their profile** and manage their offers - **mark them as purchased** so that they don't appear on the main offer page, **edit** or **delete** them. Users also can **search offers based on name and/or category**. The admin can create categories which will be used by users to associate the offer with it. The admin can also **delete any offer** which he doesn't find suitable for the website.

## The public part is visible without authentication. It consists of:
* Landing page with a short description of the purpose of the website.
* Registration form
* Login form

## After successful login, registered users can access:
* The main page of offers, paginated by 6
* Their profile page with all their current and past offers created
* Search results page accessible from the main offers page
* Offer details page with the name and phone number of the creator

## Administrator has administrative access to the system after successful login. In addition to all regular user abilities he has the following:
* Rights to create categories
* Rights to delete every offers he doesn't find fitting
* Special admin profile page where he sees all past and current offers for moderation purposes
* **Admin functionality can be tested by logging in with admin@admin.com as username and Admin as password by default(can be changed in User.js in the Server folder)

