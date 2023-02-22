


export const getMonthForNumber = (n: number): string => {

    switch (n) {
        case 0:
            return 'Янв'
            break;
        case 1:
            return 'Фев'
            break;
        case 2:
            return 'Мар'
            break;
        case 3:
            return 'Апр'
            break;
        case 4:
            return 'Май'
            break;
        case 5:
            return 'Июнь'
            break;
        case 6:
            return 'Июль'
            break;
        case 7:
            return 'Авг'
            break;
        case 8:
            return 'Сен'
            break;
        case 9:
            return 'Окт'
            break;
        case 10:
            return 'Ноя'
            break;
        case 11:
            return 'Дек'
            break;

        default:
            return 'Err'
    }



}