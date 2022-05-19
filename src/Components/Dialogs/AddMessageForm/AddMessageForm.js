import {Field, reduxForm} from "redux-form";
import style from "../Dialogs.module.css";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength500 = maxLengthCreator(500) ;

const AddMessageForm = (props)=>{
    return(

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBody"} placeholder={"Enter your message"}
                       validate={[required, maxLength500]}/>
            </div>
            <div>
                <button className={style.send} > Send </button>
            </div>

        </form>
    )};

export const AddMessageFormRedux = reduxForm({form:"dialogsAddMessageForm"})(AddMessageForm);