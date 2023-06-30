import { useEffect, useRef } from 'react'
import c from './input-form.module.css'
import { useForm, SubmitHandler } from "react-hook-form"
import arrow from '../../../public/svg/arrow_red.svg'
import TextField from '@mui/material/TextField';
import { TextRegular } from '../../shared/ui/text/text-regular'
import { useFormData, useContactsFormVisibility } from '../../shared/store'
import emailjs from "@emailjs/browser";

type Inputs = {
    name: string
    email: string
    phone: number | string
    service: string
    artist: string
    message: string
    picture: any
}

export const InputForm = () => {
    const setFormData = useFormData(state => state.setFormData)
    const setFormVisible = useContactsFormVisibility(state => state.setFormVisible)
    const form = useRef();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        clearErrors,
        formState: { errors },
    } = useForm<Inputs>()

    const empty = {
        name: "",
        email: "",
        phone: "",
        service: "",
        artist: "",
        message: "",
        picture: "",
    };

    const onSubmit: SubmitHandler<Inputs> = () => {
        //@ts-ignore
        emailjs.sendForm('service_44a78ff', 'template_x2d7ms9', form.current, 'svtDnQJmJRG1o8S87')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        reset(empty);
        clearErrors();
        setFormVisible(false);
    }

    useEffect(() => {
        watch((value) => {
            setFormData(value)
            console.log(value)
        });
    }, [watch]);

    return (
        //@ts-ignore
        <form ref={form} onSubmit={handleSubmit(onSubmit)} className={c.from}>
            <div className={c.form}>
                <div className={c.form_left}>
                    <div className={c.form_item}>
                        <TextField
                            color='secondary'
                            label="Your name" variant="standard" placeholder='Emma' {...register("name", { required: true })} />
                    </div>
                    <div className={c.form_item}>
                        <TextField
                            color='secondary'
                            label="E-mail" variant="standard" placeholder='Emma37@gmal.com ' {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className={c.form_item}>
                        <TextField
                            color='secondary'
                            label="Phone number" variant="standard" placeholder='+1 850 450 53 67' {...register("phone", { required: true })} />
                    </div>
                    <select {...register("service")} className={c.select}>
                        <label>Select a service</label>
                        <option value="tattoo">tattoo</option>
                        <option value="piercing">piercing</option>
                    </select>

                    {/* <div className={c.form_item}>
                        <label>Select a service</label>
                        <select {...register("service")} className={c.select}>
                            <option className={c.option} value="tattoo">tattoo</option>
                            <option className={c.option} value="piercing">piercing</option>
                        </select>
                    </div>
                    <div className={c.form_item}>
                        <label>Select an artist of your choice if you wish</label>
                        <select {...register("artist")} className={c.select}>
                            <option className={c.option} value="any">any</option>
                            <option className={c.option} value="Mike">MIKE tattoo</option>
                            <option className={c.option} value="Craig">CRAIG tattoo</option>
                            <option className={c.option} value="Jackie">JACKIE piercing</option>
                            <option className={c.option} value="Lucky">LUCKY tattoo</option>
                        </select>
                    </div> */}
                </div>
            </div>
            <div className={c.form_footer}>
                <div className={c.form_footer_text}>
                    <TextRegular>By clicking the Submit button you agree to our Privacy Policy terms</TextRegular>
                </div>
                <button type="submit" className={c.btn}>
                    <p className={c.btn_link_text}>Submit</p><img src={arrow} />
                </button>
            </div>
        </form>
    )
}



