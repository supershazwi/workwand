// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")

export default async function handler(req, res) {
  	res.statusCode = 200

  	const {
		query: { planSlug },
	} = req
  
  	const db = await sqlite.open({
		filename: './mydb.sqlite',
		driver: sqlite3.Database
	})	

  	console.log(planSlug)

	const plan = await db.get("SELECT id FROM plan WHERE plan.slug = '" + planSlug + "'")

	const result = await db.all("SELECT * FROM plan_step WHERE planId = '" + plan.id + "' ORDER BY sequence")

  	res.json(result)
}
