import { 
    Form, 
    Container, 
    ButtonWrapper,
    Back,
    Button, 
    Heading, 
    InputWrapper, 
    Label, 
    ImageWrapper, 
    Image, 
    ThemeWrapper, 
    Theme, 
    Error
} from "./styles";
import InputField from "../input-fields";

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/apiRequest";

function EditPage(props) {
    const { setEdit,  setActiveImg, activeImg, setOpenPost } = props;
    const imgURL = [
        "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
        "https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
        "https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
        "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
        "https://i.redd.it/7ipyf6pvqac61.png",
        "https://i.redd.it/ksmb0m02ppy51.png",
        "https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
        "https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990",
    ]
    const user = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            displayName: user.displayName,
            age: user.age,
            description: user.description,
            ulr: user.url,
            themeColor: user.themeColor,
        },
        onSubmit: (values) => {
            // const newValues = {
            //     ...values,
            //     url: formik.values.url,
            //     themeColor: formik.values.themeColor,
            // }
            updateUser(values, dispatch);
            setEdit(false);  
            setOpenPost(false);
        },
        validationSchema: Yup.object({
            displayName: Yup.string().required('Required'),
            age: Yup.number().required('Required'),
            description: Yup.string().required('Required'),
            url: Yup.string(),
            themeColor: Yup.string(),
        }),  
    });
  
    const handleClickImage = (e)=> {
        formik.values.url = e.target.src;
        setActiveImg(e.target.src);
    };

    useEffect(()=> {
        formik.values.url = activeImg;
    }, [activeImg, formik.values]);

    return ( 
        <Form onSubmit={formik.handleSubmit}>
            <Container>
                <ButtonWrapper>
                    <Back 
                        onClick={(e)=>{
                            e.preventDefault();
                            setEdit(false);  
                            setOpenPost(false);
                        }}
                    >
                        BACK
                    </Back>
                    <Button type="submit">SAVE</Button>
                </ButtonWrapper>
                <Heading>Edit Profile</Heading>
                <InputWrapper>
                    <InputField
                        label="Display name"
                        name="displayName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.displayName || ""}
                        touched={formik.touched.displayName}
                        errors={formik.errors.displayName}
                    />
                    <InputField
                        label="Age"
                        name="age"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.age || ""}
                        touched={formik.touched.age}
                        errors={formik.errors.age}
                    />
                    <InputField
                        label="Description"
                        name="description"
                        inputType="text-area"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description || ""}
                        touched={formik.touched.description}
                        errors={formik.errors.description}
                    />
                    <Label>Profile picture</Label>
                    <ImageWrapper>
                       { imgURL.map((img, index)=>(
                            <Image 
                                src={img} 
                                key={index} 
                                alt={"img" + index}
                                name="url"
                                className={activeImg === img && "active"}
                                onClick={handleClickImage}
                            />
                        ))}
                    </ImageWrapper>
                    {formik.errors.url ? (
                        <Error>{formik.errors.url}</Error>
                    ) : null}
                    <ThemeWrapper> 
                        <Label htmlFor="themeColor">Theme</Label>
                        <Theme 
                            type="color"
                            id="themeColor"
                            name="themeColor"
                            onChange={formik.handleChange}
                            value={formik.values.themeColor}
                        />
                    </ThemeWrapper>
                </InputWrapper>
            </Container>
        </Form>
    );
}

export default EditPage;