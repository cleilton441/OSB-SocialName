export default function ShowComlete(state = false, action: any) {
    switch(action.type){
        case "SHOWCOMPLETE":
            return true
        case "HIDDENCOMPLETE":
            return false
        default:
            return state
    }
}