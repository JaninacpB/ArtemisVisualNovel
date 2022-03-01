namespace Novel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Das Artemis Mysterium startet");

  export let place = {
    entryManor: {
      name: "entry",
      background: "Assets/"
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

  export let character = {
    bronte: {
      name: "Bronte",
      pose: {
        standard: "",
        thinking: ""
      }
    }
  }

  // todo:
  export let item = {
    cloak: {
      name: "Umhang",
      description: "„Er schützt dich vor nichts (abgesehen von dem Wetter vielleicht), er hilft dir nicht im Kampf, aber du siehst einfach fabelhaft aus!“",
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
      { scene: ChapterOneInfrontManor, name: "SceneOne" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}