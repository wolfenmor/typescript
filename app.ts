interface IMission {
    mission_name: string
    launch_date_local: string
    launch_site: {
    site_name_long: string
},
    links: {
    article_link: string
        video_link: string
},
    rocket: {
    rocket_name: string
        first_stage: {
        cores: ICores[]
    },
    second_stage: {
        payloads:
           IPayloads[]
    }
}
}
interface IPayloads{
    payload_type: string
    payload_mass_kg: number
    payload_mass_lbs: number
}
interface ICores{
    "flight": number
    "core": {
        "reuse_count": number
        "status": string
    }
}
const mission:IMission = {
    "mission_name": "Starlink-15 (v1.0)",
    "launch_date_local": "2020-10-24T11:31:00-04:00",
    "launch_site": {
    "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
},
    "links": {
    "article_link": "http://some.com",
        "video_link": "https://youtu/J442-ti-Dhg"
},
    "rocket": {
    "rocket_name": "Falcon 9",
        "first_stage": {
        "cores": [
            {
                "flight": 7,
                "core": {
                    "reuse_count": 6,
                    "status": "unknown"
                }
            }
        ]
    },
    "second_stage": {
        "payloads": [
            {
                "payload_type": "Satellite",
                "payload_mass_kg": 15400,
                "payload_mass_lbs": 33951.2
            }
        ]
    }
}
}
interface IUser {
    name: string
    age: number
    gender: string
}
const user:IUser = {
    name:"Max",
    age:18,
    gender:'male'
}

function sum(a:number,b:number):number{
    return a+b
}
function showSum(a:number,b:number){
    console.log(a + b);
}

function incAge(someUser:IUser, inc:number):IUser{
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)

function numbers(str: string): void {
    const strings = str.match(/\d+/g);

    if (strings) {
        for (let i = 0; i < strings.length; i++) {
            const string = strings[i];
            console.log(string);
        }
    }
}
function numbers1(str: string): void {
    const string1 = str.match(/\d+/g);

    if (string1) {
        console.log(string1.join(', '))
    }
}
numbers1('sf2dsfsdf21')