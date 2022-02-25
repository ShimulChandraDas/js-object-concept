const student = {
    id: 101,
    money: 500,
    name: 'RJ Kibria',
    major: 'Accounting Information Systeam',
    isRich: false,
    subjects: ['english', 'economics', 'Accounting'],
    bestFriend: {
        name: 'Sogir',
        major: 'Mathmatics'
    },
    takeExam: function () {
        console.log(this.name, 'exam happend')
    },
    treatDe: function (expense) {
        this.money = this.money - expense;
        return this.money;
    }
}

student.takeExam();
const remaining = student.treatDe(900)
console.log(remaining);