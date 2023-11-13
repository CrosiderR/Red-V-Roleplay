const { EmbedBuilder, PermissionsBitField, PermissionFlagsBits } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');
const Discord = require("discord.js"); 
const {MessageActionRow, MessageButton} = require("discord.js")
const config = require("../config.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("bakım")
    .setDMPermission(false)
    .setDefaultMemberPermissions(PermissionFlagsBits.ChangeNickname)
    .setDescription("Fivem bakım Mesajı Gönderir!")
    .addStringOption(option =>
        option.setName("saat")
            .setDescription("20:30 - 21:00 Formatında Yazınız.")
            .setRequired(true)
    ),

    run: async (client, interaction) => {

        let sunucuiconurl = config.sunucuiconurl
        let sunucubanner = config.sunucubanner
        let banhammer = config.banhammer
        let renk = config.renk
        let emoji = config.emoji
        let fivemlink = config.fivemlink
        let ts3link = config.ts3link
        let sunucuip = config.sunucuip
        let ts3ip = config.ts3ip


        var serverIcon = interaction.guild.iconURL({dynamic: true});
        const yetkinyok = new EmbedBuilder()
        .setDescription(`**${interaction.member} Bu Komutu Kullanmak için <@&${banhammer}> Rolün Yok!**`)
        .setColor(renk);
  
        if(!interaction.member.roles.cache.get(banhammer) && !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ embeds: [yetkinyok], ephemeral: true });
        let saat = interaction.options.getString("saat");

      const embed = new EmbedBuilder()
.setColor(renk)
.setAuthor({name: `${interaction.guild.name}`, iconURL: `${sunucuiconurl}`})
.setTitle(`> Bakım Saati: __${saat}__`)
.setDescription("**SUNUCU BAKIMDA** \n <:nokta2:1164252509280411669> Sunucuya Giriş Yapmayın \n <:nokta2:1164252509280411669> Data Silimesinden Noir Team Sorumlu Değildir. ")

.setImage(`https://media.discordapp.net/attachments/1171887938485882970/1173546836225708032/standard_6.gif?ex=656459a9&is=6551e4a9&hm=bee2aa2d66d9578cc8ac2f9f2db174eade6fe5be113ff130248997fd4f7b492e&=`)
.setTimestamp()

const row = new ActionRowBuilder()
.addComponents(
new ButtonBuilder()
.setLabel('Sunucuya Bağlan')
.setURL(fivemlink)
.setEmoji(emoji)
.setStyle(ButtonStyle.Link)
.setDisabled(true),
new ButtonBuilder()
.setLabel("Ts3'e Bağlan")
.setURL(ts3link)
.setEmoji(emoji)
.setStyle(ButtonStyle.Link)
.setDisabled(true),
);
interaction.reply({content: "**Başarıyla Restart Mesajını Gönderdim!**", ephemeral: true})
interaction.channel.send({ content: "**||@everyone|| & ||@here||**",
embeds: [embed]
});
console.log(`🧮 [C-Dev-Komut] Başarı İle Yüklendi!`);
    }
 };
