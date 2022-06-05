async function handler(req, res) {
	if (req.method === 'POST') {
		const customerName = req.body.customerName
		const customerEmail = req.body.customerEmail
		const description = req.body.description
		const personalEmail = 'riveromartinezabraham@gmail.com'

		const options = {
			method: 'POST',
			/* mode: 'no-cors', */
			headers: {
				'content-type': 'application/json',
				'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
				'X-RapidAPI-Key': 'c6cb68d467msh6445c18d85dc033p143943jsn6c91b3057cb1',
			},
			body: `{"personalizations":[{"to":[{"email":"${personalEmail}"}],"subject":"Hola, soy ${customerName} y quiero hablar contigo!"}],"from":{"email":"${customerEmail}"},"content":[{"type":"text/plain","value":"${description}"}]}`,
		}
		const response = await fetch(
			'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
			options
		)
		const json = await response.json()
		console.log(json)
	}
	/* res.status(200).json({ message: 'This works!' }) */
	res.status(200).json({
		message: `${req.body.customerEmail} + ${req.body.customerName} + ${req.body.description}`,
	})
}

export default handler
