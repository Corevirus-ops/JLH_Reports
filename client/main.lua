

local function ToggleReportFocus(bool)
SetNuiFocus(bool, bool)
end

RegisterNetEvent('JLH_Reports:client:openreports', function() 
        ToggleReportFocus(true)
        TriggerEvent("mHud:HideHud")
    local resourceName = GetCurrentResourceName()
        SendNUIMessage({
        type = 'JLH_OPENREPORTMENU',
        resourceName = resourceName,
        links = {
            player = {
                report = Config.reportPlayerWebhook,
                tag = Config.reportPlayerTagMember,
            },
            bug = {
                report = Config.reportBugWebhook,
                tag = Config.reportBugTagMembers,
            },
            admin = {
                 report = Config.reportAdminWebhook,
                 tag = Config.reportAdminTagMember,
            },
    }, 
    image = Config.image
    })
end)

RegisterNUICallback('exit', function()
ToggleReportFocus(false)
TriggerEvent("mHud:ShowHud")
end)

RegisterNUICallback('sendToDiscord', function(data)
    local player = exports.qbx_core:GetPlayerData()
    local playerName = player.charinfo.firstname .. " " .. player.charinfo.lastname
    local citizenid = player.citizenid
    data.player = {playerName = playerName, citizenid = citizenid}
    TriggerServerEvent('JLH_Reports:server:logIt', data)

end)