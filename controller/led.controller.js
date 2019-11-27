const ledService = require('../service/led.service');

 exports.offLed = function(req, res, next) {

    ledService.off(req.body)
        .then((data) => res.status(200).send(data))
        .catch(err => next(err));
}

 exports.onLed = function(req, res, next) {
    ledService.on(req.body)
        .then((data) => res.status(200).send(data))
        .catch(err => next(err));
}
