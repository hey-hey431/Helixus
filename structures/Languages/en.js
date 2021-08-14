const {
    stripIndents
} = require("common-tags");

module.exports = {
    code: 'en',
    COMMANDS: {
        AFK: {
            description: 'Allows you to set an AFK message that\'ll be displayed when you\'re mentionned.',
            noReason: '❌ - Please specify a reason.',
            success: '✅ - You are now AFK! Just type a message (not a command) to remove the AFK reason.'
        },
        ANAL: {
            description: 'Displays an NSFW picture with anal.',
            pleaseWait: "<a:loading:543460555113889792> - Please wait...",
            requestedBy: (author) => `Requested by ${author}`,
            notDisplaying: 'Click here if the image is not displaying.',
            providedBy: 'Provided by NekoBotAPI (nekobot.xyz)'
        },
        ASCII: {
            description: 'Converts text to ASCII art.',
            tooLong: (chars) => `❌ - The text must be 15 caracters long or less. The text you provided was ${chars} characters longer.`
        },
        ASS: {
            description: 'Displays an NSFW image with ass.',
            pleaseWait: "<a:loading:543460555113889792> - Please wait...",
            requestedBy: (author) => `Requested by ${author}`,
            notDisplaying: 'Click here if the image is not displaying.',
            providedBy: 'Provided by NekoBotAPI (nekobot.xyz)'
        },
        AUTOROLE: {
            description: 'Allows you to configure role which will be given to new members.',
            OFF: {
                noRoleConfigured: '❌ - No role has been configured.',
                removed: '✅ - Roles have been removed from the autorole.'
            },
            added: `✅ - The specified roles will now be given to new members.`,
            removed: `✅ - The specified roles will stop being given to new members.`,
            notFound: (role) =>  `❌ - The role \`${role}\` has not been found.`,
            notUsed: (role) => `❌ - The role \`${role}\` is not used as an autorole.`
        },
        AVATAR: {
            description: 'Displays your avatar or the avatar of the mentionned user.',
            avatar: (userTag) => `Here is the avatar of ${userTag}`,
            notShowing: "Click here if the avatar is not showing up."
        },
        BACKGROUND: {
            description: 'Allows you to see the list of backgrounds, or to buy and set them.',
            BUY: {
                noBackgroundSpecified: '❌ - Please specify a background to buy! To see the list of available backgrounds, check the `am!background list` command!',
                invalidBackground: '❌ - Please specify a valid background to buy! To see the list of available backgrounds, check the `am!background list` command!',
                notEnoughCoins: '❌ You don\'t have **5000** coins! Come back later...',
                alreadyBought: '❌ - You already have this background!',
                success: (background) => `✅ - You have bought the **${background}** background!`
            },
            SET: {
                noBackgrounds: '❌ - You don\'t have any background...',
                noBackgroundSpecified: '❌ - Please specify a background to set! To see the list of available backgrounds, check the `am!background list` command!',
                invalidBackground: '❌ - Please specify a valid background to set! To see the list of available backgrounds, check the `am!background list` command!',
                success: (background) => `✅ - You successfully set the **${background}** background!`
            },
            LIST: {
                pleaseWait: "Please wait...",
                closedPaginator: "❌ Paginator closed... ❌",
                embedAuthor: "Rank Background List",
                embedTitle: `The ❌ sign means you don't have the background.\nBuy it with \`am!background buy <background>\` !`,
                preview: '[Preview]'
            }
        },
        BAKA: {
            description: 'Say to someone he\'s a baka.',
            baka: (memberTag) => `**${memberTag}** is a baka!`,
            service: "Service By nekos.life"
        },
        BALANCE: {
            description: "Displays your current balance.",
            output: (bal) => `You have <a:coin:784930553748520961> **${bal}** coins!`
        },
        BAN: {
            description: 'Bans the specified user.',
            noMention: "❌ - Please mention a member or specify an ID of the user to ban.",
            noValidMention: "❌ - Please mention a **valid** member or specify an ID of the user to ban.",
            noReason: "No reason specified.",
            confirmation: (member, reason) => `<a:loading:543460555113889792> - Do you really want to ban **${member.user.tag}** (${member.id}) for __**${reason}**__?`,
            confirmationID: (memberID, reason) => `<a:loading:543460555113889792> - Do you really want to ban **${memberID}** for __**${reason}**__?`,
            confirmed: (member) => `✅ - The member **${member.user.tag}** has sucessfully banned.`,
            confirmedID: (memberID) => `✅ - The ID **${memberID}** has sucessfully banned.`,
            pmConfirmed: (guildName, reason) => `You have been banned from **${guildName}**.\nReason: __**${reason}**__`,
            cancelled: "❌ - The ban confirmation has been cancelled."
        },
        BEAUTIFUL: {
            description: 'U see this ? Beautiful.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...'
        },
        BEG: {
            description: "Begging for coins...",
            notReady: (time) => `You already begged recently! Come back in ${time.hours}:${time.minutes}:${time.seconds} !`,
            success: (amount) => `You begged and received ${amount} coins!`
        },
        BLUR: {
            description: 'Blurs the image.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...'
        },
        BOBROSS: {
            description: 'You are now a Bob Ross art piece.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...'
        },
        BOOBS: {
            description: 'Displays an NSFW picture with boobs.',
            pleaseWait: "<a:loading:543460555113889792> - Please wait...",
            requestedBy: (author) => `Requested by ${author}`,
            notDisplaying: 'Click here if the image is not displaying.',
            providedBy: 'Provided by NekoBotAPI (nekobot.xyz)'
        },
        BRAZZERS: {
            description: 'You are now in a Brazzers movie.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...'
        },
        CHOOSE: {
            description: 'Allows you to choose between multiple choices.',
            success: (choice) => `✅ - My choice is... **${choice}**!`
        },
        CIRCLE: {
            description: 'Adds a circle around the image.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...'
        },
        CLAP: {
            description: 'Clap at someone!',
            clapNoMention: (memberTag) => `**${memberTag}** clapped at someone!`,
            clapMention: (memberTag, clappedTag) => `**${memberTag}** clapped at **${clappedTag}**!`,
            service: "Service By ksoft.si"
        },
        COIN: {
            description: 'Heads or tails?',
            success: (side) => `✅ - It landed on **${side}**!`
        },
        COLOR: {
            description: 'Displays informations about a random color.',
            link: "Link to color"
        },
        CONNECT4: {
            description: 'Play Connect Four with a friend. Want to play with me? Just tag me!',
            noMention: '❌ - Please mention someone to play with. You can mention the bot to play against an AI.',
            noColor: (colorList) => `❌ - Please choose a color from this list: ${colorList}`,
            conj: "or",
            againstYourself: "❌ - You can't play against yourself.",
            currentGame: `❌ - A game is currently being played on this channel. Please wait until the game is finished or go into another channel.`,
            askingOpponent: (opponent, author) => `<a:loading:543460555113889792> - ${opponent}, do you accept to play connect four with ${author}?`,
            denied: '❌ - They denied...',
            colors: (opponent, list) => `${opponent}, what color do you want? Choose from this list: ${list}`,
            none: "None",
            chooseColumn: (user, lastMove, board, nums) => stripIndents `
            ${user}, please choose which column do you pick. You can type \`stop\` to surrend.
            Previous Move : Row **${lastMove}**

            ${board}
            ${nums}
            `,
            timesUp: '❌ - Your time is up!',
            inactivity: '❌ - The game has ended for inactivity.',
            finalMove: "Final Move: Row",
            winString: (winner) => `✅ - Congratulations to ${winner} !`,
            drawString: '❌ - It\'s a draw...'
        },
        CONTRAST: {
            description: 'Adds a contrast to the image.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...'
        },
        CONVOLUTE: {
            description: 'Convolutes the image.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...'
        },
        COOLDOWNS: {
            description: "Displays your different cooldowns for economy commands.",
            available: "**Available**"
        },
        CUDDLE: {
            description: 'Cuddle someone!',
            cuddleNoMention: (memberTag) => `**${memberTag}** is cuddling someone!`,
            cuddleMention: (memberTag, cuddledTag) => `**${memberTag}** is cuddling **${cuddledTag}**!`,
            service: "Service By nekos.life"
        },
        DAILY: {
            description: "Gives you coins daily!",
            notReady: (time) => `You already collected your daily bonus! Come back in ${time.hours}:${time.minutes}:${time.seconds} !`,
            success: (amount) => `You've collected your daily reward of ${amount} coins!`
        },
        DICE: {
            description: 'Rolls a dice within a 1-max value of your choice.',
            success: (number) => `✅ - You rolled a **${number}**!`
        },
        DISTORT: {
            description: 'Distorts the image.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...'
        },
        EMOJI: {
            description: 'Displays informations about specified emote.\nModerators can use this command to add, rename and remove emojis from the server.',
            noPermission: "❌ - You don't have the permission.",
            ADD: {
                noArgs: "❌ - Please specify a name for the emote to add !",
                tooMuch: "❌ - Only an attachment or a custom emote is required.",
                created: (emote) => `✅ - The emote ${emote} (\`${emote.name}\`) has successfully been created!`,
                unicode: "❌ - This emote is an unicode emote, and cannot be added to your server.",
                alreadyInServer: "❌ - This emote is already in the server!"
            },
            REMOVE: {
                noArgs: "❌ - Please specify a name for the emote to remove !",
                notInServer: "❌ - You cannot remove an emote that is not in the server!",
                removed: (emote) => `✅ - The emote ${emote.name} has successfully been removed!`
            },
            RENAME: {
                noArgs: "❌ - Please specify a name for the emote to rename !",
                noNewName: "❌ - Please specify the new name for the emote!",
                notInServer: "❌ - You cannot rename an emote that is not in the server!",
                renamed: (emote, newName) => `✅ - The emote ${emote} has successfully been renamed to ${newName}!`
            },
            informations: (emojiName, preview, emoteID, duration) => `**Name**: \`${emojiName}\`\n**Preview**: ${preview} (\`${preview}\`)\n**ID**: \`${emoteID}\`\n**Added on**: \`${duration}\``
        },
        FEED: {
            description: 'Feed someone!',
            feedNoMention: (memberTag) => `**${memberTag}** is feeding someone!`,
            feedMention: (memberTag, fedTag) => `**${memberTag}** is feeding **${fedTag}**!`,
            service: "Service By nekos.life"
        },
        FIRE: {
            description: 'Sends a GIF with a fire effect.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...',
        },
        FISH: {
            description: "Lets go fishing!",
            INVENTORY: {
                inventory: "Fish Inventory",
                content: (junkFish, commonFish, uncommonFish, rareFish) => `🔧 - Junk: **${junkFish}**\n🐟 - Common: **${commonFish}**\n🐠 - Uncommon: **${uncommonFish}**\n🐡 - Rare: **${rareFish}**\n`
            },
            SELL: {
                sellWhat: "What would you like to sell?",
                content: (junkFish, commonFish, uncommonFish, rareFish) => `🔧 - Junk: **${junkFish}**\n🐟 - Common: **${commonFish}**\n🐠 - Uncommon: **${uncommonFish}**\n🐡 - Rare: **${rareFish}**\n`,
                pleaseWait: '<a:loading:543460555113889792> - Please wait...',
                sold: "Fish Sold",
                soldContent: (fishAmount, fishSymbol, coins) => `You successfully sold your **${fishAmount} ${fishSymbol} items** for __**${coins} coins**__!`,
                failed: (fishSymbol) => `You don't have any ${fishSymbol} to sell...`,
                cancelled: `You have sold nothing...`
            },
            notEnoughCoins: '❌ - You must have at least 10 coins to start fishing.',
            caught: (fishSymbol) => `✅ - You caught... ${fishSymbol} ! (**-10 <a:coin:784930553748520961>**)`
        },
        FISHEYE: {
            description: 'Adds a fisheye effect to the image.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...',
        },
        FOURK: {
            description: 'Displays a 4K categorized NSFW picture.',
            pleaseWait: "<a:loading:543460555113889792> - Please wait...",
            requestedBy: (author) => `Requested by ${author}`,
            notDisplaying: 'Click here if the image is not displaying.',
            providedBy: 'Provided by NekoBotAPI (nekobot.xyz)'
        },
        FRAME: {
            description: 'Adds a frame in the image.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...'
        },
        GELBOORU: {
            description: 'Displays a (potential) NSFW image from Gelbooru with your specified tags.',
            pleaseWait: "<a:loading:543460555113889792> - Please wait...",
            requestedBy: (author) => `Requested by ${author}`,
            notDisplaying: 'Click here if the image is not displaying.',
            providedBy: 'Provided by Gelbooru (gelbooru.com)',
            embedDescription: (data, duration, rating, notDisplaying) => `**Posted by**: \`${decodeURIComponent(data.owner)}\` (**${duration}**)\n**Score**: \`${data.score}\`\n**Rank**: \`${rating}\`\n**Tags**: \`${data.tags}\`\n[${notDisplaying}](${data.file_url})`,
            s: "Safe",
            q: "Questionable",
            e: "Explicit",
            notFound: `❌ - No results has been found.`
        },
        GLITCH: {
            description: 'Glitches the image.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...'
        },
        GRAYSCALE: {
            description: 'Adds a grayscale effect to the image.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...'
        },
        HEARTS: {
            description: 'Adds hearts to the image.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...',
        },
        HELP: {
            TYPES: {
                administration: "Administration",
                economy: "Economy",
                fun: "Fun",
                general: "General",
                info: "Info",
                levels: "Levels",
                music: "Music",
                images: "Images",
            },
            description: `Displays a list of current commands, sorted by category.\nYou can also give an argument, to get more infos about a specific command.`,
            helpEmbedTitle: (command) => `Command: \`${command.name}\``,
            helpEmbedUsage: 'Usage',
            helpEmbedType: 'Type',
            helpEmbedAliases: 'Aliases',
            helpEmbedExamples: 'Examples',
            helpEmbedNotes: 'Notes',
            embedTitle: 'Helixus Commands',
            embedDescription: (prefix) => `**More informations:** \`${prefix}help [command]\``,
            reminder: '**Reminder**: Hooks such as \`[]\` (__optional__ argument) and \`<>\` (__mandatory__ argument) must not be used when executing commands.'
        },
        HENTAI: {
            description: 'Displays an NSFW image with hentai.',
            pleaseWait: "<a:loading:543460555113889792> - Please wait...",
            requestedBy: (author) => `Requested by ${author}`,
            notDisplaying: 'Click here if the image is not displaying.',
            providedBy: 'Provided by NekoBotAPI (nekobot.xyz)'
        },
        HUG: {
            description: 'Hug someone!',
            hugNoMention: (memberTag) => `**${memberTag}** hugs someone!`,
            hugMention: (memberTag, huggedTag) => `**${memberTag}** hugs **${huggedTag}**!`,
            service: "Service By nekos.life"
        },
        IGNORE: {
            description: "Configure in which channel commands should be executed.",
            noChanSpecified: "❌ - You haven\'t specified a channel to ignore.",
            noRowsIgnored: (chan) => `✅ - ${chan} will now be ignored for commands.`,
            notIgnored: (chan) => `✅ - ${chan} will now be listened for commands again.`,
            ignored: (chan) => `✅ - ${chan} will now be ignored for commands.`
        },
        INVERT: {
            description: 'Inverts the image.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...'
        },
        JOINMESSAGE: {
            description: "Configure the message that will display when a user joins the server",
            notes: 'Here is the list of tags you can use:\n\n{user} - mentions the user\n{username} displays the username of the member\n{server} - displays the server name\n\nYou can use channel and role mentions like you would on an ordinary message.',
            ON: {
                enabled: `✅ - Join messages have been enabled. If you haven't already, check \`am!help joinmessage\` to see how to configure the join message.`
            },
            OFF: {
                notEnabled: '❌ - Join messages are currently not enabled.',
                disabled: `✅ - Join messages have been disabled.`
            },
            CHANNEL: {
                noChanSpecified: '❌ - Please specify a channel name, ID, or mention!',
                noValidChan: '❌ - You haven\'t specified a valid channel.',
                notEnabled: '❌ - Join messages are currently not enabled.',
                success: (chan) => `✅ - Join messages will be sent to ${chan}.`
            },
            noContent: '❌ - Please specify the join message content. Check the `am!help joinmessage` page to see what tags you can use.',
            notEnabled: '❌ - Join messages are currently not enabled.',
            success: `✅ - The join message content has successfully been set.`
        },
        KICK: {
            description: 'Kicks the specified user.',
            noMention: "❌ - Please mention a member to kick.",
            noValidMention: "❌ - Please mention a **valid** member to kick.",
            noReason: "No reason specified.",
            confirmation: (member, reason) => `<a:loading:543460555113889792> - Do you really want to kick **${member.user.tag}** (${member.id}) for __**${reason}**__?`,
            confirmed: (member) => `✅ - The member **${member.user.tag}** has sucessfully kicked.`,
            pmConfirmed: (guildName, reason) => `You have been kicked from **${guildName}**.\nReason: __**${reason}**__`,
            cancelled: "❌ - The kick confirmation has been cancelled."
        },
        KISS: {
            description: 'Kiss someone!',
            kissNoMention: (memberTag) => `**${memberTag}** kisses someone!`,
            kissMention: (memberTag, kissedTag) => `**${memberTag}** kisses **${kissedTag}**!`,
            service: "Service By nekos.life"
        },
        LANG: {
            description: 'Changes the bot\'s language on the server.',
            success: `✅ - The server language has been updated to **English**!`
        },
        LEADERBOARD: {
            description: 'Displays a leaderboard of monthly votes.',
            notes: 'Prizes awaits the top 3!',
            loading: "<a:loading:543460555113889792> - Please wait...",
            fullTop: (link) => `Here is the full **Monthly Votes** leaderboard: ${link}`,
            closed: "❌ - Paginator Closed.",
            title: "Monthly Votes Leaderboard",
            footer: "Use the reactions to interact with the pages."
        },
        LEAVEMESSAGE: {
            description: "Configure the message that will display when a user leaves the server",
            notes: 'Here is the list of tags you can use:\n\n{username} displays the username of the member\n{server} - displays the server name\n\nYou can use channel and role mentions like you would on an ordinary message.',
            ON: {
                enabled: `✅ - Leave messages have been enabled. If you haven't already, check \`am!help leavemessage\` to see how to configure the leave message.`
            },
            OFF: {
                notEnabled: '❌ - Leave messages are currently not enabled.',
                disabled: `✅ - Leave messages have been disabled.`
            },
            CHANNEL: {
                noChanSpecified: '❌ - Please specify a channel name, ID, or mention!',
                noValidChan: '❌ - You haven\'t specified a valid channel.',
                notEnabled: '❌ - Leave messages are currently not enabled.',
                success: (chan) => `✅ - Leave messages will be sent to ${chan}.`
            },
            noContent: '❌ - Please specify the leave message content. Check the `am!help leavemessage` page to see what tags you can use.',
            notEnabled: '❌ - Leave messages are currently not enabled.',
            success: `✅ - The leave message content has successfully been set.`
        },
        LEVELUP: {
            description: 'Lets you configure the levelup message content/channel target for your server.',
            notes: '__**Channel Parameter**__:\nIf you want it to be displayed where the user has levelled up, type `msgChannel`.\n\n__**Message Parameters**__:\nHere is the list of the tags you can use:\n{user} - mentions the user\n{username} - displays the username\n{server} - displays the server name\n{level} - displays the obtained level',
            CHANNEL: {
                noChanSpecified: '❌ - Please specify a channel name, ID, or mention!',
                invalidChan: '❌ - This channel doesn\'t exist.',
                levelNotEnabled: '❌ - Levelling is not enabled on this server. See `am!help toggle`.',
                success: (chan) => `✅ - Level up messages will now be sent to ${chan}!`,
                msgChannel: "the channel where the user leveled up"
            },
            MESSAGE: {
                noContent: '❌ - You haven\'t specified a levelup message content. Please check `am!help levelup` to see which tags you can use inside of your levelup message.',
                levelNotEnabled: '❌ - Levelling is not enabled on this server. See `am!help toggle`.',
                success: `✅ - This server's levelup message has been updated!`
            }
        },
        LICK: {
            description: 'Lick someone!',
            lickNoMention: (memberTag) => `**${memberTag}** licked someone!`,
            lickMention: (memberTag, lickedTag) => `**${memberTag}** licked **${lickedTag}**!`,
            service: "Service By ksoft.si"
        },
        LOGS: {
            description: 'Lets you configure the logging system.',
            ON: {
                alreadyEnabled: '❌ - Logs are already enabled in this server!',
                enabled: `✅ - Logs are now enabled in this server.`
            },
            OFF: {
                alreadyDisabled: '❌ - Logs are already disabled in this server!',
                disabled: `✅ - Logs are now disabled in this server.`
            },
            CHANNEL: {
                noChanSpecified: '❌ - Please specify a channel name, ID, or mention!',
                notEnabled: `❌ - Logs are not activated in this server.`,
                success: (channel) => `✅ - Logs will now be sent to ${channel}`
            },
            IGNORE: {
                noChanSpecified: '❌ - Please specify a channel name, ID, or mention!',
                ignored: '✅ - This channel will now be ignored for logging.',
                notIgnored: '✅ - This channel will now stop being ignored for logging.'
            },
            TOGGLE: {
                notValidEvent: (logsEventList) => `❌ - Please provide a valid event.\nValid events: \`${logsEventList}\``,
                notEnabled: `❌ - Logs are not activated in this server.`,
                eventEnabled: '✅ - This event will now be logged in this server.',
                eventDisabled: '✅ - This event will stop being logged in this server.'
            },
            noChanSpecified: "❌ - Please mention a channel.",
        },
        LOOP: {
            description: 'Loops the music queue',
            noQueue: "❌ - There is nothing playing.",
            success: (loopStatus) => `✅ - The loop is now ${loopStatus === true ? "**enabled**" : "**disabled**"}!`
        },
        LYRICS: {
            description: 'Displays the lyrics about specified song.',
            noQuery: '❌ - Please specify a song to search.',
            embedTitle: (title, artist) => `Lyrics for ${title} by ${artist}`,
            embedFooter: "Lyrics service provided by api.ksoft.si"
        },
        MATH: {
            description: 'Solves the specified equation.',
            invalidSyntax: "❌ - The equation contains invalid syntax.",
            answer: (answer) => `✅ - The answer to your equation is: **${answer}** !`
        },
        MEME: {
            description: 'Displays a random meme from Reddit.',
            loading: "<a:loading:543460555113889792> - Please wait..."
        },
        MUTE: {
            description: 'Mutes the specified user.',
            notes: "It will remove the actual roles of the member and adding the Muted role. You MUST use `am!unmute` to unmute someone, as it will give back their roles prior to the mute.",
            cantMute: "❌ - You can't mute this member.",
            confirmation: (member) => `<a:loading:543460555113889792> - Do you really want to mute ${member} ?`,
            muted: "✅ - This member has successfully been muted.",
            cancelled: '❌ - Mute confirmation has been cancelled.'
        },
        NEKO: {
            description: 'Displays an NSFW picture with neko.',
            pleaseWait: "<a:loading:543460555113889792> - Please wait...",
            requestedBy: (author) => `Requested by ${author}`,
            notDisplaying: 'Click here if the image is not displaying.',
            providedBy: 'Provided by NekoBotAPI (nekobot.xyz)'
        },
        NOWPLAYING: {
            description: 'Shows what music is currently playing.',
            noQueue: "❌ - There is nothing playing.",
            embedAuthor: (title) => `Now playing: ${title}`,
            embedFooter: (time) => `Time Remaining: ${time}`,
            requestedBy: (requester) => `Requested by: ${requester}`
        },
        OSU: {
            description: 'Displays informations about the specified player, in the specified game mode.',
            notFound: "❌ - User not found.",
            stats: (username, mode) => `${username}'s stats (osu!${mode})`,
            username: "Username",
            level: "Level",
            accuracy: "Accuracy",
            rank: "Rank",
            totalGames: "Total Games",
            country: "Country",
            totalRankedScore: "Total Ranked Score",
            totalScore: "Total Score"
        },
        PAT: {
            description: 'Pat someone!',
            patNoMention: (memberTag) => `**${memberTag}** pat someone!`,
            patMention: (memberTag, pattedTag) => `**${memberTag}** pat **${pattedTag}**!`,
            service: "Service By nekos.life"
        },
        PAUSE: {
            description: 'Pauses the musics that its currently playing.',
            noQueue: "❌ - There is nothing playing.",
            success: (author) => `⏸ ${author} has paused the music.`
        },
        PAY: {
            description: "Give someone coins.",
            notes: 'For every coin transaction made, a 5% fee is deducted. You must consider those 5% when doing a transaction',
            noUser: '❌ - You have to mention someone!',
            isBot: '❌ - You can\'t send coins to a bot.',
            notEnoughCoins: '❌ - You don\'t have enough coins!',
            noCoinsSpecified: '❌ - You have to specify an amount of coins to give.',
            pending: (oldAmt, newAmt, user) => `<a:loading:543460555113889792> - Do you want to send ~~${oldAmt}~~ (_5% transaction fee_) **${newAmt} coins** to ${user} ?`,
            pendingPremium: (amt, user) => `<a:loading:543460555113889792> - Do you want to send **${amt} coins** (_0% transaction fee [PREMIUM]_) to ${user} ?`,
            success: (amount, user) => `✅ - You have succesfully transferred **${amount} coins** to ${user}!`,
            cancelled: `❌ - The transaction has been cancelled.`
        },
        PING: {
            description: 'Displays the bot\'s current **message latency** and **heartbeat**.',
            latency: "Latency",
        },
        PIXEL: {
            description: 'Pixelates the image.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...'
        },
        PLAY: {
            description: "Allows you to play music from YouTube, SoundCloud or Spotify!",
            noVoiceChannel: "You need to join a voice channel first!",
            notSameVoiceChannel: "You need to be in the same voice channel as the bot.",
            embedAuthor: "Song selection",
            addedToQueue: (song, author) => `✅ - **${song}** has been added to the queue by ${author}`,
            error: (error) => `Could not join the channel: ${error}`,
            ended: "🚫 Music queue ended.",
            startedPlaying: (title, url) => `🎶 Started playing: **${title}** <${url}>`,
            notSupported: "❌ - Spotify playlists are currently not supported."
        },
        PLAYLIST: {
            description: "Allows you to load playlists from YouTube or SoundCloud!",
            notInVC: "❌ - You are not in a voice channel!",
            notInSameVC: "❌ - You are not in the same voice channel!",
            fetching: "LOADING - Fetching playlist...",
            startedPlaylist: (author) => `✅ -${author} has started a playlist!`,
            cannotJoin: "❌ - Cannot join channel.."
        },
        PREFIX: {
            description: 'Changes the bot\'s prefix on the server.',
            actualPrefix: (prefix) => `The current prefix is: \`${prefix}\``,
            tooLong: `❌ - The prefix must be only 5 characters long.`,
            success: (prefix) => `✅ - The prefix for this server is now \`${prefix}\`.`
        },
        PREMIUM: {
            description: 'Check how much time left is on your premium, and how you can have it!',
            status: "Your Premium Status",
            activated: "Your premium is currently **activated**!",
            disabled: "Your premium is currently **disabled**.",
            until: "Your premium is active until",
            tokens: (tokens) => `You have **${tokens}** tokens`,
            how: "How to get Tokens",
            heresHow: "Tokens corresponds to 1 month of premium. Each token cost 3.50 EUR.\nThey can be obtained via:\n     - __DonateBot__: You must join the support server and type `donate` on a bot channel. After the payment, you must contact **@mesa#0101** on Discord.\n     - [PaysafeCard](https://www.paysafecard.com): Contact **@mesa#0101** on Discord.\n\nMore payment methods will come in the future, as preparing them takes long time."
        },
        PURGE: {
            description: 'Removes the specified amount of messages.',
            notes: "`number` is limited to 100 messages, due to API limitations. To delete more than 100 messages, you'll need to run the command multiple times.\n\nMessages older than 2 weeks cannot be deleted.",
            noValidNumber: "❌ - Please specify a valid number.",
            purged: (deleted) => `✅ - **${deleted}** messages have been __**successfully**__ been deleted.`
        },
        PUSSY: {
            description: 'Displays an NSFW picture with pussy.',
            pleaseWait: "<a:loading:543460555113889792> - Please wait...",
            requestedBy: (author) => `Requested by ${author}`,
            notDisplaying: 'Click here if the image is not displaying.',
            providedBy: 'Provided by NekoBotAPI (nekobot.xyz)'
        },
        QRCODE: {
            description: 'Converts the specified string to a QRCode.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...',
            noArgs: '❌ - Please specify a text that should be converted to a QRCode.'
        },
        QUEUE: {
            description: 'Displays the whole music queue. Use the reactions to navigate.',
            noQueue: "❌ - There is nothing playing.",
            embedTitle: "Song Queue\n",
            embedDescription: (title, url, info) => `**Current Song - [${title}](${url})**\n\n${info}`
        },
        RAINBOW: {
            description: 'Adds a Rainbow effect to the image.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...'
        },
        RANK: {
            description: 'Displays your level stats.',
        },
        REACTIONROLE: {
            description: 'Lets you configure reaction roles.\nIf a user adds a reaction on a reaction role, the role linked to the reaction will be given to the user.',
            noChanSpecified: "❌ - You haven\'t specified a channel.",
            noValidChan: '❌ - You haven\'t specified a valid channel.',
            noMessageID: `❌ - You haven't specified a message ID.`,
            noEmoteSpecified: `❌ - You haven't specified an emote.`,
            noValidEmote: `❌ - You haven't specifed a valid emote.`,
            noRole: `❌ - The role you specified is not valid or non existant.`,
            emoteAlreadyUsed: '❌ - This emoji is already used as a reaction role for this message!',
            roleAlreadyUsed: '❌ - This role is already used as a reaction role for this message!',
            success: (emote) => `✅ - This role will now be given via reacting with ${emote}`,
            REMOVE: {
                success: `✅ - The reaction role has successfully been removed.`,
                notFound: `❌ - The reaction role has not been found.`
            }
        },
        REMINDME: {
            description: 'Reminds you at a specified date for a specified reason.',
            invalidTime: "❌ - Invalid time, please try again.",
            success: (reason, time) => `✅ - I will remind you for **${reason}** in __**${time}**__!`,
            reminded: (reason) => `⌛ - **Remind**: ${reason}`
        },
        RESUME: {
            description: 'Resumes the musics that its currently playing.',
            noQueue: "❌ - There is nothing playing.",
            success: (author) => `▶ ${author} has resumed the music.`
        },
        REVERSE: {
            description: 'Reverses the specified text.',
        },
        REWARDS: {
            description: 'Lets you configure leveled role rewards.',
            ADD: {
                noLevelSpecified: '❌ - Please provide a level number for the role reward.',
                noRoleSpecified: '❌ - Please provide a role for the role reward.',
                levelAlreadyUsed: '❌ - This level has already been configured for another role!',
                roleAlreadyUsed: '❌ - This role has already been configured for another level!',
                success: (role, level) => `✅ - ${role} has been successfully set for level **${level}**!`
            },
            REMOVE: {
                noLevelSpecified: '❌ - Please provide a level number for the role reward.',
                success: (role, level) => `✅ - ${role} will no longer be given at level **${level}**!`,
                notFound: (level) => `❌ - No rewards were found at level **${level}**.`
            },
            SHOW: {
                pleaseWait: "Please wait...",
                closedPaginator: "Paginator closed..",
                embedTitle: (page, pages) => `Role Rewards List (${page + 1}/${pages + 1})`
            }
        },
        ROBOT: {
            description: 'Displays a robot based on you (or on any specified text).',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...'
        },
        RPS: {
            description: 'Play Rock Paper Scissors against the AI!',
            whatChoice: "What's your choice?",
            choiceList: '✊ - Rock\n📄 - Paper\n✂️ - Scissors',
            loading: '<a:loading:543460555113889792> - Please wait...',
            tie: "It's a tie!",
            botWin: "I won!",
            userWin: "You won!",
            choices: (userChoice, botChoice) => `You chose: ${userChoice}\nI chose: ${botChoice}`
        },
        SAY: {
            description: 'Repeat the text you provided.',
            tooLong: '❌ - Please specify a text with less than 1950 characters.'
        },
        SEEK: {
            description: 'Allows you to set the music to a specific point.',
            noQueue: "❌ - There is nothing playing.",
            notThatLong: "❌ - The song isn't that long!",
            success: (duration) => `✅ - The song has seeked to **${duration}**!`
        },
        SELECT: {
            description: 'Selects someone randomly in the server.',
            noSubject: (randomMember) => `✅ - The selected member is... ${randomMember}.`,
            subject: (subject, randomMember) => `✅ - The selected member for **${subject}** is... ${randomMember}.`
        },
        SEPIA: {
            description: 'Adds a sepia effect to the image.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...'
        },
        SERVERINFO: {
            description: "Displays informations about the server.",
            owner: "👑 | Owner",
            members: "👥 | Members",
            serverID: "🔑 | Server ID",
            language: "📙 | Language",
            region: "🚩 | Region",
            channelCount: "🗨️ | Channel Count",
            channelCountValue: (channelsSize) => `**${channelsSize}** channels`,
            emojiCount: "👀 | Emoji Count",
            emojiCountValue: (emojisSize) => `**${emojisSize}** emojis`,
            createdOn: "⏱️ | Created On",
            joinedOn: "🔗 | Joined On",
            verificationLevel: "🚥 | Verification Level",
            mfaLevel: "🔒 | MFA Level",
            boostsCount: "🚀 | Boosts Count",
            boostLevel: "🚀 | Boost Level",
            verifiedServer: "<:verified:786313097857335376> | Verified Server",
            verified: "Verified",
            notVerified: "Not Verified",
            partner: "<:partnerowner:776628269356417036> | Partner",
            partnered: "Partnered",
            notPartnered: "Not Partnered",
            moreRole: (rolesLeft) => `and ${rolesLeft} more`,
            moreEmotes: (emotesLeft) => `and ${emotesLeft} more`
        },
        SHARD: {
            description: 'Displays the bot\'s current **shard**.',
            shard: (shard, shardCount) => `✅ - You are on the shard **${shard}**/${shardCount} !`
        },
        SHARDS: {
            description: 'Displays stats about the shards.',
            connected: "CONNECTED",
            connecting: "CONNECTING",
            reconnecting: "RECONNECTING",
            idle: "IDLE",
            nearly: "NEARLY",
            disconnected: "DISCONNECTED",
            finalMessage: (shard, servers, status) => `Shard ${shard} | Servers : ${servers} | Status : ${status}\n`
        },
        SHORTEN: {
            description: 'Shortens the specified link.',
            success: (link) => `✅ - Here is your shortened link: __**<${link}>**__!`
        },
        SKIP: {
            description: 'Skips the current song.',
            noQueue: "❌ - There is nothing playing.",
            success: `✅ - Song has been skipped!`
        },
        SLAP: {
            description: 'Slap someone!',
            slapNoMention: (memberTag) => `**${memberTag}** slapped someone!`,
            slapMention: (memberTag, slappedTag) => `**${memberTag}** slapped **${slappedTag}**!`,
            service: "Service By nekos.life"
        },
        SLOWMODE: {
            description: 'Sets a rate limit per user in the channel.',
            noDuration: "❌ - Please specify a duration!",
            noValidDuration: "❌ - Please specify a duration lower than 6h. (21600000 seconds)",
            slowed: (duration) => `✅ - The rate limit for this channel has been set to __**${duration}**__!`
        },
        SMUG: {
            description: 'Smug on someone!',
            smugNoMention: (memberTag) => `**${memberTag}** smugged on someone!`,
            smugMention: (memberTag, smuggedTag) => `**${memberTag}** smugged on **${smuggedTag}**!`,
            service: "Service By nekos.life"
        },
        SOFTBAN: {
            description: 'Softbans the specified user. (banning then immediately unbanning a user)\nThis wipes all of their messages from the server. (up to 7 days)',
            noMention: "❌ - Please mention a member or specify an ID of the user to softban.",
            noValidMention: "❌ - Please mention a **valid** member or specify an ID of the user to softban.",
            noReason: "No reason specified.",
            confirmation: (member, reason) => `<a:loading:543460555113889792> - Do you really want to softban **${member.user.tag}** (${member.id}) for __**${reason}**__?`,
            confirmationID: (memberID, reason) => `<a:loading:543460555113889792> - Do you really want to softban **${memberID}** for __**${reason}**__?`,
            confirmed: (member) => `✅ - The member **${member.user.tag}** has sucessfully softbanned.`,
            confirmedID: (memberID) => `✅ - The ID **${memberID}** has sucessfully softbanned.`,
            pmConfirmed: (guildName, reason) => `You have been softbanned from **${guildName}**.\nReason: __**${reason}**__`,
            cancelled: "❌ - The softban confirmation has been cancelled."
        },
        SPOTIFYNOWPLAYING: {
            description: 'Allows you to create a customized Spotify Now Playing card.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...',
        },
        STATS: {
            description: 'Shows statistics about the bot.',
            license: "This bot is licensed under the MIT license, for more info please see the full license **[here](https://github.com/chocololat/Helixus/blob/master/LICENSE)**",
            developer: "• __Developer__",
            statistics: "• __Statistics__",
            statisticsValue: (guildsCache, usersCache, channelsSize) => `**Servers**: ${guildsCache}\n**Users**: ${usersCache}\n**Channels**: ${channelsSize}`,
            using: "• __Using__",
            uptime: "• __Uptime__",
            ram: "• __RAM__",
            cpu: (percent) => `• __CPU (${percent.toFixed(2)}%)__`,
            links: "• __Links__",
            supportServer: "Support server",
            invitationLink: "Invitation Link",
            website: "Website (WIP)"
        },
        STEAMPLAYING: {
            description: 'Lets you create a customized `Steam Playing` card.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...',
            tooLong: '❌ - The game is too long! It must be 20 characters or less.'
        },
        STOP: {
            description: 'Stops the music and clears the queue.',
            noQueue: "❌ - There is nothing playing.",
            success: (author) => `⏹ ${author} has stopped the music!`
        },
        THREEKYEARS: {
            description: 'Add\'s your (or someone elses) profile pic to the Pokemon Meme `It\'s been 3000 years...`',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...'
        },
        TICKLE: {
            description: 'Tickle someone!',
            tickleNoMention: (memberTag) => `**${memberTag}** tickled someone!`,
            tickleMention: (memberTag, tickledTag) => `**${memberTag}** tickled **${tickledTag}**!`,
            service: "Service By nekos.life"
        },
        TOGGLE: {
            description: 'Toggles on or off the levelling system in your server.',
            OFF: {
                alreadyDisabled: '❌ - The levelling system is already **disabled**!',
                success: '✅ - The levelling system has successfully been **disabled** !'
            },
            ON: {
                success: '✅ - The levelling system has successfully been **enabled** !',
                alreadyEnabled: '❌ - The levelling system is already **enabled**!'
            }
        },
        TOP: {
            description: 'Displays a leaderboard of the guild\'s XP ranks.',
            pleaseWait: "Please wait...",
            fullTop: (fullTop) => `Here is the full top: ${fullTop}`,
            closedPaginator: "This paginator is closed...",
            embedAuthor: (guildName) => `${guildName} - XP Leaderboard`,
            embedFooter: "Use the reactions to navigate!"
        },
        TRANSLATE: {
            description: 'Allows you to translate text.',
            embedAuthor: "Translate",
            embedTranslatedFrom: (translatedFrom) => `Translated from ${translatedFrom}`,
            embedTranslatedTo: (target) => `to ${target}`
        },
        TRIGGERED: {
            description: 'Sends a GIF with the Triggered effect.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...',
        },
        UNBAN: {
            description: 'Unbans the specified user.',
            notValidID: "❌ - Please specify a valid member ID.",
            noReason: "No reason specified",
            unbanned: (memberID) => `✅ - __**${memberID}**__ has been unbanned.`
        },
        UNMUTE: {
            description: 'Mutes the specified user.',
            roleNotFound: "❌ - The Muted role has not been found. Please run the `am!mute` command first.",
            notMuted: "❌ - This member is not currently muted.",
            unmuted: "✅ - This member has been unmuted."
        },
        USERINFO: {
            description: "Displays informations about a specific user __**in the server**__.",
            username: "Username",
            bot: "Bot",
            user: "User",
            none: "None",
            currentStatus: "Current Status",
            accountCreated: "Account created",
            accountCreatedAgo: (time) => `${time} ago`,
            joined: "Joined",
            joinedAgo: (time) => `${time} ago`,
            currentlyActiveOn: "Currently active on",
            offline: "Offline",
            nitroBoostStatus: "Nitro Boost Status",
            nitroBoostStatusAgo: (time) => `${time} ago`,
            noNitroBoostStatus: "No active Server Boost.",
            moreRoles: (rolesSize) => `and ${rolesSize} more.`
        },
        UPTIME: {
            description: 'Displays the bot\'s current **uptime**.',
            uptime: (uptime) => `<a:hourglass:800978295562174492> - The current uptime is: **${uptime}**!`
        },
        USSR: {
            description: 'Adds the USSR flag to the image.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...',
        },
        VOLUME: {
            description: 'Changes the volume of the playing song.',
            noQueue: "❌ - There is nothing playing.",
            volume: (volume) => `🔊 - The volume is at **${volume}%**.`,
            success: (volume) => `✅ - Volume has been set to **${volume}%**!`
        },
        VOTE: {
            description: "Vote and win 450 coins every 12h.",
            vote: "You can vote and gain 450 coins every 12 hours!\nVotes can take several minutes before being validated.\nhttps://top.gg/bot/437190817195753472/vote"
        },
        WANTED: {
            description: 'Adds the Wanted frame from One Piece to the image.',
            pleaseWait: '<a:loading:543460555113889792> - Please wait...',
        },
        WARN: {
            LIST: {
                pleaseWait: "<a:loading:543460555113889792> - Please wait...",
                closed: "❌ - Paginator closed.",
                embedAuthor: (memberTag) => `${memberTag} warnings`,
                embedTitle: (page, count) => `Page ${page} (${count} warns total)`,
                embedFooter: "Use the reactions to navigate!",
                embedFieldTitle: (number, page) => `Warn #${(number + 1) + (page * 5)}`,
                embedFieldValue: (reason, modTag, modID, date) => `**Reason**: ${reason}\nBy ${modTag} (\`${modID}\`) | ${date}`
            },
            description: 'Warns the specified user.',
            noMention: "❌ - Please specify a user to warn!",
            noReason: "No reason specified",
            warned: (memberTag, modTag, reason) => `✅ -**${memberTag}** has been warned by **${modTag}** for __**${reason}**__ !`,
            dmWarned: (guildName, modTag, reason) => `You have been warned in **${guildName}** by **${modTag}**.\nReason: __**${reason}**__`
        },
        WEEKLY: {
            description: "Gives you coins weekly!",
            notReady: (time) => `You already collected your weekly bonus! Come back in ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s !`,
            success: (amount) => `You've collected your weekly reward of ${amount} coins!`
        },
        WORK: {
            description: "Work to gain money.",
            worked: (job, money) => `✅ - You worked as a __**${job}**__. You gained **${money}** coins!`,
            cooldown: (time) => `❌ - You are still on break! You'll be able to work again in **${time.hours}:${time.minutes}:${time.seconds}**!`
        },
        YANDERE: {
            description: 'Displays a (potential) NSFW image from Gelbooru with your specified tags.',
            pleaseWait: "<a:loading:543460555113889792> - Please wait...",
            requestedBy: (author) => `Requested by ${author}`,
            notDisplaying: 'Click here if the image is not displaying.',
            providedBy: 'Provided by Yande.re (yande.re)',
            embedDescription: (data, notDisplaying) => `**Posted by**: \`${decodeURIComponent(data.author)}\`\n**Score**: \`${data.score}\`\n**Tags**: \`${data.tags}\`\n[${notDisplaying}](${data.file_url})`,
            notFound: `❌ - No results has been found.`,
            banned: (tag) => `❌ - The tag \`${tag}\` is banned.`
        },
    },
    EVENTS: {
        CHANNELCREATE: {
            unknownUser: 'Unknown User',
            created: (type, channel) => `New **${type}** created (**${channel.name}** [<#${channel.id}>])`,
            createdBy: "Created By",
            channelID: "Channel ID",
            permissionsOverwrite: (role) => `Channel Permissions Overwrite:\n${role.name}`,
            permissions: (allowed, denied) => `Type: role\nAllowed Permissions: ${allowed}\nDenied Permissions: ${denied}`,
            none: "None",
        },
        CHANNELDELETE: {
            unknownUser: 'Unknown User',
            deleted: (type, channel) => `A **${type}** has been deleted. (**${channel.name}**)`,
            deletedBy: "Deleted By",
            channelID: "Channel ID"
        },
        CHANNELUPDATE: {
            changedName: (newChannel) => `**${newChannel} name has been changed**`,
            changedTopic: (newChannel) => `**${newChannel} topic has been changed**`,
            changedPermissions: (newChannel) => `**${newChannel} permissions have been changed.**\n*note:* check [docs](https://discordapp.com/developers/docs/topics/permissions) to see what the numbers mean`,
            old: "Old:",
            new: "New:",
            none: "None",
            allowed: (oldPerms, newPerms) => `Allowed Perms: \`${oldPerms}\` to \`${newPerms}\`\n`,
            denied: (oldPerms, newPerms) => `Denied Perms: \`${oldPerms}\` to \`${newPerms}\`\n`,
            deleted: 'Overwrite got deleted'
        },
        EMOJICREATE: {
            unknownUser: 'Unknown User',
            created: (emoji) => `New emoji created (**${emoji.name}** [\`<:${emoji.name}:${emoji.id}>\`])`,
            createdBy: "Created By",
            emojiID: "Emoji ID",
        },
        EMOJIDELETE: {
            unknownUser: 'Unknown User',
            deleted: (emoji) => `Emoji deleted (**${emoji.name}**)`,
            deletedBy: "Deleted By",
            emojiID: "Emoji ID",
        },
        EMOJIUPDATE: {
            unknownUser: 'Unknown User',
            updated: (emoji) => `Emoji updated (**${emoji.name}** [\`<:${emoji.name}:${emoji.id}>\`])`,
            updatedBy: "Updated By",
            oldName: "Old Name",
            newName: "New Name",
            emojiID: "Emoji ID",
        },
        GUILDBANADD: {
            banned: (user) => `${user.username}#${user.discriminator} has been banned.`,
            userInfos: "User Infos",
            isBot: "\nIs a bot",
            reason: "Reason",
            none: "None",
            bannedBy: "Banned By",
            unknownUser: 'Unknown User',
        },
        GUILDBANREMOVE: {
            unbanned: (user) => `${user.username}#${user.discriminator} has been unbanned.`,
            userInfos: "User Infos",
            isBot: "\nIs a bot",
            reason: "Reason",
            none: "None",
            unbannedBy: "Unbanned By",
            unknownUser: 'Unknown User',
        },
        GUILDMEMBERADD: {
            joined: (member, memberCount) => `${member} joined! We are now **${memberCount}** members !`,
            joinedAt: "Joined at",
            accountAge: "Account Age",
            days: (days) => `**${days}** days`,
            userID: "User ID",
        },
        GUILDMEMBERREMOVE: {
            unknown: "Unknown",
            none: "None",
            lurker: "Lurker",
            lurkerLeft: `A lurker has left the server.`,
            kicked: (member) => `${member.user.username}#${member.user.discriminator} has been kicked.`,
            left: (member) => `${member.user.username}#${member.user.discriminator} has left the server.`,
            userInfos: "User Infos",
            isBot: "\nIs a bot",
            reason: "Reason",
        },
        GUILDMEMBERUPDATE: {
            updated: (member) => `**${member.user.username}#${member.user.discriminator}** (${member})'} was updated.`,
            unknownChanges: "Unknown Changes",
            weird: "For a weird reason, this is empty... check the footer to see who updated the member.",
            newNick: "New Nickname",
            oldNick: "Old Nickname",
            none: "None",
            ID: (memberID, executorID) => `Member ID = ${memberID}\nExecutor = ${executorID}`
        },
        MESSAGE: {
            missingUserPerms: (permissions) => `❌ - You are missing these permissions: ${permissions}`,
            missingBotPerms: (permissions) => `❌ - The bot is missing these permissions: ${permissions}`,
            pleaseWait: (time) => `❌ - Please wait **${time} seconds** before using this command.`,
            restricted: '❌ - This channel has been restricted for command usage. Only moderators can use commands in this channel.',
            error: (error, errorID) => `❌ - An error has occured: \n\`\`\`${error.message}\`\`\`\nPlease report this error and specify this error ID: **${errorID}**!`,
            lvlUpMessage: "Congratulations {user}, you are now level **{level}** !",
            noNsfw: '❌ - Please execute this command in an NSFW channel.',
            removedAFK: "⏳ - Your AFK status has been removed.",
            isAFK: (tag, reason) => `⏳ - ${tag} is currently **AFK**.\nReason: __**${reason}**__`
        },
        MESSAGEDELETE: {
            deleted: (message) => `A message from ${message.author} (${message.author.tag}) has been deleted.`,
            deletedBy: "Deleted By",
            attachment: "Attachment",
            content: "Message Content"
        },
        MESSAGEDELETEBULK: {
            deleted: (messages, channel) => `**${messages.size}** messages were deleted in ${channel}.`,
            deletedBy: "Deleted By",
            unknownUser: `Unknown User`,
            contentWithoutMessage: (link) => `Attachment: ${link}`,
            contentWithMessage: (link, message) => `Attachment: ${link} | Message: ${message}`,
            noContent: "No content has been found..."
        },
        MESSAGEUPDATE: {
            updated: (author) => `A message from ${author} (${author.tag}) has been updated.`,
            oldMessage: "Old Message",
            newMessage: "New Message"
        },
        ROLECREATE: {
            unknownUser: "Unknown User",
            created: `A role has been created`,
            createdBy: "Created By",
        },
        ROLEDELETE: {
            unknownUser: "Unknown User",
            deleted: `A role has been deleted`,
            createdBy: "Deleted By",
            deletedLeft: `Deletion upon member leaving`
        },
        ROLEUPDATE: {
            unknownUser: "Unknown User",
            updated: (role) => `**The role ${role} has been updated (${role.id})**`,
            updatedBy: 'Updated by',
            now: "__**Now**__",
            was: "__**Was**__",
            footer: 'Please check the audit logs to see what specific permissions were changed.'
        },
        VOICESTATEUPDATE: {
            joined: (member, channel) => `${member} **__joined__ ${channel.name}**`,
            switch: (member, newChannel, oldChannel) => `${member} **__joined__ ${newChannel.name}** and **__left__ ${oldChannel.name}**.`,
            left: (member, channel) => `${member} **__left__ ${channel.name}**`,
            updated: (newState) => `**${newState.member.user.username}#${newState.member.user.discriminator}** (${newState.member.id}) had their voice state updated.`,
            voiceChannel: "Voice Channel",
            states: (oldState, newState) => `Was: ${oldState}\nNow: ${newState}`
        }
    }
}