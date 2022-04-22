const Vape = function (data) {
    this.checkVolume = function () {
        return data.volumeTank;
    }

    let coil = null;
    this.addCoil = function (dataCoil) {
        coil = dataCoil;
    }

    let liquid = null;
    this.addLiquid = function (dataLiquid) {
        liquid = dataLiquid;
    }

    let isPowered = false;
    this.vapeOn = function() {
        isPowered = true;
    }
    this.vapeOff = function () {
        isPowered = false;
    }
    
    let smokingTime = 0;
    this.buttonOn = function () {
        if(isPowered == false){
            console.log("Error: Vape off");
        }
        if(liquid == null){
            console.log("Error: add liquid");
        }
        if(coil == null){
            console.log("Error: add coil");
        }else if((isPowered !== false) && (liquid !== null) && (coil !== null)){
            window.timerId = window.setInterval(timer, 1000)
            function timer() {
                smokingTime+= 1;
                if( liquid.get() > (data.volumeTank * 0.2)){
                    liquid.liquidConsumption();
                    console.log(liquid.get() + "ml");
                }else if(liquid.get() > 0){
                    liquid.liquidConsumption();
                    console.log("low liquid!");
                }else if(liquid.get() <= 0){
                    console.log("coil burned");
                    window.clearInterval(window.timerId)
                }
            }
        }
    }
    this.buttonOff = function () {
        function stop() {
            window.clearInterval(window.timerId)
            console.log(`Smoking time: ${smokingTime}s, `);
        }
        stop();
    }

    this.get = function () {
        return [data, coil, liquid, isPowered];
    }
}

const Coil = function (data) {
    this.get = function () {
        return data.resistanse
    }
}

const Liquid = function (data) {
    let volume = data.volume; 
    this.get = function () {
        return volume
    }
    this.liquidConsumption = function () {
        return volume-= 0.5
    }
}


let eleaf = new Vape({
        volumeTank: 6.5,
        powerRange: {
            start: 30,
            end:75
        },
        blowing: 0})

let coil = new Coil(
    {
        resistanse: 0.15
    }
)

let liquid = new Liquid(
    {
        volume: 5
    }
)




//console.log(eleaf.get());
//eleaf.addCoil(coil);
//eleaf.addLiquid(liquid);
//eleaf.liquidCheck();
//eleaf.on();
//eleaf.off();
//console.log(eleaf.get());
//eleaf.buttonOn();
//eleaf.buttonOff();
//console.log(eleaf.get()[1].get());
//console.log(eleaf.get()[2].get());

