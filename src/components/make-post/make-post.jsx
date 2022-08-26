import { useFormik } from "formik";
import * as Yup from 'yup';
import { Container, Navigation } from "./styles";
import InputField from "../input-fields/input-field";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/postSlice';

function MakePost(props) {
    const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
    const [isSelected, setSelectedButton] = useState(0);
    const { setOpenPost } = props;
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            title: "",
            desc: "",
            tag: 0,
        }, 
        validationSchema: Yup.object({
            title: Yup.string().required('Required'),
            desc: Yup.string().required('Required'),
            tag: Yup.number().required('Required'),
        }), 
        onSubmit: (values)=>{
            setOpenPost(false);
            dispatch(createPost(values));
            console.log(values)
        }
    });
    return ( 
        <Container onSubmit={formik.handleSubmit}>
            <Navigation>
                <button type="submit" className="makePost-save">Post</button>
            </Navigation>
            <InputField
                name='title'
                inputType="text-area"
                label="Title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                className="makePost-title"
                touched={formik.touched.title}
                errors={formik.errors.title}
            /> 
            <InputField
                name='desc'
                inputType="text-area"
                label="Description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.desc}
                className="makePost-desc"
                touched={formik.touched.desc}
                errors={formik.errors.desc}
            /> 
            <label>Tags</label>
            <div className="makePost-tags">
                {tags.map((tag, index)=>(
                    <button 
                        type="text"
                        key={index}
                        // className={isSelected === index ? 'makePost-tags-selected': `makePost-tags-${tag}`}
                        className={`${isSelected === index ? `makePost-tags-selected` : `makePost-tags-${tag}`}`}
                        onClick={(e)=>{
                            e.preventDefault()
                            setSelectedButton(index);
                            formik.values.tag = index;
                        }}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </Container>        
    );
}

export default MakePost;