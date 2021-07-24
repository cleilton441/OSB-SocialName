 
export const MaskInput = (name: string) => {
    if(name === ""){
        return false
    }

    if(name.includes("@") && name.includes(".com")){
        return false
    } else {
        return true

    }
}