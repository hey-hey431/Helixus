const {
    stripIndents
} = require("common-tags");

module.exports = {
    code: 'fr',
    COMMANDS: {
        AFK: {
            description: 'Permet de spécifier un message d\'AFK quand vous serez notifié.',
            noReason: '❌ - Veuillez spécifier une raison.',
            success: '✅ - Vous êtes maintenant AFK! Tapez un message (pas une commande) pour retirer le message d\'AFK.'
        },
        ANAL: {
            description: 'Affiche une image NSFW catégorisée `anal`.',
            pleaseWait: "<a:loading:543460555113889792> - Veuillez patienter...",
            requestedBy: (author) => `Demandé par ${author}`,
            notDisplaying: 'Cliquez ici si l\'image ne s\'affiche pas.',
            providedBy: 'Service par NekoBotAPI (nekobot.xyz)'
        },
        ASCII: {
            description: 'Convertis le texte en art ASCII.',
            tooLong: (chars) => `❌ - Le texte doit faire 15 caractères ou moins. Le texte spécifié est ${chars} caractères trop long.`
        },
        ASS: {
            description: 'Affiche une image NSFW catégorisée `ass`.',
            pleaseWait: "<a:loading:543460555113889792> - Veuillez patienter...",
            requestedBy: (author) => `Demandé par ${author}`,
            notDisplaying: 'Cliquez ici si l\'image ne s\'affiche pas.',
            providedBy: 'Service par NekoBotAPI (nekobot.xyz)'
        },
        AUTOROLE: {
            description: 'Vous permets de configurer des rôles qui seront donnés aux membres a leur arrivée.',
            OFF: {
                noRoleConfigured: '❌ - Aucun rôle a été configuré.',
                removed: '✅ - Tous les rôles ont été retirés de l\'autorole.'
            },
            added: `✅ - Les rôles spécifiés seront maintenant donnés aux nouveaux membres.`,
            removed: `✅ - Les rôles spécifiés ne seront plus donnés aux nouveaux membres.`,
            notFound: (role) =>  `❌ - Le rôle \`${role}\` n'a pas été trouvé.`,
            notUsed: (role) => `❌ - Le rôle \`${role}\` n'est pas utilisé comme un autorole.`
        },
        AVATAR: {
            description: 'Affiche votre avatar ou celui de l\'utilisateur mentionné.',
            avatar: (userTag) => `Voici l'avatar de ${userTag}`,
            notShowing: "Cliquez ici si l'avatar ne s'affiche pas."
        },
        BACKGROUND: {
            description: 'Vous permets de configurer le fond de votre carte de niveaux, de les acheter et de voir la liste complète!',
            BUY: {
                noBackgroundSpecified: '❌ - Veuillez indiquer un fond a acheter! Pour voir la liste des fonds disponibles, faites `am!background list`!',
                invalidBackground: '❌ - Veuillez indiquer un fond valide! Pour voir la liste des fonds disponibles, faites `am!background list`!',
                notEnoughCoins: '❌ Vous n\'avez pas **5000** coins! Revenez une fois cette somme obtenue...',
                alreadyBought: '❌ - Vous possedez déjà ce fond!',
                success: (background) => `✅ - Vous avez acheté le fond **${background}** !`
            },
            SET: {
                noBackgrounds: '❌ - Vous n\'avez aucun fond...',
                noBackgroundSpecified: '❌ - Veuillez indiquer un fond a configurer! Pour voir la liste des fonds disponibles, faites `am!background list`!',
                invalidBackground: '❌ - Veuillez indiquer un fond valide! Pour voir la liste des fonds disponibles, faites `am!background list`!',
                success: (background) => `✅ - Vous avez mis le fond **${background}** !`
            },
            LIST: {
                pleaseWait: "Veuillez patienter...",
                closedPaginator: "❌ Pagination fermée... ❌",
                embedAuthor: "Liste des fonds",
                embedTitle: `Le signe ❌ signifie que vous ne possédez pas le fond.\nAchetez le en faisant \`am!background buy <fond>\` !`,
                preview: '[Aperçu]'
            }
        },
        BAKA: {
            description: 'Dit a quelqu\'un qu\'il est un baka! (idiot)',
            baka: (memberTag) => `**${memberTag}** est un baka!`,
            service: "Service par nekos.life"
        },
        BALANCE: {
            description: "Affiche votre porte monnaie!",
            output: (bal) => `Vous avez <a:coin:784930553748520961> **${bal}** pièces!`
        },
        BAN: {
            description: 'Bannis le membre spécifié.',
            noMention: "❌ - Veuillez mentionner un membre ou spécifier l'ID du membre à bannir.",
            noValidMention: "❌ - Veuillez mentionner un membre **valide** ou spécfier l'ID du membre à bannir.",
            noReason: "Aucune raison spécifiée.",
            confirmation: (member, reason) => `<a:loading:543460555113889792> - Voulez-vous vraiment bannir **${member.user.tag}** (${member.id}) pour __**${reason}**__?`,
            confirmationID: (memberID, reason) => `<a:loading:543460555113889792> - Voulez-vous vraiment bannir **${memberID}** pour __**${reason}**__?`,
            confirmed: (member) => `✅ - Le membre **${member.user.tag}** à bien été banni.`,
            confirmedID: (memberID) => `✅ - L'ID **${memberID}** a bien été banni.`,
            pmConfirmed: (guildName, reason) => `Vous avez été banni du serveur **${guildName}**.\nRaison: __**${reason}**__`,
            cancelled: "❌ - Le bannissement a été annulé."
        },
        BEAUTIFUL: {
            description: 'Tu vois ça? C\'est beau..',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...'
        },
        BEG: {
            description: "Supplie pour des pièces!",
            notReady: (time) => `Tu as déjà supplié pour des pièces récemment! Reviens dans ${time.hours}:${time.minutes}:${time.seconds} !`,
            success: (amount) => `Tu as supplié et a reçu ${amount} pièces!`
        },
        BLUR: {
            description: 'Floute l\'image.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...'
        },
        BOBROSS: {
            description: 'Deviens une oeuvre d\'art de Bob Ross.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...'
        },
        BOOBS: {
            description: 'Affiche une image NSFW catégorisée `boobs`.',
            pleaseWait: "<a:loading:543460555113889792> - Veuillez patienter...",
            requestedBy: (author) => `Demandé par ${author}`,
            notDisplaying: 'Cliquez ici si l\'image ne s\'affiche pas.',
            providedBy: 'Service par NekoBotAPI (nekobot.xyz)'
        },
        BRAZZERS: {
            description: 'Tu fais maintenant parti d\'un film Brazzers.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...'
        },
        CHOOSE: {
            description: 'Permets au bot de choisir parmi plusieurs choix.',
            success: (choice) => `✅ - Mon choix est... **${choice}**!`
        },
        CIRCLE: {
            description: 'Ajoute un cercle autour de l\'image.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...'
        },
        CLAP: {
            description: 'Applaudissez quelqu\'un!',
            clapNoMention: (memberTag) => `**${memberTag}** applaudis quelqu'un!`,
            clapMention: (memberTag, clappedTag) => `**${memberTag}** applaudis **${clappedTag}**!`,
            service: "Service par ksoft.si"
        },
        COIN: {
            description: 'Pile ou face?',
            success: (side) => `✅ - C'est atteri sur **${side}**!`
        },
        COLOR: {
            description: 'Affiche des informations a propos d\'une couleur aléatoire.',
            link: "Lien vers la couleur"
        },
        CONNECT4: {
            description: 'Jouez au Puissance 4 avec des amis ou avec le bot!',
            noMention: '❌ - Veuillez mentionner quelqu\'un. Pour jouer avec le bot, mentionnez le bot.',
            noColor: (colorList) => `❌ - Veuillez choisir une couleur: ${colorList}`,
            conj: "et",
            againstYourself: "❌ - Vous ne pouvez pas jouer avec vous même.",
            currentGame: `❌ - Une partie est actuellement en cours dans ce salon. Veuillez attendre que le jeu est fini ou allez dans un autre salon.`,
            askingOpponent: (opponent, author) => `<a:loading:543460555113889792> - ${opponent}, voulez vous jouer au puissance 4 avec ${author}?`,
            denied: '❌ - Partie refusée...',
            colors: (opponent, list) => `${opponent}, quelle couleur voulez vous? Choisissez dans cette liste: ${list}`,
            none: "Aucun",
            chooseColumn: (user, lastMove, board, nums) => stripIndents `
            ${user}, veuillez choisir une colonne. Vous pouvez ecrire \`stop\` pour vous rendre.
            Tour précédent : Colonne **${lastMove}**

            ${board}
            ${nums}
            `,
            timesUp: '❌ - Temps du tour écoulé!',
            inactivity: '❌ - Le jeu s\'est terminé pour inactivité.',
            finalMove: "Tour final: Colonne",
            winString: (winner) => `✅ - Félicitations ${winner} !`,
            drawString: '❌ - Et c\'est une égalité...'
        },
        CONTRAST: {
            description: 'Ajoute un contraste a l\'image.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...'
        },
        CONVOLUTE: {
            description: 'Applique des napes de courants sur votre image',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...'
        },
        COOLDOWNS: {
            description: "Affiche les différents temps d'attente pour les commandes Economie.",
            available: "**Disponible**"
        },
        CUDDLE: {
            description: 'Cajole quelqu\'un!',
            cuddleNoMention: (memberTag) => `**${memberTag}** cajole quelqu\'un!`,
            cuddleMention: (memberTag, cuddledTag) => `**${memberTag}** cajole **${cuddledTag}**!`,
            service: "Service par nekos.life"
        },
        DAILY: {
            description: "Vous donne des pièces tous les jours",
            notReady: (time) => `Vous avez déjà collecté votre récompense journalière! Revenez dans ${time.hours}:${time.minutes}:${time.seconds} !`,
            success: (amount) => `Vous avez récupéré votre récompense journalière de ${amount} pièces !`
        },
        DICE: {
            description: 'Lance un dé et retourne un nombre entre 1 et le nombre de votre choix.',
            success: (number) => `✅ - Vous avez eu **${number}**!`
        },
        DISTORT: {
            description: 'Distort l\'image.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...'
        },
        EMOJI: {
            description: 'Affiche les informations a propos de l\'emoji spécifié.\nLes modérateurs peuvent utiliser cette commande pour ajouter, renommer et retirer des emojis du serveur.',
            noPermission: "❌ - Vous n'avez pas la permission.",
            ADD: {
                noArgs: "❌ - Veuillez spécifier un nom pour l'emoji a ajouter.",
                tooMuch: "❌ - Veuillez seulement mettre un fichier attaché **OU** un emoji venant d'un autre serveur.",
                created: (emote) => `✅ - L'emoji ${emote} (\`${emote.name}\`) a bien été créé.`,
                unicode: "❌ - Cet emoji est un emoji Unicode, et ne peut pas être ajouté sur le serveur.",
                alreadyInServer: "❌ - Cet emoji est déjà sur le serveur!"
            },
            REMOVE: {
                noArgs: "❌ - Veuillez spécifier l'emoji a supprimer!",
                notInServer: "❌ - Vous ne pouvez pas supprimer un emoji qui n'est pas sur le serveur.",
                removed: (emote) => `✅ - L'emoji ${emote.name} a bien été supprimé!`
            },
            RENAME: {
                noArgs: "❌ - Veuillez spécifier l'emoji a renommer!",
                noNewName: "❌ - Veuillez spécifier le nouveau nom de l'emoji!",
                notInServer: "❌ - Vous ne pouvez pas renommer un emoji qui n'est pas sur le serveur!",
                renamed: (emote, newName) => `✅ - L'emoji ${emote} a bien été renommé en ${newName}!`
            },
            informations: (emojiName, preview, emoteID, duration) => `**Nom**: \`${emojiName}\`\n**Aperçu**: ${preview} (\`${preview}\`)\n**ID**: \`${emoteID}\`\n**Ajouté le**: \`${duration}\``
        },
        FEED: {
            description: 'Nourris quelqu\'un!',
            feedNoMention: (memberTag) => `**${memberTag}** nourrit quelqu\'un!`,
            feedMention: (memberTag, fedTag) => `**${memberTag}** nourrit **${fedTag}**!`,
            service: "Service par nekos.life"
        },
        FIRE: {
            description: 'Renvoie un GIF avec un effet de feu.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...',
        },
        FISH: {
            description: "Allons pêcher",
            INVENTORY: {
                inventory: "Inventaire de poissons",
                content: (junkFish, commonFish, uncommonFish, rareFish) => `🔧 - Dechets: **${junkFish}**\n🐟 - Communs: **${commonFish}**\n🐠 - Non communs: **${uncommonFish}**\n🐡 - Rare: **${rareFish}**\n`
            },
            SELL: {
                sellWhat: "What would you like to sell?",
                content: (junkFish, commonFish, uncommonFish, rareFish) => `🔧 - Dechets: **${junkFish}**\n🐟 - Communs: **${commonFish}**\n🐠 - Non communs: **${uncommonFish}**\n🐡 - Rare: **${rareFish}**\n`,
                pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...',
                sold: "Poisson vendus",
                soldContent: (fishAmount, fishSymbol, coins) => `Tu as vendu **${fishAmount} ${fishSymbol}** pour __**${coins} pièces**__!`,
                failed: (fishSymbol) => `Tu n'as pas de ${fishSymbol} a vendre...`,
                cancelled: `Tu n'as rien vendu...`
            },
            notEnoughCoins: '❌ - Tu dois avoir au moins 10 pièces avant de commencer a pêcher.',
            caught: (fishSymbol) => `✅ - Tu as attrapé... ${fishSymbol} ! (**-10 <a:coin:784930553748520961>**)`
        },
        FISHEYE: {
            description: 'Ajoute un effet FishEye à l\'image.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...',
        },
        FOURK: {
            description: 'Affiche une image NSFW catégorisée 4K.',
            pleaseWait: "<a:loading:543460555113889792> - Veuillez patienter...",
            requestedBy: (author) => `Demandé par ${author}`,
            notDisplaying: 'Cliquez ici si l\'image ne s\'affiche pas.',
            providedBy: 'Service par NekoBotAPI (nekobot.xyz)'
        },
        FRAME: {
            description: 'Ajoute un cadre à l\'image.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...'
        },
        GELBOORU: {
            description: 'Affiche une image (potentiellement) NSFW venant de Gelbooru avec les tags spécifiés.',
            pleaseWait: "<a:loading:543460555113889792> - Veuillez patienter...",
            requestedBy: (author) => `Demandé par ${author}`,
            notDisplaying: 'Cliquez ici si l\'image ne s\'affiche pas.',
            providedBy: 'Service par Gelbooru (gelbooru.com)',
            embedDescription: (data, duration, rating, notDisplaying) => `**Posté par**: \`${decodeURIComponent(data.owner)}\` (**${duration}**)\n**Score**: \`${data.score}\`\n**Classification**: \`${rating}\`\n**Tags**: \`${data.tags}\`\n[${notDisplaying}](${data.file_url})`,
            s: "Securisé",
            q: "Questionnable",
            e: "Explicite",
            notFound: `❌ - Aucun résultat a été trouvé.`
        },
        GLITCH: {
            description: 'Ajoute un effet de glitch l\'image.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...'
        },
        GRAYSCALE: {
            description: 'Ajoute un effet noir et blanc à l\'image.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...'
        },
        HEARTS: {
            description: 'Ajoute des coeurs a l\'image.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...',
        },
        HELP: {
            TYPES: {
                administration: "Administration",
                economy: "Economie",
                fun: "Fun",
                general: "Général",
                info: "Infos",
                levels: "Niveaux",
                music: "Musique",
                images: "Images"
            },
            description: `Affiche la liste des commandes, triées par catégorie et par alphabet.\nEn spécifiant une commande, vous aurez plus d'informations sur celle ci.`,
            helpEmbedTitle: (command) => `Commande: \`${command.name}\``,
            helpEmbedUsage: 'Utilisation',
            helpEmbedType: 'Catégorie',
            helpEmbedAliases: 'Aliases',
            helpEmbedExamples: 'Exemples',
            helpEmbedNotes: 'Notes',
            embedTitle: 'Commandes d\'Helixus',
            embedDescription: (prefix) => `**Pour plus d'informations:** \`${prefix}help [command]\``,
            reminder: '**Rappel**: Les crochets du type \`[]\` (argument __optionnel__) et \`<>\` (argument __obligatoire__) ne doivent pas être utilisés dans la commande.'
        },
        HENTAI: {
            description: 'Affiche une image NSFW avec du hentai.',
            pleaseWait: "<a:loading:543460555113889792> - Veuillez patienter...",
            requestedBy: (author) => `Demandé par ${author}`,
            notDisplaying: 'Cliquez ici si l\'image ne s\'affiche pas.',
            providedBy: 'Service par NekoBotAPI (nekobot.xyz)'
        },
        HUG: {
            description: 'Fait un calin a quelqu\'un!',
            hugNoMention: (memberTag) => `**${memberTag}** fait un calin!`,
            hugMention: (memberTag, huggedTag) => `**${memberTag}** fait un calin à **${huggedTag}**!`,
            service: "Service par nekos.life"
        },
        IGNORE: {
            description: "Vous permets de configurer dans quels salons les commandes pourront être exécutées",
            noChanSpecified: "❌ - Vous n'avez spécifié aucun salon.",
            noRowsIgnored: (chan) => `✅ - Le bot ne répondra plus aux commandes dans le salon ${chan}.`,
            notIgnored: (chan) => `✅ - Le bot répondra de nouveau aux commandes dans le salon ${chan}.`,
            ignored: (chan) => `✅ - Le bot ne répondra plus de nouveau aux commandes dans le salon ${chan}.`
        },
        INVERT: {
            description: 'Inverse l\'image.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...'
        },
        JOINMESSAGE: {
            description: "Vous permets de configurer un message qui sera affiché dès l'arrivée d'un membre.",
            notes: 'Voici la liste des tags que vous pouvez utiliser:\n\n{user} - mentionne le membre\n{username} - affiche le pseudo du membre\n{server} - affiche le nom du serveur\n\nVous pouvez indiquer des rôles ainsi que des emotes comme vous le feriez dans un message classique.',
            ON: {
                enabled: `✅ - Les messages de join ont été activés. Si ce n'est pas déjà fait, faites \`am!help joinmessage\` pour voir comment configurer le message de join.`
            },
            OFF: {
                notEnabled: '❌ - Les messages de join sont déjà désactivés.',
                disabled: `✅ - Les messages de join ont été désactivés.`
            },
            CHANNEL: {
                noChanSpecified: '❌ - Veuillez indiquer un ID, un nom ou une mention de salon!',
                noValidChan: '❌ - Le salon que vous avez indiqué n\'est pas valide.',
                notEnabled: '❌ - Les messages de join ne sont pas désactivés.',
                success: (chan) => `✅ - Les messages de join seront envoyés dans ${chan}.`
            },
            noContent: '❌ - Vous n\'avez indiqué aucun contenu pour le message de join. Faites `am!help joinmessage` pour voir quels tags vous pouvez utiliser.',
            notEnabled: '❌ - Les messages de join sont désactivés.',
            success: `✅ - Le message de join a bien été configuré.`
        },
        KICK: {
            description: 'Exclus le membre spécifié.',
            noMention: "❌ - Veuillez mentionner un membre à exclure.",
            noValidMention: "❌ - Veuillez mentionner un membre **valide** à exclure.",
            noReason: "Aucune raison spécifiée.",
            confirmation: (member, reason) => `<a:loading:543460555113889792> - Voulez-vous vraiment exclure **${member.user.tag}** (${member.id}) pour __**${reason}**__?`,
            confirmed: (member) => `✅ - Le membre **${member.user.tag}** à bien été exclu.`,
            pmConfirmed: (guildName, reason) => `Vous avez été exclu du serveur **${guildName}**.\nRaison: __**${reason}**__`,
            cancelled: "❌ - Le bannissement a été annulé."
        },
        KISS: {
            description: 'Embrasse quelqu\'un!',
            kissNoMention: (memberTag) => `**${memberTag}** embrasse quelqu'un!`,
            kissMention: (memberTag, kissedTag) => `**${memberTag}** embrasse **${kissedTag}**!`,
            service: "Service par nekos.life"
        },
        LANG: {
            description: 'Change la langue du bot sur le serveur.',
            success: `✅ - La langue du bot sur ce serveur a bien été mis en **Français** !`
        },
        LEADERBOARD: {
            description: 'Affiche le classement mensuel des votes.',
            notes: 'Des récompenses seront offertes pour le top 3!',
            loading: "<a:loading:543460555113889792> - Veuillez patienter...",
            fullTop: (link) => `Voici le classement mensuel des votes entier: ${link}`,
            closed: "❌ - Paginateur fermé.",
            title: "Classement mensuel des votes",
            footer: "Utilisez les réactions pour intéragir avec le classement."
        },
        LEAVEMESSAGE: {
            description: "Vous permets de configurer un message qui sera affiché dès le départ d'un membre.",
            notes: 'Voici la liste des tags que vous pouvez utiliser:\n\n{username} - affiche le pseudo du membre\n{server} - affiche le nom du serveur\n\nVous pouvez mentionner des rôles ou des emotes comme vous le feriez sur un message classique.',
            ON: {
                enabled: `✅ - Les messages de leaves ont été activés. Si ce n'est pas déjà fait, faites \`am!help leavemessage\` pour voir comment configurer le message de leave.`
            },
            OFF: {
                notEnabled: '❌ - Les messages de leaves sont déjà activés.',
                disabled: `✅ - Les messages de leaves ont été désactivés.`
            },
            CHANNEL: {
                noChanSpecified: '❌ - Veuillez indiquer un ID, un nom ou une mention de salon!',
                noValidChan: '❌ - Le salon que vous avez indiqué n\'est pas valide.',
                notEnabled: '❌ - Les messages de leaves ne sont pas désactivés.',
                success: (chan) => `✅ - Les messages de leaves seront envoyés dans ${chan}.`
            },
            noContent: '❌ - Vous n\'avez indiqué aucun contenu pour le message de leave. Faites `am!help leavemessage` pour voir quels tags vous pouvez utiliser.',
            notEnabled: '❌ - Les messages de leave sont désactivés.',
            success: `✅ - Le message de leave a bien été configuré.`
        },
        LEVELUP: {
            description: 'Vous permet de configurer le message de level up, ainsi que le salon auquel ce message sera envoyé.',
            notes: '__**Paramètres "Channel"**__:\nSi vous voulez que le message de levelup soit envoyé dans le même salon, mettez msgChannel comme argument. `msgChannel`.\n\n__**Paramètres "Message"**__:\nVoici la liste des tags que vous pouvez utiliser:\n{user} - mentionne l\'utilisateur\n{username} - affiche le pseudo du membre\n{server} - affiche le nom du serveur\n{level} - affiche le niveau obtenu',
            CHANNEL: {
                noChanSpecified: '❌ - Veuillez indiquer un ID, un nom ou une mention de salon!',
                invalidChan: '❌ - Ce salon n\'existe pas.',
                levelNotEnabled: '❌ - Le système de niveau n\'est pas activé sur votre serveur. Voir `am!help toggle`.',
                success: (chan) => `✅ - Les messages de level up seront maintenant envoyés dans ${chan}!`,
                msgChannel: "le salon auquel le membre aura gagné un niveau"
            },
            MESSAGE: {
                noContent: '❌ - Vous n\'avez spécifié aucun contenu pour le message de level up. Afin de voir les tags que vous pouvez utiliser au sein de votre message, faites `am!help levelup`.',
                levelNotEnabled: '❌ - Le système de niveau n\'est pas activé sur votre serveur. Voir `am!help toggle`.',
                success: `✅ - Le message de levelup a été changé !`
            }
        },
        LICK: {
            description: 'Lechez quelqu\'un!',
            lickNoMention: (memberTag) => `**${memberTag}** leche quelqu'un!`,
            lickMention: (memberTag, lickedTag) => `**${memberTag}** leche **${lickedTag}**!`,
            service: "Service par ksoft.si"
        },
        LOGS: {
            description: 'Vous permets de configurer le système de logs.',
            ON: {
                alreadyEnabled: '❌ - Les logs sont déja activés sur ce serveur !',
                enabled: `✅ - Les logs sont désormais activés sur ce serveur!`
            },
            OFF: {
                alreadyDisabled: '❌ - Les logs sont déja désactivés sur ce serveur !',
                enabled: `✅ - Les logs sont désormais désactivés sur ce serveur!`
            },
            CHANNEL: {
                noChanSpecified: '❌ - Veuillez indiquer un ID, un nom ou une mention de salon!',
                notEnabled: '❌ - Les logs ne sont pas activés.',
                success: (channel) => `✅ - Les logs seront désormais envoyés dans ${channel}`
            },
            IGNORE: {
                noChanSpecified: '❌ - Veuillez indiquer un ID, un nom ou une mention de salon!',
                ignored: '✅ - Le channel sera désormais ignoré pour les évenements de logs.',
                notIgnored: '✅ - Le channel ne sera désormais plus ignoré pour les évenements de logs.'
            },
            TOGGLE: {
                notValidEvent: (logsEventList) => `❌ - Veuillez indiquer un évenement valide.\nListe des évenements valides: \`${logsEventList}\``,
                notEnabled: `❌ - Les logs ne sont pas activés sur ce serveur.`,
                eventEnabled: '✅ - Cet evénement sera désormais log sur ce serveur.',
                eventDisabled: '✅ - Cet evénement ne sera plus log sur ce serveur.'
            },
            noChanSpecified: '❌ - Veuillez indiquer un ID, un nom ou une mention de salon!',
        },
        LOOP: {
            description: 'Met en boucle la file de musique',
            noQueue: "❌ - Aucune musique n'est jouée.",
            success: (loopStatus) => `✅ - La boucle est maintenant ${loopStatus === true ? "**activée**" : "**désactivée**"}!`
        },
        LYRICS: {
            description: 'Affiche les paroles de la musique souhaitée via l\'API KSoft.si',
            noQuery: '❌ - Veuillez indiquer une musique a chercher.',
            embedTitle: (title, artist) => `Paroles de ${title} par ${artist}`,
            embedFooter: "Service livré par api.ksoft.si"
        },
        MATH: {
            description: 'Resous l\'équation spécifiée.',
            invalidSyntax: "❌ - Cette équation contient une syntaxe invalide.",
            answer: (answer) => `✅ - La réponse a cette équation est: **${answer}** !`
        },
        MEME: {
            description: 'Affiche un meme aléatoire venant de Reddit.',
            loading: "<a:loading:543460555113889792> - Veuillez patienter..."
        },
        MUTE: {
            description: 'Rends muet le membre spécifié.',
            notes: "La commande retirera les rôles actuels au membre spécifié et lui ajoutera le rôle Muted. Vous DEVREZ utiliser la commande `am!unmute` pour démute le membre, la commande ayant sauvegardée les rôles d'avant le mute.",
            cantMute: "❌ - Vous ne pouvez pas mute ce membre.",
            confirmation: (member) => `<a:loading:543460555113889792> - Voulez-vous vraiment mute ${member} ?`,
            muted: "✅ - Ce membre a bien été mute.",
            cancelled: '❌ - La confirmation a été annulée.'
        },
        NEKO: {
            description: 'Affiche une image NSFW catégorisée `neko`.',
            pleaseWait: "<a:loading:543460555113889792> - Veuillez patienter...",
            requestedBy: (author) => `Demandé par ${author}`,
            notDisplaying: 'Cliquez ici si l\'image ne s\'affiche pas.',
            providedBy: 'Service par NekoBotAPI (nekobot.xyz)'
        },
        NOWPLAYING: {
            description: 'Affiche la musique actuellement jouée.',
            noQueue: "❌ - Aucune musique n'est jouée.",
            embedAuthor: (title) => `Joue: ${title}`,
            embedFooter: (time) => `Temps restant: ${time}`,
            requestedBy: (requester) => `Demandé par: ${requester}`
        },
        OSU: {
            description: 'Affiche les informations d\'un joueur, sur le mode de jeu osu! spécifié.',
            notFound: "❌ - Joueur non trouvé.",
            stats: (username, mode) => `Stats de ${username} (osu!${mode})`,
            username: "Pseudo",
            level: "Niveau",
            accuracy: "Précision",
            rank: "Classement Global",
            totalGames: "Nombres de parties",
            country: "Pays",
            totalRankedScore: "Score Classé",
            totalScore: "Score Total"
        },
        PAT: {
            description: 'Caresse quelqu\'un!',
            patNoMention: (memberTag) => `**${memberTag}** caresse quelqu'un!`,
            patMention: (memberTag, pattedTag) => `**${memberTag}** caresse **${pattedTag}**!`,
            service: "Service par nekos.life"
        },
        PAUSE: {
            description: 'Met en pause la musique qui est actuellement jouée',
            noQueue: "❌ - Aucune musique n'est jouée.",
            success: (author) => `⏸ ${author} a mis en pause la musique.`
        },
        PAY: {
            description: "Donner des pièces a quelqu'un.",
            notes: 'Pour chaque transaction effectuée, une taxe de 5% sera déduite. Veuillez prendre ceci en compte lors de vos transactions.',
            noUser: '❌ - Vous devez mentionner quelqu\'un!',
            isBot: '❌ - Vous ne pouvez pas envoyer de pièces a un bot.',
            notEnoughCoins: '❌ - Vous n\'avez pas suffisamment de pièces!',
            noCoinsSpecified: '❌ - Vous devez specifier un nombre de pièces.',
            pending: (oldAmt, newAmt, user) => `<a:loading:543460555113889792> - Voulez vous vraiment envoyer ~~${oldAmt}~~ (_5% de taxe_) **${newAmt} pièces** à ${user} ?`,
            pendingPremium: (amt, user) => `<a:loading:543460555113889792> - Voulez vous vraiment envoyer **${amt} pièces** (_0% de taxe [PREMIUM]_) à ${user} ?`,
            success: (amount, user) => `✅ - Vous avez envoyé **${amount} pièces** à ${user}!`,
            cancelled: `❌ - La transaction a été annulée.`
        },
        PING: {
            description: 'Affiche la **latence de message** ainsi que le **heartbeat** du bot.',
            latency: "Latence",
        },
        PIXEL: {
            description: 'Pixelise l\'image.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...'
        },
        PLAY: {
            description: "Vous permets de jouer de la musique venant de YouTube, SoundCloud ou Spotify!",
            noVoiceChannel: "❌ - Vous devez être dans un salon vocal!",
            notSameVoiceChannel: "❌ - Vous devez être dans le même salon vocal que le bot.",
            embedAuthor: "Selection de musique",
            addedToQueue: (song, author) => `✅ - **${song}** a été ajouté par ${author}`,
            error: (error) => `❌ - Impossible de rejoindre le salon vocal: ${error}`,
            ended: "🚫 File terminée.",
            startedPlaying: (title, url) => `🎶 Joue: **${title}** <${url}>`,
            notSupported: "❌ - Les playlists Spotify ne sont actuellement pas supportées."
        },
        PLAYLIST: {
            description: "Vous permets de charger des playlists venant de YouTube ou SoundCloud",
            notInVC: "❌ - Vous n'êtes pas dans un salon vocal!",
            notInSameVC: "❌ - Vous n'êtes pas dans le même salon vocal!",
            fetching: "<a:loading:543460555113889792> - Chargement de la playlist...",
            startedPlaylist: (author) => `✅ -${author} a démarré une playlist!`,
            cannotJoin: "❌ - Je ne peux pas rejoindre le salon..."
        },
        PREFIX: {
            description: 'Change le préfixe du bot sur le serveur.',
            actualPrefix: (prefix) => `Le préfixe actuel est: \`${prefix}\``,
            tooLong: `❌ - Le préfixe doit faire moins de 5 caractères.`,
            success: (prefix) => `✅ - Le préfixe pour ce serveur est maintenant \`${prefix}\`.`
        },
        PREMIUM: {
            description: 'Verifiez combien de temps il vous reste sur le premium, et comment vous pouvez l\'avoir!',
            status: "Votre Statut Premium!",
            activated: "Votre premium est actuellement **activé**!",
            disabled: "Votre premium est actuellement **désactivé**.",
            until: "Votre premium est activé jusqu'au",
            tokens: (tokens) => `Vous avez **${tokens}** tokens`,
            how: "Comment avoir les Tokens",
            heresHow: "Les tokens correspondent a 1 mois de premium. Chaque token coute 3.50 EUR.\nIls peuvent être obtenus via:\n     - __DonateBot__: Vous devez rejoindre le serveur de support et écrire `donate` dans un salon commandes. Après le paiement, vous devez contacter **@mesa#0101** sur Discord.\n     - [PaysafeCard](https://www.paysafecard.com): Contactez **@mesa#0101** sur Discord.\n\nD'autres moyens de paiements arriveront dans le futur, la mise en place étant assez longue."
        },
        PURGE: {
            description: 'Supprime le nombre spécifié de messages.',
            notes: "`number` est limité à 100 messages, dù a des limitations Discord. Pour supprimer plus de 100 messages, vous devrez exécuter la commande plusieurs fois.\nLes messages vieux de plus de 2 semaines ne peuvent pas être supprimés.",
            noValidNumber: "❌ - Veuillez spécifier un nombre valide.",
            purged: (deleted) => `✅ - **${deleted}** messages ont __**bien**__ été supprimés.`
        },
        PUSSY: {
            description: 'Affiche une image NSFW catégorisée `pussy`.',
            pleaseWait: "<a:loading:543460555113889792> - Veuillez patienter...",
            requestedBy: (author) => `Demandé par ${author}`,
            notDisplaying: 'Cliquez ici si l\'image ne s\'affiche pas.',
            providedBy: 'Service par NekoBotAPI (nekobot.xyz)'
        },
        QRCODE: {
            description: 'Convertis le texte spécifié en QRCode.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...',
            noArgs: '❌ - Veuillez spécifier un texte qui sera converti en QRCode.'
        },
        QUEUE: {
            description: 'Affiche la file. Utilisez les réactions pour naviguer entre les pages.',
            noQueue: "❌ - Aucune musique n'est jouée.",
            embedTitle: "File\n",
            embedDescription: (title, url, info) => `**Joue - [${title}](${url})**\n\n${info}`
        },
        RAINBOW: {
            description: 'Ajoute un effet arc-en-ciel à l\'image.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...'
        },
        RANK: {
            description: 'Affiche votre niveau.',
        },
        REACTIONROLE: {
            description: 'Vous permet de configurer des Reaction Roles.\nSi un membre ajoute une réaction qui est liée a un role, ce rôle lui sera attribué.',
            noChanSpecified: "❌ - Vous n'avez spécifié aucun salon.",
            noValidChan: '❌ - Le salon spécifié n\'est pas valide.',
            noMessageID: `❌ - Vous n'avez pas spécifié d'ID de message.`,
            noEmoteSpecified: `❌ - Vous n'avez pas spécifié d'emoji.`,
            noValidEmote: `❌ - L'emoji spécifié n'est pas valide.`,
            noRole: `❌ - Le rôle spécifié n'est pas valide ou non existant.`,
            emoteAlreadyUsed: '❌ - Cet emoji est déjà lié a un Reaction Role pour ce message.',
            roleAlreadyUsed: '❌ - Ce rôle est déjà lié a un Reaction Role pour ce message.',
            success: (emote) => `✅ - Ce rôle sera désormais donné quand quelqu'un ajoutera l'emoji ${emote} sur le message.`,
            REMOVE: {
                success: `✅ - Le Reaction Role a bien été supprimé.`,
                notFound: `❌ - Le Reaction Role n'a pas été trouvé.`
            }
        },
        REMINDME: {
            description: 'Définis un rappel.',
            invalidTime: "❌ - Temps invalide, veuillez réessayer.",
            success: (reason, time) => `✅ - Je vous rappelerais pour **${reason}** dans __**${time}**__!`,
            reminded: (reason) => `⌛ - **Rappel**: ${reason}`
        },
        RESUME: {
            description: 'Relance la musique si elle est en pause.',
            noQueue: "❌ - Aucune musique n'est jouée.",
            success: (author) => `▶ ${author} a relancé la musique.`
        },
        REVERSE: {
            description: 'Inverse le texte spécifié.',
        },
        REWARDS: {
            description: 'Vous permets de configurer des récompenses de rôles en fonction du niveau.',
            ADD: {
                noLevelSpecified: '❌ - Veuillez indiquer un niveau pour la récompense.',
                noRoleSpecified: '❌ - Veuillez indiquer un rôle pour la récompense.',
                levelAlreadyUsed: '❌ - Ce niveau est déjà utilisé pour une autre récompense !',
                roleAlreadyUsed: '❌ - Ce rôle est déjà utilisé pour une autre récompense!',
                success: (role, level) => `✅ - Le rôle ${role} sera dorénavant donné aux membres passant le niveau **${level}**!`
            },
            REMOVE: {
                noLevelSpecified: '❌ - Veuillez indiquer un niveau pour la récompense.',
                success: (role, level) => `✅ - Le rôle ${role} ne sera plus donné aux membres passant le niveau **${level}**!`,
                notFound: (level) => `❌ - Aucune récompense a été trouvée pour le niveau **${level}**.`
            },
            SHOW: {
                pleaseWait: "Veuillez patienter...",
                closedPaginator: "Paginateur fermé..",
                embedTitle: (page, pages) => `Liste des récompenses de niveau (${page + 1}/${pages + 1})`
            }
        },
        ROBOT: {
            description: 'Montre une photo de robot unique a vous (ou au texte indiqué).',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...'
        },
        RPS: {
            description: 'Joue au Pierre Feuille Ciseaux contre le bot!',
            whatChoice: "Quel est ton choix?",
            choiceList: '✊ - Pierre\n📄 - Feuille\n✂️ - Ciseaux',
            loading: '<a:loading:543460555113889792> - Veuillez patienter...',
            tie: "C'est une égalité!",
            botWin: "J'ai gagné!",
            userWin: "Tu as gagné",
            choices: (userChoice, botChoice) => `Tu as choisi: ${userChoice}\nJ'ai choisi: ${botChoice}`
        },
        SAY: {
            description: 'Repète la phrase spécifiée.',
            tooLong: '❌ - Veuillez spécifier une phrase faisant moins de 1950 caractères.'
        },
        SEEK: {
            description: 'Vous permets d\'aller a un point spécifique de la musique.',
            noQueue: "❌ - Aucune musique n'est jouée.",
            notThatLong: "❌ - La musique n'est pas aussi longue...",
            success: (duration) => `✅ - La musique est maintenant à **${duration}**!`
        },
        SELECT: {
            description: 'Selectionne quelqu\'un aléatoirement sur le serveur.',
            noSubject: (randomMember) => `✅ - Le membre selectionné est... ${randomMember}.`,
            subject: (subject, randomMember) => `✅ - Le membre selectionné pour **${subject}** est... ${randomMember}.`
        },
        SEPIA: {
            description: 'Ajoute un effet Sepia à l\'image.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...'
        },
        SERVERINFO: {
            description: "Affiche des informations à propos du serveur.",
            owner: "👑 | Propriétaire",
            members: "👥 | Membres",
            serverID: "🔑 | ID du serveur",
            language: "📙 | Langue",
            region: "🚩 | Région",
            channelCount: "🗨️ | Nombre de salons",
            channelCountValue: (channelsSize) => `**${channelsSize}** salons`,
            emojiCount: "👀 | Nombre d'emojis",
            emojiCountValue: (emojisSize) => `**${emojisSize}** emojis`,
            createdOn: "⏱️ | Créé le",
            joinedOn: "🔗 | Rejoins le",
            verificationLevel: "🚥 | Niveau de vérification",
            mfaLevel: "🔒 | Niveau de l'Authentification a Double Facteurs",
            boostsCount: "🚀 | Nombre de boosts",
            boostLevel: "🚀 | Niveau de boost",
            verifiedServer: "<:verified:786313097857335376> | Serveur vérifié",
            verified: "Verifié",
            notVerified: "Non Verifié",
            partner: "<:partnerowner:776628269356417036> | Serveur Partenaire",
            partnered: "Partenaire",
            notPartnered: "Non Partenaire",
            moreRole: (rolesLeft) => `et ${rolesLeft} autres rôles.`,
            moreEmotes: (emotesLeft) => `et ${emotesLeft} autres emotes.`
        },
        SHARD: {
            description: 'Affiche le shard actuel du bot.',
            shard: (shard, shardCount) => `✅ - Vous êtes sur le shard **${shard}**/${shardCount} !`
        },
        SHARDS: {
            description: 'Affiche les statistiques liées aux shards.',
            connected: "CONNECTÉ",
            connecting: "CONNEXION",
            reconnecting: "RECONNEXION",
            idle: "INACTIF",
            nearly: "PRESQUE PRÊT",
            disconnected: "DECONNECTÉ",
            finalMessage: (shard, servers, status) => `Shard ${shard} | Serveurs : ${servers} | Statut : ${status}\n`
        },
        SHORTEN: {
            description: 'Raccourcis le lien spécifié.',
            success: (link) => `✅ - Voici votre lien raccourci: __**<${link}>**__!`
        },
        SKIP: {
            description: 'Passe la musique actuelle.',
            noQueue: "❌ - Aucune musique n'est jouée.",
            success: `✅ - La musique a bien été passée!`
        },
        SLAP: {
            description: 'Claque quelqu\'un!',
            slapNoMention: (memberTag) => `**${memberTag}** claque quelqu'un!`,
            slapMention: (memberTag, slappedTag) => `**${memberTag}** claque **${slappedTag}**!`,
            service: "Service par nekos.life"
        },
        SLOWMODE: {
            description: 'Configure un délai par membre entre chaque messages.',
            noDuration: "❌ - Veuillez spécifier une durée!",
            noValidDuration: "❌ - Veuillez spécifier une durée inférieure a 6h. (21600000 secondes)",
            slowed: (duration) => `✅ - Le délai par messages pour ce salon a été configuré sur __**${duration}**__!`
        },
        SMUG: {
            description: 'Soyez prétentieux·se envers quelqu\'un!',
            smugNoMention: (memberTag) => `**${memberTag}** est prétentieux·se envers quelqu'un!`,
            smugMention: (memberTag, smuggedTag) => `**${memberTag}** est prétentieux·se envers **${smuggedTag}**!`,
            service: "Service par nekos.life"
        },
        SOFTBAN: {
            description: 'Exclus le membre spécifié, tout en supprimant ses messages.',
            noMention: "❌ - Veuillez mentionner un membre ou spécifier l'ID du membre à exclure.",
            noValidMention: "❌ - Veuillez mentionner un membre **valide** ou spécfier l'ID du membre à exclure.",
            noReason: "Aucune raison spécifiée.",
            confirmation: (member, reason) => `<a:loading:543460555113889792> - Voulez-vous vraiment exclure **${member.user.tag}** (${member.id}) pour __**${reason}**__?`,
            confirmationID: (memberID, reason) => `<a:loading:543460555113889792> - Voulez-vous vraiment exclure **${memberID}** pour __**${reason}**__?`,
            confirmed: (member) => `✅ - Le membre **${member.user.tag}** à bien été exclu.`,
            confirmedID: (memberID) => `✅ - L'ID **${memberID}** a bien été exclu.`,
            pmConfirmed: (guildName, reason) => `Vous avez été exclu du serveur **${guildName}**.\nRaison: __**${reason}**__`,
            cancelled: "❌ - L'exclusion a été annulé."
        },
        SPOTIFYNOWPLAYING: {
            description: 'Vous permets de faire une carte Spotify Now Playing personnalisée.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...',
        },
        STATS: {
            description: 'Affiche les statistiques a propos du bot.',
            license: "Ce bot est sous la license Open-Source MIT, pour plus d'informations, visionnez la license entière **[ici](https://github.com/chocololat/Helixus/blob/master/LICENSE)**",
            developer: "• __Developpeur__",
            statistics: "• __Statistiques__",
            statisticsValue: (guildsCache, usersCache, channelsSize) => `**Serveurs**: ${guildsCache}\n**Utilisateurs**: ${usersCache}\n**Salons**: ${channelsSize}`,
            using: "• __Utilise__",
            uptime: "• __En ligne depuis__",
            ram: "• __RAM__",
            cpu: (percent) => `• __CPU (${percent.toFixed(2)}%)__`,
            links: "• __Liens__",
            supportServer: "Serveur de support",
            invitationLink: "Lien d'invitation",
            website: "Site Internet (en developpement)"
        },
        STEAMPLAYING: {
            description: 'Vous permets de creer une carte Steam Playing personnalisée.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...',
            tooLong: '❌ - Le jeu est trop long! Il doit faire 20 caractères ou moins.'
        },
        STOP: {
            description: 'Stoppe la musique et enlève la file.',
            noQueue: "❌ - Aucune musique n'est jouée.",
            success: (author) => `⏹ ${author} a stoppé la musique!`
        },
        THREEKYEARS: {
            description: 'Ajoute la photo de votre choix sur le meme Pokémon `It\'s been 3000 years...`',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...'
        },
        TICKLE: {
            description: 'Chatouillez quelqu\'un!',
            tickleNoMention: (memberTag) => `**${memberTag}** chatouille quelqu'un!`,
            tickleMention: (memberTag, tickledTag) => `**${memberTag}** chatouille **${tickledTag}**!`,
            service: "Service par nekos.life"
        },
        TOGGLE: {
            description: 'Active ou désactive le système de niveaux',
            OFF: {
                alreadyDisabled: '❌ - Le système de niveau est déjà **désactivé**!',
                success: '✅ - Le système de niveau a bien été **désactivé** !'
            },
            ON: {
                success: '✅ - Le système de niveau a bien été **activé** !',
                alreadyEnabled: '❌ - Le système de niveau est déjà **activé**!'
            }
        },
        TOP: {
            description: 'Affiche le classement des niveaux sur le serveur',
            pleaseWait: "Veuillez patienter...",
            fullTop: (fullTop) => `Voici le classement en entier: ${fullTop}`,
            closedPaginator: "Ce paginateur est fermé..",
            embedAuthor: (guildName) => `${guildName} - Classement Niveaux`,
            embedFooter: "Utilise les réactions pour intéragir avec le message!"
        },
        TRANSLATE: {
            description: 'Permets de traduire du texte.',
            embedAuthor: "Traduction",
            embedTranslatedFrom: (translatedFrom) => `Traduit de ${translatedFrom}`,
            embedTranslatedTo: (target) => `vers ${target}`
        },
        TRIGGERED: {
            description: 'Envoie un GIF avec l\'effet Triggered.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...',
        },
        UNBAN: {
            description: 'Débannis le membre spécifié',
            notValidID: "❌ - Veuillez spécifier un ID de membre banni valide.",
            noReason: "Aucune raison spécifiée",
            unbanned: (memberID) => `✅ - __**${memberID}**__ a été débanni.`
        },
        UNMUTE: {
            description: 'Démute le membre spécifié.',
            roleNotFound: "❌ - Le rôle Muted n'a pas été trouvé. Veuillez exécuter la commande `am!mute` en premier.",
            notMuted: "❌ - Ce membre n'est pas mute.",
            unmuted: "✅ - Ce membre a bien été démute."
        },
        USERINFO: {
            description: "Affiche des informations a propos d'un utilisateur __**étant sur le serveur**__.",
            username: "Nom d'utilisateur",
            bot: "Bot",
            user: "Utilisateur",
            none: "Aucun",
            currentStatus: "Statut",
            accountCreated: "Compte créé le",
            accountCreatedAgo: (time) => `Il y a ${time.replace("days", "jours")}`,
            joined: "Rejoins le",
            joinedAgo: (time) => `Il y a ${time.replace("days", "jours")}`,
            currentlyActiveOn: "Connecté sur",
            offline: "Hors-Ligne",
            nitroBoostStatus: "Statut Nitro Boost",
            nitroBoostStatusAgo: (time) => `Il y a ${time.replace("days", "jours")}`,
            noNitroBoostStatus: "Aucun Nitro Boost d'actif",
            moreRoles: (rolesSize) => `et ${rolesSize} autres rôles.`
        },
        UPTIME: {
            description: 'Affiche depuis combien de temps le bot est en ligne.',
            uptime: (uptime) => `<a:hourglass:800978295562174492> - Le bot est en ligne depuis: **${uptime}**!`
        },
        USSR: {
            description: 'Ajoute le drapeau de l\'URSS à l\'image.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...',
        },
        VOLUME: {
            description: 'Change le volume de la musique actuelle.',
            noQueue: "❌ - Aucune musique n'est jouée.",
            volume: (volume) => `🔊 - Le volume est à **${volume}%**.`,
            success: (volume) => `✅ - Le volume est maintenant à **${volume}%**!`
        },
        VOTE: {
            description: "Votez toutes les 12h et gagnez 450 coins.",
            vote: "Vous pouvez voter et obtenir 450 coins toutes les 12 heures!\nLes votes peuvent prendre plusieurs minutes avant d'être validés.\nhttps://top.gg/bot/437190817195753472/vote"
        },
        WANTED: {
            description: 'Ajoute le cadre Wanted de One Piece a l\'image.',
            pleaseWait: '<a:loading:543460555113889792> - Veuillez patienter...',
        },
        WARN: {
            LIST: {
                pleaseWait: "<a:loading:543460555113889792> - Veuillez patienter...",
                closed: "❌ - Paginateur stoppé.",
                embedAuthor: (memberTag) => `Avertissements de ${memberTag}`,
                embedTitle: (page, count) => `Page ${page} (${count} avertissements)`,
                embedFooter: "Utilisez les réactions pour naviguer entre les pages!",
                embedFieldTitle: (number, page) => `Avertissement #${(number + 1) + (page * 5)}`,
                embedFieldValue: (reason, modTag, modID, date) => `**Raison**: ${reason}\nPar ${modTag} (\`${modID}\`) | ${date}`
            },
            description: 'Avertis le membre spécifié.',
            noMention: "❌ - Veuillez spécifier un membre a avertir!",
            noReason: "Aucune raison spécifiée",
            warned: (memberTag, modTag, reason) => `✅ -**${memberTag}** a été averti par **${modTag}** pour __**${reason}**__ !`,
            dmWarned: (guildName, modTag, reason) => `Vous avez été averti dans **${guildName}** par **${modTag}**.\nRaison: __**${reason}**__`
        },
        WEEKLY: {
            description: "Vous donne des pièces toutes les semaines!",
            notReady: (time) => `Vous avez déjà collecté votre récompense hebdomadaire! Revenez dans ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s !`,
            success: (amount) => `Vous avez récupéré votre récompense hebdomadaire de ${amount} pièces !`
        },
        WORK: {
            description: "Travaillez pour gagner de l'argent.",
            worked: (job, money) => `✅ - Tu as travaillé en tant que __**${job}**__. Tu as gagné **${money}** pièces!`,
            cooldown: (time) => `❌ - Vous êtes encore en pause! Vous pourrez retravailler dans **${time.hours}:${time.minutes}:${time.seconds}**!`
        },
        YANDERE: {
            description: 'Affiche une image (potentiellement) NSFW venant de Gelbooru avec les tags spécifiés.',
            pleaseWait: "<a:loading:543460555113889792> - Veuillez patienter...",
            requestedBy: (author) => `Demandé par ${author}`,
            notDisplaying: 'Cliquez ici si l\'image ne s\'affiche pas.',
            providedBy: 'Service par Yande.re (yande.re)',
            embedDescription: (data, notDisplaying) => `**Posté par**: \`${decodeURIComponent(data.author)}\`\n**Score**: \`${data.score}\`\n**Tags**: \`${data.tags}\`\n[${notDisplaying}](${data.file_url})`,
            notFound: `❌ - Aucun résultat a été trouvé.`,
            banned: (tag) => `❌ - Le tag \`${tag}\` est banni.`
        },
    },
    EVENTS: {
        CHANNELCREATE: {
            unknownUser: 'Membre Inconnu',
            created: (type, channel) => `${type === "Catégorie" ? "Une": "Un"} **${type}** a été créé. (**${channel.name}** [<#${channel.id}>])`,
            createdBy: "Créé par",
            channelID: "ID du salon",
            permissionsOverwrite: (role) => `Permissions:\n${role.name}`,
            permissions: (allowed, denied) => `Type: role\nPermissions autorisées: ${allowed}\nPermissions refusées: ${denied}`,
            none: "Aucun",
        },
        CHANNELDELETE: {
            unknownUser: 'Membre Inconnu',
            deleted: (type, channel) => `${type === "Catégorie" ? "Une": "Un"} **${type}** a été supprimé. (**${channel.name}**)`,
            deletedBy: "Supprimé par",
            channelID: "ID du Salon",
        },
        CHANNELUPDATE: {
            changedName: (newChannel) => `**Le nom de ${newChannel} a été changé.**`,
            changedTopic: (newChannel) => `**Le sujet de ${newChannel} a été changé.**`,
            changedPermissions: (newChannel) => `Les permissions de **${newChannel} ont été changées.**\n*note:* cliquez [ici](https://discordapp.com/developers/docs/topics/permissions) pour savoir ce que ces chiffres signifient`,
            old: "Ancien:",
            new: "Nouveau:",
            none: "Aucun",
            allowed: (oldPerms, newPerms) => `Permissions autorisées: \`${oldPerms}\` -> \`${newPerms}\`\n`,
            denied: (oldPerms, newPerms) => `Permissions refusées: \`${oldPerms}\` -> \`${newPerms}\`\n`,
            deleted: 'Permissions supprimées'
        },
        EMOJICREATE: {
            unknownUser: 'Membre Inconnu',
            created: (emoji) => `Nouvel emoji créé (**${emoji.name}** [\`<:${emoji.name}:${emoji.id}>\`])`,
            createdBy: "Créé Par",
            emojiID: "ID de l'Emoji",
        },
        EMOJIDELETE: {
            unknownUser: 'Membre Inconnu',
            deleted: (emoji) => `Emoji supprimé (**${emoji.name}**)`,
            deletedBy: "Supprimé Par",
            emojiID: "ID de l'Emoji",
        },
        EMOJIUPDATE: {
            unknownUser: 'Membre Inconnu',
            updated: (emoji) => `Emoji mis a jour (**${emoji.name}** [\`<:${emoji.name}:${emoji.id}>\`])`,
            updatedBy: "Mis a jour par",
            oldName: "Ancien Nom",
            newName: "Nouveau Nom",
            emojiID: "ID de l'Emoji",
        },
        GUILDBANADD: {
            banned: (user) => `${user.username}#${user.discriminator} a été banni.`,
            userInfos: "Informations sur le membre",
            isBot: "\nEst un bot",
            reason: "Raison",
            none: "Aucune",
            bannedBy: "Banni par",
            unknownUser: 'Membre Inconnu',
        },
        GUILDBANREMOVE: {
            unbanned: (user) => `${user.username}#${user.discriminator} a été débanni.`,
            userInfos: "Informations sur le membre",
            isBot: "\nEst un bot",
            reason: "Raison",
            none: "Aucune",
            unbannedBy: "Débanni par",
            unknownUser: 'Membre Inconnu',
        },
        GUILDMEMBERADD: {
            joined: (member, memberCount) => `${member} a rejoins! Nous sommes maintenant **${memberCount}** membres !`,
            joinedAt: "Rejoins le",
            accountAge: "Le compte à",
            days: (days) => `**${days}** jours`,
            userID: "ID du Membre",
        },
        GUILDMEMBERREMOVE: {
            unknown: "Inconnu",
            none: "Aucun",
            lurker: "Fouineur...",
            lurkerLeft: `Un fouineur a quitté le serveur...`,
            kicked: (member) => `${member.user.username}#${member.user.discriminator} a été exclu.`,
            left: (member) => `${member.user.username}#${member.user.discriminator} a quitté le serveur.`,
            userInfos: "Infos sur le membre",
            isBot: "\nEst un bot",
            reason: "Raison",
        },
        GUILDMEMBERUPDATE: {
            updated: (member) => `**${member.user.username}#${member.user.discriminator}** (${member})'} a été mis a jour.`,
            unknownChanges: "Changement inconnu",
            weird: "Le bot n'a pas pu récuperer le changement. Regardez le bas de l'embed pour voir qui a mis a jour le membre.",
            newNick: "Nouveau Pseudo",
            oldNick: "Ancien Pseudo",
            none: "Aucun",
            ID: (memberID, executorID) => `ID du Membre = ${memberID}\nModérateur = ${executorID}`
        },
        MESSAGE: {
            missingUserPerms: (permissions) => `❌ - Vous n'avez pas les permissions suivantes: ${permissions}`,
            missingBotPerms: (permissions) => `❌ - Le bot n'a pas les permissions suivantes: ${permissions}`,
            pleaseWait: (time) => `❌ - Veuillez patienter **${time} secondes** avant d'utiliser la commande.`,
            restricted: '❌ - Ce salon a été restreint pour l\'utilisation de commandes. Seuls les modérateurs peuvent y exécuter des commandes.',
            error: (error, errorID) => `❌ - Une erreur s'est produite:\n\`\`\`${error.message}\`\`\`\nVeuillez signaler l'erreur avec l'ID suivant: **${errorID}**!`,
            lvlUpMessage: "Félicitations {user}, tu es maintenant niveau **{level}** !",
            noNsfw: '❌ - Veuillez exécuter cette commande dans un salon NSFW.',
            removedAFK: "⏳ - Votre statut AFK a été retiré.",
            isAFK: (tag, reason) => `⏳ - ${tag} est actuellement **AFK**.\nRaison: __**${reason}**__`
        },
        MESSAGEDELETE: {
            deleted: (message) => `Un message de ${message.author} (${message.author.tag}) a été supprimé.`,
            deletedBy: "Supprimé par",
            attachment: "Fichier attaché",
            content: "Contenu du message"
        },
        MESSAGEDELETEBULK: {
            deleted: (messages, channel) => `**${messages.size}** messages ont été supprimés dans ${channel}.`,
            deletedBy: "Supprimés par",
            unknownUser: `Membre Inconnu`,
            contentWithoutMessage: (link) => `Fichier attaché: ${link}`,
            contentWithMessage: (link, message) => `Fichier attaché: ${link} | Message: ${message}`,
            noContent: "Aucun contenu n'a été trouvé..."
        },
        MESSAGEUPDATE: {
            updated: (author) => `Un message de ${author} (${author.tag}) a été mis a jour.`,
            oldMessage: "Ancien Message",
            newMessage: "Nouveau Message"
        },
        ROLECREATE: {
            unknownUser: `Membre Inconnu`,
            created: `Un rôle a été créé.`,
            createdBy: "Créé par",
        },
        ROLEDELETE: {
            unknownUser: "Membre Inconnu",
            deleted: `Un rôle a été supprimé`,
            createdBy: "Supprimé par",
            deletedLeft: `Suppression après le départ du membre`
        },
        ROLEUPDATE: {
            unknownUser: "Membre Inconnu",
            updated: (role) => `**Le rôle ${role} a été mis a jour. (${role.id})**`,
            updatedBy: 'Mis a jour par',
            now: "__**Maintenant**__",
            was: "__**Avant**__",
            footer: 'Regardez les logs Discord afin de voir quelles permissions ont été modifiées.'
        },
        VOICESTATEUPDATE: {
            joined: (member, channel) => `${member} **__a rejoins__ ${channel.name}**`,
            switch: (member, newChannel, oldChannel) => `${member} **__a rejoins__ ${newChannel.name}** et **__a quitté__ ${oldChannel.name}**.`,
            left: (member, channel) => `${member} **__a quitté__ ${channel.name}**`,
            updated: (newState) => `L'état de **${newState.member.user.username}#${newState.member.user.discriminator}** (${newState.member.id}) a été mis a jour.`,
            voiceChannel: "Salon Vocal",
            states: (oldState, newState) => `Avant: ${oldState}\nAprès: ${newState}`
        }
    }
}