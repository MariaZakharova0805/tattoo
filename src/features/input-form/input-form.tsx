import { SetStateAction, useEffect, useRef, useState } from 'react'
import c from './input-form.module.css'
import { useForm, SubmitHandler } from "react-hook-form"
import arrow from '../../assets/svg/arrow_red.svg'
import TextField from '@mui/material/TextField';
import { TextRegular } from '../../shared/ui/text/text-regular'
import { useFormData, useContactsFormVisibility, useServiceSelectList, useArtistsSelectList } from '../../shared/store'
import emailjs from "@emailjs/browser";
import { SelectItem } from '../../entities/select-item';
import pen from '../../assets/svg/pen.svg'

type Inputs = {
    name: string
    email: string
    phone: number | string
    service: string
    artist: string
    message: string
    picture: any
}
const empty = {
    name: "",
    email: "",
    phone: "",
    service: "",
    artist: "",
    message: "",
    picture: "",
};


export const InputForm = () => {

    const [texteraeClassName, setTexteraeClassName] = useState(c.message);
    const openTextarea = () => {
        setTexteraeClassName(c.message_active)
    }


    const { services, serviceItem, setServiceItem } = useServiceSelectList(state => state)
    const { artists, artistName, setArtistName } = useArtistsSelectList(state => state)
    const chooseValue = (value: SetStateAction<string>) => {
        setServiceItem(value)
    }
    const chooseArtistName = (value: SetStateAction<string>) => {
        setArtistName(value)
    }

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
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
                        {errors.name && <span>This field is required</span>}
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
                        {errors.phone && <span>This field is required</span>}
                    </div>
                    {/* Choosing servise */}
                    <div className={c.form_item}>
                        <TextField
                            value={serviceItem}
                            color='secondary'
                            label="Select a service" variant="standard" {...register("service")} />
                        <div className={c.select_block}>
                            {services.map(item => {
                                return (
                                    <SelectItem key={item.id} item={item} chooseValue={chooseValue} />
                                )
                            })}
                        </div>
                    </div>
                    <div className={c.form_item}>
                        <TextField
                            value={artistName}
                            color='secondary'
                            label="Select an artist of your choice if you wish" variant="standard" {...register("artist")} />
                        <div className={c.select_block}>
                            {artists.map(item => {
                                return (
                                    <SelectItem key={item.id} item={item} chooseValue={chooseArtistName} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className={c.from_right}>
                    <div className={c.form_item} onClick={() => openTextarea()}>
                        <label className={c.form_item_label}>
                            <p>Any questions? Have an ideas and image? Show us! Write your message if you wish</p>
                            <img src={pen} className={c.pen} />
                        </label>
                        <textarea className={texteraeClassName} {...register("message")}></textarea>
                    </div>
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



