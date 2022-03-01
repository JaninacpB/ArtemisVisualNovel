"use strict";
var Novel;
(function (Novel) {
    async function ChapterOneInfrontManor() {
        Novel.ƒS.Text.addClass("novelPage");
        return "";
    }
    Novel.ChapterOneInfrontManor = ChapterOneInfrontManor;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    Novel.ƒ = FudgeCore;
    Novel.ƒS = FudgeStory;
    console.log("Das Artemis Mysterium startet");
    Novel.place = {
        entryManor: {
            name: "entry",
            background: "Assets/"
        }
    };
    //todo: filler
    // export let placeInventory = {
    //   name: "test",
    //   origin: ƒS.ORIGIN.BOTTOMCENTER,
    //   pose: {
    //     standard: ""
    //   }
    // }
    Novel.character = {
        bronte: {
            name: "Bronte",
            pose: {
                standard: "",
                thinking: ""
            }
        }
    };
    // todo:
    Novel.item = {
        cloak: {
            name: "Umhang",
            description: "„Er schützt dich vor nichts (abgesehen von dem Wetter vielleicht), er hilft dir nicht im Kampf, aber du siehst einfach fabelhaft aus!“",
            image: ""
        },
    };
    Novel.dataForSave = {};
    // let inGameMenu = {
    //     credits: "Credits",
    //     save: "Save",
    //     load: "Load",
    //     close: "Close"
    // }
    // let gameMenu: ƒS.Menu;
    // let menu: boolean = true; 
    // async function buttonFunctionalities(_option: string): Promise<void> {
    //   console.log(_option);
    //   switch (_option) {
    //     case inGameMenu.save:
    //       await ƒS.Progress.save();
    //       break;
    //     case inGameMenu.load:
    //       await ƒS.Progress.load();
    //       break;
    //     case inGameMenu.close:
    //       gameMenu.close();
    //       menu = false;
    //       break;
    //       case inGameMenu.credits:
    //         showCredits();
    //         break;
    //   }
    // }
    function showCredits() {
        Novel.ƒS.Text.addClass("novelPage");
        Novel.ƒS.Text.print("<h1> Credits </h1><p><b> Story: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tamara Auber <br><b> Texte: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tamara Auber <br><b> Bilder: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tamara Auber<br><b>Titelbild: </b> &nbsp;&nbsp; Janina Bach<br></p>");
    }
    Novel.showCredits = showCredits;
    window.addEventListener("load", start);
    //gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
    function start(_event) {
        let scenes = [
            { scene: Novel.ChapterOneInfrontManor, name: "SceneOne" }
        ];
        // start the sequence
        Novel.ƒS.Progress.go(scenes);
    }
})(Novel || (Novel = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map