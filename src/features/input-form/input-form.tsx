import { SetStateAction, useEffect, useRef, useState } from 'react'
import c from './input-form.module.css'
import { useForm, SubmitHandler } from "react-hook-form"
import arrow from '../../assets/svg/arrow_red.svg'
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
    const [serviceItem, setServiceItem] = useState('');

    const chooseValue = (value: SetStateAction<string>) => {
        setServiceItem(value)
    }
    const [artistName, setArtistName] = useState('any');

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
                    {/* Choosing servise */}
                    <div className={c.form_item}>
                        <TextField
                            value={serviceItem}
                            color='secondary'
                            label="Select a service" variant="standard" {...register("service")} />
                        <div className={c.select_block}>
                            <div className={c.select_block_item} onClick={() => chooseValue('tattoo')}><p>Tattoo</p><span className={c.select_block_item_tag}></span></div>
                            <div className={c.select_block_item} onClick={() => chooseValue('piercing')}><p>Piercing</p><span className={c.select_block_item_tag}></span></div>
                        </div>
                    </div>
                    <div className={c.form_item}>
                        <TextField
                            value={artistName}
                            color='secondary'
                            label="Select an artist of your choice if you wish" variant="standard" {...register("artist")} />
                        <div className={c.select_block}>
                            <div className={c.select_block_item} onClick={() => chooseArtistName('MIKE')}><p>MIKE tattoo</p><span className={c.select_block_item_tag}></span></div>
                            <div className={c.select_block_item} onClick={() => chooseArtistName('CRAIG')}><p>CRAIG tattoo</p><span className={c.select_block_item_tag}></span></div>
                            <div className={c.select_block_item} onClick={() => chooseArtistName('LUCKY')}><p>LUCKY tattoo</p><span className={c.select_block_item_tag}></span></div>
                            <div className={c.select_block_item} onClick={() => chooseArtistName('JACKIE')}><p>JACKIE piercing</p><span className={c.select_block_item_tag}></span></div>
                        </div>
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



