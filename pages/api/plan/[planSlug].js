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

	const plan = await db.get("SELECT id FROM plan WHERE plan.slug = '" + planSlug + "'")

	const result = await db.all("SELECT plan_cost.id, plan_cost.content, destination.name AS destination_name, plan.name AS plan_name, plan.remarks, plan.slug, plan.application_duration, plan.validity, plan.renewable, plan.passes_for_family, plan.foreign_worker_levy, plan.quota, plan.application_link FROM plan_cost INNER JOIN plan ON plan_cost.planId = plan.id INNER JOIN destination ON plan.destinationId = destination.id WHERE plan.id = '" + plan.id + "'")

	const plan_eligibility_details = await db.all("SELECT * FROM plan_eligibility_details WHERE planId = '" + plan.id + "'")

	let return_array = {}

	return_array['result'] = result
	return_array['plan_eligibility_details'] = plan_eligibility_details

  	res.json(return_array)
}
