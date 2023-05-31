-- Member Table
CREATE TABLE Member 
(
    memberID int PRIMARY KEY NOT NULL,
    name varchar(255) NOT NULL,
    tag varchar(255) NOT NULL,
    status boolean NOT NULL,
    rank int NOT NULL,
    preferredType varchar(255) NOT NULL
);

-- Zone Table
CREATE TABLE Zone
(
    zoneID int PRIMARY KEY NOT NULL,
    name varchar(255) NOT NULL,
    location varchar(255) NOT NULL,
    website varchar(255) NOT NULL,
    price int NOT NULL,
    rentals boolean NOT NULL,
    reservations boolean NOT NULL,
    playtime int NOT NULL,
    rounds int NOT NULL,
    desc varchar(255) NOT NULL
);

-- Lesson Table
CREATE TABLE Lesson 
(
    lessonID int PRIMARY KEY NOT NULL,
    title varchar(255) NOT NULL
);

-- Topic Table
CREATE TABLE Topic
(
    topicID int NOT NULL,
    lessonID int NOT NULL,
    header varchar(255) NOT NULL,
    details varchar(255) NOT NULL,
    PRIMARY KEY (topicID, lessonID),
    FOREIGN KEY (lessonID) REFERENCES Lesson(TableID);
)