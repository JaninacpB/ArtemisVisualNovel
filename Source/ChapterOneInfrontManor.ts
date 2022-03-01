namespace Novel {
    export async function ChapterOneInfrontManor(): ƒS.SceneReturn {
        console.log("Chapter 1: Infront of the Manor");

        await ƒS.Location.show(location.infrontManorDay);
        //await ƒS.update(transition.transitionTwo.duration, transition.transitionTwo.alpha, transition.transitionTwo.edge)

        //Anzeige Shortcuts
        // todo: why novelPage? 
        ƒS.Text.addClass("novelPage");

        let choiceCatSound = {
            searchBush: "Untersuche Busch",
            lookAtWindow: "Untersuche Fenster",
            knock: "Klopfe"
        }

        await ƒS.Character.show(character.maire, character.maire.pose.standard,  ƒS.positionPercent(75, 100));
        await ƒS.update(0.7);

        await ƒS.Speech.tell(character.maire, "Oh, was für ein prächtiges Anwesen. Und wir sind hier wirklich richtig?");
       
        await ƒS.Character.show(character.bronte, character.bronte.pose.standard,  ƒS.positionPercent(0, 100));
        await ƒS.update(0.7);

        await ƒS.Speech.tell(character.bronte, "Ja, die Blackburns haben schon seit vielen Jahren diesen Wohnsitz. Ich habe dir doch gesagt, dass es heute Abend eine sehr vornehme Veranstaltung wird. ");

        await ƒS.Character.hide(character.maire);
        await ƒS.Character.show(character.maire, character.maire.pose.fear,  ƒS.positionPercent(75, 100));
        await ƒS.update(0.7);

        await ƒS.Speech.tell(character.maire, "Ja aber doch nicht so vornehm! Du hättest mich besser warnen müssen. Ich sehe ja aus wie ein Dorftrampel. Ich dachte du hättest für die Dame des Hauses einen Fall gelöst?");
        await ƒS.Speech.tell(character.bronte, "Habe ich ja auch. Wobei es eher ein Zufall war, dass der Crossstreet-Bandit auch ihre Smaragd Brosche gestohlen hatte. Aber so oder so war die Lady jedoch so dankbar, dass sie mich reichlich belohnt hat und zu einem Essen eingeladen hat. ");
        await ƒS.Speech.tell(character.maire, "!!!");

        await ƒS.Character.hide(character.maire);
        await ƒS.Character.show(character.maire, character.maire.pose.embaressed,  ƒS.positionPercent(75, 100));
        await ƒS.update(0.7);

        await ƒS.Speech.tell(character.maire, "Eine Lady!");
        await ƒS.Speech.tell(character.maire, "Bronte du hast nicht erwähnt, dass sie eine Lady ist! Oh großgütiger, ich sehe aus wie eine Heuschrecke! ");
        await ƒS.Speech.tell(character.bronte, "Ach was Maire, du siehst wie immer fantastisch aus. Mach dir keine Sorge-");

        await ƒS.Character.hide(character.maire);
        await ƒS.Character.show(character.maire, character.maire.pose.fear,  ƒS.positionPercent(75, 100));
       
        await ƒS.Character.hide(character.bronte);
        await ƒS.Character.show(character.bronte, character.bronte.pose.shout,  ƒS.positionPercent(0, 100));
        await ƒS.update(0.7);

        await ƒS.Speech.tell(character.sound, "MIAU!");
        await ƒS.Speech.tell(character.maire, "Was... war das eine Katze?");

        await ƒS.Character.hide(character.maire);
        await ƒS.Character.show(character.maire, character.maire.pose.standard,  ƒS.positionPercent(75, 100));
       
        await ƒS.Character.hide(character.bronte);
        await ƒS.Character.show(character.bronte, character.bronte.pose.standard,  ƒS.positionPercent(0, 100));
        await ƒS.update(0.7);

        await ƒS.Speech.tell(character.bronte, "Und eine schnelle dazu… sieht so aus als wäre sie in die Hecke verschwunden. Komisch, ich frag mich was sie da gesehen hat.");
        await ƒS.Speech.tell(character.maire, "	Vermutlich einen Vogel. Wir sollten glaube ich langsam Klopfen. Ich glaube jemand hat gerade durch das Fenster geschaut. Wir sehen ja aus wie gewöhnliche Straßendiebe für diese Leute. ");

        let dialogCat = await ƒS.Menu.getInput(choiceCatSound, "DialogBoxPresents");
        switch(dialogCat){
            case choiceCatSound.searchBush:
                await ƒS.Speech.tell(character.bronte, "Nur ein Moment.");
                await ƒS.Speech.tell(character.maire, "…Deshalb sind wir immer zu spät.");
                await ƒS.Speech.tell(character.bronte, "Nun lass mal schauen... Oh!");
                //todo: erhalte Item
                await ƒS.Speech.tell(character.bronte, "Komisch, warum sollte das hier einfach herum liegen? ");
                await ƒS.Speech.tell(character.bronte, "Mhm… O.R.");

                await ƒS.Character.hide(character.maire);
                await ƒS.Character.show(character.maire, character.maire.pose.fear,  ƒS.positionPercent(75, 100));
                await ƒS.update(0.7);

                await ƒS.Speech.tell(character.maire, "Oh, da kommt jemand!");     
                
                await ƒS.Character.hide(character.remington);
                await ƒS.Character.show(character.remington, character.remington.pose.standard,  ƒS.positionPercent(35, 100));
                await ƒS.update(0.7);

                await ƒS.Speech.tell(character.remington, "Entschuldigen Sie. Sind Sie Miss Bronte und ihre Begleitung?");
                
                await ƒS.Character.hide(character.maire);
                await ƒS.Character.show(character.maire, character.maire.pose.laugh,  ƒS.positionPercent(75, 100));
                await ƒS.update(0.7);

                await ƒS.Speech.tell(character.maire, "Miss Bronte, hihi.")
                await ƒS.Speech.tell(character.bronte, "Guten Abend. Genau, die sind wir. Freut mich sie kennenzulernen, Herr?");
                await ƒS.Speech.tell(character.remington, "Bitte folgen sie mir doch hinein.");

                await ƒS.Character.hide(character.maire);
                await ƒS.Character.hide(character.remington);
                await ƒS.Character.show(character.maire, character.maire.pose.standard,  ƒS.positionPercent(75, 100));
                await ƒS.update(0.7);

                await ƒS.Speech.tell(character.maire, "Nicht sehr gesprächig…");

                break;
            
            case choiceCatSound.lookAtWindow:
                break;

            case choiceCatSound.knock:
                break;
        }

        await ƒS.Character.hide(character.bronte); 
        await ƒS.Character.hide(character.maire); 

        return "ChapterTwoEntryManor";
    }
}