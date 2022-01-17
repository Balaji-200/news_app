import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    let uri: string = process.env["API_URL"]!
    let url: string = encodeURI(uri + "top-headlines?country=in")
    if (req.query.q !== undefined)
        url = encodeURI(uri + "everything?" + `q=${req.query.q}&sortBy=popularity`)
    if (req.method === 'GET') {
        let response = await fetch(url, {
            headers: new Headers({
                'X-API-Key': process.env["API_KEY"] || ''
            })
        });
        let data = await response.json();
        res.status(200).send(data)
    }
}
