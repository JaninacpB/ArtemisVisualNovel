declare namespace Novel {
    function ChapterOneInfrontManor(): ƒS.SceneReturn;
}
declare namespace Novel {
    function ChapterTwoEntryManor(): ƒS.SceneReturn;
}
declare namespace Novel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let location: {
        infrontManorDay: {
            name: string;
            background: string;
        };
        infrontManorNight: {
            name: string;
            background: string;
        };
        entryManor: {
            name: string;
            background: string;
        };
    };
    let character: {
        sound: {
            name: string;
        };
        bronte: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
                thinking: string;
                angry: string;
                sad: string;
                shout: string;
            };
        };
        maire: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
                embaressed: string;
                sad: string;
                happy: string;
                fear: string;
                laugh: string;
            };
        };
        remington: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
                angry: string;
            };
        };
    };
    let item: {
        cloak: {
            name: string;
            description: string;
            image: string;
        };
    };
    let dataForSave: {};
    function showCredits(): void;
}
