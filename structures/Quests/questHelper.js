const questHelper = (user, questName, newPlaces, newQuests) => {
    const quest = user.quests.find(q => q.name === questName);
    if (!quest) {
        console.error(`Did not find quest '${questName.name}' to user '${user.account.username}'`)
        return false;
    }

    if (!quest.started) {
        user.startQuest(questName);

        if (newPlaces) {
            newPlaces.forEach(newPlace => {
                const { currentLocation, place: newlyExplored } = newPlace;

                user.handleExplore(currentLocation, newlyExplored);
            })
        }

        if (newQuests) {
            newQuests.forEach(newQuest => {
                user.addNewQuest(newQuest);
            })
        }

        user.save();
        return false;
    }
    return true;
}

module.exports = { questHelper };