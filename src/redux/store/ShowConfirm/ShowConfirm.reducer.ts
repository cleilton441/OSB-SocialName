export default function ShowConfirm(state = false, action: any) {
    switch(action.type){
        case "SHOW":
            return true
        case "HIDDEN":
            return false
        default:
            return state
    }
}