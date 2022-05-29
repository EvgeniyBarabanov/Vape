const Vape = function(data){//эти данные ожидаются
    let coil = null;
    let liquid = null;
    let isPowered = false;

    this.addCoil = function(dataCoil){
        coil = dataCoil
    }

    this.addLiquid = function(dataLiquid){
        liquid = dataLiquid
    }

    this.vapeOn = function(){
        isPowered = true;
    }

    this.vapeOff = function(){
        isPowered = false;
    }

    this.edit = function(newData){
        data = {...data,...newData}
    }

    this.remove = function(name){//название поля которое хотим удалить
        delete data[name]
    }

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
    this.get = function(){
        return dataLiquid;
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
        viscosity: ''
    }
)

console.log(eleaf1.get());
eleaf1.vapeOn();
eleaf1.addCoil(coil1.get());
eleaf1.addLiquid(liquid1.get());
console.log(eleaf1.get());