import dayjs from "dayjs";

export function dateFormater(parmsDate: string) {
    return dayjs(parmsDate).format('DD.MM.YYYY')
}