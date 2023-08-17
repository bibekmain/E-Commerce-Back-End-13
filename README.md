
# ![Badge](https://img.shields.io/badge/License-MIT-brightgreen)
# E-Commerce Back-End

![Thumbnail image showing the insomnia application making a get request to a local server](https://github.com/bibekmain/E-Commerce-Back-End-13/blob/main/assets/thumbnail.png?raw=true)
    
## Description
The E-Commerce Back-End application offers basic functionality for managing product inventory and processing orders. It allows administrators to add and update product information, and track available stock. However, advanced features such as user accounts, payment processing, and customer management are not yet included in this limited version.

- Motivation: The motivation behind this application was to create a simple tool that can be used by management and employees ot track their product lines along with their respective categories and tags.
- Purpose: This application removes the hassle of writing down the stock of products or keeping track of many unorganized files. It is the digital space for an easy product management experience.
- What i learned: Sequelize, Express, and Insomnia

## Table Of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)  
* [Questions](#questions)
* [License](#license)

## Installation
- First fork/download the repository by going to [this](https://github.com/bibekmain/E-Commerce-Back-End-13) link
- Make sure you have MySql installed and setup
- Go to the application's directory and run `npm i` to install all the required packages
- Then create a `.env`file to enter the `DB_NAME` `DB_USER` and `DB_PASSWORD`
- To run the seed run `mysql -u root -p` and enter your password
- Then run `source db/schema.sql;` to run the schema for the application's database
-  Now the application is fully installed and is ready for use.


## Usage
To use the app, start the server by runing `npm start` in the working directory. Then use `curl` or `Insomnia` to make http requests to the local server. You can get, create, update, and delete different categories, products, and tags.  

### Usage Tutorial:  
[Video showing how one can use the E Commerce Back End application](https://drive.google.com/file/d/1atDgmHU0VPnRc3y0XIdKVxD7sz68xRcA/view?usp=sharing)


## Credits  

### Third Party Assets:
* [Express](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)
* [MySql](https://dev.mysql.com/doc/)
* [Insomnia](https://docs.insomnia.rest/)


## Questions
Check out my [Github](https://github.com/bibekmain)  
You can email me at: [bibekmbkb@gmail.com](bibekmbkb@gmail.com) with any questions about the program.

## License
    This project is licensed with MIT
