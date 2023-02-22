export const getPrevDays = (initDate: Date) => {



    let newDate = new Date();
    newDate.setDate(initDate.getDate() - 1);

    console.log(initDate.getDate(), initDate.getDay())



    while (true) {
        console.log(newDate.getDate(), newDate.getDay())
        newDate.setDate(newDate.getDate() - 1);
        if (newDate.getMonth() !== initDate.getMonth() && newDate.getDay() === 0) {
            return;
        }
    }

}
