"use strict";
var Novel;
(function (Novel) {
    async function ChapterOneInfrontManor() {
        console.log("Chapter 1: Infront of the Manor");
        await Novel.ƒS.Location.show(Novel.location.infrontManorDay);
        //await ƒS.update(transition.transitionTwo.duration, transition.transitionTwo.alpha, transition.transitionTwo.edge)
        //Anzeige Shortcuts
        // todo: why novelPage? 
        Novel.ƒS.Text.addClass("novelPage");
        let choiceCatSound = {
            searchBush: "Untersuche Busch",
            lookAtWindow: "Untersuche Fenster",
            knock: "Klopfe"
        };
        await Novel.ƒS.Character.show(Novel.character.maire, Novel.character.maire.pose.standard, Novel.ƒS.positionPercent(75, 100));
        await Novel.ƒS.update(0.7);
        await Novel.ƒS.Speech.tell(Novel.character.maire, "Oh, was für ein prächtiges Anwesen. Und wir sind hier wirklich richtig?");
        await Novel.ƒS.Character.show(Novel.character.bronte, Novel.character.bronte.pose.standard, Novel.ƒS.positionPercent(0, 100));
        await Novel.ƒS.update(0.7);
        await Novel.ƒS.Speech.tell(Novel.character.bronte, "Ja, die Blackburns haben schon seit vielen Jahren diesen Wohnsitz. Ich habe dir doch gesagt, dass es heute Abend eine sehr vornehme Veranstaltung wird. ");
        await Novel.ƒS.Character.hide(Novel.character.maire);
        await Novel.ƒS.Character.show(Novel.character.maire, Novel.character.maire.pose.fear, Novel.ƒS.positionPercent(75, 100));
        await Novel.ƒS.update(0.7);
        await Novel.ƒS.Speech.tell(Novel.character.maire, "Ja aber doch nicht so vornehm! Du hättest mich besser warnen müssen. Ich sehe ja aus wie ein Dorftrampel. Ich dachte du hättest für die Dame des Hauses einen Fall gelöst?");
        await Novel.ƒS.Speech.tell(Novel.character.bronte, "Habe ich ja auch. Wobei es eher ein Zufall war, dass der Crossstreet-Bandit auch ihre Smaragd Brosche gestohlen hatte. Aber so oder so war die Lady jedoch so dankbar, dass sie mich reichlich belohnt hat und zu einem Essen eingeladen hat. ");
        await Novel.ƒS.Speech.tell(Novel.character.maire, "!!!");
        await Novel.ƒS.Character.hide(Novel.character.maire);
        await Novel.ƒS.Character.show(Novel.character.maire, Novel.character.maire.pose.embaressed, Novel.ƒS.positionPercent(75, 100));
        await Novel.ƒS.update(0.7);
        await Novel.ƒS.Speech.tell(Novel.character.maire, "Eine Lady!");
        await Novel.ƒS.Speech.tell(Novel.character.maire, "Bronte du hast nicht erwähnt, dass sie eine Lady ist! Oh großgütiger, ich sehe aus wie eine Heuschrecke! ");
        await Novel.ƒS.Speech.tell(Novel.character.bronte, "Ach was Maire, du siehst wie immer fantastisch aus. Mach dir keine Sorge-");
        await Novel.ƒS.Character.hide(Novel.character.maire);
        await Novel.ƒS.Character.show(Novel.character.maire, Novel.character.maire.pose.fear, Novel.ƒS.positionPercent(75, 100));
        await Novel.ƒS.Character.hide(Novel.character.bronte);
        await Novel.ƒS.Character.show(Novel.character.bronte, Novel.character.bronte.pose.shout, Novel.ƒS.positionPercent(0, 100));
        await Novel.ƒS.update(0.7);
        await Novel.ƒS.Speech.tell(Novel.character.sound, "MIAU!");
        await Novel.ƒS.Speech.tell(Novel.character.maire, "Was... war das eine Katze?");
        await Novel.ƒS.Character.hide(Novel.character.maire);
        await Novel.ƒS.Character.show(Novel.character.maire, Novel.character.maire.pose.standard, Novel.ƒS.positionPercent(75, 100));
        await Novel.ƒS.Character.hide(Novel.character.bronte);
        await Novel.ƒS.Character.show(Novel.character.bronte, Novel.character.bronte.pose.standard, Novel.ƒS.positionPercent(0, 100));
        await Novel.ƒS.update(0.7);
        await Novel.ƒS.Speech.tell(Novel.character.bronte, "Und eine schnelle dazu… sieht so aus als wäre sie in die Hecke verschwunden. Komisch, ich frag mich was sie da gesehen hat.");
        await Novel.ƒS.Speech.tell(Novel.character.maire, "	Vermutlich einen Vogel. Wir sollten glaube ich langsam Klopfen. Ich glaube jemand hat gerade durch das Fenster geschaut. Wir sehen ja aus wie gewöhnliche Straßendiebe für diese Leute. ");
        let dialogCat = await Novel.ƒS.Menu.getInput(choiceCatSound, "DialogBoxPresents");
        switch (dialogCat) {
            case choiceCatSound.searchBush:
                await Novel.ƒS.Speech.tell(Novel.character.bronte, "Nur ein Moment.");
                await Novel.ƒS.Speech.tell(Novel.character.maire, "…Deshalb sind wir immer zu spät.");
                await Novel.ƒS.Speech.tell(Novel.character.bronte, "Nun lass mal schauen... Oh!");
                //todo: erhalte Item
                await Novel.ƒS.Speech.tell(Novel.character.bronte, "Komisch, warum sollte das hier einfach herum liegen? ");
                await Novel.ƒS.Speech.tell(Novel.character.bronte, "Mhm… O.R.");
                await Novel.ƒS.Character.hide(Novel.character.maire);
                await Novel.ƒS.Character.show(Novel.character.maire, Novel.character.maire.pose.fear, Novel.ƒS.positionPercent(75, 100));
                await Novel.ƒS.update(0.7);
                await Novel.ƒS.Speech.tell(Novel.character.maire, "Oh, da kommt jemand!");
                await Novel.ƒS.Character.hide(Novel.character.remington);
                await Novel.ƒS.Character.show(Novel.character.remington, Novel.character.remington.pose.standard, Novel.ƒS.positionPercent(35, 100));
                await Novel.ƒS.update(0.7);
                await Novel.ƒS.Speech.tell(Novel.character.remington, "Entschuldigen Sie. Sind Sie Miss Bronte und ihre Begleitung?");
                await Novel.ƒS.Character.hide(Novel.character.maire);
                await Novel.ƒS.Character.show(Novel.character.maire, Novel.character.maire.pose.laugh, Novel.ƒS.positionPercent(75, 100));
                await Novel.ƒS.update(0.7);
                await Novel.ƒS.Speech.tell(Novel.character.maire, "Miss Bronte, hihi.");
                await Novel.ƒS.Speech.tell(Novel.character.bronte, "Guten Abend. Genau, die sind wir. Freut mich sie kennenzulernen, Herr?");
                await Novel.ƒS.Speech.tell(Novel.character.remington, "Bitte folgen sie mir doch hinein.");
                await Novel.ƒS.Character.hide(Novel.character.maire);
                await Novel.ƒS.Character.hide(Novel.character.remington);
                await Novel.ƒS.Character.show(Novel.character.maire, Novel.character.maire.pose.standard, Novel.ƒS.positionPercent(75, 100));
                await Novel.ƒS.update(0.7);
                await Novel.ƒS.Speech.tell(Novel.character.maire, "Nicht sehr gesprächig…");
                break;
            case choiceCatSound.lookAtWindow:
                break;
            case choiceCatSound.knock:
                break;
        }
        await Novel.ƒS.Character.hide(Novel.character.bronte);
        await Novel.ƒS.Character.hide(Novel.character.maire);
        return "ChapterTwoEntryManor";
    }
    Novel.ChapterOneInfrontManor = ChapterOneInfrontManor;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function ChapterTwoEntryManor() {
        console.log("Chapter 2: Inside of the Manor, Entry");
        await Novel.ƒS.Location.show(Novel.location.entryManor);
        await Novel.ƒS.update(0.7);
        await Novel.ƒS.Character.show(Novel.character.remington, Novel.character.remington.pose.standard, Novel.ƒS.positionPercent(35, 100));
        await Novel.ƒS.Character.show(Novel.character.maire, Novel.character.maire.pose.standard, Novel.ƒS.positionPercent(75, 100));
        await Novel.ƒS.Character.show(Novel.character.bronte, Novel.character.bronte.pose.standard, Novel.ƒS.positionPercent(0, 100));
        await Novel.ƒS.update(0.7);
    }
    Novel.ChapterTwoEntryManor = ChapterTwoEntryManor;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    Novel.ƒ = FudgeCore;
    Novel.ƒS = FudgeStory;
    console.log("Das Artemis Mysterium startet");
    Novel.location = {
        infrontManorDay: {
            name: "infrontManorDay",
            background: "assets/background/vorDemManorBackground.png"
        },
        infrontManorNight: {
            name: "infrontManorNight",
            background: "assets/background/vorDemManorBackground-night.png"
        },
        entryManor: {
            name: "entry",
            background: "assets/background/entryBackground.png"
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
    let assetsChara = "assets/charakter/";
    Novel.character = {
        sound: {
            name: ""
        },
        bronte: {
            name: "Bronte",
            origin: Novel.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                standard: assetsChara + "Bronte-happy.png",
                thinking: assetsChara + "Bronte-think-first.png",
                angry: assetsChara + "Bronte-angry-first.png",
                sad: assetsChara + "Bronte-sad-first.png",
                shout: assetsChara + "Bronte-shout-first.png"
            }
        },
        maire: {
            name: "Maire",
            origin: Novel.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                standard: assetsChara + "Assestentin-neutral.png",
                embaressed: assetsChara + "Assestentin-emberassed.png",
                sad: assetsChara + "Assestentin-sad.png",
                happy: assetsChara + "Assestentin-happy.png",
                fear: assetsChara + "Assestentin-fear.png",
                laugh: assetsChara + "Assestentin-laugh.png"
            }
        },
        remington: {
            name: "Remington",
            origin: Novel.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                standard: assetsChara + "Remington-neutral-first.png",
                angry: assetsChara + "Remington-angry-first.png"
            }
        }
    };
    // todo:
    Novel.item = {
        cloak: {
            name: "Umhang",
            description: "",
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
            { scene: Novel.ChapterOneInfrontManor, name: "SceneOne" },
            { id: "ChapterTwoEntryManor", scene: Novel.ChapterTwoEntryManor, name: "SceneTwo" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Novel.dataForSave = Novel.ƒS.Progress.setData(Novel.dataForSave, uiElement);
        // start the sequence
        Novel.ƒS.Progress.go(scenes);
    }
})(Novel || (Novel = {}));
//# sourceMappingURL=Template.js.map