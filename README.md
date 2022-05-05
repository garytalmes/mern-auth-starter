# MERN Auth Starter

This is a small MERN authentication package for my students.

## The Authentication Process

### Someone signs up as a user
- They fill out a form with name, email, password, etc. 
- This form is submitted 
- Our Express API receives this request
- Based on the password, we create a salt and a hash for the user record
- We delete the password, then save the salt and hash w/ other user info
- Done!


### Someone attempts to login
- They fill out a login form with their email and password 
- This form is submitted
- Our Express API receives this request
- First we verify the user exists based on email address
- Then we compare the password against the salt and hash
- If all matches, we have a valid login
- We create a token which will be sent back to the browser in the response header

In React:
  - If the login is successful, we'll receive a token value back 
  - We will set the token as a cookie


### Someone is accessing any page on our site and we want to see if they're logged in
- We look to see if we have a token stored as a cookie. If not, we know they're not logged in. If a login is required, we send them to the login page.

- If we do have a token, we need to make sure this token, and the user it belongs to, is still valid. So we query the api to verify the token and user are still valid.