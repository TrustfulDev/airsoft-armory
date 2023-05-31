# Toy Soldiers Database
_Vercel's new Serverless Postgres storage feature_

## Design Process
### Conceptual Design - Initial Entities
The initial entities for this project is: Member, Zone, and Lesson
- Member: memberID, name, tag, status, rank, preferredType
- Zone: zoneID, name, location, website, price, rentals, reservations, playtime, rounds, desc
- Lesson: lessonID, title, (headers, details)

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
There isn't a high volume of data or enough information about data frequency/usage to think about denormalization.
Thus, this portion will simply include the final tables with the proper data types and relationships (foreign keys).
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
|  | location | VARCHAR(255) |
|  | website | VARCHAR(255) |
|  | price | INT |
|  | rentals | BOOLEAN |
|  | reservations | BOOLEAN |
|  | playtime | INT |
|  | rounds | INT |
|  | desc | VARCHAR(255) |

| Lesson |  |  |
| ------ | ------ | ------ |
| PK | lessonID | INT |
|  | title | VARCHAR(255) |

| Topic |  |  |
| ------ | ------ | ------ |
| PK | topicID | INT |
| PK, FK | lessonID | INT |
|  | header | VARCHAR(255) |
|  | details | VARCHAR(255) |

The only relationship is between Lesson and Topic. 
Lesson : Topic -> 1:M

> Note that a business rule only allows up to 4 topics per lesson

## SQL Implementation
Please check the toySoldiers.sql in the root directory to see the sql code.