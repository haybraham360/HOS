enum AlertType {
    INFO,
    WARNING,
    ERROR,
    SUCCESS,
}

enum AlertActionType{
    SHOW,
    HIDE
}

enum AlertDuration{
    SHORT = 1000,
    MEDIUM = 2000,
    LONG = 3000
}

export { AlertType, AlertActionType, AlertDuration };