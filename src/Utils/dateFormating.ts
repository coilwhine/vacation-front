export function dateFormater(date: string) {
    const dateArray = date.split('-', 3)

    const year = Number(dateArray[0])
    const month = Number(dateArray[1])
    const day = Number(dateArray[2][0] + dateArray[2][1]) + 1
    const fullDate = `${day}.${month}.${year}`

    const formtedDate = {
        year,
        month,
        day,
        fullDate
    }

    return formtedDate
}