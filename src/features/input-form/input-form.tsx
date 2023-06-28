import { useEffect } from 'react'
import c from './input-form.module.css'
import { useForm, SubmitHandler } from "react-hook-form"
import arrow from '../../../public/svg/arrow_red.svg'
import { TextRegular } from '../../shared/ui/text/text-regular'
type Inputs = {
    name: string
    email: string
    phone: number | string
    service: string
    artist: string
    message: string
}

export const InputForm = () => {
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
    };


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        reset(empty);
        clearErrors();
        console.log(data);
    }

    useEffect(() => {
        watch((value) => {
            console.log(value)
        });
    }, [watch]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={c.form}>
                <div className={c.form_left}>
                    <div className={c.form_item}>
                        <label>Your name</label>
                        <input {...register("name")} />
                    </div>

                    <div className={c.form_item}>
                        <label>E-mail</label>
                        <input {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className={c.form_item}>
                        <label>Phone number</label>
                        <input {...register("phone")} />
                    </div>
                    <div className={c.form_item}>
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
                    </div>
                </div>
                <div className={c.form_right}>
                    <div className={c.form_item}>
                        <label>Any questions? Have an ideas and image? Show us! Write your message if you wish </label>
                        <input {...register("message")} placeholder='Hi!' />
                    </div></div>
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

