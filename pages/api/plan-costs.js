// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")

export default async function handler(req, res) {
  	res.statusCode = 200
  
  	const db = await sqlite.open({
		filename: './mydb.sqlite',
		driver: sqlite3.Database
	})

	const result = await db.all('SELECT * FROM plan_cost')

  	res.json(result)
}
