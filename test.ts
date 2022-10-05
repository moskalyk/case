// const mixinGroups = require('./mixinGroups')
// const mixinRumours = require('./mixinRumours')
const mixinDiscourse = require('./mixinDiscourse')
const Case = require('./index')
	
// :: mixing in a case
// Object.assign(Case.prototype, mixinGroups)
// Object.assign(Case.prototype, mixinRumours)
Object.assign(Case.prototype, mixinDiscourse)

(() => {
	const gall = 'talk'
	const case = new Case({ context: 'gall' }))
	case.say({case.gall, { body: 'hey' }})
	console.log(case.hear({ case.gall }))
})()