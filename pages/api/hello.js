// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	console.log('then secret stuff', process.env.SECRET_TEST)
	res.status(200).json({ stuff: process.env.SECRET_TEST })
}
