namespace Novel {
    export async function ChapterTwoEntryManor(): ƒS.SceneReturn {
        console.log("Chapter 2: Inside of the Manor, Entry");
        await ƒS.Location.show(location.entryManor);
        await ƒS.update(0.7);

        await ƒS.Character.show(character.remington, character.remington.pose.standard,  ƒS.positionPercent(35, 100));
        await ƒS.Character.show(character.maire, character.maire.pose.standard,  ƒS.positionPercent(75, 100));
        await ƒS.Character.show(character.bronte, character.bronte.pose.standard,  ƒS.positionPercent(0, 100));
        await ƒS.update(0.7);
        
    }
}