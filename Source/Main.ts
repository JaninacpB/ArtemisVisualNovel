namespace Novel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Das Artemis Mysterium startet");

  export let location = {
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
  }

  //todo: filler
  // export let placeInventory = {
  //   name: "test",
  //   origin: ƒS.ORIGIN.BOTTOMCENTER,
  //   pose: {
  //     standard: ""
  //   }
  // }

  let assetsChara = "assets/charakter/";

  export let character = {
    sound: {
      name: ""
    },

    bronte: {
      name: "Bronte",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
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
      origin: ƒS.ORIGIN.BOTTOMLEFT,
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
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        standard: assetsChara + "Remington-neutral-first.png",
        angry: assetsChara + "Remington-angry-first.png"
      }
    }
  }

  // todo:
  export let item = {
    cloak: {
      name: "Umhang",
      description: "",
      image: ""
    },
  }

  export let dataForSave = {

  }

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

  export function showCredits() {
    ƒS.Text.addClass("novelPage");
    ƒS.Text.print("<h1> Credits </h1><p><b> Story: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tamara Auber <br><b> Texte: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tamara Auber <br><b> Bilder: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tamara Auber<br><b>Titelbild: </b> &nbsp;&nbsp; Janina Bach<br></p>");
  }

  window.addEventListener("load", start);

  //gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");


  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: ChapterOneInfrontManor, name: "SceneOne" },
      { id: "ChapterTwoEntryManor", scene: ChapterTwoEntryManor, name: "SceneTwo" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}