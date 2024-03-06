import {createEvent, createStore, sample} from "effector";
import {createEffect} from "effector/effector.mjs";
import {useStoreMap} from "effector-react";
import {ChangeEvent} from "react";
import LoginForm from "./LoginForm.tsx";

const EffectorForm = () => {
    const formSubmitted = createEvent();
    const fieldUpdate = createEvent();

    const sendFormFx = createEffect((params) => {
        console.log(params);
    });

    const $form = createStore({});

    $form.on(fieldUpdate, (form, {key, value}) => ({
        ...form,
        [key]: value,
    }));

    sample({
        clock: formSubmitted,
        source: $form,
        target: sendFormFx,
    });

    const handleChange = fieldUpdate.prepend((event: ChangeEvent<HTMLInputElement>) => ({
        key: event.target.name,
        value: event.target.value,
    }));

    const Field = ({name, type, label}) => {
        const value = useStoreMap({
            store: $form,
            keys: [name],
            fn: (values) => values[name] ?? "",
        });
        return (
            <div>
                {label} <input name={name} type={type} value={value} onChange={handleChange}/>
            </div>
        );
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        formSubmitted()
    }


    return (
        <div className="EffectorForm">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={handleSubmit}>
                            <Field name="login" type={"text"} label="Login"/>
                            <Field name="password" type="password" label="Password"/>
                            <button type="submit">Submit!</button>
                        </form>
                    </div>
                </div>
                <div className="col-12">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default EffectorForm;

// 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
