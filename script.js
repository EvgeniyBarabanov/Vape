const Vape = function (data) {
    //this.data = data;
    this.edit = function (newdata) {
        data = {...data,...newdata}
    }

    this.get = function () {
        return data;
    }
}

const eleaf = new Vape(
    {

    }
);

/* const Liquid = function () {
    
}



const Coil = function () {
    
} */

eleaf.edit({
    name: "Eleaf Ijust 3 pro",
    volumeTank: 6.5,
    volumeBattery: 3000,
    powerRange: {
        start: 30,
        end:75
    },

    
})

console.log(eleaf.get());