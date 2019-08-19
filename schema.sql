DROP DATABASE IF EXISTS notetaker_db;
CREATE DATABASE notetaker_db;

USE notetaker_db;

CREATE TABLE notes (
  id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL
  --  created_at DATETIME default NOW(), if you want timestamps uncomment this line.
);
USE notetaker_db;

INSERT INTO notes (id, title, body)
VALUES
  (1, "Note Taker App", "Complete this homework by Tuesday, August 6, 2019 11:59 PM"),
  (2, "READ THE DOCS", "Read documentation about... Node, Express, MySQL, etc."),
  (3, "Mark myself present in Bootcampspot", "Remember to mark myself present every Monday-Friday at 10am"),
  (4, "Commit more", "Get those commits up. It shows the process and progress.")