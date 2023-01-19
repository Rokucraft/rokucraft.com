export const applications = {
    builder: {
        formUrl: "https://forms.gle/qNUouMWp61Rfbu91A",
        displayName: "Builder",
    },
    artist: {
        formUrl: "https://forms.gle/ahwxxGvbYmjqyTPs9",
        displayName: "Artist",
    },
    "messenger-hawk": {
        formUrl: "https://forms.gle/szNMndUS34j48jpr7",
        displayName: "Messenger Hawk",
    },
    helper: {
        formUrl: "https://forms.gle/2imfL95s3ajRc4tTA",
        displayName: "Helper",
    },
    "game-engineer": {
        formUrl: "https://forms.gle/PmBJy7weLHVMutcf9",
        displayName: "Game Engineer",
    },
} satisfies Record<string, Application>;

type Application = {
    formUrl: string,
    displayName: string
}
