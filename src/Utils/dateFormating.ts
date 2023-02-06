export function dateFormater(date: string) {
    const dateArray = date.split('-', 3)

    const year = dateArray[0]
    const month = dateArray[1]
    const day = dateArray[2]
    const fullDate = `${day}.${month}.${year}`

    const formtedDate = {
        year,
        month,
        day,
        fullDate
    }

    return formtedDate
}