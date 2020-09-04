// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")

export default async function handler(req, res) {
  	res.statusCode = 200

  	const {
		query: { pageSlug },
	} = req
  
  	const db = await sqlite.open({
		filename: './mydb.sqlite',
		driver: sqlite3.Database
	})

	const result = await db.all("SELECT * FROM source WHERE page = '" + pageSlug + "'")

  	res.json(result)
}
