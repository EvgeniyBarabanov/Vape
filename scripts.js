const User = function(data) {
    // this.data = data;

    this.edit = function(newdata) {
        data = {
            ...data, 
            ...newdata
        };
    }

    this.remove = function(name) {
        delete data[name];
    }

    this.get = function() {
        return data;
    }
};


const Contacts = function() {
    let data = [];

    this.add = function(userdata) {
        // * phone

        if (String(userdata.phone).length > 0) {
            const user = new User(userdata);
            data.push(user);
        }
    }

    this.edit = function(index, userdata) {
        if (isNaN(index) ||
            index < 0,
            !userdata ||
            typeof userdata != 'object'
        ) return;

        data[index].edit(userdata);
    }

    this.remove = function(index) {
        if (isNaN(index) || index < 0) return;

        // let dataTmp = data.filter(function(user, userindex) {
        //     return userindex != index;
        // });

        // data = dataTmp;

        data.splice(index, 1);
    }
    
    this.get = function(index = null) {
        return (index !== null) ? data[index] : data;
    }
};

// const myContacts = new Contacts();


const Lamp = function() {
    let status = false;
    let dateStart;
    let dateEnd;

    this.on = function() {
        status = true;
        dateStart = Date.now();
    };

    this.off = function() {
        status = false;
        dateEnd = Date.now();
    };

    this.info = function() {
        let sTime = dateStart ? new Date(dateStart) : 0;
        let eTime = dateEnd ? new Date(dateEnd) : 0;
        
        let duration = 0;
        
        if (dateStart && dateEnd) {
            duration = dateEnd - dateStart;
            duration = Math.ceil(duration / 1000);
        }
        
        console.log(`
        Status: ${status}
        Start time: ${sTime}
        End time: ${eTime}
        Duration: ${duration}
        `);
    };
};

let lamp = new Lamp();