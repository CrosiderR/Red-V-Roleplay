const {ContextMenuCommandBuilder, ApplicationCommandType, EmbedBuilder, PermissionFlagsBits, PermissionsBitField} = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
    .setName("sunucuavatar")
    .setDMPermission(false)
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setType(ApplicationCommandType.User),

        run: async (client, interaction, guild) => {

            if (interaction.user.id !== '484702013834133526' && interaction.user.id !== '1020314601172238407') {

                const embed = new EmbedBuilder()
                .setAuthor({name: `9 0 4's Development`,iconURL: `https://images-ext-1.discordapp.net/external/qOfr2n8g0Us8tGfqJhDddUU9IX3rz0cu0dJy_VZpUEQ/https/cdn.discordapp.com/avatars/836953972861698138/76c1387abbab39e291290aeb5f70e880.webp`})
                .setFooter({text: `9 0 4's Development`,iconURL: `https://images-ext-1.discordapp.net/external/qOfr2n8g0Us8tGfqJhDddUU9IX3rz0cu0dJy_VZpUEQ/https/cdn.discordapp.com/avatars/836953972861698138/76c1387abbab39e291290aeb5f70e880.webp`})
                .setDescription('**Komutu Kullanmak İçin Yetkin Yok :(**')
                .setTimestamp()
                .setColor('NotQuiteBlack')
                return interaction.reply({embeds: [embed], ephemeral: true})
            }


            const target = await interaction.guild.members.fetch(interaction.targetId)
            var serverIcon = interaction.guild.iconURL({dynamic: true, size: 2048});

            const embed = new EmbedBuilder()

            .setImage(target.user.displayAvatarURL({dynamic: true, size: 2048}))



            const embed2 = new EmbedBuilder()
            .setImage(serverIcon)
        
        await interaction.reply({embeds: [embed2], ephemeral: true})
        console.log(`🧮 [C-Dev-Komut] Başarı İle Yüklendi!`);
        }
    }
