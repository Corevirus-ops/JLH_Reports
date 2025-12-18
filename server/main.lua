local logger = require '@qbx_core.modules.logger'

lib.addCommand(Config.Command, {
    help = 'Opens Report Menu',
}, function(source)
      TriggerClientEvent('JLH_Reports:client:openreports', source)
end)

RegisterNetEvent('JLH_Reports:server:logIt', function(data) 
    logger.log({
  source = 'JLH_Reports',
  event = data.category,
  message = "From(" .. source .. "): " .. data.player.playerName .. " \n" .. "Reported: " .. data.title .. "\n" ..
  "   ----> Reason: \n" .. data.data ,
  webhook = data.link,
  tags = data.tag,
})

end)
