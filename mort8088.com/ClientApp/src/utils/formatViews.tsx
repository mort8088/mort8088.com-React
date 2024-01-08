const VIEW_FORMATTER = Intl.NumberFormat(undefined, { notation: "compact" })

export function formatViews(views: number) {
    return `${VIEW_FORMATTER.format(views)} Views`
}