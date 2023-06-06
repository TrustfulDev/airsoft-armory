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
    pic varchar(255) NOT NULL,
    location varchar(255) NOT NULL,
    website varchar(255) NOT NULL,
    rentals boolean NOT NULL,
    reservations boolean NOT NULL,
    breakTime int NOT NULL,
    distance varchar(255) NOT NULL,
    price int NOT NULL,
    playtime int NOT NULL,
    rounds int NOT NULL,
    size int NOT NULL,
    descr text NOT NULL,
    thoughts text NOT NULL
);

INSERT INTO Zone (zoneID, name, pic, location, website, rentals, reservations, breakTime, distance, price, playTime, rounds, size, descr, thoughts) VALUES (201, 'Gamepod Combat Zone', '/static/zones/gamepodZone.webp', '1400 W 4th St #2, Antioch, CA 94509', 'https://combatzonecqc.com/', true, true, 1, 'Far Away', 35, 3, 4, 120000, 'Gamepod Combat Zone is a massive indoor arena that includes both long-range and CQB engagements. The lights are kept extremely dim to simulate an abandoned warehouse. There are many landmarks within the warehouse. The more notable landmarks are the airport and the bus/gas station smack in the middle.', 'Gamepod combat zone is by far our favorite indoor airsoft arena. This place is gigantic, which allows us to move freely. There are little limitations to where and how you can approach your enemies; thus, it allows for unique engagements every time. Do note that this arena is very dark.');
INSERT INTO Zone (zoneID, name, pic, location, website, rentals, reservations, breakTime, distance, price, playTime, rounds, size, descr, thoughts) VALUES (202, 'CQB City', '/static/zones/cqbCity.webp', '3200 E 8 Mile Rd, Stockton, CA 95212', 'http://www.cqbcity.com/', true, true, 1, 'Far Away', 35, 3, 4, 60000, 'CQB City is decently sized given that it focuses on CQB engagements. There are two long lanes to shoot down, but the main attraction is the big building in the center. Additionally, each team can battle for a tower at the furthest lane to achieve high ground. Spawns are a bit weird here as each team spawns right next to each other, seperated by fences/walls, and engage towards the opposite corner of a square.', 'We don''t particularly hate this arena, but the spawns make the gamplay linear and repetitive. Regardless of the objective/gamemode, the team who pushes to the middle/corner fast enough ends up controlling the entire game. Spawn camping seems to be a common occurance here, and there seems to be more cheaters here than at any other arena.');
INSERT INTO Zone (zoneID, name, pic, location, website, rentals, reservations, breakTime, distance, price, playTime, rounds, size, descr, thoughts) VALUES (203, 'DSOC Killhouse', '/static/zones/dsoc.webp', '3200 E 8 Mile Rd, Stockton, CA 95212', 'https://www.swatsim.com/', true, true, 1, 'Close By', 35, 3, 4, 30000, 'DSOC Killhouse is an extremely small arena that simulates perfect CQB engagements. It is almost impossible to see down any lanes due to wooden walls that force CQB engagements. Test your reflexes, and see how well you fare in tight spaces.', '
This arena recently opened up (2023). Thus, we don''t have enough information to give our thoughts. With the few times we went since writing this, it''s relatively fun and a new experience compared to any other arena. We''d say this is an absolute must have experience at least once since you won''t find this CQB experience anywhere else near the Bay Area.');

-- Lesson Table
CREATE TABLE Lesson 
(
    lessonID int PRIMARY KEY NOT NULL,
    title varchar(255) NOT NULL,
    tag varchar(255) NOT NULL,
    headers VARCHAR[] NOT NULL,
    details VARCHAR[] NOT NULL,
    pic varchar(255) NOT NULL
);

INSERT INTO Lesson (lessonID, title, tag, headers, details, pic) VALUES (301, 'The Basics', '01', ARRAY['Safety First', 'Rules of Engagement', 'Calling Hits', 'FPS - Velocity'], ARRAY['Before you even start to play airsoft, you must have eye protection. BBs may not be able to kill you, but it can blind you.', 'Finger OFF the trigger until you are in the arena. Never shoot inside a safe area where people may not have eye protection on.', 'Once you feel an impact, yell "HIT" and raise your hand. Walk back to spawn with your hand raised to avoid being shot again.', 'Every gun will vary in strength which is measured by FPS. <300 is the weakest and can be shot everywhere. 350-400 is usually the max allowed FPS and can not be shot in-doors based on the field rules.'], '/static/lessons/alexanderJawfox.webp');
INSERT INTO Lesson (lessonID, title, tag, headers, details, pic) VALUES (302, 'Gameplay', '02', ARRAY['Fight', 'Peaking', 'Shooting', 'Issues'], ARRAY['Don''t be scared about being shot. The first mistake many make is hiding in the back of every round. Run around, get your blood pumping, and get some kills.', 'Do not peak with your head unless you want BBs flying to your face. Peak with the majority of your body, like in real life, so that your armor can take the shots.', 'It''s hard to tell where BBs are flying without a tracer unit. Shoot at the enemies until they are hit. Just don''t shoot when they call their hit and/or raise their hand.', 'If you run out of ammo or into any issues, simply raise your hand and walk back to the safe room. You can always return back to the game.'], '/static/lessons/recepTiryaki.webp');
INSERT INTO Lesson (lessonID, title, tag, headers, details, pic) VALUES (303, 'Sportsmanship', '03', ARRAY['Cheaters', 'Spawn Killing', 'Blind Firing', 'Fair Play'], ARRAY['Stay calm and try to talk it out with the cheater. The best thing to do if they are not cooperating is to reach out to a referee.', 'Every arena will have set spawns. Pull back if you know you are pushing too close, and do not shoot at people in spawn.', 'Do not blind fire as it is an unfair advantage. You should always peak with your gun.', 'Don''t try to actively cheat or seek out exploits. Play in the way where everyone can have fun: fairly.'], '/static/lessons/specnaArms.webp');