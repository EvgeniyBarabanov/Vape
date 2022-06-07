const Charger = function(){
    let status = false;
    let batteryLevel = 0;

    this.enable = function(){
        status = true;

        window.timerId = window.setInterval(charger, 500);
        console.log('device is charging');

        function charger(){
            if(batteryLevel < 100) batteryLevel += 1;
            //console.log(`Battery Level ${batteryLevel} %`);
        };
    };

    this.disable = function(){
        status = false;

        window.clearInterval(window.timerId);
        console.log(`Уровень заряда батареи ${batteryLevel} %`);
    };

    this.batteryConsumption = function(){
        return batteryLevel -= 0.5;
    }

    this.getStatus = function(){
        return status;
    };

    this.getBatteryLevel = function(){
        //console.log(`Уровень заряда батареи ${batteryLevel} %`);
        return batteryLevel;
    }
}


const Vape = function(data){
    Charger.apply(this, arguments);


    let coil = null;
    let liquid = null;
    let isPowered = false;
    let smokingTime = 0;

    this.addCoil = function(dataCoil){
        coil = dataCoil;
    }

    this.addLiquid = function(dataLiquid){
        liquid = dataLiquid;
    }

    this.vapeOn = function(){
        isPowered = true;
    }

    this.vapeOff = function(){
        isPowered = false;
    }

    this.buttonOn = function(){
        if (this.getBatteryLevel() < 1){
            console.log("battery low");
            return;
        };

        if(!isPowered){
            console.log("Error: vape off");
            return;
        };

        if(liquid == null){
            console.log("Error: add liquid");
            return;
        };

        if(coil == null){
            console.log("Error: add coil");
            return;
        };

        if(isPowered && liquid !== null && coil !== null){
            
            window.timerId = window.setInterval(() =>{
                smokingTime += 1;

                if(this.getBatteryLevel() > 0){
                    if(liquid.get() > (data.volumeTank * 0.2)){
                        liquid.volumeConsumption();
                        this.batteryConsumption();
                        console.log(liquid.get() + "ml");
                    }else if(liquid.get() > 0){
                        liquid.volumeConsumption();
                        this.batteryConsumption();
                        console.log("low liquid!");
                    }else if(liquid1.get() <= 0){
                        console.log("coil burned");
                        window.clearInterval(window.timerId);
                    };
                }else{
                    console.log("battery low");
                    window.clearInterval(window.timerId);
                }
            }, 1500);
            
        };
    };

    this.buttonOff = function () {
        function stop() {
            window.clearInterval(window.timerId);
            console.log(`Smoking time: ${smokingTime}s `);
        }
        stop();
    }

    this.getStatus = function(){
        console.log("status");
    };

    this.get = function(){
        return [data, isPowered, coil, liquid];
    }
}

const Coil = function(dataCoil){

    this.get = function(){
        return dataCoil;
    }
}

const Liquid = function(dataLiquid){
    let volume = dataLiquid.volume;

    this.get = function(){
        return volume;
    };

    this.volumeConsumption = function(){
        return volume -= 0.5;
    }
}



const eleaf1 = new Vape(
    {
        name: 'eleaf',
        volumeTank: 6.5,
        power: 45
    }
)

const coil1 = new Coil(
    {   
        name: 'coil',
        resistance: 0.15
    }
)

const liquid1 = new Liquid(
    {
        name:'liquid',
        viscosity: '',
        volume : 5
    }
)


// eleaf1.enable(); зарядить устройство
// eleaf1.disable(); снять устройсво с зарядки
// eleaf1.getBatteryLevel(); проверить уровень заряда батареи
// eleaf1.addCoil(Coil1); добавить испаритель
// eleaf1.addLiquid(liquid1); добавить жидкость
// eleaf1.vapeOn(); включает устройство
// eleaf1.vapeOff(); выключает устройство 
// eleaf1.buttonOn(); использовать устройство
// eleaf1.buttonOff(); 
// eleaf1.get(); информация об устройстве 
