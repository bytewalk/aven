var handlers = {}

function init(){
	var list = document.querySelectorAll('[init]')
	var i
	,	initId
	,	params
	,	initFn
	for (i = 0; i < list.length; i++){
		initId = list[i].getAttribute('init')
		params = list[i].getAttribute('params')
		initFn = handlers[initId]
		if (!initFn)
			throw new Error('unregistered init called: ' + initId)
		initFn.call(list[i], params)
	}
}

module.exports = {
	handlers : handlers,
	init : init
}
