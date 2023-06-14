-- Member Table
CREATE TABLE Member 
(
    memberID int PRIMARY KEY NOT NULL,
    pic varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    tag varchar(255) NOT NULL,
    descr text NOT NULL,
    agility int NOT NULL,
    endurance int NOT NULL,
    marksmanship int NOT NULL,
    perception int NOT NULL,
    rank int NOT NULL,
    guntype varchar(255) NOT NULL,
    cautious boolean NOT NULL,
    stealth boolean NOT NULL,
    primarygun varchar(255) NOT NULL,
    secondarygun varchar(255) NOT NULL,
    eye varchar(255) NOT NULL,
    rig varchar(255) NOT NULL
);

INSERT INTO Member (memberID, pic, name, tag, descr, agility, endurance, marksmanship, perception, rank, guntype, cautious, stealth, primarygun, secondarygun, eye, rig) VALUES (101, '/static/members/andyNgo.webp', 'Andy Ngo', '@PureSins101', 'Specifically designated, organized, selected, trained, and equipped to secure, contain, and protect, Andy is a force to be reckoned with on the battlefield. With unwavering dedication and a comprehensive skill set honed through rigorous training, he stands at the forefront of the SCP Foundation, exemplifying the pinnacle of airsoft excellence. Andy''s specialized equipment and tactical prowess ensure the successful containment of any breaches.', 8, 8, 9, 9, 3, 'AEG', false, false, 'Arcturus AK-12 (Perun MOSFET)', 'WE 1911', 'Leyelux AG02 Ballistic Shooting Goggles (tinted)', 'Viper Tactical VX Gen 2');
INSERT INTO Member (memberID, pic, name, tag, descr, agility, endurance, marksmanship, perception, rank, guntype, cautious, stealth, primarygun, secondarygun, eye, rig) VALUES (102, '/static/members/alexNguyen.webp', 'Alexei Nysan', '@feral.heir', 'Embodying the essence of direct action and force-on-force gameplay, Alex is relentless in his pursuit of victory. He employs attrition as a strategic tool, exerting continuous pressure on fortified positions to gain leverage. This player excels in anchoring and defending heavily contested areas, preventing counterattacks and preserving valuable territory. Their approach to accuracy is defined by a barrage of volleys, unleashing a high volume of fire to overwhelm opponents.', 4, 7, 6, 3, 3, 'AEG/GBB', false, false, 'G&G ARP9 1.0', 'EMG Strike Industries ARK17', 'BOLLE X800 and/or Valken Sierra', '1TG FYR');
INSERT INTO Member (memberID, pic, name, tag, descr, agility, endurance, marksmanship, perception, rank, guntype, cautious, stealth, primarygun, secondarygun, eye, rig) VALUES (103, '/static/members/phiVu.webp', 'Phi Vu', '@itzphi', 'As a K9 handler, Phi''s partnership with his trusty canine companion adds a whole new dimension to his gameplay. Whether it''s locating hidden enemies, sniffing out strategic positions, or offering vital tactical assistance, Phi''s expertise as a K9 handler combined with his unwavering dedication to supporting his team make him an invaluable asset on the airsoft field. With his canine partner by his side, Phi embodies the true spirit of teamwork, bringing a new level of synergy to the game.', 7, 8, 6, 8, 2, 'HPA', true, true, 'A&K MK46 / King Arms TWS', 'None', 'Helmet Face Shield / Safety Glasses', 'FCPC V5');
INSERT INTO Member (memberID, pic, name, tag, descr, agility, endurance, marksmanship, perception, rank, guntype, cautious, stealth, primarygun, secondarygun, eye, rig) VALUES (104, '/static/members/stevenVu.webp', 'Steven Vu', '@trustfuldev', 'With a penchant for stealth and a keen eye for tactics, Steven''s playstyle revolves around flanking maneuvers and embracing the shadows. Whether it''s infiltrating enemy lines undetected or strategically positioning themselves to gain the upper hand, Steven''s ability to blend into the environment and strike from unexpected angles makes them a formidable force on the field. Armed with patience, agility, and a knack for exploiting weaknesses, Steven is a true master of the stealthy art of airsoft warfare.', 9, 5, 3, 10, 1, 'GBB/HPA', true, true, 'KWA KMP9', 'None', 'eye pro', 'Matrix S.D.E.U. Ultra Light Weight Airsoft Tactical Vest');

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