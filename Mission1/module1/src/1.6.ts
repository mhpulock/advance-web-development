function add(a:number, b:number):number{
    return a+b;
}

const addArrow = (a:number,b:number):number => {
    return a+b;
}

const poorUser = {
    name: 'Pulock',
    balance: 0,
    addBalance(balance:number):string {
        return `My new balance ${this.balance + balance}`;
    }
}

const arr: number[] = [2, 4, 5, 6];
const newArr: number[] = arr.map((element:number):number => element*element);
