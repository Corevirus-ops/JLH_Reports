fx_version 'cerulean'
game 'gta5'

author 'JLH Development'
description 'A Report system so player can make in city reports that post to discord and in city staff members'
version '1.0.0'

client_scripts {
    'client/*.lua',
}

server_scripts {
    'server/*.lua',
}

shared_scripts {
    'shared/*.lua',
    '@ox_lib/init.lua',
}

ui_page 'web/build/index.html'
files {
    'web/build/index.html',
    'web/build/**/*',
}

dependency {
    'qbx_core',
    'ox_lib'
}
