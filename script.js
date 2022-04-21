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
        if(isPowered == true){
            window.timerId = window.setInterval(timer, 1000)
            function timer() {
                smokingTime+= 1;
                if(data.volumeTank > (data.volumeTank * 0.2)){
                    (data.volumeTank+= -0.4).toFixed(1)
                    console.log(data.volumeTank);
                }else if(data.volumeTank < (data.volumeTank * 0.2) && data.volumeTank > 0){
                    console.log("low liquid");
                    (data.volumeTank+= -0.4).toFixed(1);
                }else if(data.volumeTank < 0){
                    console.log("coil burn");
                    window.clearInterval(window.timerId)
                }
                
            }
        } else{
            console.log("Error: Vape off");
        }
    }
    this.buttonOff = function () {
        
        function stop() {
            window.clearInterval(window.timerId)
            console.log(`Smoking time: ${smokingTime}s, `);
        }
        stop();
    }
    this.liquidCheck = function () {
            console.log(liquid.get());
    }

    /* this.edit = function (newdata) {
        data = {...data,...newdata}
    } */

    /* this.remove = function(name){
        delete data[name]
    } */

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
    this.get = function () {
        return data.volume
    }
}


let eleaf = new Vape(
    {
        volumeTank: 6.5,
        powerRange: {
            start: 30,
            end:75
        },
        blowing: 0

    }
)
/* console.log(eleaf.get()[0].volumeTank); */
let coil = new Coil(
    {
        resistanse: 0.15
    }
)

let liquid = new Liquid(
    {
        volume: 100
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

