DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE recipess (
  name: Number,
  image: String,
  serves: Number,
  calories: Number,
  url: String
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
