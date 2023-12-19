import fs from 'fs';

export default (req: { method: any; body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) => {
  const { method, body } = req;

  if (method === 'POST') {
    const { credits } = JSON.parse(body);

    
    fs.writeFileSync('./credits.json', JSON.stringify(credits, null, 2));

    res.status(200).json({ message: 'Credits updated successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};