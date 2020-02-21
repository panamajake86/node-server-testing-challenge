const router = require('express').Router();

const Resource = require('./resource-model');

router.get('/characters', async (req, res) => {
    try {
        const guys = await Resource.find();
        res.json(guys);
    } catch (err) {
        res.status(500).json({ message: "They're not here, try again later.", err })
    }
});

router.post('/characters', async (req, res) => {
    const data = req.body;

    try{
        const built = await Resource.add(data);
        res.status(200).json(built);
    } catch (err) {res.status(500).json({ message: "Not today bucko, try again later.", err })}
});

router.delete('/characters/:id', async (req, res) => {
    const { id } = req.params;

    try{
        const outski = await Resource.delete(id);
        if (outski) {
            res.json({ removed: outski })
        } else {
            res.status(404).json({ message: "Couldn't find your guy!" })
        }
    } catch (err) {res.status(500).json({ message: "He's still here, try again later.", err })}
});

module.exports = router;