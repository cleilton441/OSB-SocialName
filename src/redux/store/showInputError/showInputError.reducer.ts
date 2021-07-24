export default function ShowConfirm(state = false, action: any) {
    switch(action.type){
        case "SHOWERROR":
            return true
        case "HIDDENERROR":
            return false
        default:
            return state
    }
}