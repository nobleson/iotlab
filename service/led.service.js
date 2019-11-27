var gpio = require('rpi-gpio');
gpio.setup(7, gpio.DIR_OUT);

module.exports = {
    on,
    off
};

async function on(ledParam) {

  await gpio.write(7, true, function(err) {

        if (err) throw err;
        
        return {status: " On"};
    });

}

async function off(ledParam) {

	await gpio.write(7, false, function(err) {

		if (err) throw err;
		return {status: " Off"};
	    });

} 
