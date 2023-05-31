import { Lesson } from "@/components";

/* Important Thought
* How to handle with large amounts of lessons?
* Pagination?
* How to keep everything a server side component?
*/

// Using Local JSON data
const lessons = [
    {
        img: "/maskPaint.png",
        alt: "A soldier standing on a log",
        title: "The Basics",
        num: "01",
        headers: ["Safety First", "Rules of Engagement", "Calling Hits", "FPS - Velocity"],
        details: ["Before you even start to play airsoft, you must have eye protection. BBs may not be able to kill you, but it can blind you.", "Finger OFF the trigger until you are in the arena. Never shoot inside a safe area where people may not have eye protection on.", "Once you feel an impact, yell \"HIT\" and raise your hand. Walk back to spawn with your hand raised to avoid being shot again.", "Every gun will vary in strength which is measured by FPS. <300 is the weakest and can be shot everywhere. 350-400 is usually the max allowed FPS and can not be shot in-doors based on the field rules."]
    },
    {
        img: "/maskPaint.png",
        alt: "A soldier standing on a log",
        title: "Gun Handling",
        num: "02",
        headers: ["Safety First", "Rules of Engagement", "Calling Hits", "FPS - Velocity"],
        details: ["Before you even start to play airsoft, you must have <u>eye protection</u>. BBs may not be able to kill you, but it can blind you.", "Finger OFF the trigger until you are in the arena. Never shoot inside a safe area where people may not have eye protection on.", "Once you feel an impact, yell &ldquo;HIT&rdquo; and raise your hand. Walk back to spawn with your hand raised to avoid being shot again.", "Every gun will vary in strength which is measured by FPS. &le;300 is the weakest and can be shot everywhere. 350-400 is usually the max allowed FPS and can not be shot in-doors based on the field rules."]
    },
    {
        img: "/maskPaint.png",
        alt: "A soldier standing on a log",
        title: "Sportsmanship",
        num: "03",
        headers: ["Cheaters", "Spawn Killing", "Blind Firing", "Fair Play"],
        details: ["Stay calm and try to talk it out with the cheater. The best thing to do if they are not cooperating is to reach out to a referee.", "Every arena will have set spawns. Pull back if you know you are pushing too close, and do not shoot at people in spawn.", "Do not blind fire as it is an unfair advantage. You should always peak with your gun.", "Don't try to actively cheat or seek out exploits. Play in the way where everyone can have fun: fairly."]
    }
]

const learn = () => {
    return (
        <>
            {
                lessons.map((e, index) => {
                    return (
                        <Lesson key={index}
                            img={e.img}
                            alt={e.alt}
                            title={e.title}
                            num={e.num}
                            headers={e.headers}
                            details={e.details}
                        />
                    )
                })
            }
        </>
    );
};

export default learn;