const Joi = require('joi');

module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        };

        const {error, value} = Joi.validate(req.body, schema);

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide valid email address.'
                    });
                break;
                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to match the following rules:
                        <br>
                        1.Must contain ONLY the following charachters: lower case, something
                        <br>`
                    });
                    break;
                default:
                    res.status(400).send({
                        error: 'Invalid registration :('
                    })
            }
        } else {
            next();
        }
    }
};