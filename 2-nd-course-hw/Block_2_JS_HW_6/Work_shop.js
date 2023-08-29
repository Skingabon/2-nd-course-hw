const cicle1 = {
radius: 4,
getArea() { 
    let mathRadius = 3.1415926536 * cicle1.radius;
     return mathRadius; 
    },
getPerimeter() {
    let mathPerimeter = 2 * cicle1.radius * 3.1415926536;
     return mathPerimeter; 
    }
}

const cicle2 = {
    radius: 8,
    getArea() { 
        let mathRadius = 3.1415926536 * cicle2.radius;
         return mathRadius; 
        },
    getPerimeter() {
        let mathPerimeter = 2 * cicle2.radius * 3.1415926536;
         return mathPerimeter; 
        }
    }

    console.log(cicle1.getArea());
    console.log(cicle1.getPerimeter());

    console.log(cicle2.getArea());
    console.log(cicle2.getPerimeter());



