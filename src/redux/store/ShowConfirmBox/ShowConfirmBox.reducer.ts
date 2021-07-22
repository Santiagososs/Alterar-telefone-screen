export default function ShowConfirmBox(state = false, action: any) {
    switch(action.type){
        case "SHOWBOX":
            return true
        case "HIDDENBOX":
            return false
        default:
            return state
    }
}

