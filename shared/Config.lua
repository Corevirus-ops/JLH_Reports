Config = {}
--change the command to whatever
Config.Command = 'reports'

--simple logging using qbox logging, can edit logging in server/main.lua
Config.reportPlayerWebhook = ''
Config.reportBugWebhook = ''
Config.reportAdminWebhook = ''

--tag members --uses format: {'<@&1262096124114894990>' } or you can also {'<@&1275929474776694908>', '<@&1262095925422194830>'} using discord roles following <@& number   >
Config.reportPlayerTagMember = {''}
Config.reportBugTagMembers = {''}
Config.reportAdminTagMember = {''}

-- either url or public space name, in web/public
Config.image = 'jlh90s.png'