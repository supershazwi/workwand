// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")

export default async function handler(req, res) {
  	res.statusCode = 200

  	const {
		query: { destinationSlug, roleSlug },
	} = req
  
  	const db = await sqlite.open({
		filename: './mydb.sqlite',
		driver: sqlite3.Database
	})	

  	const destination = await db.get("SELECT id FROM destination WHERE slug = '" + destinationSlug + "'")
	const role = await db.get("SELECT id FROM role WHERE slug = '" + roleSlug + "' AND destinationId = " + destination.id)

	const average_salary = await db.get("SELECT salary FROM average_salary WHERE roleId = " + role.id)
	const industry_salaries = await db.all("SELECT * FROM industry_salary WHERE roleId = " + role.id + " ORDER BY industry")

	let return_array = {}

	return_array['average_salary'] = average_salary.salary
	return_array['industry_salaries'] = industry_salaries

  	res.json(return_array)
}
