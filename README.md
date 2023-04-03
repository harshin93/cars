Purpose:This assignment will introduce students the basic fundamentals of Node.js including the command line, package.json, process, request, and fs.

Process:This assignment will require Node.js and the command line, it will not include the creation of a web page. All visuals and interactivity will be done through the terminal.

You will build a simple command line tool which makes a request to an API, display content, andstores the data in a text file! 
We will be using the following modules:
fs - for reading and writing to a file
process - for gathering arguments from the command line
axios - for making API requests (this is an external module)

This application should accept a command line argument using process.argv. 

For example:node app.js Toyota Corolla 2018 File_Name.txt

When the above line is used to start your application, the terms “cars” will be available in your Node.js code as the third parameter (third because there are two default parameters).The command line argument will be used as a search term that your application will use tomake an API request. If the API returns search results, your application should display them,and save the result to a .txt file. If it doesn't find a result, it should log a message to the consoletelling the user that no result was found.