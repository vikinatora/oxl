# oxl
## Introduction
### Oxl SPA web app is a project as a mandatory exam requirement for the course "Angular Fundamentals March 2019" by SoftUni.
## Description
Oxl is a simple trading Single-page application written in **Angular** and **Node.js** where users can post items that they no longer need and other users can contact them if they want to purchase their item. There are 2 main roles - **user** and **admin**. **Signed in users** can access the page with all the offers and create their own. They can **view their profile** and manage their offers - **mark them as purchased** so that they don't appear on the main offer page, **edit** or **delete** them. Users also can **search offers based on name and/or category**. The admin can create categories which will be used by users to associate the offer with it. The admin can also **delete any offer** which he doesn't find suitable for the website.

## The public part is visible without authentication. It consists of:
* Landing page with a short description of the purpose of the website.
* Registration form
* Login form

## After successful login, registered users can access:
* The main page with newest and most viewed offers, each list paginated by 6
* Their profile page with all their current and past offers created
* Search form accessible from the main offers and results page
* Offer details page with the name and phone number of the creator

## The admin has administrative access to the system after successful login. In addition to all regular user abilities he has the following:
* Rights to create categories
* Rights to delete every offers he doesn't find fitting
* Special admin profile page where he sees all past and current offers
* **Admin functionality can be tested by logging in with admin@admin.com as username and Admin as password by default(can be changed in User.js in the Server folder)

## Setting up
### Server:

Install the dependencies in Server with `npm install`

Start the server with `node index` (on localhost:5000 by default)

### Client

Install the dependencies in Oxl with `npm install`

Start the client with `ng s` (on localhost:4200 by default)

