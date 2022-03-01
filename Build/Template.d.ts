declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let place: {
        entryManor: {
            name: string;
            background: string;
        };
    };
    let character: {
        bronte: {
            name: string;
            pose: {
                standard: string;
                thinking: string;
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
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
