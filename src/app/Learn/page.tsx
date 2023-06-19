import { Lesson } from "@/components";

/* Important Thought
* How to handle with large amounts of lessons?
* Pagination?
* How to keep everything a server side component?
*/

async function getLessons() {
    let res = await fetch(`https://airsoft-armory.vercel.app//api/lessons`);
    return res.json();

    // let res = await import ("../api/lessons/route");

    // return await (await res.GET()).json();
}

export default async function learn() {
    let lessons = await getLessons();

    return (
        <>
            {
                lessons.map((e: any, index: number) => {
                    return (
                        <Lesson key={index}
                            img={e.pic}
                            alt="A soldier"
                            title={e.title}
                            num={e.tag}
                            headers={e.headers}
                            details={e.details}
                        />
                    )
                })
            }
        </>
    );
};