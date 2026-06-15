CREATE DATABASE IF NOT EXISTS railway;

USE railway;

CREATE TABLE IF NOT EXISTS github_profiles (

id INT AUTO_INCREMENT PRIMARY KEY,

username VARCHAR(100) UNIQUE NOT NULL,

name VARCHAR(255),

followers INT DEFAULT 0,

following INT DEFAULT 0,

public_repos INT DEFAULT 0,

profile_url TEXT,

avatar_url TEXT,

analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);