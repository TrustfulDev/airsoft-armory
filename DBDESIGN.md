# Toy Soldiers Database
_Vercel's new Serverless Postgres storage feature_

## Design Process
### Conceptual Design - Initial Entities
The initial entities for this project is: Member, Zone, and Lesson
- Member: memberID, name, tag, status, rank, preferredType
- Zone: zoneID, name, pic, location, website, rentals, reservations, breakTime, distance, price, playtime, rounds, size, descr, thoughts
- Lesson: lessonID, title, tag, (headers, details), pic

Since this project is for learning purposes, the database will stay small and simple.
The business rules are as follow:
> Rule 1: A lesson can only have up to four topics
> Rule 2: All attributes, except for website, needs to be filled out (NOT NULL)

### Logical Design - Normalization
#### 1NF - Repeating Groups
The repeating groups were already identified in the conceptual design denoted by parenthesis.
In this case, the only repeating group is in the entity Lesson: headers & details.
- Move the headers & details to a new table
- Topic: lessonID, topicID, header, details

#### 2NF - Fully Functionally Dependent
Thankfully, all entities are already in 2NF as each non-key attribute fully depends on the primary key(s).

#### 3NF - Transitive Dependency
Thankfully, all entities are already in 3NF as there are no non-key attributes depending on another non-key attribute

## Physical Design
There isn't a high volume of data or enough information about data frequency/usage to think about denormalization. However, postgres allows the usage of an array datatype. Thus, we can denormalize what we did in 1NF by recombining the (headers, details) back into the Lesson table. This cuts down the need of using a join to grab topics that correspond with each lesson.
| Member |  |  |
| ------ | ------ | ------ |
| PK | memberID | INT |
|  | name | VARCHAR(255) |
|  | tag | VARCHAR(255) |
|  | status | BOOLEAN |
|  | rank | INT |
|  | preferredType | VARCHAR(255) |

| Zone |  |  |
| ------ | ------ | ------ |
| PK | zoneID | INT |
|  | name | VARCHAR(255) |
|  | pic | VARCHAR(255) |
|  | location | VARCHAR(255) |
|  | website | VARCHAR(255) |
|  | rentals | BOOLEAN |
|  | reservations | BOOLEAN |
|  | breakTime | INT |
|  | distance | VARCHAR(255) |
|  | price | INT |
|  | playtime | INT |
|  | rounds | INT |
|  | size | INT |
|  | descr | VARCHAR(255) |
|  | thoughts | VARCHAR(255) |

| Lesson |  |  |
| ------ | ------ | ------ |
| PK | lessonID | INT |
|  | title | VARCHAR(255) |
|  | tag | VARCHAR(255) |
|  | header | VARCHAR[] |
|  | details | VARCHAR[] |
|  | pic | VARCHAR(255) |

## SQL Implementation
Please check the toySoldiers.sql in the root directory to see the sql code.