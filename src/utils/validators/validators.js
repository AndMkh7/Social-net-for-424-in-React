export const required = value=>{
    if (value){
        return undefined;
    } else return "Field is required"
}

export const maxLength30 = value=>{
    if (value.length >30){
        return "Max length of post s 30 symbols";
    } else return undefined;
}

export const maxLengthCreator =(maxLength)=> value=>{
    if (value.length >maxLength){
        return `Max length of post is ${maxLength} symbols`;
    } else return undefined;
}