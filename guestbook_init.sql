CREATE DATABASE guestbook;
USE guestbook;

DROP TABLE IF EXISTS contacts;
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    status VARCHAR(255),         
    company VARCHAR(255),
    linkedin VARCHAR(255),        
    email VARCHAR(255) NOT NULL,
    introduced VARCHAR(50),       
    timestamp DATETIME DEFAULT NOW()
);

insert into contacts (fname, lname, status, company, linkedin, email, introduced)
values ('Ricky', 'Picky', 'Software Engineer', 'Apple', 'RickyPickyLinkedIn', 'RickyPicky@email.com', 'School Together')