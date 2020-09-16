// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")

export default async function handler(req, res) {
  	res.statusCode = 200

  	const {
		query: { destinationSlug, planSlug },
	} = req
  
  	const db = await sqlite.open({
		filename: './mydb.sqlite',
		driver: sqlite3.Database
	})	

  	const destination = await db.get("SELECT id FROM destination WHERE slug = '" + destinationSlug + "'")
	const plans = await db.all("SELECT * FROM plan WHERE destinationId = " + destination.id + " ORDER BY category")

  	res.json(plans)
}
