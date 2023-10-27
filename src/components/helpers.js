import { parseISO, format } from "date-fns"
export function formatDate(string) {
    if(string) {
        return format(parseISO(string), 'dd/MM/yyyy')
    }
}