import addDays from 'date-fns/addDays';
import addMonths from 'date-fns/addMonths';
import format from 'date-fns/format';
import min from 'date-fns/min';
import startOfToday from 'date-fns/startOfToday';
import { error } from './logger';

export function now() {
    return new Date()
}

export function minDate(a: Date, b: Date) {
    return min([a, b])
}

// TODO returns local time. Which typeorm will translate to UTC
// export function toUTC(date = new Date()) {
//     return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
// }

export function onDateRangeChange(unit: "days" | "months", value: number) {
    let now = startOfToday()
    let minDate = unit == "days" ? addDays(now, value) : addMonths(now, value)
    let maxDate = now
    return {
        from: minDate,
        to: maxDate
    }
}

export function wait(duration = 1000) {
    return new Promise<void>(async (resolve) => {
        setTimeout(() => {
            resolve()
        }, duration)
    })
}

export function hours(hours = 1) {
    return hours * minutes(60)
}

export function minutes(minutes = 1) {
    return minutes * seconds(60)
}

export function seconds(seconds = 60) {
    return seconds * 1000
}

export function formatDate(x: Date, pattern?: string) {

    if (x) {

        try {

            let d = x

            if (!(x instanceof Date)) {
                d = new Date(x)
            }

            if (pattern) {
                return format(d, pattern) // 'yyyy-MM-dd'
            } else {
                return d.toDateString()
            }

        } catch (err) {
            error("Could not format date", err)
        }
    }

    return x
}