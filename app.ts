interface IUser{
    mission_name: string
    launch_date_local: string;
    launch_site: launchSite;
    links: Links;
    rocket: Rocket;
}
interface launchSite {
    site_name_long: string;
}
interface Links {
    article_link: string
    video_link: string
}
interface Rocket {
    rocket_name: string;
    first_stage: FirstStage;
    second_stage: SecondStage;
}
interface FirstStage {
    cores: Array<{flight: number; core:Core}>
}
interface Core {
    reuse_count: number;
    status: string;
}
interface SecondStage {
payloads: Payload[];
}
interface Payload {
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
}

const user: IUser = {
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
